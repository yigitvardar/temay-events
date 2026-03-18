'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className, light }: { className?: string; light?: boolean }) {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname(); // returns path WITHOUT locale prefix, e.g. "/" or "/hakkimizda"

  const targetLocale = locale === 'tr' ? 'en' : 'tr';
  const targetHref = `/${targetLocale}${pathname}`;

  return (
    <Link
      href={targetHref}
      className={cn(
        'text-sm font-semibold tracking-wider transition-colors duration-200 px-2 py-1',
        light
          ? 'text-white/80 hover:text-white'
          : 'text-tmtext-secondary hover:text-accent',
        className
      )}
      aria-label={`Switch to ${locale === 'tr' ? 'English' : 'Turkish'}`}
    >
      {t('langSwitch')}
    </Link>
  );
}
