import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Sobre from '@/components/Sobre';
import Habilidades from '@/components/Habilidades';
import Projetos from '@/components/Projetos';
import Cases from '@/components/Cases';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden mt-20">
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </>
  );
}