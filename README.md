# Lords Skill Academy Website Standards

This repository contains the static multi-page website for Lords Skill Academy (LSA).

For AI-assisted and contributor updates, use this file for policy-level standards and use `GPT_PROJECT_GUIDE.md` for implementation patterns, structure, and style decisions.

## Primary Reference for Future Changes
- `GPT_PROJECT_GUIDE.md` is the source of truth for:
  - page composition and section flow
  - shared style and component patterns
  - writing tone and messaging consistency
  - change protocol for safe edits

## Global Quality Requirements (Mandatory)

### 1. SEO Optimized
- Every page has a unique, keyword-focused `<title>`
- Every page has a unique `<meta name="description">`
- Keywords are natural (no stuffing)
- Headings clearly match page intent

### 2. Mobile Friendly
- Mobile-first CSS
- Responsive units (`%`, `rem`, `vw`)
- Flexbox/Grid for layout
- Touch-friendly interactive elements
- No horizontal overflow on mobile

### 3. User-Friendly UX
- Clear navigation
- Logical content flow
- Readable typography
- Consistent spacing
- Simple, student-and-parent friendly language

### 4. Crawlability
- Semantic HTML5 structure
- No hidden critical content
- Clean anchor links (`<a href="...">`)
- No JS-only critical rendering

### 5. Indexability
- No `noindex`/`nofollow` unless intentionally required
- Proper robots directives
- Clean URLs
- Canonical where applicable

### 6. White-Hat SEO Only
- No fake claims
- No keyword stuffing
- No cloaking or deceptive redirects
- Honest and transparent copy

### 7. Quality Content
- Original
- Helpful
- Student-first
- Career-focused
- Outcome-oriented without hype

### 8. Technical SEO
- Fast loading pages
- Optimized images (`alt`, dimensions, compression)
- Deferred JS where possible
- Avoid render-blocking overhead
- Valid, clean HTML

### 9. On-Page SEO
- One `<h1>` per page
- Correct heading hierarchy (`h1 -> h2 -> h3`)
- Internal linking between relevant pages
- Descriptive anchor text

### 10. Off-Page Content Readiness
- Link-worthy, practical content
- Sections suitable for blog/social/video reuse
- Consistent brand mentions:
  - Lords Skill Academy (LSA)
  - Affiliated with Lords Institute of Engineering & Technology (LIET)

## Global Tech Constraints
- Use only HTML, CSS, and Vanilla JavaScript
- No frameworks or libraries
- Must stay fully responsive
- Must remain accessibility-conscious (WCAG-friendly baseline)

## Final Standard
Every page should remain:
- Search-engine readable
- Mobile-first
- Fast
- Trustworthy
- Conversion-friendly
