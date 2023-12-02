import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 items-center flex justify-between bg-white shadow-sm">
        <div className="font-bold tracking-widest text-4xl">InnoTech</div>
        <div className="flex space-x-12">
          <Link
            className="text-gray-700 font-medium hover:text-cyan-800"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-700 font-medium hover:text-cyan-800"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-gray-700 font-medium hover:text-cyan-800"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-gray-700 font-medium hover:text-cyan-800"
            href="/teams"
          >
            Teams
          </Link>
        </div>
        <div className="flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-2xl text-white font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer">
          <MdOutlineEmail />
          <span>Email</span>
        </div>
      </div>
    </div>
  );
}
