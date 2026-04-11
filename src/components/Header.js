"use client"; // Precisamos dessa linha no topo sempre que usarmos interações do usuário, como cliques (useState)

import { useState } from 'react';
import Link from 'next/link'; // O Next.js tem um Link próprio para navegação rápida

export default function Header() {
  // Aqui está o nosso estado! Começa fechado (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu quando clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-8 border-b min-h-[64px]">

    //   <div className="flex items-center gap-4">

    //     {/* BOTÃO MENU MOBILE */}
    //     <button
    //       onClick={() => setMenuOpen(!menuOpen)}
    //       className="text-2xl md:hidden text-gray-600"
    //     >
    //       <i className='bx bx-menu'></i>
    //     </button>

    //     <h1 className="text-lg md:text-xl font-bold text-gray-800">
    //       Visão Geral da Operação
    //     </h1>

    //   </div>

    //   <div className="flex items-center gap-4">

    //     <div className="relative">
    //       <i className='bx bx-bell text-2xl text-gray-500 cursor-pointer'></i>
    //       <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
    //     </div>

    //     <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
    //       T
    //     </div>

    //   </div>

    // </header>
    <header className="w-full fixed top-0 left-0 z-50 bg-slate-900 shadow-md">
      <nav className="max-w-[1024px] mx-auto px-4 h-12 md:h-[4.5rem] flex justify-between items-center font-semibold">

        <div>
          <Link href="/" className="text-white font-bold text-2xl">Thiago</Link>
        </div>

        <div
          className={`fixed md:static top-12 md:top-0 w-[80%] md:w-auto h-full md:h-auto p-8 md:p-0 bg-slate-100 md:bg-transparent transition-all duration-500 z-40
          ${isMenuOpen ? 'right-0' : 'right-[-100%]'} md:right-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            <li><Link href="#home" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Home</Link></li>
            <li><Link href="#sobre" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Sobre</Link></li>
            <li><Link href="#habilidades" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Habilidades</Link></li>
            <li><Link href="#projetos" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Projetos</Link></li>
            <li><Link href="#cases" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Cases</Link></li>
            <li><Link href="#contato" onClick={closeMenu} className="relative text-slate-900 md:text-white hover:text-slate-700 md:hover:text-slate-300 after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 transition-transform">Contato</Link></li>
          </ul>
        </div>

        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}