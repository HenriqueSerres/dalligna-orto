'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiHouseLineThin } from "react-icons/pi";

export default function Nav() {
  const [carineIsOpen, setCarineIsOpen] = useState(false);
  const [silviaIsOpen, setSilviaIsOpen] = useState(false);
  const escondido = 'hidden';
  const visivel = 'z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700 dark:divide-gray-600';

  return (
    <>
      <nav className="flex flex-col items-center gap-10 mt-12 md:flex-row md:justify-around">
        <div>
          <Link href="/practice" className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-full text-lg md:text-base hover:bg-blue-700 transition-colors">
            <PiHouseLineThin className="text-white" />
            Nossa Clínica
          </Link>
        </div>

        <div className="relative">
          <button onClick={() => setCarineIsOpen(!carineIsOpen)} className="flex mx-3 text-sm bg-blue-950 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
            <span className="sr-only">Carine</span>
            <Image className="w-32 h-32 md:w-40 md:h-40 rounded-full" src="/base_carine.png" alt="Carine avatar" width={200} height={200} />
          </button>

          <div className={`${carineIsOpen ? visivel : escondido} absolute left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Dra. Carine Dall'Igna</div>
              <Link className="font-medium truncate" href="/locations">Zona Sul (Tristeza)</Link>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <Link href="/carine" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conheça a Dra. Carine</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <button onClick={() => setSilviaIsOpen(!silviaIsOpen)} className="flex mx-3 text-sm bg-blue-950 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
            <span className="sr-only">Silvia</span>
            <Image className="w-32 h-32 md:w-40 md:h-40 rounded-full" src="/base_silvia.png" alt="Silvia avatar" width={200} height={200} />
          </button>

          <div className={`${silviaIsOpen ? visivel : escondido} absolute left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Dra. Silvia Dall'Igna</div>
              <Link className="font-medium truncate" href="/locations">Tristeza / Moinhos de Vento</Link>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <Link href="/silvia" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conheça a Dra. Silvia</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
