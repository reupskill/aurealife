# Aurea — landing page

Marketing site for Aurea (Aurea Life Science Limited). _We exist to give humanity more healthy years of life._

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx          Fonts (Sora + Inter via next/font), metadata
    page.tsx            Composes the sections in order
    globals.css         Aurea design tokens (@theme), keyframes, helpers
  components/
    ui/Logo.tsx         Halo-peak mark + wordmark
    ui/primitives.tsx   Eyebrow, Tile, Phone frame, status badges
    sections/
      Hero.tsx          Nav, headline, body scan, biomarker marquee
      BodyScan.tsx      Animated SVG body scan with floating readings
      Membership.tsx    Bento grid: statement, answers, insight, 100+, app
      BiologicalAge.tsx Birthday age vs blood age ruler
      Systems.tsx       Interactive body map (client component)
      AppShowcase.tsx   App features + fanned phone mockups
      Future.tsx        "More good years" life timeline to 100
      Closing.tsx       Find out later vs today, footer
```

## Notes for development

- **Design tokens** live in `src/app/globals.css` under `@theme` and map 1:1 to the Aurea design system (midnight, mint, teal, status colours). Use the Tailwind classes they generate (`bg-midnight`, `text-mint`, `text-watch`…) instead of raw hex.
- **Hero headline:** the second line is `HERO_LINE_TWO` in `Hero.tsx`. Approved alternatives for A/B testing are listed in the comment above it.
- **Motion** respects `prefers-reduced-motion` (all animation is disabled for those users).
- **Mockup data** (results, ages, values in the phones and the age ruler) is illustrative sample content.
- **Status colours** (In range / Watch / Act) are for health results only and always appear with their word.
- The **"Talk to us"** nav button scrolls to the closing section; there is no contact form or waitlist yet.
- Source design: Aurea landing page canvas (claude.ai artifact `MT5WZTGVGU3BSrNa91SUQs`).
