'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FloatingShapes } from '@/components/ui/FloatingShapes';

interface ProjectItem {
  client: string;
  type: string;
  title: string;
  goal: string;
  what: string;
  result: string;
  image: string;
  tags: string[];
}

export function ProjectsContent() {
  const t = useTranslations('projects');
  const locale = useLocale();

  const items = t.raw('items') as ProjectItem[];

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-surface-muted border-b border-tmborder">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-accent">
                {t('eyebrow')}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-tmtext-primary leading-tight mb-4">
                {t('title')}
              </h1>
              <p className="text-lg text-tmtext-secondary leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <FloatingShapes variant="mixed" intensity="subtle" />
        <div className="container mx-auto relative z-10">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((project, i) => (
              <StaggerItem key={i}>
                <div className="group bg-surface-card rounded-2xl border border-tmborder overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Tags overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#07090F]/80 backdrop-blur-sm text-xs font-semibold text-tmtext-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Client badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg">
                      {project.client}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-tmtext-primary mb-5">
                      {project.title}
                    </h3>

                    <div className="space-y-4 flex-1">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Target className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary/60 mb-1">{t('card_goal')}</p>
                          <p className="text-sm text-tmtext-secondary leading-relaxed">{project.goal}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary/60 mb-1">Çözüm</p>
                          <p className="text-sm text-tmtext-secondary leading-relaxed">{project.what}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary/60 mb-1">{t('card_result')}</p>
                          <p className="text-sm text-tmtext-secondary leading-relaxed">{project.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('cta_contact')}
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Projenizi bize anlatın, birlikte en iyi çözümü tasarlayalım.
            </p>
            <Link
              href={`/${locale}/iletisim`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent text-base font-semibold rounded-xl hover:bg-surface-muted transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              İletişime Geçin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
