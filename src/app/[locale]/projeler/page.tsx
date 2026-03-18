import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProjectsContent } from '@/components/sections/projects/ProjectsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects' });
  const description = t('subtitle');
  return {
    title: `Temay Events | ${t('title')}`,
    description,
    openGraph: {
      description,
      images: [{ url: '/Menu-BG/hizmetlerimiz.jpg', width: 1200, height: 630, alt: `Temay Events | ${t('title')}` }],
    },
    twitter: { images: ['/Menu-BG/hizmetlerimiz.jpg'] },
  };
}

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <ProjectsContent />;
}
