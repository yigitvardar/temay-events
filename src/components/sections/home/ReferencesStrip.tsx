'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { brands } from '@/lib/references-data';

export function ReferencesStrip() {
  const t = useTranslations('home.references');

  return (
    <section className="py-20 bg-surface border-t border-tmborder relative overflow-hidden">
      <FloatingShapes variant="rings" intensity="subtle" />
      <div className="container mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
              {t('eyebrow')}
            </span>
            <h2 className="text-2xl font-bold text-tmtext-primary">{t('title')}</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center h-16 px-3 rounded-xl bg-surface-muted border border-tmborder hover:border-accent/30 hover:bg-surface-card hover:shadow-sm transition-all duration-200"
              >
                {brand.logo ? (
                  <div className="relative w-full h-full p-2">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      unoptimized
                      className="object-contain grayscale opacity-40 brightness-150 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-tmtext-secondary/60 hover:text-tmtext-secondary transition-colors text-center leading-tight">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
