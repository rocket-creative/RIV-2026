# Reviewer Guide - Riviera Waterfront Mansion

Welcome! This guide explains how to review and contribute to this codebase.

---

## 🚨 Important: Code is Proprietary

This code is **proprietary and confidential**. By accessing this repository, you agree:

1. **Non-Disclosure:** You will not share, copy, or distribute this code
2. **Limited Use:** Review only - no commercial use
3. **Suggestions Only:** You may suggest changes via pull requests
4. **No Guarantee:** Suggested changes may or may not be accepted
5. **Copyright:** All code remains property of UXUI Design Corp

**Violation of these terms may result in legal action.**

---

## 📂 Project Structure

```
RIVIERA-FINAL/
├── index.html              # Homepage
├── about.html              # About page
├── ceremony.html           # Ceremony details
├── cocktail-hour.html      # Cocktail hour details
├── reception.html          # Reception details
├── menu.html               # Catering menu
├── gallery.html            # Photo gallery
├── real-weddings.html      # Real weddings showcase
├── photo-locations.html    # Photo location guide
├── vendors.html            # Preferred vendors
├── contact.html            # Contact form
├── rates-booking.html      # Rates and booking
├── privacy-policy.html     # Privacy policy
├── terms-conditions.html   # Terms and conditions
├── unified-contact-form.js # Form handling (all forms)
├── consent-manager.js      # Cookie consent (GDPR/CCPA)
├── wedding-data.js         # Wedding gallery data
├── IMAGES/                 # Wedding photos (1405 files)
├── .htaccess               # Security headers
├── robots.txt              # SEO crawler rules
└── README.md               # Main documentation
```

---

## 🎯 What You're Reviewing

You are reviewing this code for:

- [ ] **Code Quality:** Clean, readable, maintainable
- [ ] **Security:** No vulnerabilities (XSS, injection, etc.)
- [ ] **Performance:** Fast loading, optimized assets
- [ ] **SEO:** Proper metadata, schema markup
- [ ] **Accessibility:** WCAG 2.1 AA compliant
- [ ] **Mobile:** Responsive design works well
- [ ] **Browser Compatibility:** Works in all major browsers

**Please focus on finding issues, not copying code.**

---

## 🔍 How to Review

### Option 1: Browse Online (Read-Only)
- Simply browse the code on GitHub/GitLab
- Add comments to specific lines
- Open issues for bugs or suggestions
- No need to clone the repository

### Option 2: Local Testing (Full Review)

**Step 1: Clone the repository**
```bash
git clone [repository-url]
cd RIVIERA-FINAL
git checkout client-contributions
```

**Step 2: Open in browser**
```bash
# If you have Python installed
python3 -m http.server 8000

# If you have Node.js installed
npx http-server -p 8000

# Then open: http://localhost:8000
```

**Step 3: Test the site**
- Click through all pages
- Test all forms (Contact, Quiz, Booking)
- Test on mobile (resize browser or use DevTools)
- Check console for errors (F12 → Console)

**Step 4: Document issues**
- Take screenshots
- Note what page and what action caused the issue
- Describe expected vs. actual behavior
- Check if issue occurs in multiple browsers

---

## 📝 How to Suggest Changes

### Option A: Open an Issue (Preferred for Questions/Bugs)

1. Go to repository issues page
2. Click "New Issue"
3. Use this template:

```markdown
**Page/File:** [e.g., index.html, line 42]
**Issue Type:** [Bug / Enhancement / Question / Security]

**Description:**
[Clear description of the issue or suggestion]

**Current Behavior:**
[What currently happens]

**Expected Behavior:**
[What should happen]

**Steps to Reproduce (if bug):**
1. Go to [page]
2. Click on [element]
3. See error

**Screenshots:**
[Attach screenshots if applicable]

**Browser/Device:**
[e.g., Chrome 120 on macOS, Safari on iPhone 14]
```

### Option B: Submit a Pull Request (For Code Changes)

**IMPORTANT:** Do NOT commit directly to `RIVIERA-FINAL_DEV` or `RIVIERA-FINAL_MAIN`

**Step 1: Create your branch**
```bash
git checkout client-contributions
git checkout -b your-name/feature-description
```

**Step 2: Make your changes**
- Edit files
- Test thoroughly
- Keep changes focused (one feature/fix per PR)

**Step 3: Commit your changes**
```bash
git add [files you changed]
git commit -m "Suggested: [brief description]

Detailed explanation:
- What changed
- Why it's better
- What was tested
"
```

**Step 4: Push and create PR**
```bash
git push origin your-name/feature-description
```

