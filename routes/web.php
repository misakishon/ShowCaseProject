<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'siteUrl' => config('app.url'),
    ]);
})->name('home');

Route::get('/projects', function () {
    return Inertia::render('Home', [
        'siteUrl' => config('app.url'),
    ]);
})->name('projects');

/*
|--------------------------------------------------------------------------
| Canonical Live Interactive Project Routes
|--------------------------------------------------------------------------
*/
Route::get('/BEZ_HAIR_STUDIO', fn () => Inertia::render('Apps/BezHairStudio'))
    ->name('apps.bez');

Route::get('/JeepTrack', fn () => Inertia::render('Apps/JeepTrack'))
    ->name('apps.jeeptrack');

Route::get('/Portfolio', fn () => Inertia::render('Apps/Portfolio'))
    ->name('apps.portfolio');

Route::get('/DashboardDesign', fn () => Inertia::render('Apps/DashboardDesign'))
    ->name('apps.dashboard-design');

Route::get('/BezAdminDashboard', fn () => Inertia::render('Apps/BezAdminDashboard'))
    ->name('apps.bez-admin');

Route::get('/OwlWatch', fn () => Inertia::render('Apps/CybersecurityDashboard'))
    ->name('apps.owlwatch');

/*
|--------------------------------------------------------------------------
| Friendly Case, Folder-Name & Typo Redirects
|--------------------------------------------------------------------------
*/
Route::redirect('/Porfolio', '/Portfolio');
Route::redirect('/portfolio', '/Portfolio');
Route::redirect('/porfolio', '/Portfolio');

Route::redirect('/bez-hair-studio', '/BEZ_HAIR_STUDIO');
Route::redirect('/BezHairStudio', '/BEZ_HAIR_STUDIO');
Route::redirect('/bez', '/BEZ_HAIR_STUDIO');

Route::redirect('/JeepTrackWebsiteapp', '/JeepTrack');
Route::redirect('/jeeptrack', '/JeepTrack');
Route::redirect('/jeep-application-tracker', '/JeepTrack');

Route::redirect('/DasboardDesign', '/DashboardDesign');
Route::redirect('/dasboarddesign', '/DashboardDesign');
Route::redirect('/dashboard-design', '/DashboardDesign');
Route::redirect('/rose-atelier-dashboard', '/DashboardDesign');

Route::redirect('/owlwatch', '/OwlWatch');
Route::redirect('/CybersecurityDashboard', '/OwlWatch');
Route::redirect('/cybersecurity-dashboard', '/OwlWatch');
Route::redirect('/cybersecuritydashboard', '/OwlWatch');
Route::redirect('/user-flow-analytics', '/OwlWatch');

Route::redirect('/bez-admin-dashboard', '/BezAdminDashboard');
Route::redirect('/bez-admin', '/BezAdminDashboard');
Route::redirect('/BEZ_ADMIN_DASHBOARD', '/BezAdminDashboard');
