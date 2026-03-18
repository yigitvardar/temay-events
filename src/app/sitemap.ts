import { MetadataRoute } from 'next';
import { servicesSlugs } from '@/lib/services-data';

const BASE_URL = 'https://temayevents.com';
const locales = ['tr', 'en'];
const staticPaths = ['', '/hakkimizda', '/hizmetler', '/galeri', '/referanslar', '/iletisim', '/projeler'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
    for (const slug of servicesSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/hizmetler/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
