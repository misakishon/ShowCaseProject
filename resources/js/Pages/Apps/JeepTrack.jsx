import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function JeepTrack() {
    return (
        <>
            <Head title="JeepTrack — Jeepney Tracking & Fleet Analytics" />
            <div className="fixed inset-0 w-screen h-screen bg-white">
                <iframe
                    src="/apps/jeeptrack/index.html"
                    title="JeepTrack — PUJ Transportation Analytics"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/JeepTrack" projectName="JeepTrack" />
            </div>
        </>
    );
}
