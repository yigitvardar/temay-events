'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Rocket, Building2, Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

const ICON_MAP = {
  Zap,
  Rocket,
  Building2,
  Star,
} as const;

type IconKey = keyof typeof ICON_MAP;

const CARD_STYLES = [
  { bg: 'bg-surface-card', border: 'border-blue-500/20', icon: 'bg-blue-600', text: 'text-blue-400', glow: 'hover:shadow-blue-500/10' },
  { bg: 'bg-surface-card', border: 'border-violet-500/20', icon: 'bg-violet-600', text: 'text-violet-400', glow: 'hover:shadow-violet-500/10' },
  { bg: 'bg-surface-card', border: 'border-tmborder', icon: 'bg-slate-600', text: 'text-slate-300', glow: 'hover:shadow-white/5' },
  { bg: 'bg-surface-card', border: 'border-amber-500/20', icon: 'bg-amber-600', text: 'text-amber-400', glow: 'hover:shadow-amber-500/10' },
];

export function ServicesPreview() {
  const t = useTranslations('home.services');
  const locale = useLocale();

  const categories = t.raw('categories') as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <FloatingShapes variant="orbs" intensity="subtle" />
      <div className="container mx-auto relative z-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const style = CARD_STYLES[i % CARD_STYLES.length];
            const IconComponent = ICON_MAP[cat.icon as IconKey] ?? Zap;
            return (
              <StaggerItem key={cat.title}>
                <div
                  className={`group relative p-8 rounded-2xl border ${style.bg} ${style.border} hover:shadow-xl ${style.glow} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  {/* Decorative circle */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />

                  <div className={`relative w-12 h-12 rounded-xl ${style.icon} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-tmtext-primary mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-tmtext-secondary leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  <Link
                    href={`/${locale}/hizmetler`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${style.text} group-hover:gap-3 transition-all duration-200`}
                  >
                    {t('learn_more')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/hizmetler`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 shadow-md shadow-accent/20 hover:-translate-y-0.5"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
