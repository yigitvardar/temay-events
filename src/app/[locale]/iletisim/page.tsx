import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  const description = t('subtitle');
  return {
    title: `${t('title')} | Temay Events`,
    description,
    openGraph: {
      description,
      images: [{ url: '/Menu-BG/iletisim.jpg', width: 1200, height: 630, alt: `${t('title')} | Temay Events` }],
    },
    twitter: { images: ['/Menu-BG/iletisim.jpg'] },
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/Menu-BG/iletisim.jpg"
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

      {/* Content */}
      <section className="py-16 bg-surface-muted relative overflow-hidden">
        <FloatingShapes variant="grid" intensity="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
