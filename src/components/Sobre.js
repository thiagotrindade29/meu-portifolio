export default function Sobre() {
  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="sobre">

      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
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
            Atualmente, concilio minha rotina operacional como conferente com meus estudos em Engenharia de Produção e Tecnologia. Essa vivência me ensinou a olhar para os processos buscando sempre a melhoria contínua. Sou movido pela inovação e tenho grande interesse em áreas estratégicas, como análise de dados, otimização de rotinas e controle de custos. Gosto de jogar junto com a equipe, compartilhar conhecimento e superar desafios na prática. Meu foco é consolidar minha carreira na engenharia, desenvolvendo soluções tecnológicas que gerem eficiência e impacto real para os negócios.
          </p>
        </div>

      </div>
    </section>
  );
}