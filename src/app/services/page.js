import Contact from '@/components/contact/Contact';
import Faq from '@/components/faq/Faq';
import HeroServices from '@/components/hero/HeroServices';
import Pricing from '@/components/pricing/Pricing';
import ChooseUs from '@/components/testimonial/ChooseUs';

export const metadata = {
  title: 'Services - InnoTech',
  description: 'Services pages - InnoTech Company Profile',
};

export default function Services() {
  return (
    <>
      <div className="mt-16 space-y-36">
        <div className="max-w-7xl mx-auto space-y-36 px-8 mobile:px-4">
          <HeroServices />
        </div>
        <div className="bg-cyan-950 text-white mx-auto px-8 mobile:px-4">
          <ChooseUs />
        </div>
        <div className="max-w-7xl mx-auto space-y-36 px-8 mobile:px-4">
          <Pricing />
          <Faq />
          <Contact />
        </div>
      </div>
      <div className="absolute top-64 -left-72 w-142 h-142 rotate-45 bg-cyan-300/30 -z-50 mobile:-left-128 mobile:top-12"></div>
    </>
  );
}
