import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={1280}
        height={320}
        className="h-96 object-cover rounded-2xl"
      />
      <div className="absolute top-0 left-0 w-full h-96 flex flex-col justify-center items-center space-y-12 bg-black/70 rounded-2xl">
        <span className="text-4xl text-white font-bold md:text-base">
          Let&apos;s Build Something Together
        </span>
        <Link
          href="mailto:fikrinr.tech@gmail.com"
          aria-label="send an email to InnoTech"
          className="bg-cyan-500 text-black font-medium p-4 hover:bg-cyan-600 rounded-md"
        >
          Send an Email
        </Link>
      </div>
    </div>
  );
}
