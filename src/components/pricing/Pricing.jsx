import CustomPricingCard from './CustomPricingCard';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <div className="space-y-24">
      <div className="text-center">
        <div className="text-lg font-bold mobile:text-base mb-4">PRICING PLANS</div>
        <div className="text-4xl font-extrabold mobile:text-2xl">
          The Best Solutions for Our Clients
        </div>
        <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mt-8"></div>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-y-24 tablet:grid-cols-1 tablet:gap-y-8">
        <PricingCard
          name={'UI/UX Design'}
          price={'1200'}
          desc={
            'From wireframing to prototyping, we prioritize user experience to captivate your audience.'
          }
          features={[
            'In-depth client consultation',
            'Wireframing and prototyping',
            'Iterative design process',
            'Final deliverables in various formats',
          ]}
        />

        <PricingCard
          name={'Web Development'}
          price={'2000'}
          desc={
            'Building robust and scalable web applications that align with your business objectives.'
          }
          features={[
            'Custom web development',
            'Frontend and backend expertise',
            'Content Management System integration',
            'Responsive design for various devices',
          ]}
        />

        <PricingCard
          name={'Mobile App Development'}
          price={'2500'}
          desc={
            'Whether for iOS or Android, our team crafts user-friendly and feature-rich apps that resonate with your users.'
          }
          features={[
            'Native or cross-platform development',
            'User-centric design',
            'Integration of emerging technologies',
            'Post-launch support and updates',
          ]}
        />

        <PricingCard
          name={'Quality Assurance'}
          price={'1000'}
          desc={
            'We rigorously test every aspect, from functionality to security, to guarantee a flawless user experience.'
          }
          features={[
            'Comprehensive testing processes',
            'Automated testing tools',
            'User Acceptance Testing (UAT)',
            'Detailed testing documentation',
          ]}
        />

        <div className="col-span-2 tablet:col-span-1">
          <CustomPricingCard
            features={[
              'Consultation and Needs Assessment',
              'Tailored Solutions for Every Budget',
              'Modular Service Packages',
              'Scalable Solutions for Growth',
              'Transparent Pricing Structure',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
