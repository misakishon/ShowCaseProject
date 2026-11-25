import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function CybersecurityDashboard() {
    return (
        <>
            <Head title="OwlWatch — Dashboard" />
            <div className="fixed inset-0 w-screen h-screen bg-[#F6F9FE]">
                <iframe
                    src="/apps/cybersecurity-dashboard/index.html"
                    title="OwlWatch — Dashboard"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/OwlWatch" projectName="OwlWatch" />
            </div>
        </>
    );
}
