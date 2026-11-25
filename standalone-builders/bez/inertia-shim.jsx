import React, { createContext, forwardRef, useContext, useEffect, useState } from 'react';

const InertiaContext = createContext({
    url: '/',
    component: 'Home',
    props: { auth: { user: { id: 1, name: 'Studio Admin', email: 'admin@bezhair.studio', role: 'admin' } }, flash: {} },
    navigate: () => {},
    submitPost: () => {},
});

let ctxRef = {
    navigate: () => {},
    submitPost: () => {},
};

export function InertiaProvider({ value, children }) {
    ctxRef.navigate = value.navigate;
    ctxRef.submitPost = value.submitPost;
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

export function Head({ title }) {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);
    return null;
}

export const Link = forwardRef(function Link(
    { href = '/', method = 'get', data, preserveScroll, preserveState, replace, only, as, onClick, children, ...rest },
    ref
) {
    const { navigate, submitPost } = useContext(InertiaContext);

    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#'))) {
            return;
        }
        e.preventDefault();
        if (String(method).toLowerCase() === 'post') {
            submitPost(href, data || {}, {});
        } else {
            navigate(href, { replace, preserveScroll });
        }
    };

    if (as === 'button') {
        return (
            <button ref={ref} type="button" onClick={handleClick} {...rest}>
                {children}
            </button>
        );
    }

    return (
        <a ref={ref} href={href} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
});

export const router = {
    visit(url, options = {}) {
        const method = (options.method || 'get').toLowerCase();
        if (method === 'post' || method === 'put' || method === 'patch' || method === 'delete') {
            ctxRef.submitPost(url, options.data || {}, options);
            return;
        }
        ctxRef.navigate(url, options);
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    },
    get(url, data = {}, options = {}) {
        let target = url;
        if (data && typeof data === 'object' && Object.keys(data).length > 0) {
            const qs = new URLSearchParams(Object.entries(data).filter(([, v]) => v !== undefined && v !== null && v !== '')).toString();
            if (qs) target += (url.includes('?') ? '&' : '?') + qs;
        }
        ctxRef.navigate(target, options);
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    },
    post(url, data = {}, options = {}) {
        ctxRef.submitPost(url, data, options);
    },
    put(url, data = {}, options = {}) {
        ctxRef.submitPost(url, data, options);
    },
    delete(url, options = {}) {
        ctxRef.submitPost(url, { _method: 'DELETE' }, options);
    },
    reload(options = {}) {
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    },
    on() {
        return () => {};
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

    const run = (url, options = {}) => {
        setProcessing(true);
        ctxRef.submitPost(url, data, {
            ...options,
            onFinish: () => {
                setProcessing(false);
                if (typeof options.onFinish === 'function') options.onFinish();
            },
        });
    };

    return {
        data,
        setData,
        errors,
        setError: (k, v) => setErrors((prev) => ({ ...prev, [k]: v })),
        clearErrors: () => setErrors({}),
        processing,
        recentlySuccessful: false,
        reset: () => setDataState(initial),
        post: run,
        put: run,
        patch: run,
        delete: run,
        get: (url, options = {}) => router.get(url, data, options),
    };
}
