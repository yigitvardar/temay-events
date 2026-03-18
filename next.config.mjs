import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isVercel = !!process.env.VERCEL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export only for Hostinger — Vercel uses native Next.js runtime
  ...(isVercel ? {} : { output: 'export', trailingSlash: true }),
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
