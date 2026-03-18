'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { servicesSlugs } from '@/lib/services-data';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-[#050810] text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center mb-4">
              <span className="text-sm font-bold tracking-[0.2em] text-white">TEMAY</span>
              <span className="text-sm font-light tracking-[0.2em] ml-2 text-accent-light">EVENTS</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/temayagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@temayevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/temayevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t('footer.pages')}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), href: `/${locale}` },
                { label: t('nav.projects'), href: `/${locale}/projeler` },
                { label: t('nav.gallery'), href: `/${locale}/galeri` },
                { label: t('nav.about'), href: `/${locale}/hakkimizda` },
                { label: t('nav.references'), href: `/${locale}/referanslar` },
                { label: t('nav.contact'), href: `/${locale}/iletisim` },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t('nav.services')}
            </h3>
            <ul className="space-y-3">
              {servicesSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/hizmetler/${slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t(`nav.services_dropdown.${slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                <span>{t('contact.info.address')}</span>
              </li>
              <li>
                <a
                  href={`tel:${t('contact.info.phone').replace(/\s/g, '')}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span>{t('contact.info.phone')}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t('contact.info.email')}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
                  <span>{t('contact.info.email')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
          </span>
          <div className="flex gap-4">
            <Link href={`/${locale === 'tr' ? 'en' : 'tr'}`} className="hover:text-white transition-colors">
              {locale === 'tr' ? 'English' : 'Türkçe'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
