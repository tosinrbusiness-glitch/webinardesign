

## Plan: Animate Background Watermark Text in Final CTA Section

**File:** `src/components/sections/FinalCTASection.tsx`

**Changes:**
1. Add a subtle pulsing opacity animation to both watermark texts ("OWN IT" and "NO MORE RENT") so they gently fade between ~2% and ~8% opacity, creating a breathing/blinking effect without overpowering the foreground content.

**Implementation:**
- Add CSS keyframes for a slow opacity pulse (e.g., 4-5s cycle) in `src/index.css`
- Apply the animation class to the two watermark `<p>` elements, replacing the static `text-white/[0.02]` and `text-white/[0.015]` with animated opacity via inline styles or a utility class

