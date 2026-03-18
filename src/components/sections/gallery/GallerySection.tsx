'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { galleryBrands } from '@/lib/gallery-data';
import { Lightbox } from '@/components/ui/Lightbox';
import { FadeIn } from '@/components/ui/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxState {
  images: { src: string; alt: string }[];
  index: number;
}

function BrandSlider({
  brand,
  brandIdx,
  onOpen,
}: {
  brand: (typeof galleryBrands)[0];
  brandIdx: number;
  onOpen: (brandIdx: number, imgIdx: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.8;
    trackRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-tmborder">
        <div className="relative w-20 h-12 flex-shrink-0">
          <Image
            src={brand.logo}
            alt={`${brand.title} logo`}
            fill
            unoptimized
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-tmtext-primary">{brand.title}</h2>
      </div>

      {brand.images.length > 0 && (
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-gray-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-700"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {brand.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => onOpen(brandIdx, idx)}
                className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden bg-surface-muted focus:outline-none focus:ring-2 focus:ring-accent group/img"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-gray-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-700"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export function GallerySection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (brandIdx: number, imgIdx: number) => {
    setLightbox({ images: galleryBrands[brandIdx].images, index: imgIdx });
  };

  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );
  };

  const goPrev = () => {
    if (!lightbox) return;
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
    );
  };

  return (
    <>
      <div className="space-y-20">
        {galleryBrands.map((brand, brandIdx) => (
          <FadeIn key={brand.id}>
            <BrandSlider brand={brand} brandIdx={brandIdx} onOpen={openLightbox} />
          </FadeIn>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
}
