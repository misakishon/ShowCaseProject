import { Head } from '@inertiajs/react';
import ShowcaseNavPill from '@/Components/ShowcaseNavPill';

export default function DashboardDesign() {
    return (
        <>
            <Head title="Rosé Atelier — Salon Studio Dashboard" />
            <div className="fixed inset-0 w-screen h-screen bg-[#fdf9fb]">
                <iframe
                    src="/apps/dashboard-design/index.html"
                    title="Rosé Atelier — Salon Studio Dashboard"
                    className="w-full h-full border-0 block"
                />
                <ShowcaseNavPill currentPath="/DashboardDesign" projectName="Rosé Atelier" />
            </div>
        </>
    );
}
