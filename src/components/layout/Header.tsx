'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { servicesSlugs } from '@/lib/services-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('home'), href: '/', localePath: `/${locale}` },
    { label: t('projects'), href: '/projeler', localePath: `/${locale}/projeler` },
    { label: t('gallery'), href: '/galeri', localePath: `/${locale}/galeri` },
    { label: t('about'), href: '/hakkimizda', localePath: `/${locale}/hakkimizda` },
    { label: t('references'), href: '/referanslar', localePath: `/${locale}/referanslar` },
  ];

  // usePathname from next-intl/navigation returns the path WITHOUT the locale prefix
  const isActive = (href: string) => pathname === href;

  // Site is always dark — light mode only for hero transparency (homepage before scroll)
  const light = pathname === '/' && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled || pathname !== '/'
            ? 'bg-[#07090F]/95 backdrop-blur-sm shadow-lg border-b border-tmborder'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center">
              <span className={cn('text-sm font-bold tracking-[0.2em]', light ? 'text-white' : 'text-tmtext-primary')}>
                TEMAY
              </span>
              <span className={cn('text-sm font-light tracking-[0.2em] ml-2', light ? 'text-white/70' : 'text-accent')}>
                EVENTS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.localePath}
                  href={link.localePath}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive(link.href)
                      ? light ? 'text-white font-semibold' : 'text-accent'
                      : light
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-tmtext-primary/80 hover:text-tmtext-primary hover:bg-surface-muted'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesHovered(true)}
                onMouseLeave={() => setServicesHovered(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    pathname.startsWith('/hizmetler')
                      ? light ? 'text-white font-semibold' : 'text-accent'
                      : light
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-tmtext-primary/80 hover:text-tmtext-primary hover:bg-surface-muted'
                  )}
                >
                  {t('services')}
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      servicesHovered && 'rotate-180'
                    )}
                  />
                </button>

                {servicesHovered && (
                  <div className="absolute top-full left-0 pt-1 w-64">
                    <div className="bg-surface-card rounded-xl shadow-xl border border-tmborder py-2">
                      <Link
                        href={`/${locale}/hizmetler`}
                        className="block px-4 py-2.5 text-sm font-semibold text-accent hover:bg-surface-muted transition-colors"
                      >
                        {t('services')} →
                      </Link>
                      <div className="border-t border-tmborder my-1" />
                      {servicesSlugs.map((slug) => (
                        <Link
                          key={slug}
                          href={`/${locale}/hizmetler/${slug}`}
                          className="block px-4 py-2.5 text-sm text-tmtext-secondary hover:text-tmtext-primary hover:bg-surface-muted transition-colors"
                        >
                          {t(`services_dropdown.${slug}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.localePath}
                  href={link.localePath}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive(link.href)
                      ? light ? 'text-white font-semibold' : 'text-accent'
                      : light
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-tmtext-primary/80 hover:text-tmtext-primary hover:bg-surface-muted'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher className="hidden lg:block" light={light} />
              <Link
                href={`/${locale}/iletisim`}
                className={cn(
                  'hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                  light
                    ? 'bg-white text-[#0D1525] hover:bg-white/90'
                    : 'bg-accent text-white hover:bg-accent-light'
                )}
              >
                {t('contact')}
              </Link>
              <LanguageSwitcher className="lg:hidden" light={light} />
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  light ? 'hover:bg-white/10' : 'hover:bg-surface-muted'
                )}
                aria-label="Open menu"
              >
                <Menu className={cn('w-5 h-5', light ? 'text-white' : 'text-tmtext-primary')} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
