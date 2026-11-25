import { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Bus,
    ChevronRight,
    Globe,
    LayoutDashboard,
    Moon,
    Scissors,
    ShieldAlert,
    Star,
    Sun,
} from 'lucide-react';
import HandwrittenAnnotation from '@/Components/HandwrittenAnnotation';

const PROJECT_SHOWCASE = [
    {
        id: 'bez-hair-studio',
        slug: 'bez-hair-studio',
        name: 'BEZ. Hair Studio',
        href: '/BEZ_HAIR_STUDIO',
        urlLabel: '/BEZ_HAIR_STUDIO',
        url: 'https://github.com/misakishon/bez-hair-studio',
        badgeLabel: 'BEST',
        description: 'Full-stack booking system with PayMongo QR PH payments',
        longDescription:
            'End-to-end salon appointment scheduler and studio management platform — multi-step customer booking flow, PayMongo QR PH online checkout, automated receipt verification, and revenue telemetry.',
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'PayMongo', 'SQLite'],
        desktopImage: '/img/projects/showcase/bez-desktop-v2.png',
        mobileImage: '/img/projects/showcase/bez-mobile-v2.png',
        secondaryDesktopImage: '/img/projects/showcase/bez-booking-desktop.png',
        fallbackGradient: 'from-[#2B1B47] via-[#1B122C] to-[#0F0B18]',
        icon: <Scissors className="w-5 h-5 text-purple-400" />,
    },
    {
        id: 'jeeptrack',
        slug: 'jeep-application-tracker',
        name: 'JeepTrack — Jeepney Tracking & Fleet Analytics',
        href: '/JeepTrack',
        urlLabel: '/JeepTrack',
        url: 'https://github.com/misakishon/jeep-application-tracker',
        badgeLabel: 'BEST',
        description: 'A public utility jeepney app for live vehicle tracking, passenger routes, and fleet analytics',
        longDescription:
            'Real-time public utility jeepney transit system — live GPS vehicle telemetry, interactive terminal-to-terminal route corridors, passenger ETA calculation, and operator fleet analytics.',
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'Inertia.js'],
        desktopImage: '/img/projects/showcase/jeeptrack-desktop.png',
        mobileImage: '/img/projects/showcase/jeeptrack-mobile.png',
        secondaryDesktopImage: '/img/projects/showcase/jeeptrack-tracking-desktop.png',
        fallbackGradient: 'from-[#1E293B] via-[#0F172A] to-[#020617]',
        icon: <Bus className="w-5 h-5 text-blue-400" />,
    },
    {
        id: 'portfolio',
        slug: 'portfolio',
        name: 'Personal Portfolio Website',
        href: '/Portfolio',
        urlLabel: '/Portfolio',
        url: 'https://github.com/misakishon/Portfolio',
        badgeLabel: 'BEST',
        description: 'Minimalist developer portfolio with interactive guestbook & case studies',
        longDescription:
            'Interactive developer portfolio and case-study archive — View Transitions circular ripple theme engine, live GitHub contribution heatmap, and responsive device showcases.',
        technologies: ['React', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'Laravel'],
        desktopImage: '/img/projects/showcase/portfolio-desktop.png',
        mobileImage: '/img/projects/showcase/portfolio-mobile.png',
        desktopImageDark: '/img/projects/showcase/portfolio-dark-desktop.png',
        mobileImageDark: '/img/projects/showcase/portfolio-dark-mobile.png',
        secondaryDesktopImage: '/img/projects/showcase/portfolio-dark-desktop.png',
        secondaryDesktopImageDark: '/img/projects/showcase/portfolio-desktop.png',
        fallbackGradient: 'from-[#302146] to-[#15121f]',
        icon: <Globe className="w-5 h-5 text-purple-400" />,
    },
];

