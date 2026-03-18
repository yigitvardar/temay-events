'use client';

import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

export function ProcessSection() {
  const t = useTranslations('home.process');

  const steps = t.raw('steps') as Array<{
    num: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <FloatingShapes variant="grid" intensity="subtle" />
      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-tmborder hidden lg:block" />

          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative flex flex-col items-center text-center lg:items-center">
                {/* Number bubble */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>

                <h3 className="text-base font-bold text-tmtext-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-tmtext-secondary leading-relaxed">
                  {step.desc}
                </p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-tmborder mt-6 lg:hidden" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
