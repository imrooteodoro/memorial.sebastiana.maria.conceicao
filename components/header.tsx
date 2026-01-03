"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const basePath = '/memorial.sebastiana.maria-conceicao';

export default function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            window.removeEventListener("click", playAudio);
            window.removeEventListener("touchstart", playAudio);
            window.removeEventListener("scroll", playAudio);
          })
          .catch((error) => console.log("Interação necessária para tocar áudio."));
      }
    };

    window.addEventListener("click", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("scroll", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("scroll", playAudio);
    };
  }, []);

  return (
    <header className="relative w-full h-[70vh] md:h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-stone-100">
      <audio 
        ref={audioRef} 
        src={`${basePath}/music/raridade.mp3`} 
        loop 
        preload="auto"
      />

      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={`${basePath}/imgs/familia-filhos.png`} 
          alt="Fundo Memorial"
          fill
          className="object-cover filter grayscale"
        />
      </div>

      <div className="z-10 text-center px-6">
        <div className="mb-4 md:mb-6 inline-block p-1 rounded-full border-2 border-stone-300">
          <Image
            src={`${basePath}/imgs/vovo.png`} 
            alt="Sebastiana Maria Conceição"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-white shadow-lg w-32 h-32 md:w-40 md:h-40"
          />
        </div>
        
        <h1 className="text-2xl md:text-5xl font-serif text-stone-800 tracking-wide leading-tight">
          Sebastiana Maria Conceição
        </h1>
        
        <div className="mt-3 md:mt-4 flex items-center justify-center gap-3 md:gap-4 text-stone-500 italic">
          <span className="h-[1px] w-8 md:w-12 bg-stone-300"></span>
          <p className="text-sm md:text-lg whitespace-nowrap">02/01/1954 — eternamente em nossos corações</p>
          <span className="h-[1px] w-8 md:w-12 bg-stone-300"></span>
        </div>
        
        <p className="mt-6 text-stone-600 font-light italic max-w-xs md:max-w-md mx-auto text-sm md:text-base leading-relaxed">
          "Combati o bom combate, acabei a carreira, guardei a fé." <br/>
          <span className="text-xs md:text-sm font-semibold not-italic">II Timóteo 4:7</span>
        </p>
      </div>

      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  );
}