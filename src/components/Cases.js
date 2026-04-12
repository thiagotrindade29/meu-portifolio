import React from 'react';

export default function Cases() {
  const casesData = [
    {
      title: "Sistema PCP (Planejamento e Controle de Produção)",
      context: "Engenharia de Produção & Software Fullstack",
      problem: "Falta de visibilidade em tempo real das Ordens de Produção (OPs), resultando em gargalos operacionais e erros de reporte manual no chão de fábrica.",
      solution: "Desenvolvimento de um ecossistema completo integrando dashboards de KPIs e gestão dinâmica de OPs, automatizando o fluxo de dados desde o planejamento até a execução.",
      result: "Eliminação de planilhas manuais para rastreamento de OPs e sincronização em tempo real entre o escritório de planejamento e a produção."
    },
    {
      title: "Otimização de Inventário",
      context: "Backend Efficiency & Data Analysis",
      problem: "Alta discrepância entre o estoque físico e os registros digitais, causando atrasos em entregas e falhas no planejamento de compras.",
      solution: "Implementação de uma ferramenta de auditoria baseada em Python e SQLite para rastrear movimentações e identificar padrões de erro no inventário.",
      result: "Redução de 20% nos erros de inventário no primeiro trimestre de implementação, aumentando a confiabilidade do estoque."
    }
  ];

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24  transition-colors" id="cases">
      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-slate-900  text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-slate-900 dark:after:bg-slate-900 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Cases de Sucesso
      </h2>

      <div className="grid grid-cols-1 gap-12">
        {casesData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  {item.context}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Problema */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider">
                    <i className='bx bx-error-circle text-lg'></i> O Problema
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solução */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                    <i className='bx bx-wrench text-lg'></i> A Solução
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                {/* Resultado */}
                <div className="flex flex-col gap-2 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-md border border-slate-100 dark:border-slate-600">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">
                    <i className='bx bx-check-shield text-lg'></i> O Resultado
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 font-medium text-sm leading-relaxed">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

