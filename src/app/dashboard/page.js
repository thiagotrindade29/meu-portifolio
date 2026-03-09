import Link from 'next/link';

export default function DashboardPCP() {

  // Banco de dados dos KPIs
  const kpisData = [
    { titulo: "OPs em Atraso", valor: "14", icone: "bx-time-five", cor: "text-red-500", fundoIcone: "bg-red-100", status: "+2 desde ontem" },
    { titulo: "Eficiência (OEE)", valor: "87.5%", icone: "bx-trending-up", cor: "text-green-500", fundoIcone: "bg-green-100", status: "Meta: 85%" },
    { titulo: "Volume Expedido", valor: "1.240 un", icone: "bx-package", cor: "text-blue-500", fundoIcone: "bg-blue-100", status: "Volume diário" },
    { titulo: "Gargalo Atual", valor: "Setor de Embalagem", icone: "bx-error-circle", cor: "text-orange-500", fundoIcone: "bg-orange-100", status: "Fila: 300 un" }
  ];

  // NOVO: Banco de dados das Ordens de Produção
  const tabelaData = [
    { id: "OP-2024-089", produto: "Camiseta DryFit Azul", qtde: 500, setor: "Costura", previsao: "Hoje, 14:00", status: "Em Produção" },
    { id: "OP-2024-090", produto: "Calça Legging Preta", qtde: 300, setor: "Embalagem", previsao: "Hoje, 11:30", status: "Atrasado" },
    { id: "OP-2024-091", produto: "Jaqueta Corta-Vento", qtde: 150, setor: "Corte", previsao: "Amanhã, 09:00", status: "Aguardando" },
    { id: "OP-2024-088", produto: "Bermuda Térmica", qtde: 800, setor: "Expedição", previsao: "Hoje, 10:00", status: "Concluído" },
  ];

  // NOVO: Função inteligente para dar cor ao Status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-700';
      case 'Em Produção': return 'bg-blue-100 text-blue-700';
      case 'Atrasado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700'; // Aguardando
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1a1a2e] text-white flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-blue-500">LogisTech</h2>
          <p className="text-xs text-gray-400 mt-1">Módulo PCP & Estoque</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-blue-600 text-white p-3 rounded-lg font-semibold transition-colors">
            <i className='bx bx-grid-alt text-xl'></i> Visão Geral
          </Link>
          <button className="w-full flex items-center gap-3 text-gray-300 hover:bg-gray-800 hover:text-white p-3 rounded-lg font-semibold transition-colors">
            <i className='bx bx-box text-xl'></i> Controle de Estoque
          </button>
          <button className="w-full flex items-center gap-3 text-gray-300 hover:bg-gray-800 hover:text-white p-3 rounded-lg font-semibold transition-colors">
            <i className='bx bx-transfer-alt text-xl'></i> Fluxo de Produção
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <i className='bx bx-arrow-back text-xl'></i> Voltar ao Portfólio
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">

        {/* HEADER */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8 border-b min-h-[64px]">
          <h1 className="text-xl font-bold text-gray-800">Visão Geral da Operação</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <i className='bx bx-bell text-2xl text-gray-500 cursor-pointer'></i>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
          </div>
        </header>

        {/* ÁREA DE CONTEÚDO */}
        <div className="flex-1 overflow-y-auto p-8">

          {/* GRID DOS KPIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpisData.map((kpi, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{kpi.titulo}</p>
                    <h3 className="text-2xl font-bold text-gray-800">{kpi.valor}</h3>
                  </div>
                  <div className={`p-3 rounded-lg ${kpi.fundoIcone}`}>
                    <i className={`bx ${kpi.icone} text-2xl ${kpi.cor}`}></i>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-400">{kpi.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* NOVA SEÇÃO: TABELA DE O.P.s */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Ordens de Produção Ativas</h2>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                Ver todas <i className='bx bx-chevron-right'></i>
              </button>
            </div>

            {/* overflow-x-auto permite rolar a tabela no celular sem quebrar a tela */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                    <th className="p-4 font-semibold">ID O.P.</th>
                    <th className="p-4 font-semibold">Produto</th>
                    <th className="p-4 font-semibold">Qtde</th>
                    <th className="p-4 font-semibold">Setor Atual</th>
                    <th className="p-4 font-semibold">Previsão</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {/* O MAP gerando as linhas da tabela */}
                  {tabelaData.map((linha, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-blue-600">{linha.id}</td>
                      <td className="p-4 font-semibold">{linha.produto}</td>
                      <td className="p-4">{linha.qtde} un</td>
                      <td className="p-4 text-gray-500">{linha.setor}</td>
                      <td className="p-4">{linha.previsao}</td>
                      <td className="p-4">
                        {/* Chamando a função para dar a cor da "etiqueta" (badge) */}
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(linha.status)}`}>
                          {linha.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}