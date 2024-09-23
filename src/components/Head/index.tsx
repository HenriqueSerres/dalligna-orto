import Image from "next/image";
import Link from "next/link";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaInstagram, FaMapMarkedAlt } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";

export default function Header() {
  return (
    <header className="flex flex-col items-center px-6 py-4 bg-white">
      <div className="mb-4">
        <Image
          src="/logo_horizontal.png"
          width={200}
          height={80}
          alt="Dall Igna Ortodontia"
        />
      </div>

      <div className="flex flex-row gap-4 mb-4 md:justify-between md:w-full">
        <Link
          href="https://www.instagram.com/dalligna_ortodontia/"
          className="text-2xl text-blue-950 hover:text-slate-300"
        >
          <FaInstagram />
        </Link>
        <Link
          className="text-2xl text-blue-950 hover:text-slate-300"
          href="/locations"
        >
          <FaMapMarkedAlt />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2 text-blue-950 md:flex-row md:justify-between md:w-full">
        <div className="flex items-center gap-2">
          <ImPhoneHangUp />
          <p className="text-sm">(51) 3311.1184</p>
        </div>
        <div className="flex items-center gap-2">
          <BsPhoneVibrateFill />
          <p className="text-sm">(51) 99253.9490</p>
        </div>
      </div>
    </header>
  );
}
