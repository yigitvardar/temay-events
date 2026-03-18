'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';

export function ContactInfo() {
  const t = useTranslations('contact.info');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-tmtext-primary mb-7">{t('title')}</h2>

        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary mb-1">
                {t('address_label')}
              </div>
              <p className="text-tmtext-primary text-sm leading-relaxed">{t('address')}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary mb-1">
                {t('phone_label')}
              </div>
              <a
                href={`tel:${t('phone').replace(/\s/g, '')}`}
                className="text-tmtext-primary text-sm hover:text-accent transition-colors"
              >
                {t('phone')}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary mb-1">
                {t('email_label')}
              </div>
              <a
                href={`mailto:${t('email')}`}
                className="text-tmtext-primary text-sm hover:text-accent transition-colors"
              >
                {t('email')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-tmtext-secondary mb-4">
          {t('social_label')}
        </div>
        <div className="flex gap-3">
          {[
            { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/temayagency' },
            { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@temayevents' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl border border-tmborder flex items-center justify-center text-tmtext-secondary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-tmborder h-56">
        <iframe
          src="https://maps.google.com/maps?q=Atalay+Caddesi+No:9+Ataşehir+İstanbul+34758&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Temay Events Ofis Konumu"
        />
      </div>
    </div>
  );
}
