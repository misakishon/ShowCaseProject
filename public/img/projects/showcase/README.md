# Project screenshot sources

These images show the websites themselves. They are not pixel-art redesigns or device mockups.

- `bez-desktop.png`: unchanged copy of the BEZ_HAIR_STUDIO project's `desktop_macbook_fit.png` (3200 × 1964), a flat website capture without a laptop frame.
- `bez-mobile.png`: unchanged copy of that project's `mobile_bez_studio.png` (1179 × 2556), without added phone chrome.

Screenshot dimensions, titles, alt text, and gallery order are defined in `resources/data/projects.json`. Preserve source aspect ratios and use normal image rendering.

## Portfolio captures

- `portfolio-desktop.png` / `portfolio-dark-desktop.png`: this site's home page at 1440 × 900, device scale factor 2 (2880 × 1800), light and dark theme.
- `portfolio-mobile.png` / `portfolio-dark-mobile.png`: the same page at 390 × 844, device scale factor 3 (1170 × 2532), light and dark theme.

Regenerate with the dev server running (`http://127.0.0.1:8000`, or set `BASE_URL`):

```
node scripts/capture-portfolio-screenshots.mjs
```

The script sets the `theme` and `portfolio_policy_acknowledged` localStorage keys so the policy banner does not cover the page. Dark variants are wired via `desktopDark` / `mobileDark` in `resources/data/projects.json` and swap automatically with the site theme.
