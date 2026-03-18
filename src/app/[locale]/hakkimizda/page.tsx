import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AboutContent } from '@/components/sections/about/AboutContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  const description = t('subtitle');
  return {
    title: `${t('title')} | Temay Events`,
    description,
    openGraph: {
      description,
      images: [{ url: '/Menu-BG/hakkimizda.jpg', width: 1200, height: 630, alt: `${t('title')} | Temay Events` }],
    },
    twitter: { images: ['/Menu-BG/hakkimizda.jpg'] },
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <AboutContent />;
}
