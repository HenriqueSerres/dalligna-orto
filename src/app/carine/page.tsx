import Image from "next/image";

export default function Carine() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 space-y-6 bg-blue-50 md:px-6 md:py-8">
      <div className="w-full flex justify-center">
        <Image
          src="/logo_carine_horiz.png"
          alt="Carine logo"
          width={300}
          height={75}
          className="object-contain"
        />
      </div>

      <section className="text-center">
        <p className="mt-2 text-base text-gray-700">
          Mestre em Ortodontia, Dra. Carine é dedicada a transformar sorrisos com um atendimento personalizado e inovador.
        </p>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Formação Acadêmica</h2>
        <p className="mt-2 text-sm text-gray-700">
          Dra. Carine possui graduação em Odontologia pela Universidade PUC/RS, onde também concluiu seu Mestrado em Ortodontia. Com mais de 15 anos de experiência, ela combina conhecimento acadêmico e prática clínica para oferecer o melhor tratamento aos seus pacientes.
        </p>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Especializações</h2>
        <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
          <li>Tratamento com Aparelhos Ortodônticos Convencionais e Estéticos</li>
          <li>Invisalign - Alinhadores Transparentes</li>
          <li>Ortopedia Funcional dos Maxilares</li>
          <li>Ortodontia Preventiva e Interceptativa para Crianças</li>
        </ul>
      </section>

      <section className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-950">Filosofia de Atendimento</h2>
        <p className="mt-2 text-sm text-gray-700">
          Com foco em proporcionar um atendimento humanizado, Dra. Carine acredita que cada paciente é único e merece um plano de tratamento personalizado. Seu objetivo é alcançar resultados estéticos e funcionais, priorizando o conforto e a saúde bucal de seus pacientes.
        </p>
      </section>

      <div className="w-full flex justify-center">
        <Image
          src="/base_carine.png"
          alt="Dra. Carine Dall'Igna"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
