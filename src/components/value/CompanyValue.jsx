export default function CompanyValue() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="space-y-8">
        <div className="text-center text-4xl font-extrabold mobile:text-2xl">
          Company Culture and Values
        </div>
        <div className="mx-auto w-20 h-1 bg-cyan-500 rounded-full"></div>
        <div className="w-1/2 mx-auto text-center font-light mobile:w-full">
          InnoTech Solutions is not just a workplace, it&apos;s a community that
          thrives on creativity, collaboration, and a shared passion for
          technology. Our culture is the heartbeat of our organization, shaping
          the way we work and interact.
        </div>
      </div>

      <div className="w-3/4 flex flex-wrap justify-center gap-8 tablet:w-full mobile:flex-col">
        <div className="w-2/5 border-2 border-cyan-500 rounded-md p-4 space-y-4 mobile:w-full">
          <div className="font-semibold text-xl">Innovation First</div>
          <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
          <div className="font-light">
            At the core of our culture is a commitment to innovation. We
            encourage out-of-the-box thinking, embrace challenges as
            opportunities, and celebrate creative solutions. Every team member
            is empowered to contribute ideas and explore new possibilities.
          </div>
        </div>
        <div className="w-2/5 border-2 border-cyan-500 rounded-md p-4 space-y-4 mobile:w-full">
          <div className="font-semibold text-xl">Collaborative Spirit</div>
          <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
          <div className="font-light">
            We believe in the power of collaboration. Teams at InnoTech
            Solutions work seamlessly together, pooling diverse skills and
            perspectives to achieve collective success. Open communication and
            the spirit of teamwork define our approach to every project.
          </div>
        </div>
        <div className="w-2/5 border-2 border-cyan-500 rounded-md p-4 space-y-4 mobile:w-full">
          <div className="font-semibold text-xl">Continuous Learning</div>
          <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
          <div className="font-light">
            In the dynamic world of technology, learning is a constant journey.
            We foster a culture of continuous learning, providing opportunities
            for professional development and staying at the forefront of
            industry trends. As we grow, so do our team members.
          </div>
        </div>
        <div className="w-2/5 border-2 border-cyan-500 rounded-md p-4 space-y-4 mobile:w-full">
          <div className="font-semibold text-xl">Supportive Atmosphere</div>
          <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
          <div className="font-light">
            Work doesn&apos;t have to feel like just work. We cultivate a
            supportive atmosphere, where team members enjoy coming to work each
            day. From team-building activities to celebrating achievements, we
            make sure the journey is as enjoyable as the destination.
          </div>
        </div>
      </div>
    </div>
  );
}
