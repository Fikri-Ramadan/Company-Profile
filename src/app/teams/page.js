import Contact from '@/components/contact/Contact';
import HeroTeams from '@/components/hero/HeroTeams';
import TeamSkills from '@/components/skills/TeamSkills';
import AllTeams from '@/components/teams/AllTeams';
import { getRandomUsers } from '@/utils/randomUsers';

export const metadata = {
  title: 'Teams - InnoTech',
  description: 'Teams page - InnoTech Company Profile',
};

export default async function Teams() {
  const { results: users } = await getRandomUsers(19);

  return (
    <div className="space-y-36">
      <div className="pt-4 px-8 mobile:px-4 tablet:pb-16 tablet:bg-cyan-950 tablet:text-white">
        <HeroTeams users={users.slice(0, 3)} />
      </div>
      <div className="max-w-7xl mx-auto space-y-36 px-8">
        <TeamSkills />
        <AllTeams users={users.slice(3)} />
        <Contact />
      </div>
    </div>
  );
}
