'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { CountUp } from '@/components/ui/CountUp';

export function AboutTeaser() {
  const t = useTranslations('home.about');
  const locale = useLocale();

  const highlights = t.raw('highlights') as string[];

  return (
    <section className="py-24 bg-surface-muted relative overflow-hidden">
      <FloatingShapes variant="mixed" intensity="subtle" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <FadeIn direction="left">
            <div className="relative sm:mx-6 sm:mb-6">
              {/* Main card */}
              <div className="bg-accent rounded-3xl p-8 sm:p-10 text-white">
                <CountUp value="10+" className="text-7xl font-bold opacity-20 leading-none mb-4 block" />
                <div className="text-3xl font-bold mb-2">
                  {t('years_experience')}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t('years_tagline')}
                </p>
              </div>

              {/* Floating stats — hidden on mobile to avoid overflow */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-surface-card rounded-2xl p-6 shadow-xl border border-tmborder">
                <CountUp value="2000+" className="text-3xl font-bold text-tmtext-primary block" />
                <div className="text-sm text-tmtext-secondary mt-1">
                  {t('events_count')}
                </div>
              </div>

              <div className="hidden sm:block absolute -top-6 -left-6 bg-surface-card rounded-2xl p-5 shadow-xl border border-tmborder">
                <CountUp value="500+" className="text-2xl font-bold text-tmtext-primary block" />
                <div className="text-sm text-tmtext-secondary mt-0.5">
                  {t('clients_count')}
                </div>
              </div>

              {/* Mobile-only inline stats */}
              <div className="flex gap-4 mt-4 sm:hidden">
                <div className="flex-1 bg-surface-card rounded-2xl p-4 shadow-sm border border-tmborder text-center">
                  <CountUp value="2000+" className="text-2xl font-bold text-tmtext-primary block" />
                  <div className="text-xs text-tmtext-secondary mt-1">{t('events_count')}</div>
                </div>
                <div className="flex-1 bg-surface-card rounded-2xl p-4 shadow-sm border border-tmborder text-center">
                  <CountUp value="500+" className="text-2xl font-bold text-tmtext-primary block" />
                  <div className="text-xs text-tmtext-secondary mt-1">{t('clients_count')}</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="right">
            <div>
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
                {t('eyebrow')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-tmtext-primary leading-tight mb-6">
                {t('title')}
              </h2>
              <p className="text-tmtext-secondary leading-relaxed mb-8">{t('body')}</p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-tmtext-primary font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/${locale}/hakkimizda`}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
              >
                {t('cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
