"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase';
import ProductionChart from '@/components/ProductionChart';
import AddOPForm from "@/components/AddOPForm";


export default function DashboardPCP() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const [darkMode, setDarkMode] = useState(false);
  // estado de tabela de O.P.s, inicialmente vazio, será preenchido com dados do Supabase
  const [ops, setOps] = useState([]);

  // Banco de dados dos KPIs (estático por enquanto)
  const kpisData = [
    { titulo: "OPs em Atraso", valor: "14", icone: "bx-time-five", cor: "text-red-500", fundoIcone: "bg-red-100", status: "+2 desde ontem" },
    { titulo: "Eficiência (OEE)", valor: "87.5%", icone: "bx-trending-up", cor: "text-green-500", fundoIcone: "bg-green-100", status: "Meta: 85%" },
    { titulo: "Volume Expedido", valor: "1.240 un", icone: "bx-package", cor: "text-blue-500", fundoIcone: "bg-blue-100", status: "Volume diário" },
    { titulo: "Gargalo Atual", valor: "Setor de Embalagem", icone: "bx-error-circle", cor: "text-orange-500", fundoIcone: "bg-orange-100", status: "Fila: 300 un" }
  ];

  // CÁLCULO DINÂMICO: opsAtrasadas agora usa tabelaData (declarado DEPOIS de tabelaData)
  const opsAtrasadas = ops.filter(op => op.status === "Atrasado").length;

  // Atualiza o KPI com o valor dinâmico
  kpisData[0].valor = opsAtrasadas.toString(); // Atualiza o primeiro KPI

  // Função para cor do status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-700';
      case 'Em Produção': return 'bg-blue-100 text-blue-700';
      case 'Atrasado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700'; // Aguardando
    }
  };

  useEffect(() => {

    async function fetchOps() {

      const { data } = await supabase
        .from("ops")
        .select("*")
        .order("created_at", { ascending: false })

      setOps(data)

    }

    fetchOps()

  }, [])

  return (
    <div className={`flex h-screen font-sans ${darkMode ? "bg-[#1a1a2e] text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* SIDEBAR MOBILE CORRIGIDA: agora abre/fecha com transição */}
      <aside
        className={`
          fixed md:static
          top-0 left-0
          h-full
          w-64
          bg-[#1a1a2e]
          text-white
          flex flex-col
          transform transition-transform duration-300
          z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
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
        {/* HEADER CORRIGIDO: agora com botão menu mobile */}
        <header className="bg-[#1a1a2e] shadow-sm h-16 flex items-center justify-between px-4 md:px-8 border-b min-h-[64px]">
          <div className="flex items-center gap-4">
            {/* BOTÃO MENU MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl md:hidden text-gray-600"
            >
              <i className='bx bx-menu'></i>
            </button>
            <h1 className="text-lg md:text-xl font-bold text-white">
              Visão Geral da Operação
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <i className='bx bx-bell text-2xl text-gray-500 cursor-pointer'></i>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
            {darkMode ? <i className='bx bx-sun'></i> : <i className='bx bx-moon'></i>}
          </button>
        </header>

        {/* ÁREA DE CONTEÚDO */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* GRID DOS KPIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpisData.map((kpi, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {kpi.titulo}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {kpi.valor}
                    </h3>
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
          {/* GRÁFICO DE PRODUÇÃO */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ProductionChart />
          </div>

          {/* BUSCA */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar OP ou produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 rounded w-full md:w-80"
            />
          </div>

          {/* NOVA SEÇÃO: TABELA DE O.P.s */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">
                Ordens de Produção Ativas
              </h2>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                Ver todas <i className="bx bx-chevron-right"></i>
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
                  {/* MAP COM FILTRO APLICADO */}
                  {ops.filter(op =>
                    op.produto.toLowerCase().includes(search.toLowerCase()) ||
                    op.id.toLowerCase().includes(search.toLowerCase())
                  ).slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((linha, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-4 font-medium text-blue-600">
                          {linha.numero_op}
                        </td>
                        <td className="p-4 font-semibold">{linha.produto}</td>
                        <td className="p-4">{linha.qtde} un</td>
                        <td className="p-4 text-gray-500">{linha.setor}</td>
                        <td className="p-4">{linha.previsao}</td>
                        <td className="p-4">
                          {/* Chamando a função para dar a cor da "etiqueta" (badge) */}
                          <select
                            className={`px-3 py-1 rounded text-xs font-bold ${getStatusColor(linha.status)}`}
                            value={linha.status}
                            onChange={async (e) => {
                              const newStatus = e.target.value;
                              const { error } = await supabase
                                .from('ops')
                                .update({ status: newStatus })
                                .eq('id', linha.id);
                              if (!error) {
                                // Atualize estado local
                                setOps(ops.map(op => op.id === linha.id ? { ...op, status: newStatus } : op));
                              }
                            }}
                          >
                            <option>Aguardando</option>
                            <option>Em Produção</option>
                            <option>Atrasado</option>
                            <option>Concluído</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Anterior
                </button>
                <span>Página {page} de {Math.ceil(ops.length / itemsPerPage)}</span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={page === Math.ceil(ops.length / itemsPerPage)}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Próxima
                </button>
              </div>
            </div>
            <AddOPForm onAdd={(newOp) => setOps([newOp, ...ops])} />
          </div>
        </div>
      </main>
    </div>
  );
}