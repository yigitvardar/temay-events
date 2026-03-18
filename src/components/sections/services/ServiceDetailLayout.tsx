'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { FloatingShapes } from '@/components/ui/FloatingShapes';
import { ServiceMeta, getOtherServices } from '@/lib/services-data';
import { cn } from '@/lib/utils';

interface ServiceDetailLayoutProps {
  slug: string;
  meta: ServiceMeta;
}

export function ServiceDetailLayout({ slug, meta }: ServiceDetailLayoutProps) {
  const t = useTranslations(`services.items.${slug}`);
  const tServices = useTranslations('services');
  const tOtherItems = useTranslations('services.items');
  const locale = useLocale();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[meta.icon] as React.FC<{ className?: string }>;
  const otherServices = getOtherServices(slug);

  // Parse features and process arrays from translations
  const featuresRaw = t.raw('features') as string[];
  const processRaw = t.raw('process') as Array<{ step: string; desc: string }>;

  // Optional sub-services section (ECR-specific, silently ignored for other services)
  interface SubService { title: string; desc: string }
  let subServicesRaw: SubService[] | null = null;
  try {
    const raw = t.raw('subServices');
    if (Array.isArray(raw)) subServicesRaw = raw as SubService[];
  } catch {
    subServicesRaw = null;
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src={meta.bgImage}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto relative z-10">
          {/* Breadcrumb */}
          <FadeIn className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {tServices('breadcrumb_home')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${locale}/hizmetler`} className="hover:text-white transition-colors">
              {tServices('breadcrumb_services')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">{t('title')}</span>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div
                className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-surface-card shadow-md',
                  meta.borderColor,
                  'border'
                )}
              >
                <IconComponent className={cn('w-7 h-7', meta.accentColor)} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                {t('title')}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">{t('description')}</p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-surface-card rounded-2xl p-8 border border-tmborder shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
                  {tServices('what_we_offer')}
                </h3>
                <ul className="space-y-3">
                  {featuresRaw.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className={cn('w-5 h-5 flex-shrink-0 mt-0.5', meta.accentColor)} />
                      <span className="text-sm text-tmtext-primary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sub-services (optional, ECR-specific) */}
      {subServicesRaw && subServicesRaw.length > 0 && (
        <section className="py-20 bg-surface-muted relative overflow-hidden">
          <FloatingShapes variant="grid" intensity="subtle" />
          <div className="container mx-auto relative z-10">
            <FadeIn className="text-center mb-14">
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
                {t('subServices_eyebrow')}
              </span>
              <h2 className="text-3xl font-bold text-tmtext-primary mb-3">
                {t('subServices_title')}
              </h2>
              <p className="text-tmtext-secondary max-w-2xl mx-auto">
                {t('subServices_subtitle')}
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subServicesRaw.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-surface-card rounded-2xl p-6 border border-tmborder h-full">
                    <div className="w-2 h-2 rounded-full mb-4 bg-emerald-500" />
                    <h3 className="font-semibold text-tmtext-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-tmtext-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <FloatingShapes variant="rings" intensity="subtle" />
        <div className="container mx-auto relative z-10">
          <FadeIn className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
              {tServices('how_we_work')}
            </span>
            <h2 className="text-3xl font-bold text-tmtext-primary">
              {tServices('our_process')}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processRaw.map((item, index) => (
              <StaggerItem key={item.step}>
                <div className="relative p-6 rounded-2xl bg-surface-muted border border-tmborder h-full">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold text-white',
                      'bg-accent'
                    )}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-tmtext-primary mb-2">{item.step}</h3>
                  <p className="text-sm text-tmtext-secondary leading-relaxed">{item.desc}</p>

                  {index < processRaw.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-tmborder -translate-y-1/2" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {tServices('detail_cta')}
            </h2>
            <Link
              href={`/${locale}/iletisim`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-surface-muted transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              {tServices('detail_cta_button')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-surface-muted">
        <div className="container mx-auto">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-tmtext-primary">{tServices('related_title')}</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const OtherIcon = (Icons as any)[other.icon] as React.FC<{ className?: string }>;
              return (
                <StaggerItem key={other.slug}>
                  <Link
                    href={`/${locale}/hizmetler/${other.slug}`}
                    className={cn(
                      'group flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300',
                      'bg-gradient-to-br hover:shadow-lg hover:-translate-y-1 bg-surface-card',
                      other.borderColor
                    )}
                  >
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center',
                        'bg-gradient-to-br',
                        other.bgGradient,
                        'group-hover:scale-110 transition-transform duration-300'
                      )}
                    >
                      <OtherIcon className={cn('w-5 h-5', other.accentColor)} />
                    </div>
                    <div>
                      <div className="font-semibold text-tmtext-primary mb-1">
                        {tOtherItems(`${other.slug}.title`)}
                      </div>
                      <div className="text-sm text-tmtext-secondary line-clamp-2">
                        {tOtherItems(`${other.slug}.short`)}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
