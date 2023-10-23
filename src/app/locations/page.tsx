import Header from "@/components/Head";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function Locations() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-around mt-6 gap-6 p-6">
        <section className="flex flex-col mt-10 px-5">
          <h1 className="flex justify-center font-extrabold p-3 underline underline-offset-8"
          >
            Tristeza
          </h1>
          <p>Av. Wenceslau Escobar, 3033 sala 806</p>
          <p>Porto Alegre - RS</p>
          <FaPhoneAlt />
          <p>(51) 3311.1184 / (51) 99253.9490</p>
          <Image className='mt-4' src="/tristeza_map.png" width={400} height={400} alt="mapa endereço tristeza" />
          <Link className='text-3xl text-blue-950 hover:text-slate-400 mt-2' href='https://maps.app.goo.gl/r7RSKDTWpEJZ2WYH6'>
            <TbExternalLink />
          </Link>
        </section>
        <div className="mt-10">
          <Image src="/dente_2_2.png" width={300} height={300} alt="imagem de dente com escova" />
        </div>
        <section className="mt-10 flex flex-col px-5">
          <h1 className="flex justify-center font-extrabold p-3 underline underline-offset-8"
          >
            Moinhos de Vento
          </h1>
          <p>Rua Padre Chagas, 185 sala 303</p>
          <p>Porto Alegre - RS</p>
          <FaPhoneAlt />
          <p>(51) 3346.7837 / (51) 99192.3109</p>
          <Image className='mt-4' src="/moinhos_map.png" width={400} height={400} alt="mapa endereço moinhos" />
          <Link className='text-3xl text-blue-950 hover:text-slate-400 mt-2' href='https://maps.app.goo.gl/cfDHZnbGACxYHUQ47'
          >
            <TbExternalLink />
          </Link>
        </section>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/"
          className='text-lg text-white ring bg-blue-900 ring-sky-400 ring-offset-2 dark:ring-offset-blue-900 px-6 rounded-full'
        >
          Voltar
        </Link>
      </div>
    </>
  )
}