import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import 'C:/TrainAi/Portfolio/resources/css/app.css';
import { InertiaProvider } from './inertia-shim.jsx';

import AnimatedBackground from 'C:/TrainAi/Portfolio/resources/js/Components/AnimatedBackground';
import CursorKnock from 'C:/TrainAi/Portfolio/resources/js/Components/CursorKnock';
import NumuAssistant from 'C:/TrainAi/Portfolio/resources/js/Components/NumuAssistant';
import PolicyNoticeBanner from 'C:/TrainAi/Portfolio/resources/js/Components/PolicyNoticeBanner';

import Home from 'C:/TrainAi/Portfolio/resources/js/Pages/Home';
import ProjectPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/ProjectPage';
import ProjectShowcase from 'C:/TrainAi/Portfolio/resources/js/Pages/home/ProjectShowcase';
import AboutPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/AboutPage';
import BlogPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/BlogPage';
import UsesPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/UsesPage';
import LinksPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/LinksPage';
import ServicesPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/ServicesPage';
import PolicyPage from 'C:/TrainAi/Portfolio/resources/js/Pages/home/PolicyPage';

import projectsData from 'C:/TrainAi/Portfolio/resources/data/projects.json';

// Provide Ziggy-compatible route() helper for Portfolio pages
const ROUTE_MAP = {
    home: '/',
    projects: '/projects',
    blog: '/blog',
    about: '/about',
    uses: '/uses',
    links: '/links',
    services: '/services',
    policy: '/policy',
    resume: '/Resume.pdf',
};

window.route = function (name, params) {
    if (!name) return { current: () => false };
    if (name === 'projects.showcase') {
        const slug = typeof params === 'string' ? params : params?.slug || '';
        return `/projects/${slug}`;
    }
    return ROUTE_MAP[name] || '/';
};

// Intercept /pokes GET & POST cleanly with localStorage persistence
const nativeFetch = window.fetch.bind(window);
window.fetch = async function (input, init = {}) {
    const raw = typeof input === 'string' ? input : input?.url || '';
    if (raw === '/pokes' || raw.endsWith('/pokes')) {
        const method = (init.method || 'GET').toUpperCase();
        let count = Number(localStorage.getItem('portfolio-pokes-count') || 142);
        if (method === 'POST') {
            let amount = 1;
            try {
                const body = JSON.parse(init.body || '{}');
                amount = Math.max(1, Math.min(100, Number(body.amount || 1)));
            } catch {}
            count += amount;
            localStorage.setItem('portfolio-pokes-count', String(count));
        }
        return new Response(JSON.stringify({ count }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    return nativeFetch(input, init);
};

// Normalize initial iframe path
if (window.location.pathname.startsWith('/apps/portfolio')) {
    window.history.replaceState({}, '', '/');
}

function resolveRoute(pathname) {
    const clean = (pathname || '/').replace(/\/+$/, '') || '/';
    if (clean === '/') return { component: 'Home', Page: Home, props: {} };
    if (clean === '/projects') return { component: 'home/ProjectPage', Page: ProjectPage, props: {} };
    if (clean.startsWith('/projects/')) {
        const slug = decodeURIComponent(clean.slice('/projects/'.length));
        const idx = projectsData.findIndex((p) => p.slug === slug || p.id === slug);
        const project = idx >= 0 ? projectsData[idx] : null;
        const nextProject = idx >= 0 ? projectsData[(idx + 1) % projectsData.length] : projectsData[0];
        return { component: 'home/ProjectShowcase', Page: ProjectShowcase, props: { project, nextProject } };
    }
    if (clean === '/about') return { component: 'home/AboutPage', Page: AboutPage, props: {} };
    if (clean === '/blog') return { component: 'home/BlogPage', Page: BlogPage, props: {} };
    if (clean === '/uses') return { component: 'home/UsesPage', Page: UsesPage, props: {} };
    if (clean === '/links') return { component: 'home/LinksPage', Page: LinksPage, props: {} };
    if (clean === '/services') return { component: 'home/ServicesPage', Page: ServicesPage, props: {} };
    if (clean === '/policy') return { component: 'home/PolicyPage', Page: PolicyPage, props: {} };
    return { component: 'Home', Page: Home, props: {} };
}

function PortfolioStandaloneApp() {
    const [url, setUrl] = useState(() => window.location.pathname + window.location.search);

    const navigate = useCallback((href, options = {}) => {
        if (href === '/resume' || href === '/Resume.pdf') {
            window.open('/Resume.pdf', '_blank', 'noopener');
            return;
        }
        if (options.replace) {
            window.history.replaceState({}, '', href);
        } else {
            window.history.pushState({}, '', href);
        }
        setUrl(href);
        if (!options.preserveScroll) window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const onPop = () => setUrl(window.location.pathname + window.location.search);
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    const pathname = url.split('?')[0].split('#')[0];
    const resolved = useMemo(() => resolveRoute(pathname), [pathname]);
    const Page = resolved.Page;

    return (
        <InertiaProvider
            value={{
                url,
                component: resolved.component,
                props: { auth: { user: null }, ...resolved.props },
                navigate,
            }}
        >
            <div className="relative min-h-screen overflow-hidden isolate">
                <AnimatedBackground />
                <CursorKnock />
                <div className="relative z-10">
                    <MotionConfig reducedMotion="user">
                        <Page {...resolved.props} />
                    </MotionConfig>
                </div>
                <NumuAssistant />
                <PolicyNoticeBanner />
            </div>
        </InertiaProvider>
    );
}

createRoot(document.getElementById('app')).render(<PortfolioStandaloneApp />);
