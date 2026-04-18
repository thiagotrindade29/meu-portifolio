"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-slate-900 shadow-md">
      <nav className="max-w-[1024px] mx-auto px-4 h-12 md:h-[4.5rem] flex justify-between items-center font-semibold">

        <div className="flex items-center gap-8">
          <Link href="/" className="text-white font-bold text-2xl">Thiago</Link>
        </div>

        <div
          className={`fixed md:static top-12 md:top-0 w-[80%] md:w-auto h-full md:h-auto p-8 md:p-0 bg-slate-100
  md:bg-transparent transition-all duration-500 z-40
            ${isMenuOpen ? 'right-0' : 'right-[-100%]'} md:right-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <li><Link href="#home" onClick={closeMenu} className="relative text-slate-900 md:text-white
  hover:text-slate-700 md:hover:text-slate-300 transition-colors">Home</Link></li>
            <li><Link href="#sobre" onClick={closeMenu} className="relative text-slate-900 md:text-white
  hover:text-slate-700 md:hover:text-slate-300 transition-colors">Sobre</Link></li>
            <li><Link href="#habilidades" onClick={closeMenu} className="relative text-slate-900 md:text-white
  hover:text-slate-700 md:hover:text-slate-300 transition-colors">Habilidades</Link></li>
            <li><Link href="#projetos" onClick={closeMenu} className="relative text-slate-900 md:text-white
  hover:text-slate-700 md:hover:text-slate-300 transition-colors">Projetos</Link></li>
            <li><Link href="#contato" onClick={closeMenu} className="relative text-slate-900 md:text-white
  hover:text-slate-700 md:hover:text-slate-300 transition-colors">Contato</Link></li>

            {/* BOTÃO DE CURRÍCULO ESTRATÉGICO */}
            <li>
              <a
                href="/curriculo-thiago.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm hover:bg-slate-200 transition-all
  shadow-sm font-bold"
              >
                📄 Currículo
              </a>
            </li>
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