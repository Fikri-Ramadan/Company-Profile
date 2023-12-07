import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import Link from 'next/link';

export default function Faq() {
  return (
    <div className="space-y-24">
      <div className="text-center space-y-4">
        <div className="text-lg font-bold mobile:text-base">FAQ</div>
        <div className="text-4xl font-extrabold mobile:text-2xl">
          Frequently Asked Questions
        </div>
      </div>
      <div>
        <Accordion>
          <AccordionPanel>
            <AccordionTitle>
              What services does InnoTech Solutions offer?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                InnoTech Solutions provides a range of services including UI/UX
                design, web development, mobile app development, and quality
                assurance and testing. We specialize in crafting innovative and
                tailored solutions to meet diverse business needs.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              Can I get a customized solution based on my specific business
              needs?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Absolutely! InnoTech Solutions takes pride in delivering
                customized solutions tailored to meet your unique business
                requirements. We work closely with clients to understand their
                goals and challenges, ensuring our solutions align with their
                vision.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              What is the typical timeline for project completion?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Project timelines vary depending on the scope and complexity.
                During the initial consultation, we discuss project timelines
                based on your specific requirements. We prioritize delivering
                high-quality solutions within agreed-upon deadlines.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              Are maintenance and support services provided after project
              completion?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, InnoTech Solutions offers post-launch maintenance and
                support services. Our goal is to ensure the ongoing success and
                optimal performance of the solutions we deliver. We provide
                timely updates, address issues, and offer support as needed.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              How do I get started with InnoTech Solutions for my project?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Getting started is easy! Simply reach out to us through our
                contact section or{' '}
                <Link
                  href="mailto:fikrinr.tech@gmail.com"
                  className="text-cyan-500"
                >
                  email us
                </Link>
                . We&apos;ll schedule an initial consultation to discuss your
                project, goals, and how InnoTech Solutions can bring your vision
                to life.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
}
