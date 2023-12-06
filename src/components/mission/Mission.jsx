import Image from 'next/image';

export default function Mission() {
  return (
    <div className="mx-auto flex gap-16 items-center tablet:flex-col tablet:text-center">
      <div className="flex-1 relative">
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={1280}
          height={500}
          className="h-96 object-cover rounded-md tablet:h-112"
        />
        <div className='absolute w-full h-full top-0 left-0 bg-black/10 rounded-md'></div>
      </div>
      <div className="flex-1 flex flex-col gap-y-4">
        <span className="text-2xl font-medium tracking-wide">OUR MISSION</span>
        <span className="text-4xl font-semibold tracking-wider">
          Turn Ideas into Reality
        </span>
        <span className="mt-4">
          At InnoTech Solutions, our mission is to empower businesses through
          transformative technology solutions. We are dedicated to pioneering
          innovation, delivering cutting-edge consulting services, and helping
          our clients navigate the ever-evolving landscape of the digital world.
          Committed to excellence, creativity, and collaboration, we strive to
          be the catalyst for positive change, ensuring our clients not only
          adapt but thrive in an increasingly competitive and dynamic market.
        </span>
      </div>
    </div>
  );
}
