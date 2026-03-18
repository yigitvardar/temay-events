'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { servicesSlugs } from '@/lib/services-data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('projects'), href: `/${locale}/projeler` },
    { label: t('gallery'), href: `/${locale}/galeri` },
    { label: t('about'), href: `/${locale}/hakkimizda` },
    { label: t('references'), href: `/${locale}/referanslar` },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#07090F]"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-tmborder">
              <span className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-[0.2em] text-tmtext-primary">TEMAY</span>
                <span className="text-sm font-light tracking-[0.2em] text-accent">EVENTS</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-surface-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-tmtext-primary" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium text-tmtext-primary hover:text-accent transition-colors border-b border-tmborder/50"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div className="border-b border-tmborder/50">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-tmtext-primary hover:text-accent transition-colors"
                >
                  {t('services')}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 space-y-2">
                        <Link
                          href={`/${locale}/hizmetler`}
                          onClick={onClose}
                          className="block py-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                        >
                          → {t('services')}
                        </Link>
                        {servicesSlugs.map((slug) => (
                          <Link
                            key={slug}
                            href={`/${locale}/hizmetler/${slug}`}
                            onClick={onClose}
                            className="block py-2 text-sm text-tmtext-secondary hover:text-accent transition-colors"
                          >
                            {t(`services_dropdown.${slug}`)}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium text-tmtext-primary hover:text-accent transition-colors border-b border-tmborder/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-tmborder">
              <Link
                href={`/${locale}/iletisim`}
                onClick={onClose}
                className="block w-full text-center bg-accent text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
