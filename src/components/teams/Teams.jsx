import { getRandomUsers } from '@/utils/randomUsers';
import Image from 'next/image';

export default async function Teams() {
  const { results: users } = await getRandomUsers(3);

  return (
    <div className="max-w-7xl mx-auto space-y-16 py-24">
      <div className="text-center space-y-8">
        <div className='text-4xl text-white font-extrabold'>Our Leadership Teams</div>
        <div className='w-1/2 mx-auto text-white text-center font-light'>
          Our teams are the backbone of our success, each member contributing
          their unique skills to create innovative solutions.
        </div>
      </div>
      <div className="w-4/5 mx-auto flex gap-8">
        <div className="relative flex-1 h-80 flex flex-col justify-center items-center rounded-xl shadow-md">
          <div className="absolute w-full h-full bg-cyan-500/10 top-0 rounded-xl"></div>
          <div className="relative">
            <Image
              src={users[0].picture.large}
              alt=""
              width={100}
              height={100}
              className="w-36 h-36 rounded-md"
            />
            <div className="absolute w-full h-full bg-black/30 top-0 rounded-md"></div>
          </div>
          <div className="text-center mt-8 space-y-2 text-white">
            <div className="text-xl font-medium">{`${users[0].name.first} ${users[0].name.last}`}</div>
            <div className="tracking-wider font-light">Visual Design Specialist</div>
          </div>
        </div>

        <div className="relative flex-1 h-80 flex flex-col justify-center items-center rounded-xl shadow-md">
          <div className="absolute w-full h-full bg-cyan-500/10 top-0 rounded-xl"></div>
          <div className="relative">
            <Image
              src={users[1].picture.large}
              alt=""
              width={100}
              height={100}
              className="w-36 h-36 rounded-md"
            />
            <div className="absolute w-full h-full bg-black/30 top-0 rounded-md"></div>
          </div>
          <div className="text-center mt-8 space-y-2 text-white">
            <div className="text-xl font-medium">{`${users[1].name.first} ${users[1].name.last}`}</div>
            <div className="tracking-wider font-light">Full-Stack Developer</div>
          </div>
        </div>

        <div className="relative flex-1 h-80 flex flex-col justify-center items-center rounded-xl shadow-md">
          <div className="absolute w-full h-full bg-cyan-500/10 top-0 rounded-xl"></div>
          <div className="relative">
            <Image
              src={users[2].picture.large}
              alt=""
              width={100}
              height={100}
              className="w-36 h-36 rounded-md"
            />
            <div className="absolute w-full h-full bg-black/30 top-0 rounded-md"></div>
          </div>
          <div className="text-center mt-8 space-y-2 text-white">
            <div className="text-xl font-medium">{`${users[2].name.first} ${users[2].name.last}`}</div>
            <div className="tracking-wider font-light">Quality Assurance Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
