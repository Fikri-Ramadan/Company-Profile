import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaPhoneAlt  } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mt-8 border-y-2">
      <div className="max-w-7xl px-8 py-6 min-h-72 mx-auto flex items-start gap-12 tablet:gap-x-6 tablet:flex-col tablet:text-center tablet:items-center">
        <div className="w-1/3 space-y-4 tablet:w-3/5">
          <div className="font-bold tracking-widest text-4xl mobile:text-xl">InnoTech</div>
          <div className="text-sm text-gray-500">
            Founded in 2010, InnoTech has been a pioneer in transformative
            technology solutions.
          </div>
          <div className="flex space-x-4 text-gray-600 tablet:justify-center">
            <Link href='https://www.instagram.com/innotech' aria-label='link to InnoTech instagram'>
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href='https://www.facebook.com/innotech' aria-label='link to InnoTech facebook'>
              <FaFacebookSquare className="text-2xl" />
            </Link>
            <Link href='https://www.youtube.com/innotech' aria-label='link to InnoTech youtube'>
              <FaYoutubeSquare className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="w-1/5 space-y-4 flex flex-col tablet:w-3/5">
          <div className="font-bold">Site Menu</div>
          <div className="flex flex-col space-y-2 text-gray-500 mobile:space-y-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/teams">Teams</Link>
          </div>
        </div>
        <div className="w-1/5 space-y-4 flex flex-col tablet:w-3/5">
          <div className="font-bold">Services</div>
          <div className="flex flex-col space-y-2 text-gray-500 mobile:space-y-4">
            <Link href="/services">UI/UX Design</Link>
            <Link href="/services">Web Development</Link>
            <Link href="/services">Mobile App Development</Link>
            <Link href="/services">Quality Assurance and Testing</Link>
          </div>
        </div>
        <div className="w-1/5 space-y-4 flex flex-col tablet:w-3/5 tablet:items-center">
          <div className="font-bold">Contact Us</div>
          <div className="flex flex-col space-y-2 text-gray-500 mobile:space-y-4">
            <div>Need help or have question?</div>
            <div className='flex items-center  tablet:justify-center'>
              <span><FaPhoneAlt /></span>
              <span className='text-md'>+628177777777</span>
            </div>
            <div className='flex items-center gap-2 tablet:justify-center'>
              <span><MdEmail /></span>
              <span className='text-md'>fikrinr.tech@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto flex justify-center mt-8 text-gray-500">
        Copyright © 2023 - Fikri Ramadan
      </div>
    </div>
  );
}
