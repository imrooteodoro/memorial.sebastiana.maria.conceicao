import fs from 'fs';
import path from 'path';
import Header from "@/components/header";
import Image from "next/image";

const basePath = '/memorial.sebastiana.maria.conceicao';

export default function Home() {
 
  const photosDirectory = path.join(process.cwd(), 'public/imgs/voziha-fotos');
  
  let filenames: string[] = [];
  
  try {
    filenames = fs.readdirSync(photosDirectory)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.jpeg' || ext === '.jpg' || ext === '.png';
      });
  } catch (error) {
    console.error("Erro ao ler a pasta de fotos:", error);
  }

  return (
    <div className="min-h-screen bg-stone-50/30"> 
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-serif text-stone-700 mb-8 italic">
            Sua Essência
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <p className="text-stone-600 leading-relaxed text-lg">
              Dona Sebastiana era conhecida por sua força inabalável e seu coração sempre aberto. 
              Sua casa nunca estava vazia e sua mesa sempre tinha lugar para mais um. 
              Este memorial é um espaço para guardarmos juntos as sementes que ela plantou em cada um de nós.
            </p>
            <div className="bg-white p-8 border-l-4 border-stone-300 italic text-stone-500 shadow-sm">
              "A saudade é o amor que fica."
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-2">
            <h2 className="text-2xl font-serif text-stone-700">Retratos de uma Vida</h2>
            <span className="text-stone-400 text-sm font-light italic">
              Um registro de momentos eternos
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filenames.map((name) => (
              <div 
                key={name} 
                className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer border border-stone-100 shadow-sm hover:shadow-md transition-all"
              >
                <Image
                  src={`${basePath}/imgs/voziha-fotos/${name}`}
                  alt={`Foto de Dona Sebastiana - ${name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
              </div>
            ))}

            {filenames.length === 0 && (
              <p className="col-span-full text-center text-stone-400 py-10">
                Nenhuma foto encontrada na pasta /public/imgs/voziha-fotos
              </p>
            )}
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-stone-200 text-center text-stone-400 text-sm">
          <p>Sempre em nossos corações</p>
          <p className="mt-2">Memorial de Sebastiana Maria Conceição — 2025</p>
        </footer>
      </main>
    </div>
  );
}