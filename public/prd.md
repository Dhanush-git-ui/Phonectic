# Product Requirements Document — EdTech Landing Page
### (Design reference: OneFin — purple accent system replaced with blue)

## 1. Overview

Build a marketing landing page for an EdTech company (placement/skills training platform) that reproduces the layout, section choreography, and scroll motion of the reference site https://onefin.framer.website/, with every purple accent, gradient, and glow replaced by a blue equivalent. Dark sections stay dark (features, testimonials, final CTA) — only the color of light/gradient/glow elements changes from purple to blue.

## 2. Goals

- Convert visiting students/parents/campus placement cells into demo bookings / sign-ups
- Communicate program credibility through stats, testimonials, and campus partnerships
- Match the production quality and motion polish of the reference site — this should not read as a template

## 3. Non-Goals

- No functional backend/auth/payment integration in v1 — CTAs link to a contact/demo-booking form
- No CMS — content is hardcoded in data files for easy editing later
- No gamification mechanics

## 4. Target Audience

- Primary: engineering/college students preparing for placements
- Secondary: campus placement cells and training coordinators evaluating the program
- Tertiary: parents researching the program on a student's behalf

## 5. Tech Stack

- React (Vite) + TypeScript
- Tailwind CSS
- Framer Motion for element-level animation; GSAP + ScrollTrigger for scroll-scrubbed/pinned effects the reference site uses (word-by-word text reveal, pinned rounded-sheet section transitions, marquee)
- Lenis for smooth scroll
- Lucide icons

## 6. Information Architecture

Single long-scroll home page, 12 sections, in this order:

1. Navbar (persistent, condenses on scroll)
2. Hero
3. Benefits grid (section 01)
4. Scroll-scrubbed statement (transition section)
5. Stats / proof marquee (section, numbered 01–03 internally)
6. Key Features — dark, tabbed/accordion (section 02)
7. Feature carousel — dark, center-focused 3-card (continuation of 02)
8. Campus/Integration network (section 03)
9. Testimonials — dark, scattered floating cards (section 04)
10. Programs & Pricing (section 05)
11. Blog (section 06)
12. FAQ (section 07)
13. Final CTA (stacked headline + phone mockup + social icons)
14. Footer

Secondary pages (stub only, shared nav/footer): About, Programs, Success Stories, Blog index + post template, Careers, Contact, FAQs.

## 7. Design System

**Color**
- White `#FFFFFF` base for light sections
- Off-white/light-blue tint `#F5F7FF` for alternating light sections
- Dark near-black `#0A0A0F` base for dark sections (features, testimonials, CTA) — unchanged from reference
- **Accent (replaces all purple): electric blue `#2563EB`**, with a secondary lighter blue `#60A5FA` and a deep indigo-blue `#1E3A8A` used in gradients/glows to keep the same depth the purple gradients had
- Gradient backgrounds (hero, dark-section glows, phone mockup screen) rebuilt using a blue-to-indigo gradient in place of the original purple-to-violet
- Stat/positive badges keep green (`+18%` style), unaffected by the purple→blue swap

