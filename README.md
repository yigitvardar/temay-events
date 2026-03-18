<div align="center">

# 🎪 Temay Events

### Full-Service Event Management — Corporate Website

*A modern, multilingual corporate website for Istanbul's premier event management company.*

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-temayevents.com-1B3D6E?style=for-the-badge)](https://temayevents.com)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## ✨ Features

- 🌍 **Bilingual** — Turkish & English with automatic locale routing (`/tr/`, `/en/`)
- 🌙 **Dark theme** — custom color palette with smooth transitions
- 🎨 **Animated backgrounds** — floating shapes system with Framer Motion
- 🎠 **Infinite marquee** — reference brand slider on homepage
- 🖼️ **Gallery** — per-brand horizontal photo sliders with lightbox
- ⚡ **SSG** — 6 service detail pages statically generated at build time
- 📱 **Fully responsive** — mobile-first design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| 🏗️ Framework | Next.js 14 (App Router) |
| 💬 Language | TypeScript |
| 🎨 Styling | Tailwind CSS |
| 🎬 Animations | Framer Motion |
| 🌍 i18n | next-intl v4 |
| 🚀 Deployment | Vercel |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/[locale]` | 🏠 Homepage — Hero, services overview, references, trust bar |
| `/[locale]/hizmetler` | 🛎️ Services overview |
| `/[locale]/hizmetler/[slug]` | 📋 Service detail (6 pages, statically generated) |
| `/[locale]/galeri` | 🖼️ Gallery — brand photo sliders with lightbox |
| `/[locale]/referanslar` | 🤝 References — brand logo grid |
| `/[locale]/hakkimizda` | 👥 About us |
| `/[locale]/iletisim` | 📬 Contact |

---

## 🗂️ Project Structure

```
src/
├── 📁 app/
│   └── [locale]/          # Locale-based routing
├── 📁 components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page-specific sections
│   └── ui/                # Reusable UI components
├── 📁 lib/
│   ├── services-data.ts   # Service definitions
│   ├── gallery-data.ts    # Gallery brands & photos
│   └── references-data.ts # Reference brand logos
├── 📁 i18n/
│   └── routing.ts         # next-intl routing config
└── 📁 messages/
    ├── tr.json            # 🇹🇷 Turkish translations
    └── en.json            # 🇬🇧 English translations
```

---

## 🚀 Getting Started

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

## 🖼️ Adding Gallery Photos

1. Place images in `public/photoss/[BrandName]/`
2. Update `src/lib/gallery-data.ts` with the new file paths

## 🏷️ Adding Reference Logos

1. Place logo files in `public/images/references/`
2. Update `src/lib/references-data.ts`

---

## 📬 Contact

| | |
|---|---|
| 📍 Address | Atalay Caddesi No:9 Ataşehir, İstanbul 34758 |
| 📞 Phone | +90 (532) 474 07 27 |
| ✉️ Email | info@temayevents.com |
