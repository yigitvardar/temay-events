# Temay Events — Corporate Website

A modern, multilingual corporate website built for **Temay Events**, a full-service event management company based in Istanbul, Turkey.

🔗 **Live:** [temayevents.com](https://temayevents.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl v4 |
| Deployment | Vercel |

---

## Features

- **Bilingual support** — Turkish & English with automatic locale routing (`/tr/`, `/en/`)
- **Dark theme** with custom color palette and smooth transitions
- **Animated floating shapes** background system
- **Infinite marquee** slider for reference brands on the homepage
- **Gallery** — per-brand horizontal photo sliders with lightbox
- **6 service detail pages** with SSG (Static Site Generation)
- **Fully responsive** — mobile-first design

---

## Pages

| Route | Description |
|---|---|
| `/[locale]` | Homepage — Hero, services overview, references, trust bar |
| `/[locale]/hizmetler` | Services overview |
| `/[locale]/hizmetler/[slug]` | Service detail (6 pages, statically generated) |
| `/[locale]/galeri` | Gallery — brand photo sliders with lightbox |
| `/[locale]/referanslar` | References — brand logo grid |
| `/[locale]/hakkimizda` | About us |
| `/[locale]/iletisim` | Contact |

---

## Project Structure

```
src/
├── app/
│   └── [locale]/          # Locale-based routing
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page-specific sections
│   └── ui/                # Reusable UI components
├── lib/
│   ├── services-data.ts   # Service definitions
│   ├── gallery-data.ts    # Gallery brands & photos
│   └── references-data.ts # Reference brand logos
├── i18n/
│   └── routing.ts         # next-intl routing config
└── messages/
    ├── tr.json            # Turkish translations
    └── en.json            # English translations
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Gallery Photos

1. Place images in `public/photoss/[BrandName]/`
2. Update `src/lib/gallery-data.ts` with the new file paths

## Adding Reference Logos

1. Place logo files in `public/images/references/`
2. Update `src/lib/references-data.ts`

---

## Contact

- **Address:** Atalay Caddesi No:9 Ataşehir, İstanbul 34758
- **Phone:** +90 (532) 474 07 27
- **Email:** info@temayevents.com