const DASHBOARD_PROJECTS = [
    {
        id: 'dashboard-design',
        slug: 'rose-atelier-dashboard',
        name: 'Rosé Atelier — Salon Studio Dashboard',
        href: '/DashboardDesign',
        urlLabel: '/DashboardDesign',
        url: 'https://github.com/misakishon/DashboardDesignSkills',
        badgeLabel: 'BEST',
        description: 'Multi-stylist appointment calendar, client CRM drawer & analytics suite',
        longDescription:
            'Comprehensive salon operations workspace — multi-stylist drag-and-drop schedule grid, role-based views (Front Desk, Owner, Stylist), slide-out client CRM & formula allergy drawer, and commission split analytics.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
        desktopImage: '/img/projects/showcase/rose-atelier-desktop.png',
        desktopImageDark: '/img/projects/showcase/rose-atelier-dark-desktop.png',
        secondaryDesktopImage: '/img/projects/showcase/rose-atelier-crm-desktop.png',
        secondaryDesktopImageDark: '/img/projects/showcase/rose-atelier-crm-dark-desktop.png',
        tertiaryDesktopImage: '/img/projects/showcase/rose-atelier-analytics-desktop.png',
        tertiaryDesktopImageDark: '/img/projects/showcase/rose-atelier-analytics-dark-desktop.png',
        fallbackGradient: 'from-[#4A0E2E] via-[#26141F] to-[#110D10]',
        icon: <LayoutDashboard className="w-5 h-5 text-pink-400" />,
    },
    {
        id: 'bez-admin-dashboard',
        slug: 'bez-admin-dashboard',
        name: 'BEZ. Studio — Admin Operations Dashboard',
        href: '/BezAdminDashboard',
        urlLabel: '/BezAdminDashboard',
        url: 'https://github.com/misakishon/bez-hair-studio',
        badgeLabel: 'BEST',
        description: 'Studio revenue telemetry, annual trend charts & time-slot availability manager',
        longDescription:
            'Dedicated back-office administrative command center for BEZ. Hair Studio — confirmed revenue KPIs across 7D/30D/90D windows, 12-month booking spline trajectories, and interactive 30-minute barber slot controls.',
        technologies: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
        desktopImage: '/img/projects/showcase/bez-admin-dashboard-desktop.png',
        mobileImage: '/img/projects/showcase/bez-admin-dashboard-mobile.png',
        secondaryDesktopImage: '/img/projects/showcase/bez-admin-operations-desktop.png',
        fallbackGradient: 'from-[#252420] via-[#1C1B18] to-[#12110F]',
        icon: <Scissors className="w-5 h-5 text-amber-200" />,
    },
    {
        id: 'owlwatch-dashboard',
        slug: 'owlwatch-dashboard',
        name: 'OwlWatch — Dashboard',
        href: '/OwlWatch',
        urlLabel: '/OwlWatch',
        url: 'https://github.com/misakishon/DalPath',
        badgeLabel: 'BEST',
        description: 'Real-time website activity topology, live visitor journeys & route analytics',
        longDescription:
            'Real-time, privacy-first web analytics and telemetry workspace — interactive isometric website activity topology, Server-Sent Events (SSE) visitor journey streaming, dynamic route discovery, and anomaly detection.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SSE', 'SQLite', 'Analytics'],
        desktopImage: '/img/projects/showcase/cybersecurity-desktop.png',
        cornerSprite: '/img/projects/showcase/owlwatch-sprite.png',
        fallbackGradient: 'from-[#0F294D] via-[#13386B] to-[#08172E]',
        icon: <ShieldAlert className="w-5 h-5 text-sky-400" />,
    },
];

function GithubOctocatIcon({ className = 'h-4 w-4 shrink-0' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    );
}

