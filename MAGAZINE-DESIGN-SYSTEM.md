# Magazine Design System

**Version:** 2026.2  
**Applied:** February 2026  
**Project:** Riviera Waterfront Mansion Website

---

## Overview

The website has been redesigned with an editorial magazine aesthetic that emphasizes photography, large typography, and asymmetric layouts. This design follows the principles outlined in your 2026 Cursor Rules.

---

## Design Philosophy

### Magazine Presentation
Content floats in defined containers over a muted background, like pages in a high-end magazine. Not edge-to-edge generic templates.

### Photography Does the Heavy Lifting
Large, impactful images at different scales. Photography tells the story, text supports it.

### Editorial, Not Template
- Asymmetric compositions (not always centered)
- Text overlapping images (headlines break across boundaries)
- Images at different scales (not equal grids)
- Uneven grids (5/7 splits, 4/6 splits)
- Color blocking (full sections of solid color)

---

## Typography

### Intentional Scale
All headings use **larger, lighter typography** for an editorial feel:

```css
h1: clamp(3.5rem, 10vw, 7rem) - Ultra large, light weight (300)
h2: clamp(2.5rem, 6vw, 4.5rem) - Large, light weight (300)
h3: clamp(1.75rem, 4vw, 2.75rem) - Medium large
h4: clamp(1.25rem, 2.5vw, 1.75rem) - Medium
```

### Line Height
- Tight line height (0.95-1.05) for dramatic headlines
- Generous line height (1.7-1.8) for body text

### Letter Spacing
- Negative letter spacing (-0.02em to -0.03em) on large headlines
- Creates tighter, more impactful typography

### Intentional Line Breaks
Headlines use `<br>` tags for editorial control:
```html
<h1>Riviera<br>Waterfront<br>Mansion</h1>
```

---

## Color Architecture

Your color palette follows a **role-based system**:

