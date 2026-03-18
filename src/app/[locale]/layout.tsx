import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { PageTransitionWrapper } from '@/components/ui/PageTransitionWrapper';
import { geistSans } from '@/lib/fonts';

export const viewport: Viewport = {
  themeColor: '#07090F',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const description =
    locale === 'tr'
      ? 'Profesyonel etkinlik yönetimi, prodüksiyon ve menajerlik hizmetleri.'
      : 'Professional event management, production and management services.';
  return {
    metadataBase: new URL('https://temayevents.com'),
    title: { default: 'Temay Events', template: '%s | Temay Events' },
    description,
    openGraph: {
      siteName: 'Temay Events',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      description,
      images: [{ url: '/Menu-BG/hizmetlerimiz.jpg', width: 1200, height: 630, alt: 'Temay Events' }],
    },
    twitter: {
      card: 'summary_large_image',
      description,
      images: ['/Menu-BG/hizmetlerimiz.jpg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`scroll-smooth ${geistSans.variable}`}>
      <head>
        <style>{`body{background:#07090F;color:#EEF2FA;font-family:var(--font-inter),system-ui,sans-serif}`}</style>
      </head>
      <body className="bg-[#07090F] text-tmtext-primary antialiased font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main><PageTransitionWrapper>{children}</PageTransitionWrapper></main>
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
          <CursorGlow />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
