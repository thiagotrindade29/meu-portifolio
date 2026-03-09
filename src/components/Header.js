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
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1a2e] shadow-md">
      <nav className="max-w-[1024px] mx-auto px-4 h-12 md:h-[4.5rem] flex justify-between items-center font-semibold">

        <div>
          <Link href="/" className="text-white font-bold text-2xl">Thiago</Link>
        </div>

        {/* A mágica do menu mobile acontece aqui! 
          Se isMenuOpen for true, usamos 'right-0'. Se for false, usamos 'right-[-100%]'
        */}
        <div
          className={`fixed md:static top-12 md:top-0 w-[80%] md:w-auto h-full md:h-auto p-8 md:p-0 bg-[#f0f0f0] md:bg-transparent transition-all duration-500 z-40 
          ${isMenuOpen ? 'right-0' : 'right-[-100%]'} md:right-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            <li><Link href="#home" onClick={closeMenu} className="relative text-[#1a1a2e] md:text-white hover:text-blue-500 md:hover:text-white after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 transition-transform">Home</Link></li>
            <li><Link href="#sobre" onClick={closeMenu} className="relative text-[#1a1a2e] md:text-white hover:text-blue-500 md:hover:text-white after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 transition-transform">Sobre</Link></li>
            <li><Link href="#habilidades" onClick={closeMenu} className="relative text-[#1a1a2e] md:text-white hover:text-blue-500 md:hover:text-white after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 transition-transform">Habilidades</Link></li>
            <li><Link href="#projetos" onClick={closeMenu} className="relative text-[#1a1a2e] md:text-white hover:text-blue-500 md:hover:text-white after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 transition-transform">Projetos</Link></li>
            <li><Link href="#contato" onClick={closeMenu} className="relative text-[#1a1a2e] md:text-white hover:text-blue-500 md:hover:text-white after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0 after:-bottom-2 md:after:top-8 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 transition-transform">Contato</Link></li>
          </ul>
        </div>

        {/* O botão do menu hamburguer. O onClick inverte o valor de isMenuOpen */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className='bx bx-menu'></i>
        </div>

        {/* Adicionei a palavra MENU só para testarmos se o botão aparece */}
        {/* <div
          className="text-white text-2xl cursor-pointer md:hidden flex items-center gap-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-sm font-bold">MENU</span>
          <i className='bx bx-menu'></i>
        </div> */}

      </nav>
    </header>
  );
}