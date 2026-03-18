'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const schema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t('required')),
    email: z.string().email(t('invalid_email')),
    phone: z.string().optional(),
    company: z.string().optional(),
    event_type: z.string().min(1, t('required')),
    budget: z.string().optional(),
    message: z.string().min(10, t('required')),
  });

type FormData = z.infer<ReturnType<typeof schema>>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const eventTypes = t.raw('event_types') as string[];
  const budgets = t.raw('budgets') as string[];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema((key) => t(key as Parameters<typeof t>[0]))),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone ?? '',
          company: data.company ?? '',
          event_type: data.event_type,
          budget: data.budget ?? '',
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full px-4 py-3 rounded-xl border bg-surface-card text-tmtext-primary text-sm',
      'placeholder:text-tmtext-secondary/50',
      'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
      'transition-colors duration-200',
      hasError ? 'border-red-400 bg-red-900/20' : 'border-tmborder hover:border-accent/40'
    );

  return (
    <div className="bg-surface-card rounded-2xl border border-tmborder p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-tmtext-primary mb-7">{t('title')}</h2>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-tmtext-primary mb-2">{t('success_title')}</h3>
            <p className="text-tmtext-secondary mb-6">{t('success_body')}</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-accent font-medium hover:underline"
            >
              ← {t('new_message')}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {/* Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('name')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder={t('name')}
                  className={inputClass(!!errors.name)}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('company')}
                </label>
                <input
                  type="text"
                  placeholder={t('company_placeholder')}
                  className={inputClass(false)}
                  {...register('company')}
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('email')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder={t('email_placeholder')}
                  className={inputClass(!!errors.email)}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  placeholder={t('phone_placeholder')}
                  className={inputClass(false)}
                  {...register('phone')}
                />
              </div>
            </div>

            {/* Event Type + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('event_type')} <span className="text-red-400">*</span>
                </label>
                <select
                  className={cn(inputClass(!!errors.event_type), 'cursor-pointer')}
                  {...register('event_type')}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t('event_type_placeholder')}
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.event_type && (
                  <p className="mt-1 text-xs text-red-500">{errors.event_type.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                  {t('budget')}
                </label>
                <select
                  className={cn(inputClass(false), 'cursor-pointer')}
                  {...register('budget')}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t('budget_placeholder')}
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-tmtext-primary mb-1.5">
                {t('message')} <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={5}
                placeholder={t('message_placeholder')}
                className={cn(inputClass(!!errors.message), 'resize-none')}
                {...register('message')}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-light transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-accent/20"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {t('submit')}
            </button>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{t('error')}</span>
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
