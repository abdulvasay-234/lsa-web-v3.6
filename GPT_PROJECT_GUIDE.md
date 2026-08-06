# LSA Website GPT Project Guide

## Purpose
This document is the source of truth for AI-assisted updates in this repository.
Any future content or code change should follow these standards so the website stays consistent, SEO-friendly, and trustworthy.

## Project Snapshot
- Project type: Static multi-page website
- Stack: HTML, CSS, Vanilla JavaScript
- Brand: Lords Skill Academy (LSA)
- Positioning: Skill-first, career-focused academy
- Affiliation statement to preserve: "Affiliated with Lords Institute of Engineering & Technology (LIET)"

## Repository Structure
- Core pages: `index.html`, `404.html`, `Resources.html`
- Section pages: `about-us/`, `contact-us/`, `faq/`, `career-guidance/`, `community-events/`
- Program pages: `school-of-programming/`, `python-programming/`, `java-programming/`, `ds/`, `cyber-security/`, `full-stack-java/`
- Content pages: `blog/`, `Blogs/blog-1/`
- Legal pages: `privacy-policy/`, `terms-and-conditions/`
- Shared styles: `css/global.css`, `css/header-unify.css`
- Shared behavior: `js/programs-mega-menu.js`
- Assets: `imgs/`

## Non-Negotiable Standards
These rules apply to every new or modified page:

1. SEO
- Unique, keyword-relevant `<title>`
- Unique `<meta name="description">`
- Logical heading order with one `<h1>`
- Crawlable HTML content (no JS-only critical content)
- `meta robots` set correctly (usually `index, follow`)
- Canonical URL where applicable

2. Mobile-first UX
- Responsive layouts using Grid/Flex and fluid units
- No horizontal overflow
- Tap-friendly controls
- Readable font sizes and spacing

3. Content quality
- Student-first, outcome-driven, practical tone
- Honest positioning (no fake guarantees, no inflated claims)
- Explain practical value, not only feature lists

4. Technical quality
- Keep CSS/HTML valid and clean
- Optimize images and keep `alt` text meaningful
- Use deferred/non-blocking JS where possible
- Preserve fast loading behavior

## Shared Design Language
Use these established patterns unless a page has a very specific exception:

- Typography trend: Plus Jakarta Sans or Manrope family
- Base surface style: clean light backgrounds with blue accents
- Accent palette direction: deep blue + subtle rose/cyan highlight
- Cards: soft border, medium radius, hover lift and shadow increase
- Buttons:
  - Primary: blue gradient/solid blue with white text
  - Secondary: white background with blue border/text
- Section rhythm: repeated section blocks with visible spacing (`clamp`-based sizing)

## Shared Components and Behavior
1. Header and navigation
- Include shared files:
  - `css/global.css`
  - `css/header-unify.css`
- Keep sticky unified header behavior intact
- Preserve mobile hamburger behavior

2. Programs mega menu
- Reused navigation dropdown relies on `js/programs-mega-menu.js`
- Keep class hooks stable:
  - `.has-dropdown`
  - `.dropdown-toggle`
  - `[data-program-target]`
  - `[data-program-panel]`
- Do not rename these selectors without updating JS

3. Footer and contact area
- Footer layout is normalized by `css/header-unify.css`
- Keep key trust/contact details visible and crawlable

4. WhatsApp floating widget
- Used on several pages as a conversion/support element
- Keep placement unobtrusive on mobile and desktop

## Page Content Patterns

### Homepage pattern (`index.html`)
- Hero with clear value proposition
- Trust/affiliation strip
- School/program overview cards
- Learning roadmap and outcomes
- Strong CTA + contact/footer

### Program page pattern (`ds/`, `cyber-security/`, `full-stack-java/`, `java-programming/`, `python-programming/`)
- Hero: course title + level/duration signals
- Quick highlights
- Why this course
- Who should join
- Curriculum/syllabus
- Projects/lab outcomes
- Career support/certification/CTA

### Informational page pattern (`about-us/`, `career-guidance/`, `trainers/`, `community-events/`)
- Hero with intent-focused heading
- Structured sections with credibility proof
- Mentor/student-centered language
- CTA at end

### Legal page pattern (`privacy-policy/`, `terms-and-conditions/`)
- Neutral, clear policy language
- Sectioned content with stable anchors
- Contact information for compliance queries

### Blog/resources pattern (`blog/`, `Resources.html`, `Blogs/blog-1/`)
- Search-relevant topic heading
- Structured sub-sections for readability
- Internal linking to relevant courses/pages
- Practical guidance and next steps

## Writing and Messaging Guardrails
Always do:
- Use professional, simple, confidence-driven wording
- Keep brand naming consistent: Lords Skill Academy (LSA)
- Emphasize practical skills, projects, mentorship, and employability

Never do:
- Salary guarantee promises
- Misleading placement claims
- Keyword stuffing
- Hidden/deceptive content

## SEO Metadata Blueprint (Per Page)
Use this minimum head baseline:
- `charset`, `viewport`
- favicon set
- `title`
- `meta description`
- `meta keywords` (used in this project convention)
- `meta robots`
- canonical
- Open Graph tags
- Twitter card tags
- theme-color
- shared CSS includes

## Change Protocol for GPT Edits
When editing any page:
1. Reuse existing section and class naming patterns when possible.
2. Prefer additive edits over structural rewrites.
3. Keep shared includes (`global.css`, `header-unify.css`, `programs-mega-menu.js`) intact.
4. Preserve one `<h1>` and heading hierarchy.
5. Keep internal links and CTAs relevant to user intent.
6. Avoid introducing frameworks/libraries.
7. Verify mobile behavior and semantic HTML.

## Documentation Maintenance Rules
When new page patterns or global style conventions appear:
- Update this file first.
- Then implement page changes based on this file.
- Keep this guide concise and practical, not theoretical.

## Related Docs
- `README.md` (project standards summary)
- `PERFORMANCE_OPTIMIZATION.md` (performance and image optimization priorities)
