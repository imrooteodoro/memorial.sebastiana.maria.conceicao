import fs from 'fs';
import path from 'path';
import Header from "@/components/header";
import PhotoCarousel from "@/components/photo-carousel";
import GalleryGrid from "@/components/gallery-grid";

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
        {/* Seção Introdução */}
        <section className="mb-16 md:mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
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

        {/* Seção Galeria Dinâmica */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-2">
            <h2 className="text-2xl font-serif text-stone-700">Retratos de uma Vida</h2>
            <span className="text-stone-400 text-sm font-light italic">
              Clique nas imagens para ampliar
            </span>
          </div>
          
          {filenames.length > 0 ? (
            <>
              {/* Carrossel de Destaque */}
              <div className="mb-20 w-full max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-white">
                <PhotoCarousel filenames={filenames} basePath={basePath} />
              </div>

              {/* Grid Mural Interativo */}
              <GalleryGrid filenames={filenames} basePath={basePath} />
            </>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-stone-200 rounded-xl bg-white/50">
              <p className="text-stone-400">
                Aguardando o carregamento das memórias... <br/>
                <span className="text-xs">Certifique-se que as fotos estão em: /public/imgs/vozinha-fotos</span>
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-auto pt-10 pb-12 border-t border-stone-200 bg-white/50 text-center">
        <p className="font-serif italic text-stone-500 mb-2 text-lg">Sempre em nossos corações</p>
        <p className="text-stone-400 text-sm">Memorial de Sebastiana Maria Conceição — 2025</p>
      </footer>
    </div>
  );
}