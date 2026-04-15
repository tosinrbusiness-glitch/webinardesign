

## Plan: Generate a Lovable Knowledge Document

Create a downloadable `.md` file at `/mnt/documents/lovable-knowledge.md` that captures the project's coding style, conventions, preferred libraries, and behavioral rules — ready to paste into Lovable's Knowledge settings.

### Document Sections

1. **Coding Style & Naming Conventions**
   - PascalCase for components, camelCase for variables/hooks
   - Section components in `src/components/sections/`, shared components in `src/components/`
   - Custom hooks prefixed with `use` in `src/hooks/`
   - Tailwind-first styling, inline `style={{}}` only for complex gradients/shadows
   - Arrow function components with default exports
   - TypeScript interfaces for props (named `ComponentNameProps`)

2. **Preferred Libraries & Patterns**
   - React 18 + Vite + TypeScript + Tailwind CSS v3
   - shadcn/ui for base UI primitives
   - Lucide React for icons
   - `@tanstack/react-query` for data fetching
   - React Router v6 for routing
   - IntersectionObserver via `useScrollAnimation` hook for scroll-triggered animations
   - CSS custom properties for theming (HSL color system)
   - Utility classes in `src/index.css` (e.g., `glass-card`, `text-gradient-gold`, `glow-purple`)

3. **Visual & Design Rules**
   - Dark theme: deep purple-to-black gradients, gold (#f5c518) and purple (#b87aff) accents
   - Fonts: Oswald (headings, uppercase), Inter (body)
   - Glassmorphism cards with backdrop-blur and semi-transparent borders
   - All CTA buttons scroll to Hero form; gold gradient with pulse-glow animation
   - Scarcity elements: countdown timer to Saturday 12 PM ET, "12 spots left" badge
   - Section backgrounds must use matching purple gradients for seamless transitions

4. **Behavioral Rules**
   - Single-page landing page — no new routes unless explicitly requested
   - All CTAs funnel to the Hero section lead capture form
   - Maintain high-urgency, conversion-focused tone in copy
   - Never remove scarcity/urgency elements
   - Keep animations subtle — enhance, don't distract
   - Mobile-responsive: use `sm:` / `lg:` breakpoints consistently

### Output
- Write the document to `/mnt/documents/lovable-knowledge.md`

