# Cursor IDE Quick Start - OneFin Implementation

## Copy-Paste This Into Cursor Chat For Fastest Results

### Initial Prompt for Cursor
```
I'm building the OneFin website (modern Finance SaaS landing page).

Here's the full specification document: [paste content from ONEFIN_MASTER_PROMPT.md]

Please help me:
1. Set up the Vite + React + TypeScript + Tailwind project structure
2. Create reusable component files with proper TypeScript interfaces
3. Implement the color/typography system as CSS variables
4. Build components in this order: Navbar → Hero → Benefits → Features → Stats → Testimonials → Pricing → FAQ → Footer

Start with scaffolding the project and creating the component folder structure with empty component shells.
```

---

## Phase-by-Phase Cursor Commands

### Phase 1: Project Setup & Configuration
```
Generate the complete project setup including:
- vite.config.ts with React plugin
- tailwind.config.js with custom color palette
- src/styles/globals.css with CSS variables for all colors
- tsconfig.json optimized for React
- package.json with all required dependencies

Include a setup checklist at the end.
```

### Phase 2: Core Components Scaffolding
```
Create the component folder structure with TypeScript interfaces:

1. components/ui/Button.tsx - Button component (primary, secondary, tertiary variants)
2. components/ui/Card.tsx - Reusable card component
3. components/Navbar.tsx - Sticky navigation with responsive menu
4. components/Hero.tsx - Large hero section with CTA
5. components/Footer.tsx - Multi-column footer

Each file should:
- Use proper TypeScript interfaces
- Export Tailwind classes (no inline styling)
- Include prop destructuring
- Have JSDoc comments

Don't implement full functionality yet, just create the structure.
```

### Phase 3: Navbar Implementation
```
Implement the Navbar component with:
- Sticky positioning on scroll (use useState + useEffect)
- Logo and navigation links
- Mobile hamburger menu with slide-out drawer
- Active link indicator (highlight current page)
- "Get Started" CTA button
- Responsive: hide links on mobile, show hamburger

Use Lucide-react for menu icon (Menu, X icons).
Include smooth animations for the mobile drawer.
```

### Phase 4: Hero Section
```
Build the Hero component with:
- Large headline: "Smarter Finance Made Simple"
- Subheading (max 2 lines)
- Two CTA buttons: "Get Started" (primary) + "Download Now" (secondary)
- Hero image placeholder on right side (responsive)
- 6-8 brand logos below CTAs (trust badges)
- Animated floating cards/UI previews around the hero

Use Framer Motion for:
- Fade-in + slide-up headline animation
- Staggered logo animations
- Floating effect on preview cards (continuous oscillation)

Mobile: Stack all content vertically, full-width.
```

### Phase 5: Reusable Scroll Animation Hook
```
Create a custom hook: hooks/useScrollAnimation.ts

The hook should:
- Use Intersection Observer to detect when element enters viewport
- Return { ref, isVisible } tuple
- Support threshold customization
- Return same reference across renders (no re-triggers)

Pattern:
const { ref, isVisible } = useScrollAnimation();
return <div ref={ref} className={isVisible ? 'animate-in' : 'opacity-0'}>

Also create utility function for staggered animations (returns delay based on index).
```

### Phase 6: Benefits Section (Animated Grid)
```
Build Benefits component with:
- Section number "01" in top-left
- Heading: "Financial Control, Simplified."
- 4 benefit cards in responsive grid:
  - Simplify Your Spend
  - Get Smart Financial Action
  - Growth Your Wealth (with $1,802.00 + 24% metric)
  - Secure Every Step

Each card should:
- Have an image/preview
- Animate in on scroll (staggered: 100ms delays)
- Have hover effects (scale + shadow)
- Be fully responsive (1→2→4 columns)

Use the scroll animation hook for triggering entrance animations.
```

### Phase 7: Feature Carousel (Complex)
```
Create FeatureCarousel component with:
- Tabbed navigation (Spend Management, Digital Payments, Investing Tools)
- Tab content display (title, description)
- Feature video/image on right side
- 4 sub-feature items below with icons

Functionality:
- Clicking a tab switches content smoothly (300ms fade)
- Active tab has blue underline
- Images/videos fade and slide transition
- Mobile: Stack vertically (image → content)

Use useState for active tab tracking, Framer Motion for transitions.
Assume video URLs from Framer (embed as <video> tags or iframe).
```

