import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="object-cover h-160 rounded-2xl md:h-142"
        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero img"
        width={1280}
        height={500}
        priority
      />
      <div className="absolute top-0 left-0 w-full h-160 flex flex-col items-center justify-center bg-black/50 rounded-2xl md:h-142">
        <span className="text-7xl text-white font-bold mb-2 lg:text-5xl md:text-xl md:font-extrabold">
          Empowering Businesses
        </span>
        <span className="text-7xl text-white font-bold lg:text-5xl md:text-xl md:font-extrabold">
          through Innovation
        </span>
        <span className="text-2xl text-white font-light mt-12 lg:text-xl md:hidden">
          Founded in 2010, InnoTech has been a pioneer
        </span>
        <span className="text-2xl text-white font-light lg:text-xl md:hidden">
          in transformative technology solutions.
        </span>
        <span className="hidden md:inline md:text-sm md:text-white md:font-light md:text-center md:mt-8 md:px-4">
          Founded in 2010, InnoTech has been a pioneer in transformative
          technology solutions.
        </span>
        <div className="flex items-center mt-12 gap-8 md:flex-col md:gap-4">
          <Link
            href="/about"
            className="text-center text-black font-medium bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-md md:text-sm md:px-4"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white border-y-2 border-r-2 p-2 py-3 border-l-4 rounded-md border-slate-400 hover:bg-slate-50/10 md:text-sm md:px-4"
          >
            See our services
          </Link>
        </div>
      </div>
    </div>
  );
}
