import Image from 'next/image';

export default function TestimonialCard({ name, job, picture, message }) {
  return (
    <div className='flex flex-col justify-start bg-cyan-700 text-center space-y-4 p-8 h-112 lg:h-fit lg:max-h-128'>
      <Image
        src={picture}
        alt=""
        width={64}
        height={64}
        className="rounded-full mx-auto"
      />
      <div className='font-bold text-xl'>{name}</div>
      <div className='font-light text-slate-300'>{job}</div>
      <div>{message}</div>
    </div>
  );
}
