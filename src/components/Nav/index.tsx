'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [carineIsOpen, setCarineIsOpen] = useState(false)
  const [silviaIsOpen, setSilviaIsOpen] = useState(false)
  const escondido = 'hidden'
  const visivel = 'z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700 dark:divide-gray-600'
  return (
    <>
      <nav className="flex flex-row justify-around gap-5 mt-12">
        <div>
          <Link href="/practice" className="">Nossa Clínica</Link>
        </div>

        <div>
          <button onClick={() => setCarineIsOpen(!carineIsOpen)} className="flex mx-3 text-sm bg-blue-950 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
            <span className="sr-only">Carine</span>
            <Image className="w-40 h-40 rounded-full" src="/base_carine.png" alt="Carine avatar" width={200} height={200} />
          </button>

          <div className={carineIsOpen ? visivel : escondido}>
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
        <div>
          <button onClick={() => setSilviaIsOpen(!silviaIsOpen)} className="flex mx-3 text-sm bg-blue-950 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
            <span className="sr-only">Silvia</span>
            <Image className="w-40 h-40 rounded-full" src="/base_silvia.png" alt="Silvia avatar" width={200} height={200} />
          </button>

          <div className={silviaIsOpen ? visivel : escondido}>
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
  )
}