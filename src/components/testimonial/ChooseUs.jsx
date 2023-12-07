import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoBagCheck } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
      <div className="text-4xl font-extrabold text-center tracking-wider mobile:text-3xl">
        Why Choose Us
      </div>
      <div className="flex justify-center items-start gap-8 tablet:flex-col tablet:items-center tablet:gap-24">
        <div className="w-1/3 flex flex-col items-center gap-8 tablet:w-11/12">
          <div>
            <RiCustomerService2Fill className="text-7xl" />
          </div>
          <div className="font-bold text-xl tracking-wider mobile:text-lg">
            24/7 Customer Support
          </div>
          <div className="font-light text-sm text-center mobile:text-base">
            Our dedicated customer support team is available 24/7 to address
            your inquiries, provide assistance, and ensure a seamless
            experience. Your satisfaction is our priority, anytime, anywhere.
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center gap-8 tablet:w-11/12">
          <div>
            <IoBagCheck className="text-7xl" />
          </div>
          <div className="font-bold text-xl tracking-wider mobile:text-lg">
            782 Projects Completed
          </div>
          <div className="font-light text-sm text-center mobile:text-base">
            With 782 successfully completed projects, we take pride in our track
            record of delivering innovative solutions that meet and exceed our
            clients&apos; expectations.
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center gap-8 tablet:w-11/12">
          <div>
            <FaMapMarkerAlt className="text-7xl" />
          </div>
          <div className="font-bold text-xl tracking-wider mobile:text-lg">
            27 Offices Worldwide
          </div>
          <div className="font-light text-sm text-center mobile:text-base">
            enables us to serve clients efficiently, foster collaboration, and
            stay connected with the ever-evolving needs of businesses across the
            globe. Wherever you are, we&apos;re there too.
          </div>
        </div>
      </div>
    </div>
  );
}
