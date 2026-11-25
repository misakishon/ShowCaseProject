<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * Verify the Showcase home page renders with the configured URL.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->where('siteUrl', config('app.url'))
        );

        $projectsResponse = $this->get('/projects');

        $projectsResponse->assertStatus(200);
        $projectsResponse->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->where('siteUrl', config('app.url'))
        );
    }

    /**
     * Verify all 5 canonical interactive project URLs render their Inertia apps.
     */
    public function test_all_five_interactive_project_routes_render(): void
    {
        $routes = [
            '/BEZ_HAIR_STUDIO' => 'Apps/BezHairStudio',
            '/JeepTrack' => 'Apps/JeepTrack',
            '/Portfolio' => 'Apps/Portfolio',
            '/DashboardDesign' => 'Apps/DashboardDesign',
            '/BezAdminDashboard' => 'Apps/BezAdminDashboard',
            '/OwlWatch' => 'Apps/CybersecurityDashboard',
        ];

        foreach ($routes as $uri => $component) {
            $response = $this->get($uri);

            $response->assertStatus(200);
            $response->assertInertia(fn (Assert $page) => $page->component($component));
        }

        $bundles = [
            'public/apps/bez-hair-studio/index.html',
            'public/apps/jeeptrack/index.html',
            'public/apps/portfolio/index.html',
            'public/apps/dashboard-design/index.html',
            'public/apps/cybersecurity-dashboard/index.html',
        ];

        foreach ($bundles as $bundle) {
            $this->assertFileExists(base_path($bundle));
        }
    }

    /**
     * Verify typo, case, and folder-name redirects resolve cleanly.
     */
    public function test_friendly_redirects_resolve_to_canonical_routes(): void
    {
        $this->get('/Porfolio')->assertRedirect('/Portfolio');
        $this->get('/portfolio')->assertRedirect('/Portfolio');
        $this->get('/DasboardDesign')->assertRedirect('/DashboardDesign');
        $this->get('/JeepTrackWebsiteapp')->assertRedirect('/JeepTrack');
        $this->get('/bez-hair-studio')->assertRedirect('/BEZ_HAIR_STUDIO');
        $this->get('/CybersecurityDashboard')->assertRedirect('/OwlWatch');
        $this->get('/cybersecurity-dashboard')->assertRedirect('/OwlWatch');
        $this->get('/owlwatch')->assertRedirect('/OwlWatch');
        $this->get('/bez-admin-dashboard')->assertRedirect('/BezAdminDashboard');
    }
}
