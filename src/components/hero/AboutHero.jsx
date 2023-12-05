import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { MdOutlineEmail } from 'react-icons/md';
import { customNavbar } from '@/lib/flowbiteTheme/customNavbar';

export default function AboutHero() {
  return (
    <Navbar fluid rounded theme={customNavbar}>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle className="tablet:block" />
      <NavbarCollapse className="shadow-sm">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <NavbarLink href="#" className="hidden tablet:block">
          <div className="w-max mx-auto flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer">
            <MdOutlineEmail />
            <span>Get in Touch</span>
          </div>
        </NavbarLink>
      </NavbarCollapse>
      <Link
        href="mailto:fikrinr.tech@gmail.com"
        aria-label="get in touch to InnoTech email"
        className="flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer tablet:hidden"
      >
        <MdOutlineEmail />
        <span>Get in Touch</span>
      </Link>
    </Navbar>
  );
}
