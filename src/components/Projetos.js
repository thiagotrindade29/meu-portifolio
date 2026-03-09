import ProjetoCard from './ProjetoCard';

export default function Projetos() {
  // Nosso "banco de dados" de projetos
  const projetosData = [
    {
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
      titulo: "Gerenciamento de Estoque",
      descricao: "Desenvolvi um sistema de gerenciamento de estoque utilizando Python e SQLite para controle e relatórios."
    },
    {
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      titulo: "Análise de Dados de Vendas",
      descricao: "Análise de vendas utilizando Excel e Power BI para identificar tendências e oportunidades de crescimento."
    },
    {
      imagem: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60",
      titulo: "Automação de Processos",
      descricao: "Automação de processos utilizando RPA para otimizar tarefas repetitivas e aumentar a eficiência."
    }
  ];

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="projetos">

      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Projetos
      </h2>

      {/* Grid Responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Renderizando os cards dinamicamente */}
        {projetosData.map((projeto, index) => (
          <ProjetoCard
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
          />
        ))}

      </div>
    </section>
  );
}