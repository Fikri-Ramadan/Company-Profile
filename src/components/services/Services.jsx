import Link from 'next/link';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { TbDeviceMobileCode } from 'react-icons/tb';

export default function Services() {
  return (
    <div className="flex items-center relative tablet:flex-col tablet:gap-16 tablet:text-center">
      <div className="w-128 h-96 bg-cyan-200/25 absolute -z-10 right-24 top-16 origin-center rotate-45 tablet:right-36 mobile:w-96"></div>
      <div className="flex-1 flex flex-col">
        <span className="text-base font-semibold tracking-wide mb-8 tablet:text-base">
          OUR SERVICES
        </span>
        <span className="text-5xl font-extrabold mb-3 mobile:text-4xl">What Services</span>
        <span className="text-5xl font-extrabold mb-8 mobile:text-4xl">We Offer For You</span>
        <Link
          href="/services"
          className="bg-cyan-400 w-max rounded-md px-4 py-2 shadow-md hover:bg-cyan-500 tablet:mx-auto"
        >
          Explore More
        </Link>
      </div>
      <div className="flex-auto max-w-2xl grid grid-rows-4 grid-flow-col gap-4 tablet:mx-auto mobile:flex mobile:flex-col mobile:items-center">
        <div className="row-start-2 row-span-2 w-48 h-64 bg-slate-50 p-6 shadow-lg mobile:w-11/12">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <SiMaterialdesignicons className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold">UI/UX Design</span>
            <span className="font-light text-xs mobile:text-sm">
              focus on understanding your audience and translating your brand
              into an engaging digital interface.
            </span>
          </div>
        </div>
        <div className="row-end-3 row-span-2 w-48 h-64 bg-slate-50 p-6 shadow-lg mobile:w-11/12">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <FaLaptopCode className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold">Web Development</span>
            <span className="font-light text-xs mobile:text-sm">
              we specialize in developing robust and scalable web applications
              tailored to meet your business objectives.{' '}
            </span>
          </div>
        </div>
        <div className="row-start-3 row-end-5 w-48 h-64 bg-slate-50 p-6 shadow-lg mobile:w-11/12">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <TbDeviceMobileCode className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold">Mobile App Development</span>
            <span className="font-light text-xs mobile:text-sm">
              crafts innovative and user-friendly mobile applications for
              various platforms.
            </span>
          </div>
        </div>
        <div className="row-start-2 row-end-4  w-48 h-64 bg-slate-50 p-6 shadow-lg mobile:w-11/12">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <FaGear className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold">Quality Assurance and Testing</span>
            <span className="font-light text-xs mobile:text-sm">
              delivering high-quality software through rigorous testing
              processes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
