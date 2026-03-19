# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
This is a **static HTML website** (no build step, no framework, no bundler) for Riviera Waterfront Mansion, a Long Island wedding venue. It consists of 13 HTML pages, 3 vanilla JS files, and images. All styling is inline/embedded CSS. GSAP and Google Fonts load from CDN.

### Running the site locally
Serve the repository root with any static HTTP server:
```
python3 -m http.server 8080
```
Then open `http://localhost:8080/` in a browser. There is no build or install step.

### Key files
- `vercel.json` — production headers, redirects, and clean-URL config (Vercel-only)
- `unified-contact-form.js` — contact form handler (posts to Formspree)
- `consent-manager.js` — cookie consent banner logic
- `wedding-data.js` — gallery/wedding data
- `optimize-images.sh` — image optimization utility (not part of dev workflow)

### No lint, test, or build tooling
This project has **no** `package.json`, linter, test framework, or build pipeline. There is nothing to lint, test, or build beyond serving the HTML files and verifying them in a browser.

### Formspree
Contact forms submit to Formspree. The form ID placeholder `YOUR_FORMSPREE_ID` in `unified-contact-form.js` must be replaced with a real Formspree form ID for submissions to work. Without it the site still loads; forms just won't deliver.
