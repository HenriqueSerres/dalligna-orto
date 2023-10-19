import Header from "@/components/Head";
import Image from "next/image";

export default function Silvia() {
  return (
    <>
      <Header />
      <div className="flex flex-1 justify-center mt-4">
        <Image src="/logo_silvia_horiz.png" alt="silvia logo" width={400} height={400} />
      </div>
    </>
  )
}
