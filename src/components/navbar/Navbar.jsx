'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 items-center flex justify-between bg-white shadow-sm">
        <div className="font-bold tracking-widest text-4xl md:text-2xl">
          InnoTech
        </div>
        <div className="flex space-x-12 lg:hidden">
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
        <Link href="mailto:fikrinr.tech@gmail.com" aria-label='link to company email'>
          <div className="flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer lg:hidden">
            <MdOutlineEmail />
            <span>Get in Touch</span>
          </div>
        </Link>
        <div className="hidden lg:block">
          <RxHamburgerMenu
            className="text-3xl"
            onClick={() => setOpen(!isOpen)}
          />
          <div
            className={`absolute w-full h-screen top-20 left-0 ${
              !isOpen && 'hidden'
            }`}
          >
            <div className="bg-slate-100 py-12 px-16 flex flex-col space-y-12 text-center text-gray-800">
              <Link
                className="text-gray-700 text-xl font-medium hover:text-cyan-800"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-gray-700 text-xl font-medium hover:text-cyan-800"
                href="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-gray-700 text-xl font-medium hover:text-cyan-800"
                href="/services"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                className="text-gray-700 text-xl font-medium hover:text-cyan-800"
                href="/teams"
                onClick={() => setOpen(false)}
              >
                Teams
              </Link>
              <div className="w-max mx-auto flex items-center space-x-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-medium tracking-wide hover:bg-cyan-600 hover:cursor-pointer">
                <MdOutlineEmail />
                <span>Get in Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
