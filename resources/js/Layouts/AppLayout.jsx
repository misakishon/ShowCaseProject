import { Head, Link, usePage } from '@inertiajs/react';

export default function AppLayout({ title, children }) {
    const { app, flash } = usePage().props;

    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
                <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link
                            href="/"
                            className="font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors"
                        >
                            {app?.name || 'ShowCaseProject'}
                        </Link>
                        <span className="text-xs font-mono text-slate-400">
                            {app?.url || 'https://misakishon.infinityfree.me'}
                        </span>
                    </div>
                </header>

                {flash?.success && (
                    <div className="max-w-5xl w-full mx-auto px-6 pt-4">
                        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                            {flash.success}
                        </div>
                    </div>
                )}

                {flash?.error && (
                    <div className="max-w-5xl w-full mx-auto px-6 pt-4">
                        <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                            {flash.error}
                        </div>
                    </div>
                )}

                <main className="flex-1">{children}</main>

                <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
                    {app?.name || 'ShowCaseProject'} &middot; Powered by Laravel + Inertia + React (.jsx)
                </footer>
            </div>
        </>
    );
}
