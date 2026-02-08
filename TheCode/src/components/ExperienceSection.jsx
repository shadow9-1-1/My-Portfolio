import { BlurText, BlurFade, SlideIn, ScaleIn, Counter, MotionBlur } from './Animations';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'ASCC Inc. - Project Based',
      period: 'Jul 2025 – Aug 2025',
      description: 'Developed and deployed a scalable multi-language corporate website using Flask, delivering a complete full-stack solution from UI design to backend architecture.',
      achievements: ['Developed multi-language web platform', 'Created admin dashboard for content management', 
        'Implemented responsive UI and database integration', 'Delivered scalable full-stack solution'],
      current: false,
    },
    {
      role: 'Internship - AI',
      company: 'CIB Egypt - Corporate Internship Program',
      period: 'Aug 2025 – Sep 2025',
      description: 'Participated in an intensive internship program focused on banking, innovation, and sustainability through guided learning and mentorship.',
      achievements: ['Completed technical and business courses', 'Participated in mentor-led sessions', 'Earned a SAS digital badge in AI'],
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
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Journey</span>
            </BlurFade>
            <h2 className="text-3xl md:text-4xl font-light mt-2 mb-4 dark:text-white">
              <BlurText text="Work Experience" delay={30} />
            </h2>
            <BlurFade delay={0.2}>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                A timeline of my professional growth and the companies I've had the pleasure to work with.
              </p>
            </BlurFade>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <ScaleIn delay={0.3} duration={0.5}>
                <div className="bg-slate-900 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-light text-white">
                    <Counter value={3} fontSize={30} suffix="+" />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Years Experience</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4} duration={0.5}>
                <div className="bg-slate-900 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-light text-white">
                    <Counter value={15} fontSize={30} suffix="+" />
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
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <BlurFade key={idx} delay={0.2 + idx * 0.15} duration={0.6} direction="up" distance={30}>
                  <div className="relative pl-8 md:pl-20">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-8 top-2 w-4 h-4 rounded-full -translate-x-1/2 transition-all duration-300 ${
                      exp.current ? 'bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900 animate-pulse' : 'bg-slate-300 dark:bg-slate-600'
                    }`} />

                    {/* Content card */}
                    <div className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer ${
                      exp.current 
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1' 
                        : 'bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-xl font-semibold ${exp.current ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {exp.role}
                          </h3>
                          <p className={`text-sm ${exp.current ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.current 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}>
                          {exp.current && <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>}
                          {exp.period}
                        </span>
                      </div>

                      <p className={`text-sm mb-4 ${exp.current ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                              exp.current 
                                ? 'bg-white/10 text-white hover:bg-white/20' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
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
