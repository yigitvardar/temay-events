'use client';

import Image from 'next/image';
import { StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { brands } from '@/lib/references-data';

export function LogoGrid() {
  return (
    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
        <StaggerItem key={brand.id}>
          <div className="group flex items-center justify-center h-24 px-4 rounded-xl bg-surface-muted border border-tmborder hover:border-accent/30 hover:bg-surface-card hover:shadow-md transition-all duration-200">
            {brand.logo ? (
              <div className="relative w-full h-full p-3">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  unoptimized
                  className="object-contain grayscale opacity-40 brightness-150 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            ) : (
              <span className="text-sm font-semibold text-tmtext-secondary/50 group-hover:text-tmtext-secondary transition-colors text-center leading-tight">
                {brand.name}
              </span>
            )}
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
