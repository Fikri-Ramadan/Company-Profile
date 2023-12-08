import { getRandomUsers } from '@/utils/randomUsers';
import EmployeeCard from './EmployeeCard';

export default async function AllTeams({ users }) {
  const jobTitles = [
    'Senior UI/UX Designer',
    'Visual Design Specialist',
    'User Experience Researcher',
    'Interaction Design Lead',
    'Senior Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cross-Platform App Developer',
    'Senior Mobile App Architect',
    'Quality Assurance Engineer',
    'Test Automation Specialist',
    'QA Analyst',
    'Performance Testing Engineer',
  ];

  return (
    <div className="space-y-16">
      <div className="text-5xl font-extrabold tracking-wider text-center mobile:text-3xl">
        Several Team Member
      </div>
      <div>
        <div className="grid grid-cols-4 gap-8 place-items-center tablet:grid-cols-2 mobile:grid-cols-1">
          {users.map((user, i) => {
            return (
              <EmployeeCard
                firstName={user.name.first}
                lastName={user.name.last}
                picture={user.picture.large}
                jobTitle={
                  jobTitles[Math.floor(Math.random() * jobTitles.length)]
                }
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
