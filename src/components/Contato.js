export default function Contato() {
  // Array com seus dados de contato
  const contatosData = [
    {
      icone: 'bx-envelope',
      label: 'Email:',
      valor: 'thiago.trindade29@hotmail.com',
      link: 'mailto:thiago.trindade29@hotmail.com',
      blank: false
    },
    {
      icone: 'bxl-linkedin',
      label: 'LinkedIn:',
      valor: 'linkedin.com/in/thiago-trindade',
      link: 'https://www.linkedin.com/in/thiago-trindade-351892208/',
      blank: true
    },
    {
      icone: 'bxl-github',
      label: 'GitHub:',
      valor: 'github.com/thiagotrindade',
      link: 'https://github.com/thiagotrindade',
      blank: true
    }
  ];

  return (
    <section className="max-w-[1024px] mx-auto px-4 py-16 md:py-24" id="contato">

      <h2 className="relative text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-16 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:left-0 after:right-0 after:mx-auto after:-bottom-4">
        Contato
      </h2>

      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Se você deseja entrar em contato comigo para discutir oportunidades de trabalho, colaborações ou apenas para dizer olá, sinta-se à vontade!
        </p>

        <div className="flex flex-col gap-6 items-center md:items-start text-left bg-white p-8 rounded-lg shadow-md">

          {contatosData.map((contato, index) => (
            <div key={index} className="flex items-center gap-4">
              <i className={`bx ${contato.icone} text-3xl text-blue-500`}></i>
              <span className="font-semibold text-[#1a1a2e]">{contato.label}</span>
              <a
                href={contato.link}
                target={contato.blank ? "_blank" : "_self"}
                rel={contato.blank ? "noopener noreferrer" : ""}
                className="text-blue-500 hover:underline"
              >
                {contato.valor}
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}