import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="object-cover h-160 rounded-2xl md:h-142"
        src="/hero.jpg"
        alt="hero img"
        width={1280}
        height={500}
      />
      <div className="absolute top-0 left-0 w-full h-160 flex flex-col items-center justify-center bg-black/50 rounded-2xl md:h-142">
        <span className="text-7xl text-white font-bold mb-2 lg:text-5xl md:text-xl md:font-extrabold">
          Empowering Businesses
        </span>
        <span className="text-7xl text-white font-bold lg:text-5xl md:text-xl md:font-extrabold">
          through Innovation
        </span>
        <span className="text-2xl text-white font-light mt-12 lg:text-xl md:text-xs">
          Founded in 2010, InnoTech has been a pioneer
        </span>
        <span className="text-2xl text-white font-light lg:text-xl md:text-sm">
          in transformative technology solutions.
        </span>
        <div className="flex mt-12 items-center gap-8 md:flex-col md:gap-4">
          <Link
            href="/about"
            className="text-center text-white bg-cyan-600 py-3 px-8 hover:bg-cyan-700 md:text-sm md:px-4"
          >
            Learn More
          </Link>
          <Link
            href="/services"
            className="text-white border-y-2 border-r-2 p-2 py-3 border-l-4 border-slate-400 hover:bg-slate-50/10 md:text-sm md:px-4"
          >
            See our services
          </Link>
        </div>
      </div>
    </div>
  );
}
