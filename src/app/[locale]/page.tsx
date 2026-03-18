import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { TrustBar } from '@/components/sections/home/TrustBar';
import { ServicesPreview } from '@/components/sections/home/ServicesPreview';
import { FeaturedGallery } from '@/components/sections/home/FeaturedGallery';
import { AboutTeaser } from '@/components/sections/home/AboutTeaser';
import { ProcessSection } from '@/components/sections/home/ProcessSection';
import { ReferencesStrip } from '@/components/sections/home/ReferencesStrip';
import { CtaSection } from '@/components/sections/home/CtaSection';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'home.hero' });
  const description = t('subtitle');
  return {
    title: `Temay Events | ${t('title')}`,
    description,
    openGraph: {
      description,
      images: [{ url: '/Menu-BG/hizmetlerimiz.jpg', width: 1200, height: 630, alt: 'Temay Events' }],
    },
    twitter: { images: ['/Menu-BG/hizmetlerimiz.jpg'] },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <FeaturedGallery />
      <AboutTeaser />
      <ProcessSection />
      <ReferencesStrip />
      <CtaSection />
    </>
  );
}
