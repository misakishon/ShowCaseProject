(function () {
    const nowIso = (secAgo = 0) => new Date(Date.now() - secAgo * 1000).toISOString();

    const state = {
        sites: [
            {
                id: 'site_example',
                name: 'Example Portal',
                domain: 'example-site.com',
                integrationKey: 'ufa_live_8f3d2a7c91e4b605a21d8c7f3e4b19a0',
                allowedDomains: ['example-site.com', 'www.example-site.com', 'misakishon.infinityfree.me', 'localhost'],
                status: 'connected',
                collectionPaused: false,
                retentionDays: 30,
                ipMaskingEnabled: true,
                demoMode: true,
                createdAt: nowIso(86400 * 14),
                lastEventAt: nowIso(12),
            },
            {
                id: 'site_acme',
                name: 'Acme Cloud Store',
                domain: 'shop.acme-cloud.io',
                integrationKey: 'ufa_live_4c91e7b208f5a319d62e4b8c1f7a30e2',
                allowedDomains: ['shop.acme-cloud.io', '*.acme-cloud.io', 'localhost'],
                status: 'connected',
                collectionPaused: false,
                retentionDays: 90,
                ipMaskingEnabled: true,
                demoMode: true,
                createdAt: nowIso(86400 * 10),
                lastEventAt: nowIso(28),
            },
            {
                id: 'site_seanpatrick_kesug__f96i',
                name: 'Sean Patrick Portfolio',
                domain: 'seanpatrick.kesug.com',
                integrationKey: 'ufa_live_9f61a2c84e70b3d51a89f0c2e4b7d613',
                allowedDomains: [
                    'seanpatrick.kesug.com',
                    'www.seanpatrick.kesug.com',
                    'seanpatrick.me',
                    'www.seanpatrick.me',
                    'misakishon.infinityfree.me',
                    'localhost',
                    '127.0.0.1',
                ],
                status: 'connected',
                collectionPaused: false,
                retentionDays: 30,
                ipMaskingEnabled: true,
                demoMode: false,
                createdAt: nowIso(86400 * 3),
                lastEventAt: nowIso(14),
            },
        ],
        pages: {
            site_example: [
                { id: 1, siteId: 'site_example', path: '/', label: 'Home', group: 'Pages', isHidden: false, views: 2847, activeVisitors: 2, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(12), discoveryStatus: 'Discovered' },
                { id: 2, siteId: 'site_example', path: '/about', label: 'About', group: 'Pages', isHidden: false, views: 312, activeVisitors: 1, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(95), discoveryStatus: 'Discovered' },
                { id: 3, siteId: 'site_example', path: '/login', label: 'Login', group: 'Pages', isHidden: false, views: 2148, activeVisitors: 1, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(20), discoveryStatus: 'Discovered' },
                { id: 4, siteId: 'site_example', path: '/dashboard', label: 'Dashboard', group: 'Pages', isHidden: false, views: 1796, activeVisitors: 2, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(8), discoveryStatus: 'Discovered' },
                { id: 5, siteId: 'site_example', path: '/products', label: 'Products', group: 'Pages', isHidden: false, views: 683, activeVisitors: 1, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(44), discoveryStatus: 'Discovered' },
                { id: 6, siteId: 'site_example', path: '/support', label: 'Support', group: 'Pages', isHidden: false, views: 145, activeVisitors: 0, firstSeenAt: nowIso(86400 * 7), lastSeenAt: nowIso(180), discoveryStatus: 'Discovered' },
            ],
            site_acme: [
                { id: 11, siteId: 'site_acme', path: '/', label: 'Storefront', group: 'Store', isHidden: false, views: 1640, activeVisitors: 1, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(22), discoveryStatus: 'Discovered' },
                { id: 12, siteId: 'site_acme', path: '/catalog', label: 'Catalog', group: 'Store', isHidden: false, views: 1120, activeVisitors: 1, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(35), discoveryStatus: 'Discovered' },
                { id: 13, siteId: 'site_acme', path: '/pricing', label: 'Pricing', group: 'Store', isHidden: false, views: 745, activeVisitors: 1, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(52), discoveryStatus: 'Discovered' },
                { id: 14, siteId: 'site_acme', path: '/checkout', label: 'Checkout', group: 'Store', isHidden: false, views: 318, activeVisitors: 1, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(40), discoveryStatus: 'Discovered' },
                { id: 15, siteId: 'site_acme', path: '/docs', label: 'API Docs', group: 'Resources', isHidden: false, views: 590, activeVisitors: 0, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(120), discoveryStatus: 'Discovered' },
                { id: 16, siteId: 'site_acme', path: '/account', label: 'Account', group: 'Resources', isHidden: false, views: 412, activeVisitors: 0, firstSeenAt: nowIso(86400 * 6), lastSeenAt: nowIso(210), discoveryStatus: 'Discovered' },
            ],
            site_seanpatrick_kesug__f96i: [
                { id: 13, siteId: 'site_seanpatrick_kesug__f96i', path: '/', label: 'Home', group: 'Pages', isHidden: false, views: 5, activeVisitors: 1, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(18), discoveryStatus: 'Discovered' },
                { id: 14, siteId: 'site_seanpatrick_kesug__f96i', path: '/blog', label: 'Blog', group: 'Pages', isHidden: false, views: 1, activeVisitors: 0, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(420), discoveryStatus: 'Discovered' },
                { id: 15, siteId: 'site_seanpatrick_kesug__f96i', path: '/services', label: 'Services', group: 'Pages', isHidden: false, views: 1, activeVisitors: 0, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(390), discoveryStatus: 'Discovered' },
                { id: 16, siteId: 'site_seanpatrick_kesug__f96i', path: '/about', label: 'About', group: 'Pages', isHidden: false, views: 1, activeVisitors: 0, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(310), discoveryStatus: 'Discovered' },
                { id: 17, siteId: 'site_seanpatrick_kesug__f96i', path: '/policy', label: 'Policy', group: 'Pages', isHidden: false, views: 1, activeVisitors: 0, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(260), discoveryStatus: 'Discovered' },
                { id: 18, siteId: 'site_seanpatrick_kesug__f96i', path: '/projects', label: 'Projects', group: 'Pages', isHidden: false, views: 3, activeVisitors: 1, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(14), discoveryStatus: 'Discovered' },
                { id: 19, siteId: 'site_seanpatrick_kesug__f96i', path: '/projects/portfolio', label: 'Portfolio', group: 'Pages', isHidden: false, views: 1, activeVisitors: 0, firstSeenAt: nowIso(86400), lastSeenAt: nowIso(22), discoveryStatus: 'Discovered' },
            ],
        },
        visitors: {
            site_example: [
                {
                    id: 1, siteId: 'site_example', anonSessionId: 'v_8f3d2a7c', maskedIp: '***.***.113.**', region: 'North America', deviceType: 'desktop',
                    currentPath: '/dashboard', currentLabel: 'Dashboard', previousPath: '/login', previousLabel: 'Login',
                    entryPath: '/', entryLabel: 'Home', exitPath: '/dashboard', exitLabel: 'Dashboard',
                    isActive: true, isDemo: true, startedAt: nowIso(210), lastSeenAt: nowIso(8), durationSec: 202, pageViews: 3,
                    routePaths: ['/', '/login', '/dashboard'], routeLabels: ['Home', 'Login', 'Dashboard'],
                    timeline: [
                        { id: 1001, eventType: 'Session Start', path: '/', label: 'Home', previousPath: null, status: '200 OK', latencyMs: 62, metadataNote: null, isDemo: true, createdAt: nowIso(210), dwellSec: 18 },
                        { id: 1002, eventType: 'Auth Metadata', path: '/login', label: 'Login', previousPath: '/', status: '200 OK', latencyMs: 74, metadataNote: 'Login event recorded — credentials redacted.', isDemo: true, createdAt: nowIso(192), dwellSec: 37 },
                        { id: 1003, eventType: 'Page View', path: '/dashboard', label: 'Dashboard', previousPath: '/login', status: '200 OK', latencyMs: 78, metadataNote: null, isDemo: true, createdAt: nowIso(155), dwellSec: 147 },
                    ],
                },
                {
                    id: 2, siteId: 'site_example', anonSessionId: 'v_2c91e4bd', maskedIp: '***.***.84.**', region: 'Europe', deviceType: 'desktop',
                    currentPath: '/dashboard', currentLabel: 'Dashboard', previousPath: '/login', previousLabel: 'Login',
                    entryPath: '/', entryLabel: 'Home', exitPath: '/dashboard', exitLabel: 'Dashboard',
                    isActive: true, isDemo: true, startedAt: nowIso(380), lastSeenAt: nowIso(25), durationSec: 355, pageViews: 4,
                    routePaths: ['/', '/about', '/login', '/dashboard'], routeLabels: ['Home', 'About', 'Login', 'Dashboard'],
                    timeline: [
                        { id: 1004, eventType: 'Session Start', path: '/', label: 'Home', previousPath: null, status: '200 OK', latencyMs: 88, metadataNote: null, isDemo: true, createdAt: nowIso(380), dwellSec: 60 },
                        { id: 1005, eventType: 'SPA Navigation', path: '/about', label: 'About', previousPath: '/', status: '200 OK', latencyMs: 69, metadataNote: null, isDemo: true, createdAt: nowIso(320), dwellSec: 60 },
                        { id: 1006, eventType: 'Page View', path: '/login', label: 'Login', previousPath: '/about', status: '200 OK', latencyMs: 75, metadataNote: null, isDemo: true, createdAt: nowIso(260), dwellSec: 140 },
                        { id: 1007, eventType: 'Page View', path: '/dashboard', label: 'Dashboard', previousPath: '/login', status: '200 OK', latencyMs: 71, metadataNote: null, isDemo: true, createdAt: nowIso(120), dwellSec: 95 },
                    ],
                },
                {
                    id: 3, siteId: 'site_example', anonSessionId: 'v_9a7f6e11', maskedIp: '***.***.201.**', region: 'Asia Pacific', deviceType: 'mobile',
                    currentPath: '/products', currentLabel: 'Products', previousPath: '/', previousLabel: 'Home',
                    entryPath: '/', entryLabel: 'Home', exitPath: '/products', exitLabel: 'Products',
                    isActive: true, isDemo: true, startedAt: nowIso(150), lastSeenAt: nowIso(19), durationSec: 131, pageViews: 2,
                    routePaths: ['/', '/products'], routeLabels: ['Home', 'Products'],
                    timeline: [
                        { id: 1008, eventType: 'Session Start', path: '/', label: 'Home', previousPath: null, status: '200 OK', latencyMs: 54, metadataNote: null, isDemo: true, createdAt: nowIso(150), dwellSec: 40 },
                        { id: 1009, eventType: 'SPA Navigation', path: '/products', label: 'Products', previousPath: '/', status: '200 OK', latencyMs: 64, metadataNote: null, isDemo: true, createdAt: nowIso(110), dwellSec: 91 },
                    ],
                },
                {
                    id: 4, siteId: 'site_example', anonSessionId: 'v_4e81cd09', maskedIp: '***.***.47.**', region: 'North America', deviceType: 'tablet',
                    currentPath: '/support', currentLabel: 'Support', previousPath: '/about', previousLabel: 'About',
                    entryPath: '/', entryLabel: 'Home', exitPath: '/support', exitLabel: 'Support',
                    isActive: false, isDemo: true, startedAt: nowIso(620), lastSeenAt: nowIso(180), durationSec: 440, pageViews: 3,
                    routePaths: ['/', '/about', '/support'], routeLabels: ['Home', 'About', 'Support'],
                    timeline: [
                        { id: 1010, eventType: 'Session Start', path: '/', label: 'Home', previousPath: null, status: '200 OK', latencyMs: 58, metadataNote: null, isDemo: true, createdAt: nowIso(620), dwellSec: 120 },
                        { id: 1011, eventType: 'Page View', path: '/about', label: 'About', previousPath: '/', status: '200 OK', latencyMs: 66, metadataNote: null, isDemo: true, createdAt: nowIso(500), dwellSec: 180 },
                        { id: 1012, eventType: 'Session End', path: '/support', label: 'Support', previousPath: '/about', status: '200 OK', latencyMs: 61, metadataNote: null, isDemo: true, createdAt: nowIso(320), dwellSec: 140 },
                    ],
                },
            ],
            site_acme: [
                {
                    id: 11, siteId: 'site_acme', anonSessionId: 'v_7a1c3f90', maskedIp: '***.***.19.**', region: 'Asia Pacific', deviceType: 'desktop',
                    currentPath: '/checkout', currentLabel: 'Checkout', previousPath: '/pricing', previousLabel: 'Pricing',
                    entryPath: '/', entryLabel: 'Storefront', exitPath: '/checkout', exitLabel: 'Checkout',
                    isActive: true, isDemo: true, startedAt: nowIso(240), lastSeenAt: nowIso(15), durationSec: 225, pageViews: 4,
                    routePaths: ['/', '/catalog', '/pricing', '/checkout'], routeLabels: ['Storefront', 'Catalog', 'Pricing', 'Checkout'],
                    timeline: [
                        { id: 2001, eventType: 'Session Start', path: '/', label: 'Storefront', previousPath: null, status: '200 OK', latencyMs: 52, metadataNote: null, isDemo: true, createdAt: nowIso(240), dwellSec: 50 },
                        { id: 2002, eventType: 'SPA Navigation', path: '/catalog', label: 'Catalog', previousPath: '/', status: '200 OK', latencyMs: 60, metadataNote: null, isDemo: true, createdAt: nowIso(190), dwellSec: 65 },
                        { id: 2003, eventType: 'SPA Navigation', path: '/pricing', label: 'Pricing', previousPath: '/catalog', status: '200 OK', latencyMs: 58, metadataNote: null, isDemo: true, createdAt: nowIso(125), dwellSec: 70 },
                        { id: 2004, eventType: 'Page View', path: '/checkout', label: 'Checkout', previousPath: '/pricing', status: '200 OK', latencyMs: 73, metadataNote: null, isDemo: true, createdAt: nowIso(55), dwellSec: 40 },
                    ],
                },
            ],
            site_seanpatrick_kesug__f96i: [
                {
                    id: 26, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', maskedIp: '***.***.128.**', region: 'Oceania', deviceType: 'desktop',
                    currentPath: '/projects', currentLabel: 'Projects', previousPath: '/projects/portfolio', previousLabel: 'Portfolio',
                    entryPath: '/', entryLabel: 'Home', exitPath: '/projects', exitLabel: 'Projects',
                    isActive: true, isDemo: false, startedAt: nowIso(460), lastSeenAt: nowIso(14), durationSec: 446, pageViews: 7,
                    routePaths: ['/', '/blog', '/services', '/about', '/policy', '/projects', '/projects/portfolio'],
                    routeLabels: ['Home', 'Blog', 'Services', 'About', 'Policy', 'Projects', 'Portfolio'],
                    timeline: [
                        { id: 7759, eventType: 'Session Start', path: '/', label: 'Home', previousPath: null, status: 'Success', latencyMs: 60, metadataNote: null, isDemo: false, createdAt: nowIso(460), dwellSec: 12 },
                        { id: 7766, eventType: 'SPA Navigation', path: '/blog', label: 'Blog', previousPath: '/', status: 'Success', latencyMs: 71, metadataNote: null, isDemo: false, createdAt: nowIso(448), dwellSec: 15 },
                        { id: 7770, eventType: 'SPA Navigation', path: '/services', label: 'Services', previousPath: '/', status: 'Success', latencyMs: 48, metadataNote: null, isDemo: false, createdAt: nowIso(410), dwellSec: 22 },
                        { id: 8040, eventType: 'SPA Navigation', path: '/about', label: 'About', previousPath: '/', status: 'Success', latencyMs: 85, metadataNote: null, isDemo: false, createdAt: nowIso(340), dwellSec: 19 },
                        { id: 8056, eventType: 'SPA Navigation', path: '/policy', label: 'Policy', previousPath: '/', status: 'Success', latencyMs: 87, metadataNote: null, isDemo: false, createdAt: nowIso(280), dwellSec: 18 },
                        { id: 10363, eventType: 'SPA Navigation', path: '/projects/portfolio', label: 'Portfolio', previousPath: '/projects', status: 'Success', latencyMs: 73, metadataNote: null, isDemo: false, createdAt: nowIso(26), dwellSec: 12 },
                        { id: 10366, eventType: 'SPA Navigation', path: '/projects', label: 'Projects', previousPath: '/projects/portfolio', status: 'Success', latencyMs: 62, metadataNote: null, isDemo: false, createdAt: nowIso(14), dwellSec: 14 },
                    ],
                },
            ],
        },
        events: {
            site_example: [
                { id: 501, siteId: 'site_example', anonSessionId: 'v_8f3d2a7c', eventType: 'Page View', sourcePath: '/dashboard', sourceLabel: 'Dashboard', previousPath: '/login', destination: 'Telemetry DB', status: '200 OK', latencyMs: 78, metadataNote: null, isDemo: true, createdAt: nowIso(8) },
                { id: 502, siteId: 'site_example', anonSessionId: 'v_9a7f6e11', eventType: 'SPA Navigation', sourcePath: '/products', sourceLabel: 'Products', previousPath: '/', destination: 'Telemetry DB', status: '200 OK', latencyMs: 64, metadataNote: null, isDemo: true, createdAt: nowIso(19) },
                { id: 503, siteId: 'site_example', anonSessionId: 'v_8f3d2a7c', eventType: 'Auth Metadata', sourcePath: '/login', sourceLabel: 'Login', previousPath: '/', destination: 'Telemetry DB', status: '200 OK', latencyMs: 74, metadataNote: 'Credentials redacted', isDemo: true, createdAt: nowIso(35) },
                { id: 504, siteId: 'site_example', anonSessionId: 'v_2c91e4bd', eventType: 'SPA Navigation', sourcePath: '/about', sourceLabel: 'About', previousPath: '/', destination: 'Telemetry DB', status: '200 OK', latencyMs: 69, metadataNote: null, isDemo: true, createdAt: nowIso(58) },
            ],
            site_acme: [
                { id: 601, siteId: 'site_acme', anonSessionId: 'v_7a1c3f90', eventType: 'Page View', sourcePath: '/checkout', sourceLabel: 'Checkout', previousPath: '/pricing', destination: 'Telemetry DB', status: '200 OK', latencyMs: 73, metadataNote: null, isDemo: true, createdAt: nowIso(15) },
            ],
            site_seanpatrick_kesug__f96i: [
                { id: 10366, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/projects', sourceLabel: 'Projects', previousPath: '/projects/portfolio', destination: 'Telemetry DB', status: 'Success', latencyMs: 62, metadataNote: null, isDemo: false, createdAt: nowIso(14) },
                { id: 10363, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/projects/portfolio', sourceLabel: 'Portfolio', previousPath: '/projects', destination: 'Telemetry DB', status: 'Success', latencyMs: 73, metadataNote: null, isDemo: false, createdAt: nowIso(26) },
                { id: 8554, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/projects', sourceLabel: 'Projects', previousPath: '/', destination: 'Telemetry DB', status: 'Success', latencyMs: 93, metadataNote: null, isDemo: false, createdAt: nowIso(140) },
                { id: 8056, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/policy', sourceLabel: 'Policy', previousPath: '/', destination: 'Telemetry DB', status: 'Success', latencyMs: 87, metadataNote: null, isDemo: false, createdAt: nowIso(280) },
                { id: 8040, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/about', sourceLabel: 'About', previousPath: '/', destination: 'Telemetry DB', status: 'Success', latencyMs: 85, metadataNote: null, isDemo: false, createdAt: nowIso(340) },
                { id: 7770, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/services', sourceLabel: 'Services', previousPath: '/', destination: 'Telemetry DB', status: 'Success', latencyMs: 48, metadataNote: null, isDemo: false, createdAt: nowIso(410) },
                { id: 7766, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'SPA Navigation', sourcePath: '/blog', sourceLabel: 'Blog', previousPath: '/', destination: 'Telemetry DB', status: 'Success', latencyMs: 71, metadataNote: null, isDemo: false, createdAt: nowIso(448) },
                { id: 7759, siteId: 'site_seanpatrick_kesug__f96i', anonSessionId: 'v_51625b2e', eventType: 'Session Start', sourcePath: '/', sourceLabel: 'Home', previousPath: null, destination: 'Telemetry DB', status: 'Success', latencyMs: 60, metadataNote: null, isDemo: false, createdAt: nowIso(460) },
            ],
        },
        security: {
            site_example: [
                { id: 901, siteId: 'site_example', severity: 'High', eventType: 'Repeated Failed Logins', anonSessionId: 'v_9a7f6e11', maskedIp: '***.***.201.**', sourcePath: '/login', summary: '6 consecutive auth metadata failures within 30 seconds.', status: 'Open', isDemo: true, createdAt: nowIso(140) },
                { id: 902, siteId: 'site_example', severity: 'Medium', eventType: 'Unusual Request Burst', anonSessionId: 'v_2c91e4bd', maskedIp: '***.***.84.**', sourcePath: '/products', summary: '48 rapid navigation pings observed from single session.', status: 'Open', isDemo: true, createdAt: nowIso(410) },
                { id: 903, siteId: 'site_example', severity: 'Low', eventType: 'Disallowed Origin Blocked', anonSessionId: null, maskedIp: '***.***.19.**', sourcePath: '/api/v1/collect', summary: 'Rejected telemetry payload from unlisted origin staging.test.', status: 'Acknowledged', isDemo: true, createdAt: nowIso(1100) },
            ],
            site_acme: [
                { id: 911, siteId: 'site_acme', severity: 'Medium', eventType: 'Invalid Integration Key', anonSessionId: null, maskedIp: '***.***.63.**', sourcePath: '/checkout', summary: 'Constant-time key verification rejected rotated token.', status: 'Open', isDemo: true, createdAt: nowIso(320) },
            ],
            site_seanpatrick_kesug__f96i: [],
        },
        team: {
            site_example: [
                { id: 1, siteId: 'site_example', name: 'Elena Rostova', email: 'elena@example-site.com', role: 'Owner', addedAt: nowIso(86400 * 14) },
                { id: 2, siteId: 'site_example', name: 'Marcus Chen', email: 'marcus@example-site.com', role: 'Admin', addedAt: nowIso(86400 * 5) },
                { id: 3, siteId: 'site_example', name: 'Priya Nair', email: 'priya@example-site.com', role: 'Analyst', addedAt: nowIso(86400 * 5) },
            ],
            site_acme: [
                { id: 4, siteId: 'site_acme', name: 'Jordan Blake', email: 'jordan@acme-cloud.io', role: 'Owner', addedAt: nowIso(86400 * 10) },
                { id: 5, siteId: 'site_acme', name: 'Sora Takahashi', email: 'sora@acme-cloud.io', role: 'Security Analyst', addedAt: nowIso(86400 * 10) },
            ],
            site_seanpatrick_kesug__f96i: [
                { id: 6, siteId: 'site_seanpatrick_kesug__f96i', name: 'Admin Owner', email: 'admin@seanpatrick.kesug.com', role: 'Owner', addedAt: nowIso(86400 * 3) },
            ],
        },
        nextId: 7000,
    };

    const maskKey = (k) => k.slice(0, 11) + '••••••••••••' + k.slice(-4);

    const toSiteDto = (s) => ({
        id: s.id,
        name: s.name,
        domain: s.domain,
        maskedIntegrationKey: maskKey(s.integrationKey),
        allowedDomains: s.allowedDomains,
        status: s.status,
        collectionPaused: s.collectionPaused,
        retentionDays: s.retentionDays,
        ipMaskingEnabled: s.ipMaskingEnabled,
        demoMode: s.demoMode,
        createdAt: s.createdAt,
        lastEventAt: s.lastEventAt,
        pageCount: (state.pages[s.id] || []).length,
        liveEventCount: (state.events[s.id] || []).filter((e) => !e.isDemo).length,
        demoEventCount: (state.events[s.id] || []).filter((e) => e.isDemo).length,
    });

    const securitySummaryFor = (siteId) => {
        const list = state.security[siteId] || [];
        const open = list.filter((x) => x.status !== 'Resolved');
        return {
            Critical: open.filter((x) => x.severity === 'Critical').length,
            High: open.filter((x) => x.severity === 'High').length,
            Medium: open.filter((x) => x.severity === 'Medium').length,
            Low: open.filter((x) => x.severity === 'Low').length,
            openTotal: open.length,
        };
    };

    const analyticsFor = (siteId, range) => {
        const site = state.sites.find((s) => s.id === siteId);
        const pages = state.pages[siteId] || [];
        const visitors = state.visitors[siteId] || [];
        const totalViews = pages.reduce((sum, p) => sum + p.views, 0);
        const mult = range === '1h' ? 0.08 : range === '24h' ? 0.35 : range === '7d' ? 0.72 : 1;
        const activeVisitors = visitors.filter((v) => v.isActive).length;
        const labels = range === '1h'
            ? ['50m', '40m', '30m', '20m', '10m', 'Now']
            : range === '24h'
            ? ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const isLiveSite = site && !site.demoMode;
        const commonPaths = siteId === 'site_seanpatrick_kesug__f96i'
            ? [
                  { sequence: 'Home → Projects → Portfolio', steps: ['/', '/projects', '/projects/portfolio'], sessions: 3, sharePct: 50 },
                  { sequence: 'Home → About → Policy', steps: ['/', '/about', '/policy'], sessions: 2, sharePct: 33 },
                  { sequence: 'Home → Blog → Services', steps: ['/', '/blog', '/services'], sessions: 1, sharePct: 17 },
              ]
            : [
                  { sequence: 'Home → Login → Dashboard', steps: ['/', '/login', '/dashboard'], sessions: 94, sharePct: 43 },
                  { sequence: 'Home → Products → Login', steps: ['/', '/products', '/login'], sessions: 61, sharePct: 28 },
                  { sequence: 'Home → About → Support', steps: ['/', '/about', '/support'], sessions: 38, sharePct: 18 },
              ];
        return {
            kpis: {
                activeVisitors,
                sessions: isLiveSite ? Math.max(1, visitors.length) : Math.max(visitors.length, Math.round(totalViews * mult * 0.24)),
                pageViewsInRange: isLiveSite ? totalViews : Math.round(totalViews * mult),
                totalPageViews: totalViews,
                avgLatencyMs: isLiveSite ? 72 : 68,
                eventSuccessRate: isLiveSite ? 100 : 99.4,
                deltas: { activeVisitors: '+18%', sessions: '+12%', pageViews: '+21%' },
            },
            dataMode: isLiveSite ? 'live' : 'demo',
            trend: labels.map((label, i) => ({
                label,
                pageViews: isLiveSite ? Math.max(1, Math.round((totalViews / labels.length) * (0.6 + (i % 3) * 0.35))) : Math.round((120 + i * 38 + (i % 2 ? 42 : 0)) * (mult + 0.4)),
                visitors: isLiveSite ? (i === labels.length - 1 ? 1 : 0) : Math.round((28 + i * 9 + (i % 2 ? 12 : 0)) * (mult + 0.4)),
            })),
            popularPages: [...pages]
                .sort((a, b) => b.views - a.views)
                .map((p) => ({ path: p.path, label: p.label, views: p.views, activeVisitors: p.activeVisitors, group: p.group })),
            entryPages: [
                { path: '/', label: pages[0]?.label || 'Home', sessions: isLiveSite ? 1 : 148, sharePct: isLiveSite ? 100 : 68 },
                { path: pages[4]?.path || '/products', label: pages[4]?.label || 'Products', sessions: isLiveSite ? 0 : 44, sharePct: isLiveSite ? 0 : 20 },
                { path: pages[1]?.path || '/about', label: pages[1]?.label || 'About', sessions: isLiveSite ? 0 : 26, sharePct: isLiveSite ? 0 : 12 },
            ],
            exitPages: [
                { path: pages[5]?.path || pages[3]?.path || '/dashboard', label: pages[5]?.label || pages[3]?.label || 'Dashboard', sessions: isLiveSite ? 1 : 112, sharePct: isLiveSite ? 100 : 54 },
                { path: pages[1]?.path || '/support', label: pages[1]?.label || 'Support', sessions: isLiveSite ? 0 : 56, sharePct: isLiveSite ? 0 : 27 },
                { path: pages[2]?.path || '/login', label: pages[2]?.label || 'Login', sessions: isLiveSite ? 0 : 39, sharePct: isLiveSite ? 0 : 19 },
            ],
            commonPaths,
            latencySeries: [64, 71, 68, 62, 74, 66, 69, 65],
            successSeries: [99.1, 99.5, 99.3, 99.7, 99.4, 99.6, 99.4, 99.8],
        };
    };

    const jsonResponse = (data, status = 200) =>
        Promise.resolve(
            new Response(JSON.stringify(data), {
                status,
                headers: { 'Content-Type': 'application/json' },
            })
        );

    const sseSubscribers = new Set();
    const broadcast = (siteId, payload) => {
        sseSubscribers.forEach((sub) => {
            if (sub.siteId === siteId && !sub.closed && typeof sub.onmessage === 'function') {
                sub.onmessage({ data: JSON.stringify(payload) });
            }
        });
    };

    const triggerNewEvent = (siteId, overridePath, overrideTitle, overrideSession) => {
        const site = state.sites.find((s) => s.id === siteId);
        if (!site || site.collectionPaused) return null;
        const pages = state.pages[siteId] || [];
        const visitors = state.visitors[siteId] || [];
        let discoveredNewPage = false;

        let targetPage = overridePath
            ? pages.find((p) => p.path === overridePath)
            : pages[Math.floor(Math.random() * pages.length)];

        if (overridePath && !targetPage) {
            const norm = '/' + overridePath.replace(/^\/+/, '').toLowerCase();
            targetPage = {
                id: ++state.nextId,
                siteId,
                path: norm,
                label: overrideTitle || norm.slice(1) || 'Page',
                group: 'Discovered',
                isHidden: false,
                views: 0,
                activeVisitors: 1,
                firstSeenAt: nowIso(0),
                lastSeenAt: nowIso(0),
                discoveryStatus: 'Discovered',
            };
            pages.push(targetPage);
            discoveredNewPage = true;
        }
        if (!targetPage) return null;

        targetPage.views += 1;
        targetPage.lastSeenAt = nowIso(0);

        const visitor = (overrideSession && visitors.find((v) => v.anonSessionId === overrideSession))
            || visitors[Math.floor(Math.random() * visitors.length)];
        const prevPath = visitor ? visitor.currentPath : '/';
        const evt = {
            id: ++state.nextId,
            siteId,
            anonSessionId: visitor ? visitor.anonSessionId : 'v_8f3d2a7c',
            eventType: targetPage.path === '/login' ? 'Auth Metadata' : 'SPA Navigation',
            sourcePath: targetPage.path,
            sourceLabel: targetPage.label,
            previousPath: prevPath,
            destination: 'Telemetry DB',
            status: '200 OK',
            latencyMs: 55 + Math.floor(Math.random() * 28),
            metadataNote: targetPage.path === '/login' ? 'Credentials redacted' : null,
            isDemo: !overridePath,
            createdAt: nowIso(0),
        };

        state.events[siteId] = [evt, ...(state.events[siteId] || [])].slice(0, 120);
        site.lastEventAt = evt.createdAt;

        if (visitor) {
            visitor.previousPath = visitor.currentPath;
            visitor.previousLabel = visitor.currentLabel;
            visitor.currentPath = targetPage.path;
            visitor.currentLabel = targetPage.label;
            visitor.lastSeenAt = evt.createdAt;
            visitor.durationSec += 9;
            visitor.pageViews += 1;
            visitor.isActive = true;
            visitor.routePaths = [...visitor.routePaths.slice(-5), targetPage.path];
            visitor.routeLabels = [...visitor.routeLabels.slice(-5), targetPage.label];
            visitor.timeline = [
                ...visitor.timeline.slice(-10),
                {
                    id: evt.id,
                    eventType: evt.eventType,
                    path: targetPage.path,
                    label: targetPage.label,
                    previousPath: prevPath,
                    status: evt.status,
                    latencyMs: evt.latencyMs,
                    metadataNote: evt.metadataNote,
                    isDemo: evt.isDemo,
                    createdAt: evt.createdAt,
                    dwellSec: 9,
                },
            ];
        }

        broadcast(siteId, { type: 'event', event: evt });
        if (discoveredNewPage) broadcast(siteId, { type: 'pages_updated' });
        return { event: evt, discoveredNewPage };
    };

    // Background simulated live stream
    setInterval(() => {
        sseSubscribers.forEach((sub) => {
            if (!sub.closed) triggerNewEvent(sub.siteId);
        });
    }, 3200);

    // Override EventSource for /api/v1/stream
    const NativeEventSource = window.EventSource;
    window.EventSource = function (url) {
        if (typeof url === 'string' && url.includes('/api/v1/stream')) {
            const parsed = new URL(url, window.location.origin);
            const siteId = parsed.searchParams.get('siteId') || 'site_example';
            const mock = {
                siteId,
                closed: false,
                onopen: null,
                onmessage: null,
                onerror: null,
                close() {
                    this.closed = true;
                    sseSubscribers.delete(this);
                },
            };
            sseSubscribers.add(mock);
            setTimeout(() => {
                if (!mock.closed) {
                    if (typeof mock.onopen === 'function') mock.onopen({});
                    if (typeof mock.onmessage === 'function') {
                        mock.onmessage({ data: JSON.stringify({ type: 'connected', siteId }) });
                    }
                }
            }, 60);
            return mock;
        }
        return new NativeEventSource(url);
    };

    // Override fetch for /api/*
    const nativeFetch = window.fetch.bind(window);
    window.fetch = async function (input, init = {}) {
        const rawUrl = typeof input === 'string' ? input : input.url;
        if (!rawUrl || !rawUrl.startsWith('/api/')) {
            return nativeFetch(input, init);
        }

        const url = new URL(rawUrl, window.location.origin);
        const method = (init.method || 'GET').toUpperCase();
        const body = init.body ? JSON.parse(init.body) : {};
        const p = url.pathname;

        if (p === '/api/sites' && method === 'GET') {
            return jsonResponse({ sites: state.sites.map(toSiteDto) });
        }
        if (p === '/api/sites' && method === 'POST') {
            const id = 'site_' + Math.random().toString(36).slice(2, 8);
            const created = {
                id,
                name: body.name || 'New Site',
                domain: body.domain || 'app.example.com',
                integrationKey: 'ufa_live_' + Math.random().toString(16).slice(2, 18) + Math.random().toString(16).slice(2, 18),
                allowedDomains: body.allowedDomains || [body.domain || 'app.example.com'],
                status: 'connected',
                collectionPaused: false,
                retentionDays: 30,
                ipMaskingEnabled: true,
                demoMode: true,
                createdAt: nowIso(0),
                lastEventAt: nowIso(0),
            };
            state.sites.push(created);
            state.pages[id] = [
                { id: ++state.nextId, siteId: id, path: '/', label: 'Home', group: 'Pages', isHidden: false, views: 12, activeVisitors: 1, firstSeenAt: nowIso(0), lastSeenAt: nowIso(0), discoveryStatus: 'Discovered' },
                { id: ++state.nextId, siteId: id, path: '/login', label: 'Login', group: 'Pages', isHidden: false, views: 5, activeVisitors: 0, firstSeenAt: nowIso(0), lastSeenAt: nowIso(0), discoveryStatus: 'Discovered' },
            ];
            state.visitors[id] = [];
            state.events[id] = [];
            state.security[id] = [];
            state.team[id] = [{ id: ++state.nextId, siteId: id, name: 'Sean Patrick Agtang', email: 'agtangseanpatrick52@gmail.com', role: 'Owner', addedAt: nowIso(0) }];
            return jsonResponse({ site: toSiteDto(created) }, 201);
        }

        const m = p.match(/^\/api\/sites\/([^/]+)(?:\/(.*))?$/);
        if (!m) return jsonResponse({ error: 'Not found' }, 404);
        const siteId = decodeURIComponent(m[1]);
        const rest = m[2] || '';
        const site = state.sites.find((s) => s.id === siteId);
        if (!site) return jsonResponse({ error: 'Site not found' }, 404);

        if (rest === 'key' && method === 'GET') {
            return jsonResponse({ integrationKey: site.integrationKey });
        }
        if (rest === 'rotate-key' && method === 'POST') {
            site.integrationKey = 'ufa_live_' + Math.random().toString(16).slice(2, 18) + Math.random().toString(16).slice(2, 18);
            return jsonResponse({ site: toSiteDto(site), integrationKey: site.integrationKey });
        }
        if (rest === 'settings' && method === 'PATCH') {
            Object.assign(site, body);
            broadcast(siteId, { type: 'site_updated' });
            return jsonResponse({ site: toSiteDto(site) });
        }
        if (rest === 'test-event' && method === 'POST') {
            const res = triggerNewEvent(siteId, body.path || '/products', body.title, body.sessionId);
            return jsonResponse(res || { event: state.events[siteId][0], discoveredNewPage: false });
        }
        if (rest === 'pages' && method === 'GET') {
            const includeHidden = url.searchParams.get('includeHidden') !== 'false';
            const list = (state.pages[siteId] || []).filter((pg) => includeHidden || !pg.isHidden);
            return jsonResponse({ pages: list });
        }
        const pagePatch = rest.match(/^pages\/(\d+)$/);
        if (pagePatch && method === 'PATCH') {
            const pid = Number(pagePatch[1]);
            const pg = (state.pages[siteId] || []).find((x) => x.id === pid);
            if (pg) {
                if (body.label !== undefined) pg.label = body.label;
                if (body.group !== undefined) pg.group = body.group;
                if (body.isHidden !== undefined) {
                    pg.isHidden = body.isHidden;
                    pg.discoveryStatus = body.isHidden ? 'Hidden' : 'Discovered';
                }
            }
            broadcast(siteId, { type: 'pages_updated' });
            return jsonResponse({ pages: state.pages[siteId] || [] });
        }
        if (rest === 'visitors' && method === 'GET') {
            let list = [...(state.visitors[siteId] || [])];
            const search = (url.searchParams.get('search') || '').toLowerCase();
            const status = url.searchParams.get('status') || '';
            if (search) list = list.filter((v) => v.anonSessionId.toLowerCase().includes(search) || v.currentPath.toLowerCase().includes(search));
            if (status === 'active') list = list.filter((v) => v.isActive);
            if (status === 'ended') list = list.filter((v) => !v.isActive);
            return jsonResponse({ visitors: list });
        }
        if (rest === 'events' && method === 'GET') {
            let list = [...(state.events[siteId] || [])];
            const search = (url.searchParams.get('search') || '').toLowerCase();
            const type = url.searchParams.get('eventType') || '';
            const pg = url.searchParams.get('page') || '';
            if (search) list = list.filter((e) => `${e.anonSessionId} ${e.sourcePath} ${e.eventType}`.toLowerCase().includes(search));
            if (type && type !== 'all') list = list.filter((e) => e.eventType === type);
            if (pg && pg !== 'all') list = list.filter((e) => e.sourcePath === pg);
            return jsonResponse({ events: list });
        }
        if (rest === 'analytics' && method === 'GET') {
            return jsonResponse(analyticsFor(siteId, url.searchParams.get('range') || '24h'));
        }
        if (rest === 'security-events' && method === 'GET') {
            let list = [...(state.security[siteId] || [])];
            const sev = url.searchParams.get('severity') || '';
            const st = url.searchParams.get('status') || '';
            if (sev && sev !== 'all') list = list.filter((x) => x.severity === sev);
            if (st && st !== 'all') list = list.filter((x) => x.status === st);
            return jsonResponse({ summary: securitySummaryFor(siteId), events: list });
        }
        const secPatch = rest.match(/^security-events\/(\d+)$/);
        if (secPatch && method === 'PATCH') {
            const sid = Number(secPatch[1]);
            const item = (state.security[siteId] || []).find((x) => x.id === sid);
            if (item && body.status) item.status = body.status;
            return jsonResponse({ summary: securitySummaryFor(siteId), events: state.security[siteId] || [] });
        }
        if (rest === 'team' && method === 'GET') {
            return jsonResponse({ members: state.team[siteId] || [] });
        }
        if (rest === 'team' && method === 'POST') {
            state.team[siteId] = [
                ...(state.team[siteId] || []),
                { id: ++state.nextId, siteId, name: body.name, email: body.email, role: body.role || 'Analyst', addedAt: nowIso(0) },
            ];
            return jsonResponse({ members: state.team[siteId] });
        }
        const teamDel = rest.match(/^team\/(\d+)$/);
        if (teamDel && method === 'DELETE') {
            const tid = Number(teamDel[1]);
            state.team[siteId] = (state.team[siteId] || []).filter((x) => x.id !== tid);
            return jsonResponse({ members: state.team[siteId] });
        }

        return jsonResponse({ ok: true });
    };
})();