Then on GitHub:
1. Click "Compare & Pull Request"
2. **Base branch:** `client-contributions` (NOT DEV or MAIN!)
3. **Compare branch:** `your-name/feature-description`
4. Fill in description explaining your changes
5. Click "Create Pull Request"

---

## ✅ Code Review Checklist

Before submitting a PR, verify:

### Security
- [ ] No `eval()`, `Function()`, or `new Function()` with user input
- [ ] No inline JavaScript in HTML (onclick, onerror, etc.)
- [ ] Input validation on all form fields
- [ ] No hardcoded credentials, API keys, or secrets
- [ ] No SQL queries (not applicable for static site)
- [ ] XSS prevention in place

### Performance
- [ ] Images are optimized (< 200KB each)
- [ ] No unnecessary external scripts
- [ ] CSS/JS minified (for production)
- [ ] No blocking scripts in `<head>` (use defer/async)
- [ ] Lazy loading for below-fold images

### SEO
- [ ] Every page has unique `<title>` (50-60 chars)
- [ ] Every page has unique `<meta description>` (150-160 chars)
- [ ] Canonical URLs are correct
- [ ] Schema.org JSON-LD is valid
- [ ] All images have descriptive `alt` attributes
- [ ] Heading hierarchy is logical (one H1, then H2, H3, etc.)

### Accessibility
- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Form labels present and associated
- [ ] ARIA labels used appropriately
- [ ] No `outline: none` without replacement

### Browser Compatibility
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge
- [ ] Tested on iOS Safari
- [ ] Tested on Android Chrome

### Mobile Responsive
- [ ] Works on 375px width (iPhone SE)
- [ ] Works on 768px width (iPad)
- [ ] Works on 390px width (iPhone 14)
- [ ] Touch targets ≥ 44x44px
- [ ] No horizontal scroll
- [ ] Text readable without zoom

---

## 🚫 What NOT to Do

### Do NOT:
- ❌ Copy this code for your own projects
- ❌ Share this code with anyone else
- ❌ Commit directly to MAIN or DEV branches
- ❌ Make breaking changes without discussion
- ❌ Add external dependencies without approval
- ❌ Remove security features
- ❌ Remove accessibility features
- ❌ Change SEO metadata without understanding impact
- ❌ Add tracking/analytics without consent mechanism
- ❌ Modify privacy policy or terms without legal review

### Do:
- ✅ Ask questions if something is unclear
- ✅ Suggest improvements
- ✅ Report bugs with detailed reproduction steps
- ✅ Test your changes thoroughly
- ✅ Follow existing code style
- ✅ Document why changes are needed
- ✅ Be respectful and professional

---

## 🐛 Common Issues to Look For

### Forms
- [ ] All required fields marked with asterisk
- [ ] Error messages clear and helpful
- [ ] Success messages displayed after submission
- [ ] Form doesn't submit if validation fails
- [ ] Loading state shown during submission
- [ ] Works with JavaScript disabled (fallback to mailto)

### Images
- [ ] All images load (no 404 errors)
- [ ] Alt text is descriptive (not just "image")
- [ ] Images are sized appropriately
- [ ] No distortion or pixelation
- [ ] Lazy loading working for below-fold images

### Navigation
- [ ] All links work (no broken links)
- [ ] Current page highlighted in nav
- [ ] Mobile menu works
- [ ] Menu closes when clicking outside
- [ ] Keyboard navigation works

### Layout
- [ ] No text cutoff
- [ ] No overlapping elements
- [ ] Spacing is consistent
- [ ] Alignment is correct
- [ ] Footer stays at bottom

---

## 📧 Contact

**Questions about the code?**  
Open an issue in the repository

**Security vulnerabilities?**  
Email: info@uxuidesigncorp.com  
Subject: "SECURITY: [brief description]"

**Legal questions?**  
Email: info@uxuidesigncorp.com  
Subject: "LEGAL: [brief description]"

---

## 📜 License

**This code is NOT open source.**

All code, content, images, and documentation are:
- Copyright © 2024-2026 UXUI Design Corp
- All Rights Reserved
- Proprietary and Confidential

**No license is granted for:**
- Commercial use
- Distribution
- Modification (outside of suggested PRs)
- Copying for any purpose

**Limited permission granted for:**
- Code review (this project only)
- Suggesting improvements (via PRs)
- Testing (local development only)

By accessing this code, you agree to these terms.

---

## ✨ Thank You!

We appreciate you taking the time to review our code. Your feedback helps us build a better website and provide a better experience for our clients.

**Quality reviews are valuable. Stolen code is worthless.**

Please keep this code confidential and help us maintain the integrity of our work.

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-04  
**Valid Until:** End of review period (as specified in your agreement)
