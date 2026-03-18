export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryBrand {
  id: string;
  title: string;
  logo: string;
  images: GalleryImage[];
}

export const galleryBrands: GalleryBrand[] = [
  {
    id: 'alfa-romeo',
    title: 'Alfa Romeo',
    logo: '/images/references/alfa-romeo.png',
    images: [
      { src: '/photoss/Alfa Romeo/alfaromeo1.jpeg', alt: 'Alfa Romeo Etkinlik 1' },
      { src: '/photoss/Alfa Romeo/alfaromeo2.jpeg', alt: 'Alfa Romeo Etkinlik 2' },
    ],
  },
  {
    id: 'abb',
    title: 'ABB',
    logo: '/photoss/ABB/abblogo.jpg',
    images: [
      { src: '/photoss/ABB/1.jpg', alt: 'ABB Etkinlik 1' },
      { src: '/photoss/ABB/2.jpg', alt: 'ABB Etkinlik 2' },
    ],
  },
  {
    id: 'ami',
    title: 'Ami',
    logo: '/photoss/Ami/amilogo.jpg',
    images: [
      { src: '/photoss/Ami/1.jpg', alt: 'Ami Etkinlik 1' },
      { src: '/photoss/Ami/2.jpg', alt: 'Ami Etkinlik 2' },
    ],
  },
  {
    id: 'chery',
    title: 'Chery',
    logo: '/photoss/Chery/cherylogo.jpg',
    images: [
      { src: '/photoss/Chery/1.jpg', alt: 'Chery Etkinlik 1' },
      { src: '/photoss/Chery/2.jpg', alt: 'Chery Etkinlik 2' },
      { src: '/photoss/Chery/chery1.jpeg', alt: 'Chery Etkinlik 3' },
      { src: '/photoss/Chery/chery2.jpeg', alt: 'Chery Etkinlik 4' },
      { src: '/photoss/Chery/chery3.jpeg', alt: 'Chery Etkinlik 5' },
      { src: '/photoss/Chery/chery4.jpeg', alt: 'Chery Etkinlik 6' },
      { src: '/photoss/Chery/chery5.jpeg', alt: 'Chery Etkinlik 7' },
      { src: '/photoss/Chery/chery6.jpeg', alt: 'Chery Etkinlik 8' },
      { src: '/photoss/Chery/chery7.jpeg', alt: 'Chery Etkinlik 9' },
      { src: '/photoss/Chery/chery8.jpeg', alt: 'Chery Etkinlik 10' },
      { src: '/photoss/Chery/chery9.jpeg', alt: 'Chery Etkinlik 11' },
      { src: '/photoss/Chery/chery10.jpeg', alt: 'Chery Etkinlik 12' },
      { src: '/photoss/Chery/chery11.jpeg', alt: 'Chery Etkinlik 13' },
      { src: '/photoss/Chery/chery12.jpeg', alt: 'Chery Etkinlik 14' },
      { src: '/photoss/Chery/chery13.jpeg', alt: 'Chery Etkinlik 15' },
    ],
  },
  {
    id: 'fiat',
    title: 'FIAT',
    logo: '/photoss/FIAT/fiatlogo.jpg',
    images: [
      { src: '/photoss/FIAT/1.jpg', alt: 'FIAT Etkinlik 1' },
      { src: '/photoss/FIAT/2.jpg', alt: 'FIAT Etkinlik 2' },
      { src: '/photoss/FIAT/3.jpg', alt: 'FIAT Etkinlik 3' },
      { src: '/photoss/FIAT/4.jpg', alt: 'FIAT Etkinlik 4' },
    ],
  },
  {
    id: 'demirdokum',
    title: 'Demirdöküm',
    logo: '/images/references/demirdokum.png',
    images: [
      { src: '/photoss/Demirdokum/demirdokum1.jpeg', alt: 'DemirDöküm Etkinlik 1' },
      { src: '/photoss/Demirdokum/demirdokum2.jpeg', alt: 'DemirDöküm Etkinlik 2' },
    ],
  },
  {
    id: 'hdi-sigorta',
    title: 'HDI Sigorta',
    logo: '/photoss/HDI%20Sigorta/hdisigortalogo.jpg',
    images: [
      { src: '/photoss/HDI%20Sigorta/1.jpg', alt: 'HDI Sigorta Etkinlik 1' },
      { src: '/photoss/HDI%20Sigorta/2.jpg', alt: 'HDI Sigorta Etkinlik 2' },
    ],
  },
  {
    id: 'lumiere',
    title: 'Lumiere',
    logo: '/photoss/Lumiere/lumiere.jpg',
    images: [
      { src: '/photoss/Lumiere/1.jpg', alt: 'Lumiere Etkinlik 1' },
    ],
  },
  {
    id: 'jeep',
    title: 'Jeep',
    logo: '/images/references/jeep.svg',
    images: [
      { src: '/photoss/Jeep/jeep1.jpeg', alt: 'Jeep Etkinlik 1' },
      { src: '/photoss/Jeep/jeep2.jpeg', alt: 'Jeep Etkinlik 2' },
    ],
  },
  {
    id: 'kastamonu',
    title: 'Kastamonu Entegre',
    logo: '/images/references/kastamonu.png',
    images: [
      { src: '/photoss/Kastamonu Entegre/kastamonu1.jpeg', alt: 'Kastamonu Entegre Etkinlik 1' },
      { src: '/photoss/Kastamonu Entegre/kastamonu2.jpeg', alt: 'Kastamonu Entegre Etkinlik 2' },
    ],
  },
  {
    id: 'ok',
    title: 'O.K.',
    logo: '/photoss/O.K./okeylogo.jpg',
    images: [
      { src: '/photoss/O.K./1.jpg', alt: 'O.K. Etkinlik 1' },
    ],
  },
  {
    id: 'peugeot',
    title: 'Peugeot',
    logo: '/photoss/Peugeot/peugeot.jpg',
    images: [
      { src: '/photoss/Peugeot/1.jpg', alt: 'Peugeot Etkinlik 1' },
      { src: '/photoss/Peugeot/peugeot2.jpeg', alt: 'Peugeot Etkinlik 2' },
    ],
  },
  {
    id: 'selpak',
    title: 'Selpak',
    logo: '/photoss/Selpak/selpak.jpg',
    images: [
      { src: '/photoss/Selpak/2.jpg', alt: 'Selpak Etkinlik 1' },
      { src: '/photoss/Selpak/3.jpg', alt: 'Selpak Etkinlik 2' },
    ],
  },
  {
    id: 'sephora',
    title: 'Sephora',
    logo: '/photoss/Sephora/sephora.jpg',
    images: [
      { src: '/photoss/Sephora/1.jpg', alt: 'Sephora Etkinlik 1' },
      { src: '/photoss/Sephora/2.jpg', alt: 'Sephora Etkinlik 2' },
      { src: '/photoss/Sephora/3.jpg', alt: 'Sephora Etkinlik 3' },
    ],
  },
  {
    id: 'tbv',
    title: 'TBV',
    logo: '/photoss/TBV/tbvlogo.jpg',
    images: [
      { src: '/photoss/TBV/1.jpg', alt: 'TBV Etkinlik 1' },
      { src: '/photoss/TBV/2.jpg', alt: 'TBV Etkinlik 2' },
    ],
  },
  {
    id: 'tjk',
    title: 'TJK',
    logo: '/photoss/TJK/tjklogo.jpg',
    images: [
      { src: '/photoss/TJK/1.jpg', alt: 'TJK Etkinlik 1' },
      { src: '/photoss/TJK/2.jpg', alt: 'TJK Etkinlik 2' },
    ],
  },
  {
    id: 'eczacibasi',
    title: 'Eczacıbaşı',
    logo: '/images/references/eczacibasi.png',
    images: [
      { src: '/photoss/Eczacibasi/eczacibasi1.jpeg', alt: 'Eczacıbaşı Etkinlik 1' },
    ],
  },
  {
    id: 'yunus-karma',
    title: 'Yunus Karma',
    logo: '/photoss/Yunus%20Karma/yunuskarmalogo.jpg',
    images: [
      { src: '/photoss/Yunus%20Karma/1.jpg', alt: 'Yunus Karma Etkinlik 1' },
      { src: '/photoss/Yunus%20Karma/2.jpg', alt: 'Yunus Karma Etkinlik 2' },
      { src: '/photoss/Yunus%20Karma/yunuskarma3.jpeg', alt: 'Yunus Karma Etkinlik 3' },
    ],
  },
];
