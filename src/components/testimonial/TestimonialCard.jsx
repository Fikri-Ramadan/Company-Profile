import Image from 'next/image';

export default function TestimonialCard({ name, job, picture, message }) {
  return (
    <div className='flex flex-col justify-start bg-cyan-800 text-center space-y-4 p-8 h-112 rounded-md tablet:h-fit tablet:max-h-142'>
      <Image
        src={picture}
        alt=""
        width={64}
        height={64}
        className="rounded-full mx-auto"
      />
      <div className='font-bold text-xl'>{name}</div>
      <div className='font-light'>- {job} -</div>
      <div>{message}</div>
    </div>
  );
}
