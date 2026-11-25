import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function BezHairStudio() {
    return (
        <>
            <Head title="BEZ. Hair Studio — Booking & Admin Operations" />
            <div className="fixed inset-0 w-screen h-screen bg-white">
                <iframe
                    src="/apps/bez-hair-studio/index.html"
                    title="BEZ. Hair Studio"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/BEZ_HAIR_STUDIO" projectName="BEZ. Hair Studio" />
            </div>
        </>
    );
}
