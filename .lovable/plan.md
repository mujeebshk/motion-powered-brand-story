# Tech Marketics — Animated Agency Website

Dark, premium site inspired by your reference video (glowing planet-arc hero, glass cards, dashboard previews, pricing, work grid), recolored to your brand: deep black + electric lime (#C6FF00) from your logo.

## Pages
- **Home** — animated hero with glowing lime arc/orb, "Grow Faster. Rank Higher. Sell More." headline, logo strip marquee, services cards, animated stats counters, feature section with floating dashboard mockup, process timeline, testimonials, CTA.
- **Services** — SEO, Social Media, Paid Ads, Branding, Web Development, Content — each with icon and hover animation.
- **Work** — portfolio grid with hover tilt + reveal.
- **Pricing** — 3 plans (Starter / Growth / Enterprise), highlighted middle plan with glow.
- **About** — story, team values, numbers.
- **Contact** — form (visual for now) + contact details.
- Shared sticky glass navbar with logo and lime "Book a Call" button; rich footer.

## Animation style
- Page-load intro: logo pieces assemble, then hero text reveals word by word.
- Scroll-triggered fade/slide reveals on every section.
- Rotating glowing lime arc in the hero, moving gradient light, subtle grain.
- Infinite logo marquee, counting numbers, magnetic buttons, card tilt on hover, custom cursor glow.
- Smooth scrolling.

## Brand
- Logo: your "Tech Marketics" lime emblem + wordmark; emblem used as favicon.
- Fonts: Space Grotesk (headings) + Manrope (body).
- Placeholder copy, prices and client names until you send real ones.

## Technical details
- TanStack routes: index, services, work, pricing, about, contact, each with own head() metadata.
- framer-motion for animations, Lenis for smooth scroll.
- Logos uploaded via lovable-assets; tokens in src/styles.css (oklch).
- Contact form front-end only (can connect to Lovable Cloud later to save leads).
