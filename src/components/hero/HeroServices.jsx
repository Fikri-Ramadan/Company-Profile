import { FaLaptopCode } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { SiMaterialdesignicons } from 'react-icons/si';
import { TbDeviceMobileCode } from 'react-icons/tb';
import { List, ListItem } from 'flowbite-react';

export default function HeroServices() {
  return (
    <div className="space-y-24 relative">
      <div className="text-center space-y-4">
        <div className="font-bold">OUR SERVICES</div>
        <div className="text-4xl font-extrabold mobile:text-2xl">
          We create Best Digital Products
        </div>
        <div className='font-light'>
          Discover a comprehensive suite of services designed to meet your
          unique needs and drive innovation.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-1 tablet:gap-8">
        <div className="w-full h-112 mx-auto bg-slate-50/80 p-6 shadow-md rounded-md tablet:w-11/12 mobile:h-fit max-h-142 mobile:text-center">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <SiMaterialdesignicons className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold text-lg">UI/UX Design</span>
            <span className="font-light mobile:text-sm">
              InnoTech Solutions excels in creating intuitive and visually
              stunning user experiences. Our UI/UX design services focus on
              understanding your audience and translating your brand into an
              engaging digital interface.
            </span>
            <div className="w-20 h-1 bg-cyan-500 mx-auto tablet:my-4"></div>
            <div>
              <List className="text-left">
                <ListItem>User-Centric Design</ListItem>
                <ListItem>Wireframing and Prototyping</ListItem>
                <ListItem>Responsive Design</ListItem>
                <ListItem>Brand Integration</ListItem>
                <ListItem>Usability Testing</ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="w-full h-112 mx-auto bg-slate-50/80 p-6 shadow-md rounded-md tablet:w-11/12 mobile:h-fit max-h-142 mobile:text-center">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <FaLaptopCode className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold text-lg">Web Development</span>
            <span className="font-light mobile:text-sm">
              we specialize in developing robust and scalable web applications
              tailored to meet your business objectives. Our web development
              services encompass a wide range of technologies and platforms.
            </span>
            <div className="w-20 h-1 bg-cyan-500 mx-auto tablet:my-4"></div>
            <div>
              <List className="text-left">
                <ListItem>Custom Web Solutions</ListItem>
                <ListItem>Frontend and Backend Development</ListItem>
                <ListItem>Content Management Systems</ListItem>
                <ListItem>E-commerce Solutions</ListItem>
                <ListItem>Scalability</ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="w-full h-112 mx-auto bg-slate-50/80 p-6 shadow-md rounded-md tablet:w-11/12 mobile:h-fit max-h-142 mobile:text-center">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <TbDeviceMobileCode className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold text-lg">Mobile App Development</span>
            <span className="font-light mobile:text-sm">
              InnoTech Solutions crafts innovative and user-friendly mobile
              applications for various platforms. Our mobile app development
              services encompass everything from conceptualization to
              deployment.
            </span>
            <div className="w-20 h-1 bg-cyan-500 mx-auto tablet:my-4"></div>
            <div>
              <List className="text-left">
                <ListItem>Cross-Platform Development</ListItem>
                <ListItem>User-Centric Design</ListItem>
                <ListItem>Native App Development</ListItem>
                <ListItem>Integration of Emerging Technologies</ListItem>
                <ListItem>App Maintenance and Support</ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="w-full h-112 mx-auto bg-slate-50/80 p-6 shadow-md rounded-md tablet:w-11/12 mobile:h-fit max-h-142 mobile:text-center">
          <div className="w-12 h-12 bg-cyan-300 rounded-full mobile:mx-auto">
            <FaGear className="w-8 h-8" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="font-bold text-lg">
              Quality Assurance and Testing
            </span>
            <span className="font-light mobile:text-sm">
              InnoTech Solutions places a strong emphasis on delivering
              high-quality software through rigorous testing processes. Our QA
              and testing services are designed to identify and rectify issues
              before deployment.
            </span>
            <div className="w-20 h-1 bg-cyan-500 mx-auto tablet:my-4"></div>
            <div>
              <List className="text-left">
                <ListItem>Comprehensive Testing</ListItem>
                <ListItem>Automated Testing</ListItem>
                <ListItem>User Acceptance Testing</ListItem>
                <ListItem>Continuous Improvement</ListItem>
                <ListItem>Documentation</ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
