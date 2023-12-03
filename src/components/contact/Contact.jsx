import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/build.jpg"
        alt=""
        width={1280}
        height={320}
        className="h-96 object-cover rounded-2xl"
      />
      <div className="absolute top-0 left-0 w-full h-96 flex flex-col justify-center items-center space-y-12 bg-black/70 rounded-2xl">
        <span className="text-4xl text-white font-bold md:text-xl">
          Let&apos;s Build Something Together
        </span>
        <Link
          href="mailto:fikrinr.tech@gmail.com"
          className="bg-cyan-500 text-white p-4 hover:bg-cyan-600"
        >
          Reach out now
        </Link>
      </div>
    </div>
  );
}
