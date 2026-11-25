import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function Portfolio() {
    return (
        <>
            <Head title="Sean Patrick Agtang — Personal Portfolio" />
            <div className="fixed inset-0 w-screen h-screen bg-[#0c0e10]">
                <iframe
                    src="/apps/portfolio/index.html"
                    title="Sean Patrick Agtang — Personal Portfolio"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/Portfolio" projectName="Portfolio" />
            </div>
        </>
    );
}
