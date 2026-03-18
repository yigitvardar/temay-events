'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { servicesSlugs, servicesMetaMap } from '@/lib/services-data';
import { cn } from '@/lib/utils';

export function ServicesGrid() {
  const t = useTranslations('services.items');
  const tMisc = useTranslations('services');
  const locale = useLocale();

  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesSlugs.map((slug) => {
        const meta = servicesMetaMap[slug];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IconComponent = (Icons as any)[meta.icon] as React.FC<{ className?: string }>;

        return (
          <StaggerItem key={slug}>
            <Link
              href={`/${locale}/hizmetler/${slug}`}
              className={cn(
                'group flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full',
                'bg-gradient-to-br hover:shadow-xl hover:-translate-y-1.5',
                meta.bgGradient,
                meta.borderColor
              )}
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-surface-card shadow-sm',
                  'group-hover:scale-110 transition-transform duration-300'
                )}
              >
                <IconComponent className={cn('w-6 h-6', meta.accentColor)} />
              </div>

              <h3 className="text-xl font-bold text-tmtext-primary mb-3">
                {t(`${slug}.title`)}
              </h3>
              <p className="text-tmtext-secondary leading-relaxed mb-6 flex-1">
                {t(`${slug}.description`)}
              </p>

              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm font-semibold',
                  meta.accentColor,
                  'group-hover:gap-3 transition-all duration-200 mt-auto'
                )}
              >
                {tMisc('learn_more')}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