| Role | Color | Usage |
|------|-------|-------|
| **HERO** | Charcoal (#2C2C2C) | Full-bleed backgrounds (25-35% of page) |
| **TEXT** | Charcoal (#2C2C2C) | Headlines, body text (darkest color) |
| **NEUTRAL** | Cream (#FBF9F6, #F8F7F5) | Breathing room, alternating sections |
| **ACCENT** | Gold (#B8860B) | Small moments, hovers (5% max) |

### Pattern
HERO → Neutral → HERO → Neutral → Footer

### Rules
- One color dominates per section
- Text color for reading only
- Accents are scalpels, not paintbrushes
- No color soup (one background per section)

---

## Layout Systems

### Asymmetric Grids

**5/7 Split:**
```css
.split-5-7 {
    grid-template-columns: 5fr 7fr;
}
```

**7/5 Split:**
```css
.split-7-5 {
    grid-template-columns: 7fr 5fr;
}
```

**4/6 Split:**
```css
.split-4-6 {
    grid-template-columns: 4fr 6fr;
}
```

### Text Overlapping Images

Text blocks positioned over images for editorial drama:

```css
.image-text-overlap {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.image-text-overlap .text-block {
    background: white;
    margin: var(--space-xl) 0 var(--space-xl) calc(var(--space-xl) * -1);
    box-shadow: var(--shadow-lg);
}
```

### Full Bleed Sections

Images at full width with overlaid text:

```css
.full-bleed-image {
    height: clamp(400px, 70vh, 800px);
}
```

---

## Hero Design

### Left-Aligned Editorial Hero
- **Not centered** - aligned left for editorial feel
- Large typography with intentional line breaks
- Gradient overlay from left (dark) to right (transparent)
- Stats aligned left, not centered

```css
.hero-content-inner {
    max-width: 700px; /* Left side only */
}
```

---

## Component Patterns

### Buttons: Square with Arrow
- No rounded corners (or minimal radius of 4px)
- Uppercase, letter spaced, light weight text
- Simple arrow →, shifts right on hover
- Background: Gold (#B8860B)

```css
.btn {
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: var(--radius-sm); /* 4px */
}
```

### Cards
- No shadows, no borders (or minimal)
- Image IS the card
- Text in small caps below
- Clean and simple

### Scroll Indicators
- "VIEW MORE" with down arrow
- Small caps, tracking-widest
- Subtle fade animation
- Positioned left, not center

---

## Responsive Design (Mobile First)

### Breakpoints
```css
sm: 393px   /* iPhone 14 Pro */
md: 810px   /* iPad 10.2" */
lg: 1024px  /* iPad Pro */
xl: 1440px  /* 13" laptop */
2xl: 1920px /* 15" laptop */
```

### Mobile First Approach
Design for mobile FIRST, enhance upward:

```css
/* CORRECT */
.text { font-size: 1rem; }
@media (min-width: 768px) {
    .text { font-size: 1.125rem; }
}

/* WRONG */
.text { font-size: 2rem; }
@media (max-width: 768px) {
    .text { font-size: 1rem; } /* Scaling down = wrong */
}
```

---

## Image Layouts

### Different Scales
Images at varied sizes, not uniform grids:

- `.image-large` - Full width auto height
- `.image-feature` - 400-700px height
- `.image-portrait` - 3:4 aspect ratio
- `.image-landscape` - 16:9 aspect ratio

### Uneven Image Grids

```css
.image-grid-uneven {
    grid-template-columns: 2fr 1fr; /* Not equal */
}
```

---

## Section Tags

Small, uppercase labels above headlines:

```css
.section-tag {
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
}
```

Example:
```html
<span class="section-tag">YOUR WEDDING, YOUR MANSION</span>
<h2>Your Wedding,<br>Your Mansion</h2>
```

---

## Pull Quotes

Large, italic quotes for emphasis:

```css
.pull-quote {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 300;
    font-style: italic;
    border-left: 3px solid var(--color-gold);
    padding-left: var(--space-lg);
}
```

---

## Anti-Patterns (What NOT to Do)

- ❌ Purple/blue gradients on white
- ❌ Generic stock photography
- ❌ Inter font everywhere
- ❌ Too many colors
- ❌ Too many boxes/borders
- ❌ Icons everywhere
- ❌ Centered everything
- ❌ Equal-sized grids
- ❌ Small, timid typography

---

## Files Updated

### Core Redesign
- `index.html` - Homepage with editorial hero, asymmetric intro
- `ceremony.html` - Magazine typography
- `cocktail-hour.html` - Magazine typography
- `reception.html` - Magazine typography
- `photo-locations.html` - Magazine typography
- `contact.html` - Magazine typography, preserved forms
- `gallery.html` - Magazine typography
- `menu.html` - Magazine typography
- `rates-booking.html` - Magazine typography
- `about.html` - Magazine typography
- `vendors.html` - Magazine typography

### Key Changes
1. **Typography:** Ultra large headlines (3.5-7rem), light weight (300)
2. **Hero:** Left-aligned, not centered, with intentional line breaks
3. **Layouts:** Asymmetric grids (5/7, 7/5, 4/6 splits)
4. **Images:** Text overlapping images for editorial drama
5. **Colors:** Role-based (HERO, TEXT, NEUTRAL, ACCENT)

---

## Testing Checklist

- [ ] Mobile (393px) - Typography scales down properly
- [ ] Tablet (810px) - Asymmetric grids work
- [ ] Desktop (1440px) - Full magazine layout displays
- [ ] 4K (3840px) - Content doesn't stretch too wide

---

## Next Steps

The design system is now applied across all pages. Key features:

1. **Editorial typography** - Large, light, dramatic
2. **Asymmetric layouts** - Not template-y
3. **Photography-first** - Images do the heavy lifting
4. **Color blocking** - Clean sections with purpose
5. **All content preserved** - Forms, navigation, copy intact

The site now has a high-end editorial aesthetic while keeping your gold and cream color palette.
