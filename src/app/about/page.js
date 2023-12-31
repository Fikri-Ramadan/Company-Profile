import CompanyStories from '@/components/stories/CompanyStories';
import CompanyTimeline from '@/components/companyTimeline/CompanyTimeline';
import CompanyValue from '@/components/companyValue/CompanyValue';
import Teams from '@/components/teams/Teams';
import Contact from '@/components/contact/Contact';

export const metadata = {
  title: 'About - InnoTech',
  description: 'About page - InnoTech Company Profile',
};

export default function About() {
  return (
    <div className="mt-4 space-y-36">
      <div className="max-w-7xl mx-auto space-y-36 px-8 mobile:px-4">
        <CompanyStories />
      </div>
      <div className="bg-cyan-950 mx-auto px-8 mobile:px-4">
        <CompanyTimeline />
      </div>
      <div className="max-w-7xl mx-auto space-y-36 px-8 mobile:px-4">
        <CompanyValue />
      </div>
      <div className="bg-cyan-950 mx-auto px-8 mobile:px-4">
        <Teams />
      </div>
      <div className="max-w-7xl mx-auto space-y-36 px-8 mobile:px-4">
        <Contact />
      </div>
    </div>
  );
}
