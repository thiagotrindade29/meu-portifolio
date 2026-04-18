import SkillCard from './SkillCard';

export default function Habilidades() {
  // Atualizei o Array para incluir as competências de Engenharia e Gestão
  const skillsData = [
    { icone: 'bx-cog', nome: 'Engenharia de Produção / PCP', porcentagem: 70 },
    { icone: 'bx-data', nome: 'SQL / Banco de Dados', porcentagem: 60 },
    { icone: 'bx-bar-chart', nome: 'Power BI / Análise de Dados', porcentagem: 50 },
    { icone: 'bx-edit', nome: 'Desenho Técnico / ABNT', porcentagem: 80 },
    { icone: 'bxl-react', nome: 'React / Next.js', porcentagem: 60 },
    { icone: 'bxl-html5', nome: 'HTML/CSS - Tailwindcss', porcentagem: 70 },
    { icone: 'bxl-javascript', nome: 'JavaScript', porcentagem: 60 },
    { icone: 'bx-package', nome: 'Logística Industrial / Estoque', porcentagem: 80 },
  ];

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="habilidades">

      <h2 className="relative text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16 after:content-['']
  after:absolute after:w-16 after:h-1 after:bg-slate-900 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Competências Estratégicas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Minha atuação combina a vivência operacional como Conferente na indústria têxtil com a base analítica da
            Engenharia de Produção. Utilizo a tecnologia como ferramenta de otimização, desenvolvendo interfaces e sistemas que
            transformam dados brutos em decisões estratégicas para a manufatura e logística.
          </p>

          <div className="flex flex-col gap-4">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icone={skill.icone}
                nome={skill.nome}
                porcentagem={skill.porcentagem}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60"
            alt="Habilidades"
            className="w-full md:w-[90%] rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}