import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';

const LIVE_APPS = [
    { name: 'BEZ. Hair Studio', href: '/BEZ_HAIR_STUDIO', tag: 'Booking & Studio' },
    { name: 'JeepTrack', href: '/JeepTrack', tag: 'Fleet & Transit' },
    { name: 'Portfolio', href: '/Portfolio', tag: 'Developer Site' },
    { name: 'Rosé Atelier', href: '/DashboardDesign', tag: 'Salon Dashboard' },
    { name: 'BEZ. Admin Dashboard', href: '/BezAdminDashboard', tag: 'Admin Operations' },
    { name: 'OwlWatch', href: '/OwlWatch', tag: 'Activity Topology' },
];

export default function ShowcaseNavPill({ currentPath, projectName }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    if (collapsed) {
        return (
            <div className="fixed bottom-4 left-4 z-[9999]">
                <button
                    type="button"
                    onClick={() => setCollapsed(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-zinc-950/90 px-3 py-2 text-xs font-mono font-medium text-white shadow-xl backdrop-blur-md hover:bg-zinc-900 transition"
                    title="Open Showcase Switcher"
                >
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>Showcase</span>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 left-4 z-[9999] flex flex-col items-start gap-2">
            {menuOpen && (
                <div className="w-64 rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/95">
                    <div className="flex items-center justify-between px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        <span>Live Showcase Apps</span>
                        <span className="text-purple-600 dark:text-purple-400">6 Live</span>
                    </div>
                    <div className="mt-1 space-y-0.5">
                        {LIVE_APPS.map((app) => {
                            const active = app.href === currentPath;
                            return (
                                <Link
                                    key={app.href}
                                    href={app.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`flex items-center justify-between rounded-xl px-2.5 py-2 text-xs transition ${
                                        active
                                            ? 'bg-purple-600 text-white font-semibold'
                                            : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10'
                                    }`}
                                >
                                    <span>{app.name}</span>
                                    <span
                                        className={`font-mono text-[10px] ${
                                            active ? 'text-purple-100' : 'text-zinc-400'
                                        }`}
                                    >
                                        {app.tag}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className="inline-flex items-center gap-1 rounded-full border border-zinc-700/70 bg-zinc-950/90 p-1 text-xs text-white shadow-2xl backdrop-blur-md">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] font-medium text-zinc-200 hover:bg-white/10 hover:text-white transition"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>All Projects</span>
                </Link>

                <span className="h-4 w-px bg-zinc-700" aria-hidden="true" />

                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] font-medium text-purple-300 hover:bg-white/10 transition"
                >
                    <Sparkles className="w-3 h-3" />
                    <span className="max-w-[130px] truncate">{projectName}</span>
                    {menuOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setMenuOpen(false);
                        setCollapsed(true);
                    }}
                    className="rounded-full px-2 py-1.5 font-mono text-[10px] text-zinc-400 hover:bg-white/10 hover:text-white transition"
                    title="Minimize switcher"
                    aria-label="Minimize showcase switcher"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
