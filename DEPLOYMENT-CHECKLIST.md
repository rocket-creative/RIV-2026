# Deployment Checklist - Riviera Waterfront Mansion

## Pre-Deployment Security

- [ ] **Formspree Configuration**
  - Replace `YOUR_FORMSPREE_ID` in `unified-contact-form.js` with actual ID
  - Test form submissions on staging
  - Verify emails arrive at info@rivierawaterfrontmansion.com

- [ ] **Security Headers**
  - Upload `.htaccess` file to root directory
  - Verify headers with https://securityheaders.com
  - Enable HSTS after SSL is confirmed working

- [ ] **SSL Certificate**
  - Install SSL certificate (Let's Encrypt or hosting provider)
  - Force HTTPS redirects
  - Update all canonical URLs to https://
  - Uncomment HSTS header in `.htaccess`

- [ ] **File Permissions**
  - Ensure `.sh` files are not publicly accessible
  - Verify `.git` folder is blocked
  - Check that development files are not exposed

## Content Review

- [ ] **Images**
  - All images optimized and compressed
  - Alt text present on all images
  - EXIF data stripped from photos

- [ ] **Contact Information**
  - Phone number correct: 516-541-5020
  - Email correct: info@rivierawaterfrontmansion.com
  - Address verified: 200 E Shore Dr, Massapequa, NY 11758

- [ ] **Legal Pages**
  - Privacy Policy reviewed and accurate
  - Terms & Conditions reviewed and accurate
  - Cookie consent banner functional

## SEO & Performance

- [ ] **Metadata**
  - All pages have unique titles (50-60 chars)
  - All pages have unique descriptions (150-160 chars)
  - Canonical URLs set to production domain
  - Open Graph images exist and are correct size (1200x630)

- [ ] **Schema Markup**
  - Validate all JSON-LD at https://validator.schema.org
  - Test rich results at https://search.google.com/test/rich-results

- [ ] **Performance**
  - Test page speed at https://pagespeed.web.dev
  - Optimize Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
  - Enable GZIP compression on server

## Testing

- [ ] **Cross-Browser**
  - Chrome (desktop & mobile)
  - Safari (desktop & mobile)
  - Firefox
  - Edge

- [ ] **Mobile Responsive**
  - iPhone (Safari)
  - Android (Chrome)
  - Tablet (iPad)

- [ ] **Functionality**
  - All navigation links work
  - Contact form submits successfully
  - Booking form works
  - Quiz form works
  - Gallery loads properly
  - Consent manager functions
  - All external links open in new tab

- [ ] **Accessibility**
  - Test with screen reader
  - Keyboard navigation works
  - Color contrast meets WCAG AA
  - All images have alt text
  - Forms have proper labels

## Post-Deployment

- [ ] **Google Tools**
  - Submit sitemap to Google Search Console
  - Verify Google Analytics tracking (if enabled)
  - Set up Google My Business listing

- [ ] **Monitoring**
  - Set up uptime monitoring
  - Enable error logging
  - Monitor form submissions

- [ ] **Backups**
  - Configure automated backups
  - Test restoration process
  - Document backup location

## Code Protection (Already Implemented)

- [x] Security headers configured
- [x] robots.txt configured
- [x] .htaccess protections in place
- [x] Input validation on forms
- [x] Consent management compliant
- [x] No sensitive data in client-side code

---

**Last Updated:** $(date)
**Deployment Date:** _______________
**Deployed By:** _______________
