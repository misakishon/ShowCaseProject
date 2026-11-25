import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'C:/TrainAi/JeepTrackWebsiteapp/resources/css/app.css';
import Transport from 'C:/TrainAi/JeepTrackWebsiteapp/resources/js/Pages/Transport.jsx';
import AdminAnalytics from 'C:/TrainAi/JeepTrackWebsiteapp/resources/js/Pages/AdminAnalytics.jsx';

// Normalize initial iframe path so JeepTrack opens straight into the interactive UI
if (window.location.pathname.startsWith('/apps/jeeptrack') || window.location.pathname === '/') {
    window.history.replaceState({}, '', '/login');
}

function JeepTrackStandaloneApp() {
    const [path, setPath] = useState(() => window.location.pathname);

    useEffect(() => {
        const sync = () => setPath(window.location.pathname);

        const origPush = window.history.pushState.bind(window.history);
        window.history.pushState = function (...args) {
            const ret = origPush(...args);
            sync();
            return ret;
        };

        const origReplace = window.history.replaceState.bind(window.history);
        window.history.replaceState = function (...args) {
            const ret = origReplace(...args);
            sync();
            return ret;
        };

        // Intercept internal <a href="/admin/..."> or <a href="/login"> clicks inside Transport / AdminAnalytics
        const onClick = (e) => {
            const anchor = e.target?.closest?.('a[href]');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('/download/')) return;
            if (href.startsWith('/')) {
                e.preventDefault();
                window.history.pushState({}, '', href);
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('popstate', sync);
        document.addEventListener('click', onClick, true);
        return () => {
            window.removeEventListener('popstate', sync);
            document.removeEventListener('click', onClick, true);
        };
    }, []);

    if (path.startsWith('/admin')) {
        return <AdminAnalytics databaseMode={false} />;
    }

    return <Transport databaseMode={false} />;
}

createRoot(document.getElementById('root')).render(<JeepTrackStandaloneApp />);
