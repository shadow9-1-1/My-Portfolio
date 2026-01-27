import { BlurText, BlurFade, ScaleIn } from './Animations';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
      ],
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      accentColor: 'bg-blue-500',
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 },
      ],
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-100',
      accentColor: 'bg-emerald-500',
    },
    {
      title: 'Tools & DevOps',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 78 },
      ],
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
      accentColor: 'bg-amber-500',
    },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Communication', icon: '💬' },
    { name: 'Team Leadership', icon: '👥' },
    { name: 'Agile/Scrum', icon: '🔄' },
    { name: 'Code Review', icon: '👁️' },
    { name: 'Mentoring', icon: '🎓' },
  ];

  return (
    <section id="skills" className="px-6 py-16">
      <div className="mb-10">
        <BlurFade delay={0} duration={0.5}>
          <span className="text-xs text-slate-500 uppercase tracking-wide">Expertise</span>
        </BlurFade>
        <h2 className="text-3xl md:text-4xl font-light mt-2">
          <BlurText text="Skills & Technologies" delay={30} />
        </h2>
        <BlurFade delay={0.2} duration={0.5}>
          <p className="text-slate-500 text-sm mt-2 max-w-md">
            A diverse skill set built through years of hands-on experience and continuous learning.
          </p>
        </BlurFade>
      </div>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category, idx) => (
          <ScaleIn key={idx} delay={0.1 * idx} duration={0.5}>
            <div className={`${category.bgColor} rounded-3xl p-6 hover:shadow-lg transition-shadow h-full`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.accentColor} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>

      {/* Soft Skills */}
      <BlurFade delay={0.4} duration={0.6}>
        <div className="bg-slate-900 rounded-3xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/15 transition-colors"
              >
                <span className="text-2xl mb-2 block">{skill.icon}</span>
                <span className="text-sm text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default SkillsSection;
