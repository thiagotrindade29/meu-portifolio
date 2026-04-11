export default function Sobre() {
  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="sobre">

      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-slate-900 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Sobre Mim
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">

        {/* Imagem do Sobre */}
        <div className="flex justify-center">
          {/* Lembre-se: o caminho aponta direto para a raiz da pasta public */}
          <img src="/img/about.jpg" alt="Thiago Trindade" className="w-[250px] md:w-[300px] rounded-lg shadow-lg" />
        </div>

        {/* Textos */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-4">Me chamo Thiago</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Atualmente, concilio minha experiência operacional como conferente com a formação em Engenharia de Produção e Tecnologia. Essa vivência me permite transitar entre a realidade do chão de fábrica e o desenvolvimento de software, aplicando a mentalidade de melhoria contínua (Kaizen) para resolver problemas reais. Sou movido por desafios que envolvam análise de dados, otimização de processos e redução de custos. Meu objetivo é desenvolver soluções tecnológicas que não apenas funcionem, mas que gerem eficiência operacional e impacto financeiro positivo para os negócios.
          </p>
        </div>

      </div>
    </section>
  );
}