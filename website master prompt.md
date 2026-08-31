# OneFin Website Master Prompt - Complete Replication Guide

## PROJECT OVERVIEW
Build a modern **Finance SaaS landing page** (OneFin - financial management platform). Target: High-converting landing site with smooth animations, interactive components, and professional design language.

**Tech Stack:**
- Frontend: React 18 + Vite + TypeScript
- Styling: Tailwind CSS + custom CSS for animations
- Animations: Framer Motion or native CSS
- Icons: Lucide-react or custom SVG
- Build: Responsive (mobile-first to desktop)

---

## 1. DESIGN SYSTEM & VISUAL LANGUAGE

### Color Palette
- **Primary**: Dark Navy/Near Black (#0F172A or #1a1a2e)
- **Accent**: Vibrant Electric Blue (#3B82F6 or #2563EB) - CTA buttons
- **Secondary**: Subtle Purple/Indigo gradients for accents
- **Backgrounds**: Pure White (#ffffff) with subtle gradients (navy to transparent)
- **Text**: 
  - Primary Text: Dark Gray (#1F2937 or #111827)
  - Secondary Text: Medium Gray (#6B7280)
  - Light Text: White on dark backgrounds
- **Borders & Dividers**: Ultra-light gray (#E5E7EB or #F3F4F6)

### Typography
- **Font Family**: Modern sans-serif (Poppins, Inter, or similar)
- **Headlines**: Bold, 48px-56px on desktop, 32px-40px on mobile
- **Subheadings**: 24px-32px, semi-bold
- **Body Text**: 14px-16px, regular weight
- **Small Text**: 12px-14px for metadata
- **Line Height**: 1.6 for body, 1.2 for headlines

### Visual Elements
- **Spacing Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px
- **Border Radius**: 8px (small), 12px (medium), 16px (large), 24px (extra-large)
- **Shadows**: 
  - Subtle: `0 1px 3px rgba(0,0,0,0.1)`
  - Medium: `0 4px 12px rgba(0,0,0,0.15)`
  - Elevated: `0 10px 30px rgba(0,0,0,0.2)`
- **Animations**: 
  - Default duration: 300-500ms
  - Easing: `ease-in-out` for smooth, natural motion
  - Scroll animations: Fade + slide-up as user scrolls

---

## 2. PAGE STRUCTURE & SECTIONS

### Header/Navigation (Sticky)
- Logo on left (text-based "OneFin" or icon)
- Navigation links (Home, About, Features, Pricing, Blog, Careers, Contact)
- Mobile hamburger menu (responsive)
- **Actions**: "Get Started" (primary button)
- Fixed position on scroll, slight background blur/shadow

### Hero Section (Large, Attention-Grabbing)
**Visual Hierarchy:**
- Main heading: "Smarter Finance Made Simple" (large, bold)
- Subheading: "A complete platform for managing spend, payments, investments, and forecasting—all in one place."
- CTA: "Get Started" button + "Download Now" secondary button
- **Visual Assets**: 
  - Hero image (large app mockup on right side, responsive)
  - Multiple floating card/UI previews showing app features
  - Gradient background with subtle animated elements
  - Trust badges/logos below CTA (Apple, Google, etc. - 6-8 logos)

**Animation Details:**
- Headline fades in with slight scale-up on load
- Hero image has subtle parallax scroll effect
- Floating cards have gentle floating animation (oscillate up/down)
- Background gradients may have subtle animated grain/texture

### Benefits Section (4-Column Grid)
**Title**: "Financial Control, Simplified." (with numbered marker "01")

**Cards** (responsive: 1 col mobile, 2 cols tablet, 4 cols desktop):
1. **Simplify Your Spend** - Icon + description + image preview
2. **Get Smart Financial Action** - Icon + description + image preview
3. **Growth Your Wealth** - Icon + description + metric display ($1,802.00 + 24%)
4. **Secure Every Step** - Icon + description + image preview

**Interaction**: 
- Cards have hover effects (slight scale, shadow increase)
- Images load with fade-in animation
- On scroll, cards animate in (stagger effect)

### Feature Section - Key Features ("02" marker)
**Title**: "Everything Finance. Unified."

**Tabbed Feature Showcase** (4 main features):
1. **Spend Management** - Unified Wallet View, Smart Categorization, Real-Time Insights, Custom Alerts
2. **Digital Payments** - Integrated Checkout Gateways
3. **Investing Tools** - Performance Tracking, AI-Driven Forecasting, Automated Rebalancing
4. (Additional feature if present)

**Layout Pattern**:
- Feature title + description on left
- Feature video preview/GIF on right
- Below: Feature sub-items with icons (clickable tabs for switching)
- On mobile: Stack vertically, video/image above content

**Animations**:
- Tab switching: Smooth fade + slide transition
- Video play on scroll or auto-play muted
- Icons animate in on view

### Social Proof / Stats Section
**Title**: "Proven Performance. Trusted by Finance Leaders."

**3-Column Stat Cards**:
1. **$10B+** - Transactions Managed
2. **2M+** - Individual Users
3. **50K+** - Active Businesses

**Design**: Large metric numbers, supporting text, icon/image per card, alternating image positions (image-left, image-right pattern)

**Animation**: Numbers animate up from 0 on scroll (use react-countup or similar)

### Integrations Section ("03" marker)
**Title**: "Seamless Integrations for a Seamless Financial Life."

**Layout**:
- Grid of integration partner logos (10-12 logos in grid)
- Below: Phone/app mockup showing integration interface
- Supporting text: "Connect your favorite banks, wallets, and finance tools in seconds..."

**Interaction**:
- Logos have hover zoom effect
- Phone mockup has parallax or scroll-triggered animation

### Testimonials Section ("04" marker)
**Title**: "Trusted by Professionals, Loved by Everyone."

**Carousel/Slider Component**:
- 4-5 testimonial cards (Name, Title, Company Logo, Quote, Star Rating)
- Stars display (4.9/5 from 200+ reviews, 4.98/5 from 500+ reviews)
- Auto-rotate carousel (5-7 second interval)
- Dot indicators at bottom
- Hover to pause rotation

**Card Design**:
- Light background (white with subtle border)
- Quote text italicized
- Author avatar (if present)
- Company logo on card
- Smooth fade transitions between slides

### Pricing Section ("05" marker)
**Title**: "Simple Plans for Smarter Finances."

**Toggle**: Monthly/Annually (toggle switch, annually shows 10% savings badge)

**3-Tier Pricing Cards** (responsive):
1. **Free - Start Smart** ($0/month)
   - 2 bank account connections
   - Real-time spend tracking
   - Basic security monitoring
   - [Get Started] button

2. **Plus - Most Popular** ($7.99/month) - HIGHLIGHTED/LIFTED
   - Unlimited accounts
   - AI-powered budgeting
   - Priority support
   - [Upgrade to Plus] button
   - Badge: "Most Popular"

3. **Premium - Growth** ($14.99/month)
   - Everything in Plus
   - Investment dashboard
   - Advanced analytics
   - [Go Premium] button

**Features Breakdown**:
- List items with checkmarks
- Hover effects on cards (shadow, scale)
- "Most Popular" card slightly elevated/highlighted
- On toggle, prices animate update
- Mobile: Stack vertically, Premium shows full width preview image

### Blog/Articles Section ("06" marker)
**Title**: "Grow Your Knowledge."

**Layout**:
- Featured blog post (large card, image + title + date + category)
- 3 secondary blog posts (smaller cards, same layout)
- [View All Articles] button at bottom

**Card Design**:
- Image on top (aspect ratio 16:9)
- Metadata below (date, category tags)
- Title (truncate to 2 lines)
- Hover: Image zoom slight scale, overlay appears

### FAQ Section ("07" marker)
**Title**: "Got Questions? We've Got Clear Answers."

**Accordion Component**:
- 5-6 FAQs (expandable accordion)
- Question visible, answer collapses on click
- Smooth height animation when expanding/collapsing
- Icons rotating on expand (+ to ×)
- [Contact us] link for more questions

**Example Questions**:
1. "Is my financial data secure?"
2. "How do I connect my bank accounts or cards?"
3. "Does it cost anything to use the app?"
4. "What makes this app different from other finance tools?"
5. "Can I use the app internationally?"

### Footer Section
**Layout** (4-5 columns):
- Brand/Logo column
- Main Pages (Home, About, Features, Pricing, Blog, Careers)
- Legal & Utilities (Contact, FAQs, 404, Changelog, Terms, Privacy)
- Social Links (YouTube, LinkedIn, Facebook, Twitter/X, Instagram)
- App Download Links (App Store, Google Play)

**Visual**:
- Dark background (navy or near-black)
- Light text
- Link hover effects (color change)
- Phone mockup on right side (optional, responsive)
- Copyright text at bottom
- Attribution/Creator link

---

## 3. KEY INTERACTIVE COMPONENTS

### Navigation Bar
```
- Sticky/fixed on scroll
- Logo (left)
- Links (center/left, respond to hover)
- CTA Button (right)
- Mobile: Hamburger menu → Slide-out drawer
- Active link indicator (underline or color change)
```

### CTA Buttons
```
- Primary (Blue/Electric): "Get Started", "Upgrade", "Download Now"
- Secondary (Outline): "Download Now", "View All", "Read More"
- Tertiary (Text): "Contact us", "Learn More"
- Hover: Slight scale (105%), shadow increase, opacity change
- Active: Press animation (scale down slightly)
```

### Image/Video Placeholders
```
- All images use next/image or img with lazy loading
- Videos are hosted externally (Framer assets)
- Fallback: Color placeholder
- Load with fade-in animation
```

### Forms (if contact/signup present)
```
- Input fields with labels
- Placeholder text
- Focus state: Blue border + shadow
- Validation: Error messages, checkmarks on valid
- Submit button (primary CTA style)
```

---

## 4. ANIMATIONS & INTERACTIONS

### Scroll Animations (as user scrolls down page)
- **Fade-in**: Elements fade from 0 to 1 opacity
- **Slide-up**: Elements slide up 30-50px while fading in
- **Stagger**: Multiple elements animate with 100-200ms delays
- **Parallax**: Background/images move slower than scroll (subtle)
- **Counter**: Numbers animate up (stats section)

### Hover Interactions
- **Buttons**: Scale up 5%, shadow increases
- **Cards**: Scale 102-105%, shadow increases
- **Links**: Color change to accent color, underline appears
- **Images**: Subtle zoom (103%), blur on hover

### Load Animations
- **Page Load**: 
  - Navbar fades in + slides down
  - Hero section staggered animation
  - Cards cascade in from bottom
- **Lazy Load**: Elements animate in as they enter viewport
- **Transitions**: Smooth 300-500ms easing (ease-in-out preferred)

### Carousel/Slider
- **Testimonials**: Auto-rotate every 5-7 seconds
- **Dots**: Show current slide, clickable to jump
- **Arrows**: Previous/Next buttons (if present)
- **Transition**: Smooth fade or slide (300-400ms)
- **Pause on hover**: Auto-rotation pauses when hovering

### Accordion
- **Expand/Collapse**: Smooth height animation (300ms)
- **Icon rotation**: Question mark → X on expand
- **Background**: Subtle highlight on hover
- **First item**: Starts expanded (optional)

---

## 5. RESPONSIVE DESIGN BREAKPOINTS

```
Mobile:    0-639px   (Single column, full-width)
Tablet:    640-1023px (2 columns, adjusted padding)
Desktop:   1024px+   (3-4 columns, full layout)
Wide:      1440px+   (Max width container, centered)
```

**Key Adjustments**:
- **Hero**: Image on right desktop → below on tablet → fullwidth mobile
- **Cards**: 4 cols → 2 cols → 1 col
- **Pricing**: 3 cards side-by-side → stacked mobile
- **Footer**: Multi-col → 2 cols tablet → 1 col mobile
- **Typography**: Scale down on smaller screens
- **Padding/Margins**: Reduce on mobile (24px max)
- **Navigation**: Hide links on mobile → hamburger menu

---

## 6. PERFORMANCE CONSIDERATIONS

- **Images**: Optimize, lazy load, use next/image or img component
- **Fonts**: System fonts or Poppins/Inter (preload if external)
- **Videos**: External source (Framer/Vimeo), muted autoplay
- **Animations**: Use CSS transforms (translate, scale, opacity) for performance
- **Code Splitting**: Lazy load heavy components
- **SEO**: Semantic HTML, meta tags, Open Graph image

---

## 7. SPECIFIC FEATURE IMPLEMENTATIONS

### Feature Carousel (Spend Management, Digital Payments, etc.)
```
- Tabs at top (Spend Management, Digital Payments, etc.)
- Clicking tab:
  - Swaps feature image/video on right
  - Updates description on left
  - Highlights active tab
  - Smooth 300ms transition
- Below: 4 sub-feature items with icons
  - Shows features of selected main feature
```

### Stat Counter Animation
```
- Trigger on scroll into view
- Numbers animate from 0 to target
- Duration: 2-3 seconds
- Easing: ease-out
- Example: 10000000000 → $10B+ (formatted)
```

### Pricing Toggle
```
- Toggle button (Monthly ↔ Annually)
- On click:
  - Prices update (monthly vs annual)
  - 10% savings badge appears
  - Smooth transition/fade
  - Mobile: Tabs instead of toggle
```

### Blog Cards with Hover State
```
- Image area has overlay on hover
- Category tags visible
- Slight zoom on image
- Title remains visible
- Click → navigate to blog post
```

---

## 8. CONTENT STRUCTURE (Key Text/Copy)

### Main Headline
"Smarter Finance Made Simple"

### Subheading (Hero)
"A complete platform for managing spend, payments, investments, and forecasting—all in one place."

### Benefits Section Heading
"Financial Control, Simplified."

### Feature Section Heading
"Everything Finance. Unified."

### Testimonial Section Heading
"Trusted by Professionals, Loved by Everyone."

### Pricing Section Heading
"Simple Plans for Smarter Finances."

### FAQ Section Heading
"Got Questions? We've Got Clear Answers."

---

## 9. BUILD INSTRUCTIONS FOR CURSOR/IDE

### Step-by-Step Implementation:

1. **Project Setup**
   ```bash
   npm create vite@latest onefin -- --template react-ts
   cd onefin
   npm install tailwindcss framer-motion lucide-react axios
   npm run dev
   ```

2. **Project Structure**
   ```
   src/
   ├── components/
   │   ├── Navbar.tsx
   │   ├── Hero.tsx
   │   ├── Benefits.tsx
   │   ├── Features.tsx
   │   ├── Stats.tsx
   │   ├── Integrations.tsx
   │   ├── Testimonials.tsx
   │   ├── Pricing.tsx
   │   ├── Blog.tsx
   │   ├── FAQ.tsx
   │   ├── Footer.tsx
   │   └── ui/ (Button, Card, etc.)
   ├── styles/
   │   ├── globals.css
   │   └── animations.css
   ├── pages/
   │   └── Home.tsx
   ├── App.tsx
   └── main.tsx
   ```

3. **Global Styles Setup** (globals.css)
   - Color variables (CSS custom properties)
   - Global typography rules
   - Tailwind directives (@tailwind base, components, utilities)
   - Custom animation keyframes

4. **Component Building Order** (Priority)
   1. Navbar (used everywhere)
   2. Hero (most important)
   3. Buttons & UI components
   4. Benefits section
   5. Features carousel
   6. Stats section
   7. Testimonials carousel
   8. Pricing cards
   9. FAQ accordion
   10. Footer
   11. Blog section

5. **Animation Libraries**
   - Use **Framer Motion** for complex animations
   - Use **CSS animations** for simple transitions
   - Use **Intersection Observer** for scroll triggers
   - Consider **react-scroll** for smooth scroll navigation

6. **Integration Pattern**
   - Responsive images: `<img loading="lazy" />` or `<picture>` tag
   - Videos: Embed as `<video muted autoplay loop />`
   - Icons: Lucide-react components
   - Forms: Controlled inputs with React state

---

## 10. VISUAL POLISH CHECKLIST

- [ ] Smooth transitions between sections
- [ ] Hover states on all interactive elements
- [ ] Loading skeletons for dynamic content
- [ ] Mobile responsiveness tested
- [ ] Animations performant (GPU accelerated)
- [ ] Accessibility: Focus states, alt text, semantic HTML
- [ ] Consistent spacing (8px grid system)
- [ ] Typography hierarchy clear
- [ ] Color contrast meets WCAG AA
- [ ] Form validation feedback
- [ ] 404 page (mentioned in footer link)
- [ ] Blog post template page
- [ ] Contact/careers pages functional

---

## 11. SPECIFIC CODE PATTERNS

### Scroll Animation Trigger (React + Intersection Observer)
```typescript
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return { ref, isVisible };
};
```

### Button Component (Reusable)
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}) => {
  // Implementation with Tailwind classes
};
```

### Carousel Component (Testimonials)
```typescript
export const Carousel = ({ items, autoplay = true }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, items.length]);
  
  return (
    // Render carousel with dots/arrows
  );
};
```

### Accordion Component (FAQ)
```typescript
export const Accordion = ({ items }) => {
  const [expanded, setExpanded] = useState<number | null>(0);
  
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => setExpanded(expanded === idx ? null : idx)}>
            {item.question}
          </button>
          {expanded === idx && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};
```

---

## 12. FRAMER-SPECIFIC ANIMATIONS (Optional - For Advanced Motion)

If using Framer Motion for complex animations:

```typescript
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const AnimatedSection = ({ children }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children?.map((child, idx) => (
      <motion.div key={idx} variants={itemVariants}>
        {child}
      </motion.div>
    ))}
  </motion.div>
);
```

---

## 13. TESTING & QUALITY ASSURANCE

- **Cross-browser**: Chrome, Firefox, Safari, Edge
- **Devices**: iPhone 12/14/15, iPad, Desktop
- **Performance**: Lighthouse score > 80
- **Accessibility**: WAVE/Axe DevTools, keyboard navigation
- **Form Testing**: All inputs, validation, submission
- **Link Testing**: All internal/external links working
- **Image Testing**: All images load, proper aspect ratios

---

## 14. DEPLOYMENT CHECKLIST

- [ ] Environment variables configured
- [ ] Production build optimized
- [ ] Meta tags (OG, Twitter, canonical)
- [ ] Sitemap.xml & robots.txt
- [ ] Analytics integrated (Google Analytics, etc.)
- [ ] CDN setup for static assets
- [ ] SSL certificate configured
- [ ] Domain configured
- [ ] Performance monitored
- [ ] Error tracking (Sentry, etc.)

---

## FINAL NOTES

- **Design Inspiration**: Modern SaaS landing pages with emphasis on trust & clarity
- **User Flow**: Hero → Benefits → Features → Social Proof → Pricing → CTA
- **Brand Voice**: Professional yet approachable, confident, forward-thinking
- **Target Audience**: Individuals & businesses seeking simplified financial management
- **Conversion Focus**: Clear CTAs, social proof, pricing transparency

**Start with the core layout, then add polish with animations and interactions. Use this prompt as your reference guide throughout development.**

---

**Created**: Aug 13, 2026  
**Project**: OneFin SaaS Landing Page  
**Target Deliverable**: Production-ready, high-converting landing site