### Phase 8: Stats Section with Counter Animation
```
Build Stats component with:
- Heading: "Proven Performance. Trusted by Finance Leaders."
- 3 stat cards:
  1. $10B+ Transactions Managed
  2. 2M+ Individual Users
  3. 50K+ Active Businesses

Each card has:
- Large metric (animated counter: 0 → target)
- Supporting text
- Icon/image
- Alternating layout (image left/right)

Counter animation:
- Trigger when stat card enters viewport
- Duration: 2.5 seconds
- Easing: ease-out
- Format numbers with + symbol (10B+, 2M+, etc.)

Use react-countup library or custom implementation.
```

### Phase 9: Testimonials Carousel (Auto-rotating)
```
Create Testimonials component with auto-rotating carousel:
- Heading: "Trusted by Professionals, Loved by Everyone."
- Carousel with 4-5 testimonial cards
- Each card shows:
  - Quote text (italicized)
  - Author name & title
  - Company logo
  - Star rating (5 stars icon)
  - Avatar image (optional)

Carousel features:
- Auto-rotate every 6 seconds
- Dot indicators (clickable to jump)
- Pause on hover
- Smooth fade transitions (300ms)
- Previous/Next arrow buttons
- Mobile: Single card, swipe gesture (or just use dots)

Use Lucide icons for stars, dots, arrows.
Implement with useState + useEffect for auto-rotation timer.
```

### Phase 10: Pricing Section (Toggle-able)
```
Build Pricing component with:
- Monthly/Annually toggle switch
- 3 pricing cards:
  1. Free ($0/mo) - 2 accounts, basic features
  2. Plus ($7.99/mo) - HIGHLIGHTED as "Most Popular"
  3. Premium ($14.99/mo) - Full features

Card features:
- List items with checkmark icons (Lucide)
- [Get Started] / [Upgrade] / [Go Premium] buttons
- Plus card slightly elevated (shadow + scale)
- "Most Popular" badge on Plus card
- 10% savings indicator when Annually selected

Toggle functionality:
- Smooth price update with fade transition (200ms)
- Feature list updates dynamically
- Mobile: Full-width stacked cards with scrollable table

Use useState for toggle state, Framer Motion for price transitions.
```

### Phase 11: Blog Section
```
Create Blog component showing:
- Heading: "Grow Your Knowledge."
- 1 featured large blog post card
- 3 smaller blog post cards below
- [View All Articles] button

Card layout:
- Image (16:9 aspect ratio)
- Date + Category badges
- Title (max 2 lines, truncate with ellipsis)
- Hover: Image zooms 5%, overlay appears

Blog data:
- Featured: "The Future of Digital Payments" (Jan 6, 2026)
- Secondary: "Investing for Beginners", "How AI Is Changing Personal Finance", "How to Create a Budget"

Mobile: All cards stack vertically (featured full-width).
```

### Phase 12: FAQ Accordion
```
Build FAQ component with expandable accordion:
- Heading: "Got Questions? We've Got Clear Answers."
- 5 FAQ items (use data array, map through)

Each accordion item:
- Question always visible (clickable)
- Answer hidden/shown on toggle
- Plus/minus icon rotates on expand
- Smooth height animation (300ms)
- Background highlight on hover

FAQ data:
1. Is my financial data secure?
2. How do I connect my bank accounts or cards?
3. Does it cost anything to use the app?
4. What makes this app different from other finance tools?
5. Can I use the app internationally?

Use Framer Motion for height animation + icon rotation.
```

### Phase 13: Footer
```
Create Footer component with:
- 5 columns:
  1. Brand/Logo
  2. Main Pages (Home, About, Features, Pricing, Blog, Careers)
  3. Legal & Utilities (Contact, FAQs, 404, Terms, Privacy)
  4. Social Links (YouTube, LinkedIn, Facebook, Twitter, Instagram)
  5. App Download (App Store, Google Play)

Visual:
- Dark background (use --navy-950 or similar)
- Light text
- Link hover effects (color accent)
- Copyright text at bottom
- Optional: Phone mockup on right side

Mobile: Stack as 2 columns, then 1 column on very small screens.
Use Lucide icons for social links.
All links are placeholders (href="#") for now.
```

### Phase 14: Global Animations & Polish
```
Add to styles/animations.css:

- Fade-in animation (0% opacity → 100%)
- Slide-up animation (transform: translateY)
- Stagger utility (nth-child delays)
- Hover glow effect (for buttons)
- Smooth scroll behavior
- Entrance animations on scroll

Create Framer Motion variants:
- containerVariants (staggerChildren)
- itemVariants (fadeInUp)
- buttonHoverVariants (scale + glow)

Import and apply to section components for cohesive feel.
```

