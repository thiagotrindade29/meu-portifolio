import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative max-w-[1024px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-20 py-16 md:py-32 lg:py-40 min-h-screen items-center" id="home">

      {/* Lado Esquerdo: Textos e Botões */}
      <div className="flex flex-col gap-6 mt-12 md:mt-0">
        <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight text-[#1a1a2e]">
          Olá, sou <span className="text-blue-500">Thiago</span> <br />
          estudante de engenharia de produção e desenvolvimento de software.
        </h1>

        {/* Link do Next.js substituindo a tag <a> */}
        <Link href="#contato" className="inline-block w-max bg-blue-500 text-white px-10 py-3 font-semibold rounded-lg hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
          Contato
        </Link>
        {/* NOVO BOTÃO: Leva direto para a rota /dashboard */}
        <Link href="/dashboard" className="inline-block w-max bg-[#1a1a2e] text-white px-8 py-3 font-semibold rounded-lg hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
          <i className='bx bx-desktop text-xl'></i> Ver Sistema PCP
        </Link>

        <div className="flex flex-row gap-4 mt-8">
          <a href="https://www.linkedin.com/in/thiago-trindade-351892208/" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#1a1a2e] hover:text-blue-500 transition-colors">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/thiagotrindade" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#1a1a2e] hover:text-blue-500 transition-colors">
            <i className='bx bxl-github'></i>
          </a>
        </div>
      </div>

      {/* Lado Direito: SVG com a Imagem */}
      <div className="w-full flex justify-center md:justify-end items-center h-[350px] md:h-[450px]">

        {/* O fill escuro continua aqui no SVG para pintar o fundo */}
        <svg className="w-[300px] md:w-[400px] lg:w-[470px] fill-[#1a1a2e]" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

          <mask id="mask0" masktype="alpha">
            {/* SOLUÇÃO AQUI: Adicionamos fill="white" neste path da máscara */}
            <path fill="white" d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>

          <g mask="url(#mask0)">
            {/* Este path fica sem fill, então ele herda o azul escuro do SVG */}
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image x="0" y="50" width="479" height="467" preserveAspectRatio="xMidYMid slice" href="/img/perfil.png" />
          </g>

        </svg>

      </div>

    </section>
  );
}