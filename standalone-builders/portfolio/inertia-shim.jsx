import React, { createContext, forwardRef, useContext, useEffect, useState } from 'react';

const InertiaContext = createContext({
    url: '/',
    component: 'Home',
    props: { auth: { user: null } },
    navigate: () => {},
});

const listeners = new Set();
let currentNavigate = (href) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

export function InertiaProvider({ value, children }) {
    currentNavigate = value.navigate;
    return <InertiaContext.Provider value={value}>{children}</InertiaContext.Provider>;
}

export function usePage() {
    const ctx = useContext(InertiaContext);
    return {
        url: ctx.url,
        component: ctx.component,
        props: ctx.props,
    };
}

export function Head({ title, children }) {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);
    return children ? null : null;
}

export const Link = forwardRef(function Link(
    { href = '/', method, data, preserveScroll, preserveState, replace, only, onClick, children, ...rest },
    ref
) {
    const { navigate } = useContext(InertiaContext);

    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#'))) {
            return;
        }
        e.preventDefault();
        navigate(href, { replace, preserveScroll });
    };

    return (
        <a ref={ref} href={href} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
});

export const router = {
    visit(url, options = {}) {
        currentNavigate(url, options);
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    },
    get(url, _data, options = {}) {
        this.visit(url, options);
    },
    post(_url, _data, options = {}) {
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    },
    reload() {},
    on(event, cb) {
        const entry = { event, cb };
        listeners.add(entry);
        return () => listeners.delete(entry);
    },
};

export function useForm(initial = {}) {
    const [data, setDataState] = useState(initial);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const setData = (keyOrObj, value) => {
        if (typeof keyOrObj === 'string') {
            setDataState((prev) => ({ ...prev, [keyOrObj]: value }));
        } else if (typeof keyOrObj === 'function') {
            setDataState(keyOrObj);
        } else {
            setDataState(keyOrObj);
        }
    };

    return {
        data,
        setData,
        errors,
        setError: (k, v) => setErrors((prev) => ({ ...prev, [k]: v })),
        clearErrors: () => setErrors({}),
        processing,
        reset: () => setDataState(initial),
        post(_url, options = {}) {
            setProcessing(true);
            setTimeout(() => {
                setProcessing(false);
                if (typeof options.onSuccess === 'function') options.onSuccess();
                if (typeof options.onFinish === 'function') options.onFinish();
            }, 150);
        },
        get(url, options = {}) {
            router.get(url, data, options);
        },
    };
}
