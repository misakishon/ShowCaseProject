import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function BezAdminDashboard() {
    return (
        <>
            <Head title="BEZ. Studio — Admin Operations Dashboard" />
            <div className="fixed inset-0 w-screen h-screen bg-[#f7f5f0]">
                <iframe
                    src="/apps/bez-hair-studio/index.html?route=/admin/dashboard"
                    title="BEZ. Studio — Admin Operations Dashboard"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/BezAdminDashboard" projectName="BEZ. Admin Dashboard" />
            </div>
        </>
    );
}
