"use client";

import ProjetoCard from './ProjetoCard';
import { useState } from 'react';

export default function Projetos() {
  // Nosso "banco de dados" de projetos com categorias
  const projetosData = [
    {
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
      titulo: "Otimização de Fluxo de Estoque",
      descricao: "Desenvolvi um sistema de gerenciamento de estoque com Python e SQLite, reduzindo falhas de inventário e otimizando o tempo de resposta em relatórios operacionais.",
      categoria: "Backend"
    },
    {
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      titulo: "Inteligência de Dados de Vendas",
      descricao: "Implementei análises avançadas com Excel e Power BI para transformar dados brutos em insights estratégicos, identificando gargalos de venda e oportunidades de crescimento.",
      categoria: "Data Analysis"
    },
    {
      imagem: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60",
      titulo: "Automação de Processos RPA",
      descricao: "Criei automações de tarefas repetitivas utilizando RPA, eliminando erros manuais e aumentando a produtividade de rotinas administrativas.",
      categoria: "Automation"
    },
    {
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
      titulo: "Ecossistema de Gestão PCP",
      descricao: "Solução end-to-end para controle de produção. Integração de KPIs em tempo real e gestão dinâmica de OPs, unindo conceitos de Engenharia de Produção com desenvolvimento Fullstack.",
      categoria: "Frontend"
    },
    {
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      titulo: "Infraestrutura de Dados Supabase",
      descricao: "Arquitetura de API RESTful para integração escalável com Supabase, focando em segurança, autenticação e alta disponibilidade de dados.",
      categoria: "Backend"
    }
  ];

  const [filterCategoria, setFilterCategoria] = useState('Todas');
  const categorias = ['Todas', ...new Set(projetosData.map(p => p.categoria))];
  const projetosFiltrados = filterCategoria === 'Todas' 
    ? projetosData 
    : projetosData.filter(p => p.categoria === filterCategoria);

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="projetos">

      {/* Título da Seção */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-slate-900 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Projetos
      </h2>

      {/* Filtro por Categoria */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFilterCategoria(categoria)}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${filterCategoria === categoria
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Renderizando os cards dinamicamente */}
        {projetosFiltrados.map((projeto, index) => (
          <ProjetoCard
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
          />
        ))}
        
        {/* Mensagem quando nenhum projeto é encontrado */}
        {projetosFiltrados.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">Nenhum projeto encontrado nesta categoria</p>
          </div>
        )}

      </div>
    </section>
  );
}