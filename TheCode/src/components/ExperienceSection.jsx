import { BlurText, BlurFade, SlideIn, ScaleIn, Counter, MotionBlur } from './Animations';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading the frontend team in building scalable web applications. Implemented micro-frontend architecture reducing load times by 40%.',
      achievements: ['Led team of 5 developers', 'Reduced load time by 40%', 'Implemented CI/CD pipeline'],
      current: true,
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js. Introduced automated testing practices.',
      achievements: ['Built 15+ client projects', '98% client satisfaction', 'Mentored junior developers'],
      current: false,
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2019 - 2020',
      description: 'Started my professional journey building MVPs for early-stage startups. Learned rapid prototyping and agile methodologies.',
      achievements: ['Shipped 3 MVPs', 'Full-stack development', 'Agile/Scrum certified'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="px-6 py-16">
      <div className="grid grid-cols-12 gap-8">
        {/* Left - Header */}
        <div className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-8">
            <BlurFade delay={0.1}>
              <span className="text-xs text-slate-500 uppercase tracking-wide">Journey</span>
            </BlurFade>
            <h2 className="text-3xl md:text-4xl font-light mt-2 mb-4">
              <BlurText text="Work Experience" delay={30} />
            </h2>
            <BlurFade delay={0.2}>
              <p className="text-slate-500 text-sm mb-6">
                A timeline of my professional growth and the companies I've had the pleasure to work with.
              </p>
            </BlurFade>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <ScaleIn delay={0.3} duration={0.5}>
                <div className="bg-slate-900 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-light text-white">
                    <Counter value={5} fontSize={30} suffix="+" />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Years Experience</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4} duration={0.5}>
                <div className="bg-slate-900 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-light text-white">
                    <Counter value={20} fontSize={30} suffix="+" />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Projects Completed</p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>

        {/* Right - Timeline */}
        <div className="col-span-12 md:col-span-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <BlurFade key={idx} delay={0.2 + idx * 0.15} duration={0.6} direction="up" distance={30}>
                  <div className="relative pl-8 md:pl-20">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-8 top-2 w-4 h-4 rounded-full -translate-x-1/2 ${
                      exp.current ? 'bg-emerald-500 ring-4 ring-emerald-100' : 'bg-slate-300'
                    }`} />

                    {/* Content card */}
                    <div className={`rounded-3xl p-6 ${
                      exp.current 
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' 
                        : 'bg-white shadow-sm'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-xl font-semibold ${exp.current ? 'text-white' : 'text-slate-900'}`}>
                            {exp.role}
                          </h3>
                          <p className={`text-sm ${exp.current ? 'text-slate-300' : 'text-slate-500'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          exp.current 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {exp.period}
                        </span>
                      </div>

                      <p className={`text-sm mb-4 ${exp.current ? 'text-slate-300' : 'text-slate-600'}`}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs ${
                              exp.current 
                                ? 'bg-white/10 text-white' 
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            ✓ {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
