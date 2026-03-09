export default function ProjetoCard({ imagem, titulo, descricao }) {
  return (
    // A classe 'group' do Tailwind é essencial aqui para o efeito de hover funcionar na imagem e no texto ao mesmo tempo
    <div className="relative shadow-lg rounded-lg overflow-hidden group">

      {/* Imagem do Projeto */}
      <img
        src={imagem}
        alt={titulo}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Camada Escura com o Texto (Aparece no Hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        <h3 className="text-white font-bold text-lg mb-2">{titulo}</h3>
        <p className="text-gray-300 text-sm">{descricao}</p>
      </div>

    </div>
  );
}