### Phase 15: Responsiveness & Mobile Testing
```
Test all breakpoints:
- Mobile 320px (smallest)
- Mobile 375px (iPhone)
- Tablet 768px
- Laptop 1024px
- Desktop 1440px

Verify:
- Navigation responsive (hamburger on < 1024px)
- Hero section stacks properly
- Grids collapse (4→2→1 columns)
- Images scale properly
- Text size appropriate
- Padding/margins adjusted
- Touch targets > 44px on mobile
- No horizontal scroll

Update Tailwind media queries in component classes.
```

### Phase 16: Final Polish & Performance
```
Implement:
- Image lazy loading (loading="lazy" attribute)
- Smooth scroll behavior (scroll-behavior: smooth)
- Preload hero images
- Optimize animations (use transform + opacity only)
- Remove unused CSS from Tailwind
- Add loading states for dynamic content
- Implement error boundaries
- Add 404 page redirect

Performance targets:
- Lighthouse: > 80 (Performance, Accessibility, Best Practices)
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- FID (First Input Delay): < 100ms

Run: npm run build && npm run preview
```

---

## Cursor Commands Quick Reference

### Component Generation Pattern
```
Generate a [ComponentName] component with:
- TypeScript interface for props: [Define expected props]
- Tailwind classes only (no inline styles)
- Responsive design: mobile first
- Animations: [describe desired animation]
- Error handling if needed
- Proper React hooks usage

Make it reusable and follow React best practices.
```

### Styling Pattern
```
For the [section name] styling:
- Use these colors: [primary colors]
- Typography: [size, weight]
- Spacing scale: 8px multiples
- Breakpoints: 640px (tablet), 1024px (desktop)
- Responsive classes: hidden md:block, block lg:hidden
- Hover states with transition-all duration-300
```

### Animation Pattern
```
For [animation name]:
- Use Framer Motion for complex, Tailwind/CSS for simple
- Duration: [ms]
- Easing: ease-in-out
- Trigger: [scroll/hover/load]
- Stagger children by: [ms]
- Make it performant (use transform + opacity only)
```

---

## Estimated Timeline

| Phase | Component | Estimated Time |
|-------|-----------|----------------|
| 1-2 | Setup & Structure | 30 min |
| 3 | Navbar | 45 min |
| 4 | Hero | 45 min |
| 5 | Hooks & Utilities | 30 min |
| 6 | Benefits | 45 min |
| 7 | Features Carousel | 60 min |
| 8 | Stats | 45 min |
| 9 | Testimonials | 60 min |
| 10 | Pricing | 45 min |
| 11 | Blog | 30 min |
| 12 | FAQ | 40 min |
| 13 | Footer | 30 min |
| 14 | Global Animations | 45 min |
| 15-16 | Testing & Polish | 90 min |
| **TOTAL** | **Full Site** | **~8-10 hours** |

---

## Pro Tips for Using Cursor

1. **Use Tab/Autocomplete**: Cursor can complete entire functions—press Tab to accept suggestions
2. **Ask for Refinements**: "Make the hover effect more subtle" or "Add loading skeleton"
3. **Paste Component Names**: When asking for a component, paste the exact name from your file structure
4. **Request Variations**: "Create a mobile-optimized version of [component]"
5. **Get Explanations**: "Explain how the carousel rotation works" to understand before deploying
6. **Incremental Building**: Don't ask for everything at once—build phase by phase
7. **Reference Files**: When editing a file, mention "In src/components/Navbar.tsx, update the mobile menu..."
8. **Test as You Go**: Build → Test → Polish, don't leave testing for the end

---

## Common Cursor Mistakes to Avoid

❌ Asking for entire page HTML (request components instead)  
❌ Using CSS-in-JS with styled-components (stick to Tailwind)  
❌ Complex animations without Framer Motion (keep it simple)  
❌ Skipping TypeScript interfaces (define props properly)  
❌ Building without testing mobile (test as you code)  
❌ Forgetting image/video optimization (lazy load early)  
❌ Over-animating (keep animations purposeful, < 500ms)

---

## Final Checklist Before Deployment

- [ ] All components built and tested
- [ ] Responsive design verified (3+ screen sizes)
- [ ] Animations smooth at 60 FPS (no jank)
- [ ] All images optimized and lazy-loaded
- [ ] Navigation links working (even if to placeholders)
- [ ] Mobile menu functions properly
- [ ] Forms have validation and feedback
- [ ] No console errors or warnings
- [ ] Accessibility: Tab navigation works, alt text present
- [ ] Performance: Lighthouse > 80
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Git commits organized by feature/phase

---

## Deploy Command When Done

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (recommended for SPA)
npm install -g vercel
vercel

# Or deploy to your hosting provider
# (Netlify, Cloudflare Pages, GitHub Pages, etc.)
```

---

**You're ready to start! Copy the master prompt above, paste into Cursor, and follow phase-by-phase. Good luck! 🚀**