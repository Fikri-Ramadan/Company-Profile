import Contact from "@/components/contact/Contact";
import HeroTeams from "@/components/hero/HeroTeams";
import TeamSkills from "@/components/skills/TeamSkills";
import AllTeams from "@/components/teams/AllTeams";

export const metadata = {
  title: 'Teams - InnoTech',
  description: 'Teams page - InnoTech Company Profile',
};

export default function Teams() {
  return (
    <div className="space-y-36">
      <div className="pt-4 px-8 mobile:px-4 tablet:pb-16 tablet:bg-cyan-950 tablet:text-white">
        <HeroTeams />
      </div>
      <div className="max-w-7xl mx-auto space-y-36 px-8">
        <TeamSkills />
        <AllTeams />
        <Contact />
      </div>
    </div>
  );
}
