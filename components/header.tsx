import Image from "next/image";


export default function Header() {
  return (
    <header className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/imgs/familia-filhos.png" 
          alt="Fundo Memorial"
          fill
          className="object-cover filter grayscale"
        />
      </div>
     <audio src="/music/raridade.mp3" autoPlay loop className="hidden" />
      <div className="z-10 text-center px-4">
        <div className="mb-6 inline-block p-1 rounded-full border-2 border-stone-300">
          <Image
            src="/imgs/vovo.png" 
            alt="Sebastiana Maria Conceição"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-wide">
          Sebastiana Maria Conceição
        </h1>
        
        <div className="mt-4 flex items-center justify-center gap-4 text-stone-500 italic">
          <span className="h-[1px] w-12 bg-stone-300"></span>
          <p className="text-lg"> 02/01/1954 — 23/12/2025</p>
          <span className="h-[1px] w-12 bg-stone-300"></span>
        </div>
        
        <p className="mt-6 text-stone-600 font-light italic max-w-md mx-auto">
          II Timóteo 4:7 - Combati o bom combate, acabei a carreira, guardei a fé.
        </p>
      </div>

   
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  );
}