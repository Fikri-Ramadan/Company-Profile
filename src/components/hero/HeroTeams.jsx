import { getRandomUsers } from '@/utils/randomUsers';
import Image from 'next/image';
import EmployeeCard from '../teams/EmployeeCard';

export default async function HeroTeams() {
  const { results: users } = await getRandomUsers(3);
  const jobTitles = [
    'Visual Design Specialist',
    'Full-Stack Developer',
    'Quality Assurance Engineer',
  ];

  return (
    <div className="relative max-w-7xl mx-auto">
      <Image
        className="object-cover h-160 rounded-2xl tablet:hidden"
        src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero img"
        width={1280}
        height={500}
        priority
      />
      <div className="absolute top-0 left-0 w-full h-160 px-16 flex flex-col justify-center gap-8 text-white bg-black/50 rounded-2xl tablet:gap-16 tablet:h-fit tablet:static tablet:bg-transparent mobile:px-0">
        <div className="w-1/2 text-6xl font-extrabold tablet:w-full tablet:text-center mobile:text-3xl">
          Meet Our Leadership Team
        </div>
        <div className="grid grid-cols-3 gap-8 place-items-center tablet:grid-cols-2 mobile:grid-cols-1">
          <EmployeeCard
            firstName={users[0].name.first}
            lastName={users[0].name.last}
            picture={users[0].picture.large}
            jobTitle={jobTitles[0]}
          />
          <EmployeeCard
            firstName={users[1].name.first}
            lastName={users[1].name.last}
            picture={users[1].picture.large}
            jobTitle={jobTitles[1]}
          />
          <div className="tablet:col-span-2 mobile:col-span-1">
            <EmployeeCard
              firstName={users[2].name.first}
              lastName={users[2].name.last}
              picture={users[2].picture.large}
              jobTitle={jobTitles[2]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
