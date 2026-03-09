import Hero from '@/components/Hero';
import Header from '../components/Header'; // Importando o Header para usar em nossa página
import Sobre from '@/components/Sobre';
import Habilidades from '@/components/Habilidades';
import Projetos from '@/components/Projetos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header /> {/* Colocando o Header no topo da página */}
      <main className="overflow-hidden mt-20">
        {/* Aqui você pode adicionar o conteúdo da sua página */}
        <Hero /> {/* Usando o componente Hero para mostrar a seção principal */}
        <Sobre /> {/* Adicionando a seção de sobre para mostrar um pouco sobre você e sua experiência */}
        <Habilidades /> {/* Adicionando a seção de habilidades para mostrar suas competências técnicas */}
        <Projetos /> {/* Adicionando a seção de projetos para mostrar seus trabalhos anteriores */}
        <Contato /> {/* Adicionando a seção de contato para que as pessoas possam entrar em contato com você */}
      </main>
      <Footer /> {/* Colocando o Footer no final da página */}
    </>
  );
}