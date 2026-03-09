import SkillCard from './SkillCard'; // Importamos o modelo da barrinha

export default function Habilidades() {
  // Criamos um Array (banco de dados simples) com todas as suas habilidades do HTML original
  const skillsData = [
    { icone: 'bxl-python', nome: 'Python', porcentagem: 30 },
    { icone: 'bxl-javascript', nome: 'JavaScript', porcentagem: 60 },
    { icone: 'bx-code', nome: 'C++', porcentagem: 30 },
    { icone: 'bxl-html5', nome: 'HTML/CSS - Tailwindcss', porcentagem: 70 },
    { icone: 'bxl-react', nome: 'React', porcentagem: 60 },
    { icone: 'bx-data', nome: 'SQL', porcentagem: 60 },
    { icone: 'bx-bar-chart', nome: 'Power BI - Em aprendizado', porcentagem: 30 },
    { icone: 'bx-cog', nome: 'RPA/VBA - Em aprendizado', porcentagem: 10 },
  ];

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="habilidades">

      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Lado Esquerdo: Textos e as Barrinhas de Progresso */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-4 text-center md:text-left">
            Habilidades Profissionais
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-center md:text-left">
            Minha jornada combina a vivência prática da operação, atuando como Conferente na empresa Diklatex, com a base analítica dos meus estudos em Engenharia de Produção e Desenvolvimento de Software. Essa união me permite enxergar a tecnologia como uma ferramenta real de otimização. Tenho aplicado esses conhecimentos no desenvolvimento de projetos autônomos, sempre buscando criar soluções eficientes, melhorar processos e me manter em constante evolução com as demandas do mercado.
          </p>

          {/* Container das Barrinhas: Flexbox em coluna */}
          <div className="flex flex-col gap-4">
            {/* O MÁGICA DO REACT ACONTECE AQUI!
                Percorremos o array skillsData e criamos um SkillCard para cada item. */}
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index} // O React precisa de uma chave única para saber qual item ele está criando
                icone={skill.icone}
                nome={skill.nome}
                porcentagem={skill.porcentagem}
              />
            ))}
          </div>
        </div>

        {/* Lado Direito: Imagem decorativa */}
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