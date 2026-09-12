# Rohit Kumar — AI Engineer Portfolio

A premium, dark-first, editorial personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lenis**, and **GSAP ScrollTrigger**.

## Stack
- Next.js 16 + React 19
- TypeScript
- Tailwind CSS v4
- Lenis smooth scrolling
- GSAP + ScrollTrigger animations

## Local development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build
```bash
npm run lint
npm run build
npm run start
```

## Project structure
- `/app` — App Router, global layout, metadata, sitemap, robots
- `/components/navigation` — floating navigation
- `/components/hero` — hero section
- `/components/projects` — editorial work storytelling
- `/components/experience` — timeline section
- `/components/about` — visual story, intro, process, numbers, about
- `/components/skills` — skill ecosystem
- `/components/contact` — links and contact CTA
- `/components/animations` — Lenis provider, GSAP scroll orchestration, custom cursor
- `/hooks` — reduced motion utility hook

## Replacing placeholder photos
Replace these files with final portraits (keep filenames the same):
- `/public/images/rohit-01.jpg`
- `/public/images/rohit-02.jpg`
- `/public/images/rohit-03.jpg`

## SEO
Configured with:
- Title + description metadata
- Open Graph + Twitter cards
- Canonical URL placeholder: `https://rohitkumar.dev/`
- JSON-LD Person schema
- `app/sitemap.ts`
- `app/robots.ts`

## Deployment
Deploy on Vercel:
1. Import repository into Vercel
2. Framework preset: Next.js (auto)
3. Build command: `npm run build`
4. Output: `.next`
5. Add production domain and update canonical URL metadata
