'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 flex justify-center">
      <div className="w-full max-w-2xl bg-surface-card border border-tmborder rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-tmtext-primary flex-1 leading-relaxed">
          Bu web sitesi, deneyiminizi geliştirmek için çerezler kullanmaktadır.{' '}
          <span className="text-tmtext-secondary">
            Siteyi kullanmaya devam ederek çerez politikamızı kabul etmiş olursunuz.
          </span>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-tmtext-secondary hover:text-tmtext-primary border border-tmborder rounded-lg transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