function EditorialBuildCard({ project, imgErrors, onImgError }) {
    const hasPhone = Boolean(project.mobileImage);
    const hasSecondary = Boolean(project.secondaryDesktopImage);
    const hasTertiary = Boolean(project.tertiaryDesktopImage);

    const renderThemedImage = (lightSrc, darkSrc, alt, width, height, extraClass = '') => {
        if (darkSrc) {
            return (
                <>
                    <img
                        src={lightSrc}
                        alt={`${alt} (light mode)`}
                        width={width}
                        height={height}
                        loading="eager"
                        decoding="async"
                        className={`showcase-img-light ${extraClass}`.trim()}
                        onError={() => onImgError(project.id)}
                    />
                    <img
                        src={darkSrc}
                        alt={`${alt} (dark mode)`}
                        width={width}
                        height={height}
                        loading="eager"
                        decoding="async"
                        className={`showcase-img-dark ${extraClass}`.trim()}
                        onError={() => onImgError(project.id)}
                    />
                </>
            );
        }

        return (
            <img
                src={lightSrc}
                alt={alt}
                width={width}
                height={height}
                loading="eager"
                decoding="async"
                className={extraClass || undefined}
                onError={() => onImgError(project.id)}
            />
        );
    };

    return (
        <article className="editorial-build-item group flex flex-col justify-between">
            <div>
                {/* Top ★ BEST badge connected to portfolio theme */}
                <div className="mb-4 flex items-center gap-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#7C3AED] dark:text-[#A78BFA]">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    <span>{project.badgeLabel || 'BEST'}</span>
                </div>

                {/* Multi-Device Open-Canvas Stage */}
                <Link
                    href={project.href}
                    aria-label={`Open live interactive ${project.name}`}
                    className="editorial-build-stage relative block w-full pt-2 pb-4 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 rounded-xl"
                >
                    {imgErrors[project.id] ? (
                        <div
                            className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br ${project.fallbackGradient} text-white shadow-lg`}
                        >
                            {project.icon}
                            <span className="text-sm font-medium">{project.name}</span>
                        </div>
                    ) : (
                        <div className="relative mx-auto w-full">
                            {/* Centerpiece MacBook Air Mockup */}
                            <div
                                className={`editorial-macbook relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 ${
                                    hasPhone
                                        ? 'w-[81%] sm:w-[80%] ml-[4%] mr-auto'
                                        : 'w-[86%] sm:w-[85%] mx-auto'
                                }`}
                            >
                                {project.cornerSprite && (
                                    <img
                                        src={project.cornerSprite}
                                        alt=""
                                        width={64}
                                        height={64}
                                        aria-hidden="true"
                                        className="pointer-events-none select-none absolute -top-7 -right-5 z-30 h-16 w-16 object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                                    />
                                )}
                                <div className="editorial-macbook-lid">
                                    <div className="editorial-macbook-camera" />
                                    <div className="editorial-macbook-screen">
                                        {renderThemedImage(
                                            project.desktopImage,
                                            project.desktopImageDark,
                                            `${project.name} desktop preview`,
                                            2880,
                                            1800
                                        )}
                                    </div>
                                    <div className="editorial-macbook-chin">
                                        <span>MacBook Air</span>
                                    </div>
                                </div>
                                <div className="editorial-macbook-base">
                                    <div className="editorial-macbook-notch" />
                                </div>
                            </div>

                            {/* Bottom-Left Overlay: Mini Laptop (when paired with right Phone) or Floating Panel (when desktop-only) */}
                            {hasSecondary && project.secondaryDesktopImage && (
                                hasPhone ? (
                                    <div
                                        className="editorial-mini-macbook absolute left-0 -bottom-2 z-20 w-[34%] transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                                        aria-hidden="true"
                                    >
                                        <div className="editorial-mini-macbook-lid">
                                            <div className="editorial-mini-macbook-screen">
                                                {renderThemedImage(
                                                    project.secondaryDesktopImage,
                                                    project.secondaryDesktopImageDark,
                                                    '',
                                                    2880,
                                                    1800
                                                )}
                                            </div>
                                        </div>
                                        <div className="editorial-mini-macbook-base">
                                            <div className="editorial-mini-macbook-notch" />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="editorial-floating-panel absolute left-0 -bottom-2.5 z-20 w-[36%] aspect-[16/10] rounded-[7px] overflow-hidden border border-zinc-200/80 dark:border-white/15 bg-white dark:bg-[#14151c] shadow-[0_18px_38px_-6px_rgba(0,0,0,0.28)] dark:shadow-[0_20px_44px_-6px_rgba(0,0,0,0.72)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                                        aria-hidden="true"
                                    >
                                        {renderThemedImage(
                                            project.secondaryDesktopImage,
                                            project.secondaryDesktopImageDark,
                                            '',
                                            2880,
                                            1800,
                                            'h-full w-full object-cover object-top'
                                        )}
                                    </div>
                                )
                            )}

                            {/* Right Upright Mobile Phone Overlay */}
                            {hasPhone && project.mobileImage && (
                                <div
                                    className="editorial-upright-phone absolute right-0 -bottom-2.5 z-20 w-[27.5%] max-w-[148px] transition-transform duration-300 ease-out group-hover:-translate-y-2"
                                    aria-hidden="true"
                                >
                                    <div className="editorial-upright-phone-frame">
                                        <div className="editorial-upright-phone-island" />
                                        <div className="editorial-upright-phone-screen">
                                            {renderThemedImage(
                                                project.mobileImage,
                                                project.mobileImageDark,
                                                `${project.name} mobile preview`,
                                                1170,
                                                2532
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Bottom-Right Floating Panel (for multi-view desktop dashboards without mobile overlay) */}
                            {!hasPhone && hasTertiary && project.tertiaryDesktopImage && (
                                <div
                                    className="editorial-floating-panel absolute right-0 -bottom-2.5 z-20 w-[30%] aspect-[16/10] rounded-[7px] overflow-hidden border border-zinc-200/80 dark:border-white/15 bg-white dark:bg-[#14151c] shadow-[0_18px_38px_-6px_rgba(0,0,0,0.28)] dark:shadow-[0_20px_44px_-6px_rgba(0,0,0,0.72)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                                    aria-hidden="true"
                                >
                                    {renderThemedImage(
                                        project.tertiaryDesktopImage,
                                        project.tertiaryDesktopImageDark,
                                        '',
                                        2880,
                                        1800,
                                        'h-full w-full object-cover object-top'
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </Link>

                {/* Title & Description */}
                <div className="mt-4">
                    <Link
                        href={project.href}
                        className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded"
                    >
                        <h3 className="text-[16.5px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors leading-snug">
                            {project.name}
                        </h3>
                    </Link>
                    <p className="mt-2 text-[12.5px] sm:text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {project.longDescription || project.description}
                    </p>
                </div>
            </div>

            {/* Tech Stack Pills & Bottom Action Row */}
            <div className="mt-4 pt-1">
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-[5px] border border-zinc-200/80 bg-zinc-100/90 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                    {project.url ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-sans text-xs font-medium text-zinc-600 hover:text-[#7C3AED] dark:text-zinc-400 dark:hover:text-[#A78BFA] transition-colors"
                        >
                            <GithubOctocatIcon className="h-4 w-4 shrink-0" />
                            <span>Source Code</span>
                        </a>
                    ) : (
                        <span />
                    )}

                    <Link
                        href={project.href}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#8B5CF6] dark:hover:bg-[#7C3AED] px-5 py-2.5 font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-sm shadow-purple-500/20 hover:shadow-md hover:shadow-purple-500/30 transition-all"
                    >
                        <span>View Case Study</span>
                        <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function Home({ siteUrl }) {
    const [isDark, setIsDark] = useState(false);
    const [imgErrors, setImgErrors] = useState({});

    useEffect(() => {
        const syncThemeFromDom = () => {
            const root = document.documentElement;
            const dark =
                root.classList.contains('dark') ||
                root.getAttribute('data-theme') === 'dark';
            setIsDark(dark);
        };

        syncThemeFromDom();

        const observer = new MutationObserver(syncThemeFromDom);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme'],
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
            localStorage.setItem('showcase-theme', next ? 'dark' : 'light');
        } catch {
            // ignore storage errors
        }
    };

    const handleImgError = (projectId) => {
        setImgErrors((prev) => ({
            ...prev,
            [projectId]: true,
        }));
    };

    const hostLabel = (siteUrl || 'https://misakishon.infinityfree.me').replace(/^https?:\/\//, '');

    return (
        <>
            <Head title="Projects — Interactive Showcase" />

            <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-[#0c0e10] dark:text-zinc-100 transition-colors">
                <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 sm:py-16">
                    {/* Top Utility Row */}
                    <div className="mb-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                            <span>{hostLabel}</span>
                        </div>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-[#FAF8F5] px-3 py-1.5 font-mono text-[11px] text-zinc-600 hover:border-purple-400 hover:text-zinc-900 dark:border-white/10 dark:bg-[#17181F] dark:text-zinc-300 dark:hover:text-white transition"
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-purple-600" />}
                            <span>{isDark ? 'Light' : 'Dark'}</span>
                        </button>
                    </div>

                    {/* Hero Header */}
                    <header className="relative mb-12 sm:mb-14">
                        <HandwrittenAnnotation label="what i've built" target="projects" />
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white font-mono">
                            Projects
                        </h1>
                        <p className="mt-2.5 max-w-2xl text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            A closer look at the systems I&apos;ve built. Click any project to open the live interactive web application directly.
                        </p>
                    </header>

                    {/* Open-Canvas 2-Column Editorial Multi-Device Showcase */}
                    <section
                        id="project-showcase"
                        className="relative showcase-editorial"
                        aria-labelledby="project-showcase-title"
                    >
                        {/* Group 1: Selected Projects — featured builds */}
                        <div>
                            <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-3">
                                <div className="flex flex-wrap items-baseline gap-2.5">
                                    <h2
                                        id="project-showcase-title"
                                        className="font-sans text-sm sm:text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                                    >
                                        Selected Projects
                                    </h2>
                                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                                        &mdash; featured builds
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                                    {PROJECT_SHOWCASE.length} {PROJECT_SHOWCASE.length === 1 ? 'BUILD' : 'BUILDS'}
                                </span>
                            </div>
                            <div className="border-b border-zinc-200 dark:border-white/10" />

                            <div
                                className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14 sm:gap-y-16"
                                role="region"
                                aria-label="Selected projects"
                            >
                                {PROJECT_SHOWCASE.map((project) => (
                                    <EditorialBuildCard
                                        key={project.id}
                                        project={project}
                                        imgErrors={imgErrors}
                                        onImgError={handleImgError}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Group 2: Dashboard Design — interface & telemetry builds */}
                        <div className="mt-16 sm:mt-20" id="dashboard-design-group">
                            <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-3">
                                <div className="flex flex-wrap items-baseline gap-2.5">
                                    <h2
                                        id="dashboard-design-title"
                                        className="font-sans text-sm sm:text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                                    >
                                        Dashboard Design
                                    </h2>
                                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                                        &mdash; interface &amp; telemetry builds
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                                    {DASHBOARD_PROJECTS.length} {DASHBOARD_PROJECTS.length === 1 ? 'BUILD' : 'BUILDS'}
                                </span>
                            </div>
                            <div className="border-b border-zinc-200 dark:border-white/10" />

                            <div
                                className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14 sm:gap-y-16"
                                role="region"
                                aria-label="Dashboard design projects"
                            >
                                {DASHBOARD_PROJECTS.map((project) => (
                                    <EditorialBuildCard
                                        key={project.id}
                                        project={project}
                                        imgErrors={imgErrors}
                                        onImgError={handleImgError}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="mt-12 border-t border-zinc-200/80 dark:border-white/10 py-6">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                        <span>Sean Patrick Agtang &middot; ShowCaseProject</span>
                        <span>{hostLabel}</span>
                    </div>
                </footer>
            </div>
        </>
    );
}
