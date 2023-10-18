'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const escondido = 'hidden'
  const visivel = 'z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
  return (
    <>
      <nav>
        <div>
          <Link href="/practice" className="">Nossa Clínica</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
          <span className="sr-only">Carine</span>
          <Image className="w-16 h-16 rounded-full" src="/base_carine.png" alt="Carine avatar" width={200} height={200} />
        </button>

        <div className={isOpen ? visivel : escondido}>
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Dra. Carine Dall'Igna</div>
            <Link className="font-medium truncate" href="/locations">Zona Sul (Tristeza)</Link>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}