<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="light">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'ShowCaseProject') }}</title>
        <meta name="description" content="Interactive project showcase by Sean Patrick Agtang — explore live web applications, booking systems, fleet analytics, and modern dashboards.">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

        @fonts
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead

        <script>
            try {
                var savedTheme = localStorage.getItem('theme') || localStorage.getItem('showcase-theme');
                if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                }
            } catch (e) {}
        </script>
    </head>
    <body class="font-sans antialiased bg-white text-zinc-900 dark:bg-[#0c0e10] dark:text-zinc-100 selection:bg-purple-500/30">
        @inertia
    </body>
</html>
