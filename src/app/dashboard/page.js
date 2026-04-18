"use client";

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import supabase from '@/lib/supabase';
import ProductionChart from '@/components/ProductionChart';
import AddOPForm from "@/components/AddOPForm";

export default function DashboardPCP() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('darkMode');
      return savedDarkMode === 'true';
    }
    return false;
  });

  const [ops, setOps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOps() {
      try {
        const { data } = await supabase
          .from("ops")
          .select("*")
          .order("created_at", { ascending: false });

        setOps(data || []);
      } catch (error) {
        console.error('Error fetching OPs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchOps();
  }, []);

  // 🧠 LÓGICA DE ENGENHARIA: Cálculo de KPIs em Tempo Real
  const kpisData = useMemo(() => {
    const total = ops.length;
    const atrasadas = ops.filter(op => op.status === "Atrasado").length;
    const concluidas = ops.filter(op => op.status === "Concluído").length;
    const emProducao = ops.filter(op => op.status === "Em Produção").length;

    // Cálculo de Eficiência Simples: (Concluídas / Total) * 100
    const eficiencia = total > 0 ? ((concluidas / total) * 100).toFixed(1) : "0";

    return [
      {
        titulo: "OPs em Atraso",
        valor: atrasadas.toString(),
        icone: "bx-time-five",
        cor: "text-red-500",
        fundoIcone: "bg-red-100",
        status: atrasadas > 5 ? "Atenção Crítica" : "Dentro do esperado"
      },
      {
        titulo: "Eficiência de Entrega",
        valor: `${eficiencia}%`,
        icone: "bx-trending-up",
        cor: "text-green-500",
        fundoIcone: "bg-green-100",
        status: `Meta: 85%`
      },
      {
        titulo: "Em Produção",
        valor: emProducao.toString(),
        icone: "bx-package",
        cor: "text-blue-500",
        fundoIcone: "bg-blue-100",
        status: "Fluxo Ativo"
      },
      {
        titulo: "Total de Ordens",
        valor: total.toString(),
        icone: "bx-list-ul",
        cor: "text-orange-500",
        fundoIcone: "bg-orange-100",
        status: "Base de Dados"
      }
    ];
  }, [ops]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-700';
      case 'Em Produção': return 'bg-blue-100 text-blue-700';
      case 'Atrasado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);

  return (
    <div className={`flex h-screen font-sans ${darkMode ? "bg-[#1a1a2e] text-white" : "bg-gray-100 text-gray-800"}`}>
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#1a1a2e] text-white flex flex-col transform
  transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-blue-500">LogisTech</h2>
          <p className="text-xs text-gray-400 mt-1">Módulo PCP & Engenharia</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-blue-600 text-white p-3 rounded-lg
  font-semibold transition-colors">
            <i className='bx bx-grid-alt text-xl'></i> Visão Geral
          </Link>
          <button className="w-full flex items-center gap-3 text-gray-300 hover:bg-gray-800 hover:text-white p-3
  rounded-lg font-semibold transition-colors">
            <i className='bx bx-box text-xl'></i> Controle de Estoque
          </button>
          <button className="w-full flex items-center gap-3 text-gray-300 hover:bg-gray-800 hover:text-white p-3
  rounded-lg font-semibold transition-colors">
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
        <header className="bg-[#1a1a2e] shadow-sm h-16 flex items-center justify-between px-4 md:px-8 border-b
  min-h-[64px]">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl md:hidden text-white">
              <i className='bx bx-menu'></i>
            </button>
            <h1 className="text-lg md:text-xl font-bold text-white">Gestão de Produção (PCP)</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <i className='bx bx-bell text-2xl text-gray-400 cursor-pointer'></i>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white
  font-bold">T</div>
            <button onClick={() => setDarkMode(!darkMode)} className="text-2xl text-white">
              {darkMode ? <i className='bx bx-sun'></i> : <i className='bx bx-moon'></i>}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-4 text-gray-600">Sincronizando com Supabase...</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {kpisData.map((kpi, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border
  border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{kpi.titulo}</p>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{kpi.valor}</h3>
                      </div>
                      <div className={`p-3 rounded-lg ${kpi.fundoIcone}`}>
                        <i className={`bx ${kpi.icone} text-2xl ${kpi.cor}`}></i>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-gray-400 dark:text-gray-500">{kpi.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ProductionChart />
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100
  dark:border-slate-700">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Análise de Gargalos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Com base nas OPs atuais, o setor com maior volume de pendências é o <strong>Setor de
                      Embalagem</strong>.
                    Recomenda-se redistribuição de carga para evitar atrasos na expedição.
                  </p>
                </div>
              </div>

              <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Buscar por OP ou Produto..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border px-4 py-2 rounded-lg w-full md:w-80 dark:bg-slate-700 dark:border-slate-600
  dark:text-white"
                />
              </div>

              {(ops && ops.length > 0) && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100
  dark:border-slate-700 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex justify-between
  items-center">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100">Ordens de Produção Ativas</h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-slate-400 text-sm">
                        <tr>
                          <th className="p-4 font-semibold">ID O.P.</th>
                          <th className="p-4 font-semibold">Produto</th>
                          <th className="p-4 font-semibold">Qtde</th>
                          <th className="p-4 font-semibold">Setor</th>
                          <th className="p-4 font-semibold">Previsão</th>
                          <th className="p-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700 dark:text-slate-300">
                        {ops.filter(op =>
                          op.produto.toLowerCase().includes(search.toLowerCase()) ||
                          op.numero_op?.toLowerCase().includes(search.toLowerCase())
                        ).slice((page - 1) * itemsPerPage, page * itemsPerPage)
                          .map((linha, index) => (
                            <tr
                              key={index}
                              className={`border-b border-gray-50 dark:border-slate-700 hover:bg-gray-50
  dark:hover:bg-slate-700 transition-colors ${linha.status === 'Atrasado' ? 'bg-red-50/30 dark:bg-red-900/10' : ''}`}
                            >
                              <td className="p-4 font-medium text-blue-600 dark:text-blue-400">{linha.numero_op}</td>
                              <td className="p-4 font-semibold dark:text-slate-100">{linha.produto}</td>
                              <td className="p-4">{linha.qtde} un</td>
                              <td className="p-4 text-gray-500 dark:text-slate-400">{linha.setor}</td>
                              <td className="p-4">{linha.previsao}</td>
                              <td className="p-4">
                                <select
                                  className={`px-3 py-1 rounded text-xs font-bold ${getStatusColor(linha.status)}`}
                                  value={linha.status}
                                  onChange={async (e) => {
                                    const newStatus = e.target.value;
                                    setOps(prev => prev.map(op => op.id === linha.id ? { ...op, status: newStatus } :
                                      op));
                                    await supabase.from('ops').update({ status: newStatus }).eq('id', linha.id);
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
                    <div className="flex justify-center gap-4 p-4">
                      <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-4
  py-2 bg-gray-200 dark:bg-slate-700 dark:text-white rounded disabled:opacity-50">Anterior</button>
                      <span className="dark:text-slate-300">Página {page} de {Math.ceil((ops?.length || 0) /
                        itemsPerPage)}</span>
                      <button onClick={() => setPage(p => p + 1)} disabled={page === Math.ceil((ops?.length || 0) /
                        itemsPerPage)} className="px-4 py-2 bg-gray-200 dark:bg-slate-700 dark:text-white rounded
  disabled:opacity-50">Próxima</button>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-slate-900/50">
                    <AddOPForm onAdd={(newOp) => setOps([newOp, ...ops])} />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}