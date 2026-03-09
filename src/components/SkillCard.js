// Definimos o componente e dizemos que ele vai receber propriedades (props)
export default function SkillCard({ icone, nome, porcentagem }) {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 flex justify-between items-center overflow-hidden">
      
      {/* Lado Esquerdo: Ícone e Nome */}
      <div className="flex items-center gap-2 relative z-10">
        {/* O nome do ícone (ex: bxl-python) vem das props */}
        <i className={`bx ${icone} text-2xl text-blue-500`}></i>
        <span className="font-semibold text-[#1a1a2e]">{nome}</span>
      </div>
      
      {/* Lado Direito: Porcentagem */}
      <span className="font-bold text-blue-500 relative z-10">{porcentagem}%</span>
      
      {/* A Barrinha de Progresso (cor de fundo azul) */}
      {/* No React, não podemos usar a classe w-[60%] vinda de props no Tailwind facilmente. 
          Usamos a tag style para definir a largura (w) exata. */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500" 
        style={{ width: `${porcentagem}%` }}
      ></div>
    </div>
  );
}