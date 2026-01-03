"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Props {
  filenames: string[];
  basePath: string;
}

export default function PhotoCarousel({ filenames, basePath }: Props) {
  // Configuração simplificada para evitar quebra de layout
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps' 
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="w-full relative">
      {/* Container Principal do Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4"> {/* Margem negativa para compensar o padding dos slides */}
          {filenames.map((name) => (
            <div 
              key={name} 
              
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
            >
              <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
                <Image
                  src={`${basePath}/imgs/vozinha-fotos/${name}`}
                  alt="Retrato memorial"
                  fill
                  priority={filenames.indexOf(name) < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}