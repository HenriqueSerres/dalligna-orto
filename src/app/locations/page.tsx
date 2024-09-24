import Header from "@/components/Head";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function Locations() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 gap-6 p-4">
        <section className="w-full flex flex-col items-center text-center">
          <h1 className="font-extrabold text-2xl p-3 underline underline-offset-8">Tristeza</h1>
          <p>Av. Wenceslau Escobar, 3033 sala 806</p>
          <p>Porto Alegre - RS</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <FaPhoneAlt />
            <p>(51) 3311.1184 / (51) 99253.9490</p>
          </div>
          <Image className="mt-4 w-full max-w-sm" src="/tristeza_map.png" width={400} height={400} alt="Mapa endereço Tristeza" />
          <Link className="text-3xl text-blue-950 hover:text-slate-400 mt-2" href="https://maps.app.goo.gl/r7RSKDTWpEJZ2WYH6">
            <TbExternalLink />
          </Link>
        </section>

        <div className="mt-6">
          <Image src="/dente_2_2.png" width={200} height={200} alt="Imagem de dente com escova" />
        </div>

        <section className="w-full flex flex-col items-center text-center">
          <h1 className="font-extrabold text-2xl p-3 underline underline-offset-8">Moinhos de Vento</h1>
          <p>Rua Padre Chagas, 185 sala 303</p>
          <p>Porto Alegre - RS</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <FaPhoneAlt />
            <p>(51) 3346.7837 / (51) 99192.3109</p>
          </div>
          <Image className="mt-4 w-full max-w-sm" src="/moinhos_map.png" width={400} height={400} alt="Mapa endereço Moinhos" />
          <Link className="text-3xl text-blue-950 hover:text-slate-400 mt-2" href="https://maps.app.goo.gl/cfDHZnbGACxYHUQ47">
            <TbExternalLink />
          </Link>
        </section>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/" className="text-lg text-white bg-blue-900 px-6 py-2 rounded-full">
          Voltar
        </Link>
      </div>
    </>
  );
}
