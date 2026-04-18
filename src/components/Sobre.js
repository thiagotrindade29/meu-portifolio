export default function Sobre() {
    return (
      <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="sobre">

        {/* Título da Seção */}
        <h2 className="relative text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16 after:content-['']
  after:absolute after:w-16 after:h-1 after:bg-slate-900 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
          Sobre Mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">

          {/* Imagem do Sobre */}
          <div className="flex justify-center">
            <img src="/img/about.jpg" alt="Thiago Trindade" className="w-[250px] md:w-[300px] rounded-lg shadow-lg" />
          </div>

          {/* Textos */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-2">Thiago A. F. Trindade</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Profissional com perfil híbrido, unindo a visão estratégica da <strong>Engenharia de Produção</strong>, a
  precisão do <strong>Desenho Técnico</strong> e a agilidade do <strong>Desenvolvimento Front-end</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Com experiência prática no chão de fábrica da indústria têxtil, foco minha carreira na intersecção entre
  operação logística e tecnologia. Desenvolvo soluções de software (Next.js, SQL) para otimizar processos industriais,
  monitorar KPIs e eliminar gargalos de produção.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sou movido por desafios que envolvam análise de dados, melhoria contínua (Kaizen) e a criação de
  ferramentas que não apenas funcionem, mas que gerem <strong>eficiência operacional e impacto financeiro
  positivo</strong> para os negócios.
            </p>
          </div>

        </div>
      </section>
    );
  }