export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white text-center py-10 mt-8">
      <p className="text-3xl font-bold mb-6">Thiago Trindade</p>

      <div className="flex justify-center gap-6 mb-6">
        <a href="https://www.linkedin.com/in/thiago-trindade-351892208/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500 transition-colors">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/thiagotrindade" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500 transition-colors">
          <i className='bx bxl-github'></i>
        </a>
        <a href="https://www.instagram.com/thiagotht92/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500 transition-colors">
          <i className='bx bxl-instagram'></i>
        </a>
      </div>

      <p className="text-sm text-gray-400">&#169; Thiago Trindade. Todos os direitos reservados</p>
    </footer>
  );
}