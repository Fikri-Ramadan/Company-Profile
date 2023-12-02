import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="object-cover max-h-160 rounded-2xl"
        src="/hero.jpg"
        alt="hero img"
        width={1280}
        height={500}
      />
      <div className="absolute top-0 left-0 w-full h-160 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
        <span className="text-7xl text-white font-bold mb-2">
          Empowering Businesses
        </span>
        <span className="text-7xl text-white font-bold">through Innovation</span>
        <span className="text-2xl text-white font-light mt-12">
          Founded in 2010, InnoTech has been a pioneer
        </span>
        <span className="text-2xl text-white font-light">
          in transformative technology solutions.
        </span>
        <div className='mt-12 space-x-8'>
          <Link href='/about' className='text-white bg-cyan-600 p-3 hover:bg-cyan-700'>Learn More</Link>
          <Link href='/services' className='text-white border-y-2 border-r-2 p-2 py-3 border-l-4 border-slate-400 hover:bg-slate-50/10'>See our services</Link>
        </div>
      </div>
    </div>
  );
}
