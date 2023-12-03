import Image from "next/image";

export default function TestimonialCompany() {
  return (
    <div className='flex items-center justify-center space-x-12 lg:flex-col'>
      <div className='flex flex-col items-center space-y-2 justify-center mx-auto'>
        <div className='text-4xl font-bold text-cyan-600'>200+</div>
        <div className='text-sm'>Trusted Companies</div>
      </div>
      <div className='flex gap-x-4 lg:flex-col lg:justify-center lg:items-center'>
        <Image src='/dropbox.svg' alt='' width={160} height={32} className='opacity-40 mr-12' />
        <Image src='/slack.svg' alt='' width={160} height={64} className='opacity-40 mr-12' />
        <Image src='/mercedes.svg' alt='' width={160} height={64} className='opacity-60 mr-12' />
        <Image src='/wework.svg' alt='' width={160} height={64} className='opacity-40 mr-12' />
      </div>
    </div>
  );
}
