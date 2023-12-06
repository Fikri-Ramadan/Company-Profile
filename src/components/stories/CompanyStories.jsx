import Image from 'next/image';

export default function CompanyStories() {
  return (
    <div className="relative">
      <Image
        src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={1280}
        height={500}
        priority
        className="object-cover h-160 rounded-2xl mobile:h-142"
      />
      <div className="absolute top-0 left-0 w-full h-160 pl-32 flex flex-col gap-8 items-start justify-center bg-black/60 rounded-2xl mobile:h-142 mobile:pl-0 mobile:text-center mobile:items-center">
        <span className="text-lg text-white font-medium">Our Story</span>
        <span className="w-1/2 text-4xl text-white font-extrabold mobile:text-2xl mobile:w-10/12">
          Emerged as a beacon of innovation and excellence
        </span>
        <span className="w-1/2 text-white font-light mobile:w-10/12">
          Our story began in 2010 when a group of passionate tech enthusiasts
          came together with a shared vision - to empower businesses through
          transformative technology solutions.
        </span>
      </div>
    </div>
  );
}
