import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { servicesSlugs, getServiceMeta } from '@/lib/services-data';
import { ServiceDetailLayout } from '@/components/sections/services/ServiceDetailLayout';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    servicesSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const meta = getServiceMeta(slug);
  if (!meta) return {};
  const t = await getTranslations({ locale, namespace: `services.items.${slug}` });
  const description = t('description');
  return {
    title: `${t('title')} | Temay Events`,
    description,
    openGraph: {
      description,
      images: [{ url: meta.bgImage, width: 1200, height: 630, alt: `${t('title')} | Temay Events` }],
    },
    twitter: { images: [meta.bgImage] },
  };
}

export default function ServiceDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const meta = getServiceMeta(slug);
  if (!meta) notFound();

  return <ServiceDetailLayout slug={slug} meta={meta} />;
}
