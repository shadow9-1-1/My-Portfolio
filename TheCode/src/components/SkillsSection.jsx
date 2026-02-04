import { useState } from 'react';
import { BlurText, BlurFade, ScaleIn } from './Animations';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C#', 'C++', 'C', 'SQL', 'Assembly'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'React Native', 'HTML5', 'CSS', 'Tailwind CSS', 'DOM'],
    },
    {
      title: 'Backend & Frameworks',
      skills: ['Flask', 'ASP.NET', '.NET Framework', 'ASP.NET Razor'],
    },
    {
      title: 'Databases',
      skills: ['Microsoft SQL Server', 'Databases'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub', 'AWS', 'VMware', 'Linux', 'Kali Linux'],
    },
    {
      title: 'AI & Data',
      skills: ['Machine Learning', 'Artificial Intelligence', 'Kaggle'],
    },
    {
      title: 'Hardware & Systems',
      skills: ['Arduino', 'Embedded Systems', 'Computer Architecture', 'Digital Logic', 'Operating Systems', 'Computer Networking'],
    },
    {
      title: 'Software Engineering',
      skills: ['Full-Stack Development', 'Front-End Development', 'Back-End Development', 'Web Development', 'Web Design', 'Software Testing', 'Software Deployment'],
    },
    {
      title: 'CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'OOAD'],
    },
    {
      title: 'UX/UI',
      skills: ['User Experience (UX)', 'User Interface Design'],
    },
    {
      title: 'Project Management',
      skills: ['Agile Methodologies', 'Scrum', 'Waterfall', 'Project Management'],
    },
    {
      title: 'Documentation',
      skills: ['Software Requirements', 'Class Diagrams', 'Use Case Diagrams', 'User Stories'],
    },
  ];

  return (
    <section id="skills" className="px-6 py-16">
      <div className="mb-12">
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

      {/* Skills by Category - Minimal Monochrome Design */}
      <div className="space-y-8">
        {skillCategories.map((category, categoryIdx) => (
          <BlurFade key={categoryIdx} delay={0.1 * categoryIdx} duration={0.5}>
            <div className="group">
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <ScaleIn key={skillIdx} delay={0.02 * skillIdx} duration={0.3}>
                    <div
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`
                        px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700
                        bg-white dark:bg-slate-900
                        transition-all duration-300 ease-out cursor-default
                        hover:border-slate-400 dark:hover:border-slate-500
                        hover:shadow-md hover:-translate-y-0.5
                        ${hoveredSkill === skill ? 'border-slate-900 dark:border-white' : ''}
                      `}>
                        <span className={`
                          text-sm transition-colors duration-300
                          text-slate-600 dark:text-slate-400
                          ${hoveredSkill === skill ? 'text-slate-900 dark:text-white' : ''}
                        `}>
                          {skill}
                        </span>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Decorative line */}
      <BlurFade delay={0.5} duration={0.6}>
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
          <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest">Always Learning</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
        </div>
      </BlurFade>
    </section>
  );
};

export default SkillsSection;
