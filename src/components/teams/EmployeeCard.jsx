import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function EmployeeCard({
  picture,
  firstName,
  lastName,
  jobTitle,
}) {
  return (
    <div className="relative w-72 bg-cyan-600/90 flex-1 h-80 flex flex-col justify-center items-center rounded-xl shadow-md tablet:bg-cyan-700/90 mobile:py-8">
      <div className="relative">
        <Image
          src={picture}
          alt=""
          width={100}
          height={100}
          className="w-36 h-36 rounded-full"
        />
        <div className="absolute w-full h-full bg-black/30 top-0 rounded-full"></div>
      </div>
      <div className="text-center mt-8 space-y-2 text-black">
        <div className="text-xl font-medium">{`${firstName} ${lastName}`}</div>
        <div className="tracking-wider font-light">{jobTitle}</div>
        <div className="flex justify-center gap-4">
          <Link href={'https://www.linkedin.com'} aria-label='go to employee linkedin'>
            <FaLinkedin className="text-3xl" />
          </Link>
          <Link href={'https://www.x.com'} aria-label='go to employee twitter'>
            <FaSquareXTwitter className="text-3xl" />
          </Link>
          <Link href={'https://www.instagram.com'} aria-label='go to employee instagram'>
            <FaSquareInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
