import Image from 'next/image';

export default function TestimonialCompany() {
  return (
    <div className="flex gap-x-4 justify-center tablet:flex-col tablet:items-center">
      <div className="flex items-center justify-center space-x-12 tablet:flex-col tablet:space-x-0">
        <div className="flex flex-col items-center space-y-2 justify-center mx-auto tablet:mb-6">
          <div className="text-4xl font-bold text-cyan-600">200+</div>
          <div className="text-sm">Trusted Companies</div>
        </div>
        <Image
          src="/dropbox.svg"
          alt=""
          width={160}
          height={32}
          className="opacity-40"
        />
        <Image
          src="/slack.svg"
          alt=""
          width={160}
          height={64}
          className="opacity-40"
        />
        <Image
          src="/mercedes.svg"
          alt=""
          width={160}
          height={64}
          className="opacity-60"
        />
        <Image
          src="/wework.svg"
          alt=""
          width={160}
          height={64}
          className="opacity-40"
        />
      </div>
    </div>
  );
}
