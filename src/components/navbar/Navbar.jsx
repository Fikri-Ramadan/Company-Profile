'use client';

import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { customNavbar } from '@/lib/flowbiteTheme/customNavbar';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between bg-white shadow-sm tablet:h-auto tablet:py-5">
        <NavbarUi fluid rounded theme={customNavbar}>
          <NavbarBrand as={Link} href="/">
            <span className="font-bold tracking-widest text-4xl mobile:text-2xl dark:text-white">
              InnoTech
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="tablet:shadow-sm">
            <NavbarLink href="/" active={pathname === '/'}>
              Home
            </NavbarLink>
            <NavbarLink href="/about" active={pathname.startsWith('/about')}>
              About
            </NavbarLink>
            <NavbarLink href="/services" active={pathname.startsWith('/services')}>Services</NavbarLink>
            <NavbarLink href="/teams" active={pathname.startsWith('/teams')}>Teams</NavbarLink>
            <Link
              href="mailto:fikrinr.tech@gmail.com"
              className="hidden w-max mx-auto tablet:block"
              aria-label="get in touch to InnoTech email"
            >
              <div className="w-max mx-auto flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer">
                <MdOutlineEmail />
                <span>Get in Touch</span>
              </div>
            </Link>
          </NavbarCollapse>
          <Link
            href="mailto:fikrinr.tech@gmail.com"
            aria-label="get in touch to InnoTech email"
            className="flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer tablet:hidden"
          >
            <MdOutlineEmail />
            <span>Get in Touch</span>
          </Link>
        </NavbarUi>
      </div>
    </div>
  );
}

// <div className="font-bold tracking-widest text-4xl mobile:text-2xl">
//   <Link href='/'>InnoTech</Link>
// </div>
// <div className="flex space-x-12 tablet:hidden">
//   <Link
//     className="text-gray-700 font-medium hover:text-cyan-800"
//     href="/"
//   >
//     Home
//   </Link>
//   <Link
//     className="text-gray-700 font-medium hover:text-cyan-800"
//     href="/about"
//   >
//     About
//   </Link>
//   <Link
//     className="text-gray-700 font-medium hover:text-cyan-800"
//     href="/services"
//   >
//     Services
//   </Link>
//   <Link
//     className="text-gray-700 font-medium hover:text-cyan-800"
//     href="/teams"
//   >
//     Teams
//   </Link>
// </div>
// <Link
//   href="mailto:fikrinr.tech@gmail.com"
//   aria-label="get in touch to InnoTech email"
// >
//   <div className="flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer tablet:hidden">
//     <MdOutlineEmail />
//     <span>Get in Touch</span>
//   </div>
// </Link>
// <div className="hidden tablet:block">
//   <RxHamburgerMenu
//     className="text-3xl"
//     onClick={() => setOpen(!isOpen)}
//   />
//   <div
//     className={`absolute w-full h-screen top-20 left-0 ${
//       !isOpen && 'hidden'
//     }`}
//   >
//     <div className="bg-slate-100 py-12 px-16 flex flex-col space-y-12 text-center text-gray-800">
//       <Link
//         className="text-gray-700 text-xl font-medium hover:text-cyan-800"
//         href="/"
//         onClick={() => setOpen(false)}
//       >
//         Home
//       </Link>
//       <Link
//         className="text-gray-700 text-xl font-medium hover:text-cyan-800"
//         href="/about"
//         onClick={() => setOpen(false)}
//       >
//         About
//       </Link>
//       <Link
//         className="text-gray-700 text-xl font-medium hover:text-cyan-800"
//         href="/services"
//         onClick={() => setOpen(false)}
//       >
//         Services
//       </Link>
//       <Link
//         className="text-gray-700 text-xl font-medium hover:text-cyan-800"
//         href="/teams"
//         onClick={() => setOpen(false)}
//       >
//         Teams
//       </Link>
//       <Link
//         href="mailto:fikrinr.tech@gmail.com"
//         aria-label="get in touch to InnoTech email"
//       >
//         <div className="w-max mx-auto flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer">
//           <MdOutlineEmail />
//           <span>Get in Touch</span>
//         </div>
//       </Link>
//     </div>
//   </div>
// </div>
