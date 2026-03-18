export const servicesSlugs = [
  'etkinlik-yonetimi',
  'produksiyon',
  'menajerlik',
  'ik-ekip-yonetimi',
  'media',
  'organizasyon-malzemeleri',
  'ecr-etkinlik-bilgisayar',
] as const;

export type ServiceSlug = (typeof servicesSlugs)[number];

export interface ServiceMeta {
  slug: ServiceSlug;
  icon: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  bgImage: string;
}

export const servicesMetaMap: Record<ServiceSlug, ServiceMeta> = {
  'etkinlik-yonetimi': {
    slug: 'etkinlik-yonetimi',
    icon: 'CalendarDays',
    accentColor: 'text-blue-700',
    bgGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
    bgImage: '/Menu-BG/etkinlikyonetimi.jpg',
  },
  'produksiyon': {
    slug: 'produksiyon',
    icon: 'Clapperboard',
    accentColor: 'text-slate-700',
    bgGradient: 'from-slate-50 to-gray-100',
    borderColor: 'border-slate-200',
    bgImage: '/Menu-BG/produksiyon.jpg',
  },
  'menajerlik': {
    slug: 'menajerlik',
    icon: 'Star',
    accentColor: 'text-amber-700',
    bgGradient: 'from-amber-50 to-yellow-50',
    borderColor: 'border-amber-200',
    bgImage: '/Menu-BG/menajerlik.jpg',
  },
  'ik-ekip-yonetimi': {
    slug: 'ik-ekip-yonetimi',
    icon: 'UserCheck',
    accentColor: 'text-teal-700',
    bgGradient: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
    bgImage: '/Menu-BG/ikekipyonetimi.jpg',
  },
  'media': {
    slug: 'media',
    icon: 'Radio',
    accentColor: 'text-violet-700',
    bgGradient: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200',
    bgImage: '/Menu-BG/media.jpg',
  },
  'organizasyon-malzemeleri': {
    slug: 'organizasyon-malzemeleri',
    icon: 'Package',
    accentColor: 'text-rose-700',
    bgGradient: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    bgImage: '/Menu-BG/organizasyonmalzemeleri.jpg',
  },
  'ecr-etkinlik-bilgisayar': {
    slug: 'ecr-etkinlik-bilgisayar',
    icon: 'Monitor',
    accentColor: 'text-emerald-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    bgImage: '/Menu-BG/hizmetlerimiz.jpg',
  },
};

export function getServiceMeta(slug: string): ServiceMeta | null {
  return servicesMetaMap[slug as ServiceSlug] ?? null;
}

export function getOtherServices(currentSlug: string): ServiceMeta[] {
  return servicesSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 3)
    .map((s) => servicesMetaMap[s]);
}
