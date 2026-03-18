export interface Brand {
  id: string;
  name: string;
  logo: string | null; // null = text fallback
}

export const brands: Brand[] = [
  { id: 'alfa-romeo',   name: 'Alfa Romeo',       logo: '/images/references/alfa-romeo.png' },
  { id: 'adidas',       name: 'Adidas',           logo: '/images/references/adidas.svg' },
  { id: 'beko',         name: 'Beko',              logo: '/images/references/beko.svg' },
  { id: 'carrefour',    name: 'Carrefour',         logo: '/images/references/carrefour.svg' },
  { id: 'chery',        name: 'Chery',             logo: '/images/references/chery.svg' },
  { id: 'citroen',      name: 'Citroën',           logo: '/images/references/citroen.svg' },
  { id: 'coca-cola',    name: 'Coca-Cola',         logo: '/images/references/coca-cola.svg' },
  { id: 'eczacibasi',   name: 'Eczacıbaşı',        logo: '/images/references/eczacibasi.png' },
  { id: 'fiat',         name: 'Fiat',              logo: '/images/references/fiat.svg' },
  { id: 'jaecoo',       name: 'Jaecoo',            logo: '/images/references/jaecoo.svg' },
  { id: 'jeep',         name: 'Jeep',              logo: '/images/references/jeep.svg' },
  { id: 'koc',          name: 'Koç Holding',       logo: '/images/references/koc.svg' },
  { id: 'migros',       name: 'Migros',            logo: '/images/references/migros.svg' },
  { id: 'opet',         name: 'Opet',              logo: '/images/references/opet.svg' },
  { id: 'peugeot',      name: 'Peugeot',           logo: '/images/references/peugeot.svg' },
  { id: 'porsche',      name: 'Porsche',           logo: '/images/references/porsche.svg' },
  { id: 'redbull',      name: 'Red Bull',          logo: '/images/references/redbull.svg' },
  { id: 'renault',      name: 'Renault',           logo: '/images/references/renault.svg' },
  { id: 'tofas',        name: 'Tofaş',             logo: '/images/references/tofas.svg' },
  { id: 'toyota',       name: 'Toyota',            logo: '/images/references/toyota.svg' },
  { id: 'demirdokum',   name: 'Demirdöküm',        logo: '/images/references/demirdokum.png' },
  { id: 'kastamonu',    name: 'Kastamonu Entegre', logo: '/images/references/kastamonu.png' },
  { id: 'turkcell',     name: 'Turkcell',          logo: '/images/references/turkcell.png' },
  { id: 'turktelekom',  name: 'Türk Telekom',      logo: '/images/references/turktelekom.svg' },
  { id: 'volvo',        name: 'Volvo',             logo: '/images/references/volvo.svg' },
];
