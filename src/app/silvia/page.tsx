import Image from "next/image";

export default function Silvia() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 space-y-6 bg-blue-50 md:px-6 md:py-8">
      <div className="w-full flex justify-center">
        <Image
          src="/logo_silvia_horiz.png"
          alt="Silvia logo"
          width={300}
          height={75}
          className="object-contain"
        />
      </div>

      <section className="text-center">
        <p className="mt-2 text-base text-gray-700">
          Graduada em Odontologia pela UFRGS e especialista em Ortodontia pela UERJ, Dra. Silvia é uma referência em tratamentos ortodônticos de alta qualidade.
        </p>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Formação Acadêmica</h2>
        <p className="mt-2 text-sm text-gray-700">
          Dra. Silvia possui graduação em Odontologia pela Universidade Federal do Rio Grande do Sul (UFRGS) e especialização em Ortodontia pela Universidade do Estado do Rio de Janeiro (UERJ). Com um profundo conhecimento técnico e científico, ela busca oferecer o melhor atendimento aos seus pacientes.
        </p>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Certificações e Reconhecimentos</h2>
        <p className="mt-2 text-sm text-gray-700">
          Dra. Silvia é diplomada pelo BOARD Brasileiro de Ortodontia (BBO), um reconhecimento da excelência em sua prática profissional. Este título é concedido a ortodontistas que demonstram um nível de conhecimento e habilidade que atende aos mais altos padrões da profissão.
        </p>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Especializações</h2>
        <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
          <li>Ortodontia Estética com Aparelhos Autoligados</li>
          <li>Invisalign - Alinhadores Transparentes</li>
          <li>Tratamento Ortodôntico em Adultos e Crianças</li>
          <li>Correção de Problemas Oclusais e Funcionais</li>
        </ul>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Filosofia de Atendimento</h2>
        <p className="mt-2 text-sm text-gray-700">
          Dra. Silvia acredita que um sorriso saudável vai além da estética. Seu objetivo é proporcionar aos pacientes um tratamento ortodôntico eficaz e confortável, garantindo resultados duradouros e um atendimento humanizado, focado na individualidade de cada pessoa.
        </p>
      </section>

      <div className="w-full flex justify-center">
        <Image
          src="/base_silvia.png"
          alt="Dra. Silvia Dall'Igna"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
