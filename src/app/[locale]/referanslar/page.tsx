import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { LogoGrid } from '@/components/sections/references/LogoGrid';
import { FadeIn } from '@/components/ui/FadeIn';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'references' });
  const description = t('subtitle');
  return {
    title: `${t('title')} | Temay Events`,
    description,
    openGraph: {
      description,
      images: [{ url: '/Menu-BG/referanslarimiz.jpg', width: 1200, height: 630, alt: `${t('title')} | Temay Events` }],
    },
    twitter: { images: ['/Menu-BG/referanslarimiz.jpg'] },
  };
}

export default async function ReferencesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'references' });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/Menu-BG/referanslarimiz.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto relative z-10">
          <FadeIn className="max-w-2xl">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-white/70">
              {t('title')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-white/70">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <LogoGrid />
        </div>
      </section>
    </div>
  );
}
