## Elite Wealth Mastery — Landing Page Replica

Recreate the Figma site as a pixel-perfect single-page landing page with all sections, content, and styling matched exactly.

### Design System

- **Background:** Deep dark navy (#0D0D1A) with subtle purple gradient overlays
- **Primary accent:** Yellow/Gold (#F5C518)
- **Secondary accent:** Purple (#7C3AED / #6D28D9)
- **Text:** White, with yellow and purple highlights
- **Typography:** Bold, uppercase headings; clean body text; letter-spaced subheadings
- **Cards:** Dark with purple/violet borders, subtle glassmorphism effect
- **Radius:** Rounded corners on cards and buttons

### Sections (top to bottom)

1. **Hero** — "SECURE YOUR LEGACY. OWN PHILLY." left side, lead capture form (Full Name, Email, Phone + "SECURE MY SPOT" button, secondary email + "REGISTER NOW") on the right. Social proof avatars + "4,500+ PHILLY RESIDENTS" at bottom left. Logo badge "ELITE WEALTH MASTERY" top left, hamburger menu top right.
2. **Proven Results** — "THE POWER OF POSSESSION" heading with 3 white stat cards ($3.4M+ Grants Unlocked, 4,500+ Families Housed, 75% Wealth Growth), each with icon and description.
3. **The Brutal Truth** — "THERE IS A 40X WEALTH GAP" with italic quote, two dark stat cards (4/10 homeownership rate, 100% commitment).
4. **The Curriculum** — "MASTER THE POSSESSION STRATEGY" with 4 dark module cards (Minimal Cash, Grant Assistance, Qualification, Pre-Approval) and "VIEW FULL MODULES →" link.
5. **This Is For You / Not For You** — Two-column qualifier section. Left card (bright, yellow checkmarks) vs right side (dimmed, X icons).
6. **Testimonials** — "VOICES OF THE REVOLUTION" with 3 dark testimonial cards, star ratings, dollar amounts highlighted in yellow, avatar circles + names.
7. **The Architect** — Dr. Elena Thorne section with placeholder portrait image, yellow name badge, quote, stats (15+ Years, $150M+), and bio text. Purple gradient background.
8. **Final CTA** — "CRITICAL ULTIMATUM" red badge, "EVERY MONTH YOU RENT = SOMEONE ELSE BUILDS WEALTH", urgency messaging, two large yellow "I'M READY TO OWN" buttons, "ONLY 12 SLOTS REMAINING" scarcity badge with green "LIVE AVAILABILITY" dot, "SECURE ENCRYPTED REGISTRATION PORTAL" footer note. Back-to-top button.

### Implementation

- Single `Index.tsx` page with extracted section components
- All static content, no backend integration
- Form fields are visual only (no submission logic)
- Responsive design (mobile-friendly)
- Smooth scroll behavior, back-to-top button
- lots of cool animations for the sections