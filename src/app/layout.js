import './globals.css';

export const metadata = {
  title: 'Engenharia de Produção e Desenvolvimento de Software - Thiago Trindade',
  description: 'Portfólio Thiago Trindade',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Importando a fonte Poppins e os ícones Boxicons do seu projeto original */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      {/* Aqui colocamos as classes gerais que você usava na tag body */}
      <body className="bg-[#f0f0f0] text-[#1a1a2e] font-['Poppins'] text-[15px] pt-12 md:pt0">
        {children}</body>
    </html>
  );
}