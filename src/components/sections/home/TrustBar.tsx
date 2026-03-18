'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { brands } from '@/lib/references-data';

const TRUST_LOGOS = [
  'toyota', 'fiat', 'peugeot', 'porsche', 'coca-cola',
  'adidas', 'redbull', 'migros', 'turktelekom', 'turkcell',
  'koc', 'eczacibasi', 'alfa-romeo', 'jeep', 'demirdokum', 'kastamonu',
];

const trustBrands = brands.filter((b) => TRUST_LOGOS.includes(b.id));
const loopedBrands = [...trustBrands, ...trustBrands];

export function TrustBar() {
  const t = useTranslations('home.trust');

  return (
    <section className="py-10 bg-surface-muted border-b border-tmborder relative overflow-hidden">
      <FloatingShapes variant="grid" intensity="subtle" />
      <div className="relative z-10">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-tmtext-secondary/50 mb-8">
            {t('label')}
          </p>
        </FadeIn>

        {/* Infinite marquee slider */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee">
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex-shrink-0 mx-3 flex items-center justify-center w-36 h-16 rounded-xl bg-surface-card border border-tmborder hover:border-accent/40 hover:bg-surface transition-all duration-200 px-4"
              >
                {brand.logo ? (
                  <div className="relative w-full h-8">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      unoptimized
                      className="object-contain grayscale opacity-50 brightness-150 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-tmtext-secondary/60 text-center leading-tight">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
