import Header from "@/components/header";
import Image from "next/image";


const basePath = '/memorial.sebastiana.maria.conceicao';

export default function Home() {
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
            {/* <span className="text-stone-400 text-sm font-light">Clique para ampliar</span> */}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer">
               <Image
                src={`${basePath}/imgs/vozinha-e-mamae.png`}
                alt="Memorial 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer">
              
            </div>
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer"></div>
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer"></div>
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer"></div>
            <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden relative group cursor-pointer"></div>
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