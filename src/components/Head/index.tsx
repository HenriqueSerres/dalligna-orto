import Image from "next/image";
import Link from "next/link";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaInstagram, FaMapMarkedAlt } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

export default function Header() {
  return (
    <header className='flex flex-row px-6 justify-between w-full bg-white'>
      <div className='mt-7 pr-4 flex flex-row gap-5'>
        <Link href='https://www.instagram.com/dalligna_ortodontia/'
          className='text-3xl hover:text-slate-300'
        >
          <FaInstagram />
        </Link>
        <Link className="text-3xl hover:text-slate-300" href='/locations'>
          <FaMapMarkedAlt />
        </Link>
      </div>
      <Image
        src='/logo_horizontal.png'
        width={250}
        height={100}
        alt='Dall Igna Ortodontia'
      />
      <div className="flex flex-row gap-2 mt-7">
        <ImPhoneHangUp />
        <p>(51) 3311.1184</p>
        <BsPhoneVibrateFill />
        <p>(51) 99253.9490</p>
      </div>

    </header>
  )
}