import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import Mission from '@/components/mission/Mission';
import Services from '@/components/services/Services';
import Testimonial from '@/components/testimonial/Testimonial';
import TestimonialCompany from '@/components/testimonial/TestimonialCompany';

export default function Home() {
  return (
    <div className="mt-4 space-y-36">
      <div className="max-w-7xl mx-auto space-y-36 px-8">
        <Hero />
        <Mission />
        <Services />
      </div>
      <div className="bg-cyan-950 mx-auto px-8">
        <Testimonial />
      </div>
      <div className="max-w-7xl mx-auto space-y-36 px-8">
        <TestimonialCompany />
        <Contact />
      </div>
    </div>
  );
}
