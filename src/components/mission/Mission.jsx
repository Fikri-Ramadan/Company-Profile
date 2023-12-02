import Image from "next/image";

export default function Mission() {
  return (
    <div className="mx-auto flex items-center">
      <div className='flex-1'>
        <Image src='/mission.jpg' alt='' width={500} height={500} className='h-96 object-cover' />
      </div>
      <div className="flex-1 flex flex-col gap-y-4">
        <span className="text-2xl font-medium tracking-wide">OUR MISSION</span>
        <span className="text-4xl font-semibold tracking-wider">
          Turn Ideas into Reality
        </span>
        <span className='mt-4'>
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
