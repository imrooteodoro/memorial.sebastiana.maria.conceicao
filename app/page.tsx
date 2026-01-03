import fs from 'fs';
import path from 'path';
import Header from "@/components/header";
import PhotoCarousel from "@/components/photo-carousel";
import Image from "next/image";

const basePath = '/memorial.sebastiana.maria-conceicao';

export default function Home() {
  const photosDirectory = path.join(process.cwd(), 'public', 'imgs', 'vozinha-fotos');
  
  let filenames: string[] = [];

  try {
    if (fs.existsSync(photosDirectory)) {
      filenames = fs.readdirSync(photosDirectory)
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpeg', '.jpg', '.png'].includes(ext);
        });
    }
  } catch (error) {
    console.error("Erro ao ler a pasta de fotos:", error);
  }

  return (
    <div className="min-h-screen bg-stone-50/30 flex flex-col overflow-x-hidden"> 
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-16 w-full">
        {/* Seção Essência */}
        <section className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl font-serif text-stone-700 mb-8 italic">
            Sua Essência
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-left">
            <p className="text-stone-600 leading-relaxed text-lg">
              Dona Sebastiana era conhecida por sua força inabalável e seu coração sempre aberto. 
              Sua casa nunca estava vazia e sua mesa sempre tinha lugar para mais um. 
              Este memorial é um espaço para guardarmos juntos as sementes que ela plantou em cada um de nós.
            </p>
            <div className="bg-white p-6 md:p-8 border-l-4 border-stone-300 italic text-stone-500 shadow-sm">
              "A saudade é o amor que fica."
            </div>
          </div>
        </section>

        {/* Seção Galeria */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-2">
            <h2 className="text-2xl font-serif text-stone-700">Retratos de uma Vida</h2>
            <span className="text-stone-400 text-sm font-light italic">
              Um registro de momentos eternos
            </span>
          </div>
          
          {filenames.length > 0 ? (
            <>
              <div className="mb-16 w-full max-w-2xl mx-auto shadow-xl rounded-xl overflow-hidden">
                <PhotoCarousel filenames={filenames} basePath={basePath} />
              </div>

              <div className="mb-8">
                <h3 className="text-stone-500 font-serif italic text-sm border-l-2 border-stone-200 pl-3">
                  Galeria de Memórias
                </h3>
              </div>

              <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {filenames.map((name) => (
                  <div 
                    key={name} 
                    className="break-inside-avoid bg-white rounded-lg overflow-hidden relative group border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Image
                      src={`${basePath}/imgs/vozinha-fotos/${name}`}
                      alt={`Foto de Dona Sebastiana - ${name}`}
                      width={800} // Largura base para manter proporção
                      height={1200} // Altura base teste
                      layout="responsive"
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-stone-200 rounded-xl">
              <p className="text-stone-400">
                Nenhuma foto encontrada em: <br/>
                <code className="text-xs bg-stone-100 p-1">/public/imgs/vozinha-fotos</code>
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-auto pt-10 pb-12 border-t border-stone-200 bg-white/50 text-center text-stone-400 text-sm">
        <p className="font-serif italic text-stone-500 mb-2">Sempre em nossos corações</p>
        <p>Memorial de Sebastiana Maria Conceição — 2025</p>
      </footer>
    </div>
  );
}