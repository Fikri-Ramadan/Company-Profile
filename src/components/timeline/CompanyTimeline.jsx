import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';

export default function CompanyTimeline() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-16">
      <div className="text-4xl font-bold text-white text-center tracking-wider">
        Company History and Milestones
      </div>

      <div className="flex gap-8 mobile:flex-col">
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">2010</TimelineTime>
              <TimelineTitle className="text-white">
                The Beginning
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                InnoTech Solutions was founded with a vision to revolutionize
                the tech industry. A small group of passionate innovators came
                together, driven by a shared belief in the power of technology
                to transform businesses.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">2012</TimelineTime>
              <TimelineTitle className="text-white">
                Formalizing Excellence
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                Recognizing the need for a structured approach, InnoTech
                Solutions officially came into existence. The foundations were
                laid for what would become a hub for creativity, excellence, and
                technological innovation.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">2014</TimelineTime>
              <TimelineTitle className="text-white">
                First Major Project
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                Our commitment to excellence bore fruit with our first major
                project. This marked the beginning of our journey in delivering
                impactful solutions that go beyond meeting expectations.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">2016</TimelineTime>
              <TimelineTitle className="text-white">
                Client-Centric Transformation
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                Listening to our clients became a focal point. We evolved into a
                client-centric organization, understanding unique needs and
                becoming strategic partners in their digital endeavors.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">2020</TimelineTime>
              <TimelineTitle className="text-white">
                A Decade of Innovation
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                In 2020, InnoTech Solutions celebrated a decade of innovation,
                growth, and client success. A testament to our resilience,
                adaptability, and commitment to pushing technological
                boundaries.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">Present</TimelineTime>
              <TimelineTitle className="text-white">
                Shaping the Future
              </TimelineTitle>
              <TimelineBody className="text-white font-light">
                Today, InnoTech Solutions stands as a symbol of innovation and
                integrity. Our journey continues as we shape the future,
                leveraging emerging technologies and staying ahead of industry
                trends.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
