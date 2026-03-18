'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { CountUp } from '@/components/ui/CountUp';
import { Target, Zap, Heart, Users } from 'lucide-react';

const valueIcons = [Target, Zap, Heart, Users];

export function AboutContent() {
  const t = useTranslations('about');

  const values = t.raw('values') as Array<{ title: string; desc: string }>;
  const stats = t.raw('stats') as Array<{ num: string; label: string }>;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/Menu-BG/hakkimizda.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto relative z-10">
          <FadeIn className="max-w-3xl">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-white/70">
              {t('title')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              {t('subtitle')}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <FloatingShapes variant="orbs" intensity="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
                {t('story_eyebrow')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-tmtext-primary leading-tight mb-6">
                {t('story_title')}
              </h2>
              {t('story_body')
                .split('\n\n')
                .map((para, i) => (
                  <p key={i} className="text-tmtext-secondary leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.num}
                    className="bg-surface-muted rounded-2xl p-6 border border-tmborder text-center"
                  >
                    <CountUp value={stat.num} className="text-4xl font-bold text-accent mb-1 block" />
                    <div className="text-sm text-tmtext-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-muted relative overflow-hidden">
        <FloatingShapes variant="grid" intensity="subtle" />
        <div className="container mx-auto relative z-10">
          <FadeIn className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
              {t('values_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-tmtext-primary">
              {t('values_title')}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = valueIcons[index % valueIcons.length];
              return (
                <StaggerItem key={value.title}>
                  <div className="bg-surface-card rounded-2xl p-8 border border-tmborder h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-tmtext-primary mb-3">{value.title}</h3>
                    <p className="text-sm text-tmtext-secondary leading-relaxed">{value.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
