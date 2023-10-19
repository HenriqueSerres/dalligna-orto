import Header from "@/components/Head";
import Image from "next/image";

export default function Carine() {
  return (
    <>
      <Header />
      <div className="flex flex-1 justify-center mt-4">
        <Image src="/logo_carine_horiz.png" alt="Carine logo" width={400} height={400} />
      </div>
    </>
  )
}
