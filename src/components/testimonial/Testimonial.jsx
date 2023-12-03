import { getRandomUsers } from '@/utils/randomUsers';
import TestimonialCard from './TestimonialCard';

export default async function Testimonial() {
  const { results: users } = await getRandomUsers(2);

  return (
    <div className="py-24 max-w-7xl mx-auto">
      <div className="text-center text-white mb-16">
        <span className="text-4xl font-bold md:text-3xl">
          Best Reasons To Choose Our Services
        </span>
      </div>
      <div className="text-white flex justify-center md:flex-col md:gap-16">
        <div className="flex-1 flex flex-col items-center gap-y-6">
          <span className="text-6xl">13+</span>
          <span className="text-xl font-medium">Years of Experience</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-y-6 border-x-4 border-slate-600 md:border-none">
          <span className="text-6xl">3k+</span>
          <span className="text-xl font-medium">Happy Clients</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-y-6">
          <span className="text-6xl">100%</span>
          <span className="text-xl font-medium">Satisfaction</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 text-white mt-16 md:flex-col ">
        <div className="w-1/3 lg:w-2/5 md:w-11/12">
          <TestimonialCard
            picture={users[0].picture.large}
            name={`${users[0].name.first} ${users[0].name.last}`}
            job={'Quality Assurance Specialist'}
            message={
              '"As a QA professional, I appreciate the dedication to quality exhibited by InnoTech Solutions. Their testing processes are thorough, and the attention to detail ensures that the software they deliver is robust and reliable. It\'s refreshing to work with a company so committed to excellence."'
            }
          />
        </div>
        <div className="w-1/3 lg:w-2/5 md:w-11/12">
          <TestimonialCard
            name={`${users[1].name.first} ${users[1].name.last}`}
            picture={users[1].picture.large}
            job={'Founder of TechStart Innovations'}
            message={
              '"InnoTech Solutions delivered beyond our expectations in web development. Their team\'s attention to detail and commitment to creating a scalable and secure platform for us was exceptional. I highly recommend their services for anyone seeking top-notch web development."'
            }
          />
        </div>
      </div>
    </div>
  );
}
