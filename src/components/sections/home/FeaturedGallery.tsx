'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

const FEATURED_IMAGES = [
  { src: '/photoss/FIAT/1.jpg', brand: 'FIAT', type: 'Ürün Lansmanı' },
  { src: '/photoss/Sephora/2.jpg', brand: 'Sephora', type: 'Marka Aktivasyonu' },
  { src: '/photoss/ABB/1.jpg', brand: 'ABB', type: 'Kurumsal Etkinlik' },
  { src: '/photoss/TJK/1.jpg', brand: 'TJK', type: 'Özel Deneyim' },
  { src: '/photoss/HDI%20Sigorta/1.jpg', brand: 'HDI Sigorta', type: 'Gala' },
  { src: '/photoss/Peugeot/1.jpg', brand: 'Peugeot', type: 'Test Drive' },
];

export function FeaturedGallery() {
  const t = useTranslations('home.gallery');
  const locale = useLocale();

  return (
    <section className="py-24 bg-surface-muted relative overflow-hidden">
      <FloatingShapes variant="rings" intensity="subtle" />
      <div className="container mx-auto relative z-10">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            align="left"
          />
          <FadeIn>
            <Link
              href={`/${locale}/galeri`}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm whitespace-nowrap hover:gap-3 transition-all duration-200 flex-shrink-0"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_IMAGES.map((item, i) => (
            <StaggerItem key={i}>
              <Link href={`/${locale}/galeri`} className="group block relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-muted">
                <Image
                  src={item.src}
                  alt={`${item.brand} etkinliği`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-sm">{item.brand}</p>
                  <p className="text-white/70 text-xs">{item.type}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