**Typography**
- Bold condensed/grotesk sans for large headlines (matches reference's heavy uppercase display type, e.g. "FINANCIAL CONTROL, SIMPLIFIED." style treatment) — pick a bold grotesk (Space Grotesk / General Sans / similar)
- Regular sans for body copy
- Small tracked-out mono or semi-bold caps for kicker badges ("01 · BENEFITS")

**Recurring motifs to reproduce exactly (recolored)**
- Pill-shaped nav bar that starts wide/transparent over the hero and condenses into a smaller rounded pill with a soft shadow on scroll
- Small rotated "sticker" badge for section kickers (two-digit number + label, e.g. "01 BENEFITS"), slightly tilted, subtle shadow
- **Rounded-sheet section transitions**: each new section scrolls in as a large rounded-top card that slides up and covers the previous section (visible in the hero → benefits transition and stats → dark-features transition) — implement via a pinned/scaled panel technique (GSAP ScrollTrigger `pin` + `scale`/`clip-path` reveal, or a large `border-radius` panel translating over its neighbor)
- Floating parallax cards (hero financial/product cards) that drift and re-arrange slightly on scroll, not just on load
- Large faded/outlined marquee text scrolling horizontally in the background of the stats section
- Scroll-scrubbed sentence: a long sentence where words go from gray to black (light section) as the user scrolls, with 2 keywords rendered as filled pill badges instead of plain text
- Dark feature section: left preview panel (product screenshot/card composition) + right accordion list where each row expands on interaction to reveal a description; only one row open at a time
- Center-focused 3-card carousel (investing/advanced-features equivalent): active card full-size and sharp, adjacent cards scaled down and blurred
- Testimonials as scattered floating cards of varying size/rotation/color (not a single-row carousel) arranged around a large centered headline, each card independently drifting slightly
- Blog grid: one large "featured" card with color-block/image treatment + 3 standard cards
- Final CTA: 3-line giant stacked headline with a phone mockup centered/overlapping the text, and 5 social icons floating at scattered positions (not a neat row) around the mockup

## 8. Section-by-Section Functional Requirements

### 8.1 Navbar
- Logo (left), center nav links, primary CTA button (right)
- On scroll past hero: background solidifies, pill shrinks in width, adds soft shadow
- Mobile: hamburger → slide/fade menu

### 8.2 Hero
- Two-line big headline (EdTech positioning, e.g. "Placement Ready." / "Made Certain.")
- One-line subtext
- Two CTAs: primary (filled blue) "Book Free Demo", secondary (outline) "Explore Programs"
- Row of ~6 grayscale partner/college logos
- Center: device mockup with blue gradient screen + a pill badge on the screen (reference: "JOIN THE FUTURE" — replace with something like "START YOUR JOURNEY")
- 3–4 floating UI cards around the mockup (score card, streak/progress card, "total sessions completed" style card) with slow oscillation + scroll-linked drift, matching the reference's card behavior

### 8.3 Benefits (01)
- Kicker "01 · Programs" (or similar)
- H2 + intro paragraph
- 4-card bento grid, asymmetric sizing, matching reference's card variety: one data-viz card (donut/ring chart), one icon-avatar card, one photo+large-stat overlay card, one mockup/preview card
- Cards reveal staggered on scroll

### 8.4 Scroll-scrubbed statement
- Long sentence describing the platform's value, word-opacity scrubbed to scroll position, 2 keywords shown as pill badges
- Small circular icon marker beneath, matching reference's small floating icon under the sentence

### 8.5 Stats / Proof
- Large background marquee text scrolling behind foreground stat cards
- 3 stat cards (numbered 01–03) with count-up numbers on scroll-into-view
- Rounded-sheet transition into the next (dark) section

### 8.6 Key Features (02, dark)
- Kicker "02 · Key Features"
- Split layout: left = live preview panel that swaps content based on active row; right = vertical list of 4 feature rows, active row expanded with description + icon, inactive rows collapsed to title only
- 2–3 feature groups total (tab or scroll between groups), mirroring reference's Spend/Payments/Investing triad — for EdTech: e.g. Aptitude Training / Communication & Soft Skills / Interview Readiness

### 8.7 Feature Carousel (continuation of 02, dark)
- Center-focused 3-card carousel, active card sharp and full-opacity, side cards scaled ~85% and blurred
- Numbered badges (1/2/3) per card
- Swipeable/clickable to change active card

### 8.8 Campus / Integration Network (03)
- Kicker "03 · Campus Network"
- Grid/orbit of partner institution logos around a supporting device mockup
- Rounded-sheet transition back to a dark section for testimonials, matching reference's white→dark curve transition

### 8.9 Testimonials (04, dark)
- Kicker "04 · Success Stories"
- Large centered headline behind/between the floating cards
- 2 rating badges (platform ratings)
- 4–5 testimonial cards of varying color (blue, near-black, light-blue, deep indigo), varying size and rotation, scattered around the headline rather than in a single row — each with quote, name, role/college, optional logo

### 8.10 Programs & Pricing (05)
- Kicker "05 · Programs & Pricing"
- Billing/plan toggle if applicable (e.g. Self-Paced / Cohort) with a savings badge
- 3 tier cards: Foundation (free/intro), Pro (highlighted, "Most Popular", visually elevated), Elite (adds 1:1 mentorship)
- Each card: name, tagline, price, feature checklist, CTA

### 8.11 Blog (06)
- Kicker "06 · Blog"
- 1 large featured card (colored/blue treatment, title + date + tag overlay) + 3 standard cards
- "View all Articles" link

### 8.12 FAQ (07)
- Kicker "07 · FAQs"
- 5 accordion items, single-open-at-a-time, smooth height animation, rotating chevron
- Closing line + contact link

### 8.13 Final CTA
- 3-line giant stacked headline (blue gradient or solid, e.g. "Prepare. / Practice. / Place.")
- Centered device mockup overlapping the text
- 5 social icons at scattered floating positions around the mockup, matching reference's placement pattern (not a neat row)
- App Store / Google Play badges or a large "Book Free Demo" button

### 8.14 Footer
- 5-column layout: brand, program links, legal/utility links, social row, contact/app badges
- Large faint background wordmark/logo watermark
- Bottom bar with copyright line

## 9. Motion & Interaction Requirements

- All scroll-triggered reveals use `ScrollTrigger` with `start: "top 80%"` (or equivalent) and are one-time (not re-triggered on scroll-up) unless explicitly a parallax/marquee/scrub effect
- Rounded-sheet section transitions are pinned during the transition and release once fully covered
- Word-scrub text effect ties opacity directly to scroll progress within its section (no easing lag)
- Marquee elements loop infinitely, linear timing, pause on hover where they're interactive (testimonial-adjacent), continuous where purely decorative (background stat marquee)
- Respect `prefers-reduced-motion`: replace pinned/scrub/marquee effects with simple fade-ins; disable continuous floating-card oscillation

## 10. Non-Functional Requirements

- **Performance:** Lighthouse performance ≥ 85 mobile; lazy-load below-fold images/videos; keep GSAP ScrollTrigger instance count controlled (kill on unmount, no duplicate pins)
- **Responsive:** full mobile rework — stacked single-column, hamburger nav, reduced/simplified motion (no pinned rounded-sheet transitions on mobile — use plain scroll instead), touch-swipeable carousels
- **Accessibility:** all interactive elements keyboard-operable with visible focus states; accordion and carousel usable without a mouse; sufficient contrast on all text-over-gradient/image instances
- **SEO:** semantic heading hierarchy, meta title/description, OG image, alt text on all images

## 11. Content Requirements

- All section copy adapted to EdTech placement-training context, confident/encouraging tone (see companion master prompt for section-by-section copy direction)
- Real or placeholder-but-realistic stats (students trained, campus partners, placement rate)
- Placeholder testimonial names/roles/colleges, clearly swappable via a `src/data/testimonials.ts` file

## 12. Success Metrics (post-launch, informational — not build requirements)

- Demo-booking CTA click-through rate
- Scroll depth to pricing/FAQ sections
- Time on page vs. previous site version

## 13. Milestones

Matches the 5-phase build order in the companion master prompt: Foundation → Hero/Benefits → Stats/Features/Carousel → Campus/Testimonials/Pricing/Blog/FAQ → CTA/Footer/Responsive polish.