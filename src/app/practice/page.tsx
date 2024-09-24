import Link from "next/link";

export default function Practice() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">Nossa Clínica</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Localização de Fácil Acesso</h2>
        <p className="text-gray-700 text-lg">
          Nosso consultório está situado em uma localização privilegiada, com fácil acesso
          tanto para quem vem de transporte público quanto de carro. Estamos localizados
          no coração do bairro Tristeza, oferecendo conveniência e conforto aos nossos pacientes.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          <Link href="/locations" className="text-blue-950 hover:underline">
            Clique aqui
          </Link> para saber mais sobre nossas localizações e como chegar até nós.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nossos Procedimentos</h2>
        <p className="text-gray-700 text-lg">
          Oferecemos uma ampla gama de tratamentos ortodônticos para atender todas as idades. Nosso
          objetivo é proporcionar sorrisos mais saudáveis e bonitos, com o uso das mais avançadas
          tecnologias e técnicas ortodônticas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tratamentos Disponíveis</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Tratamento com aparelho fixo metálico e estético</li>
          <li>Invisalign: alinhadores transparentes para uma correção ortodôntica discreta</li>
          <li>Expansão maxilar para correções funcionais</li>
          <li>Aparelhos autoligados para maior conforto e resultados rápidos</li>
          <li>Contenção para manter o sorriso perfeito após o tratamento</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Atendimento Personalizado para Todas as Idades</h2>
        <p className="text-gray-700 text-lg">
          Nosso consultório é especializado tanto no atendimento infantil quanto no adulto.
          Entendemos as necessidades específicas de cada faixa etária, oferecendo tratamentos
          adequados para crianças em fase de crescimento e opções personalizadas para adultos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Agende sua Consulta</h2>
        <p className="text-gray-700 text-lg">
          Estamos prontos para te ajudar a alcançar o sorriso dos seus sonhos! Entre em contato
          conosco para agendar uma consulta e conhecer mais sobre nossas opções de tratamento.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          <Link href="/contact" className="text-blue-950 hover:underline">
            Clique aqui
          </Link> para agendar sua consulta.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <Link href="/" className="text-lg text-white bg-blue-900 px-6 py-2 rounded-full">
          Voltar
        </Link>
      </div>
    </div>
  );
}
