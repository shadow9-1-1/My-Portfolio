import SocialIcons from './SocialIcons';
import { BlurText, BlurFade, SlideIn, ScaleIn, Counter } from './Animations';

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-16">
      <div className="grid grid-cols-12 gap-6">
        {/* Profile Card - Large */}
        <SlideIn direction="left" delay={0} duration={0.6} className="col-span-12 md:col-span-5">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden h-full">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-6 flex items-center justify-center text-3xl font-bold text-white">
                AW
              </div>

              <span className="text-xs text-slate-400 uppercase tracking-wide">About Me</span>
              <h2 className="text-3xl md:text-4xl font-light text-white mt-2 mb-4">
                <BlurText text="Ahmed Wael" delay={50} className="inline" />
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Full-stack developer and UI/UX designer with 3+ years of experience building scalable, user-centered digital solutions.
                I combine clean code, thoughtful design, and modern technologies to create efficient and impactful digital products.
              </p>

              <SocialIcons className="[&_a]:bg-white/10 [&_a]:hover:bg-white/20 [&_a]:text-white" />
            </div>
          </div>
        </SlideIn>

        {/* Right Column - Info Cards */}
        <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
          {/* Location Card */}
          <ScaleIn delay={0.1} className="col-span-2 sm:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Based in</h3>
              <p className="text-slate-500 text-sm">Cairo, Egypt</p>
            </div>
          </ScaleIn>

          {/* Experience Card */}
          <ScaleIn delay={0.2} className="col-span-2 sm:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Experience</h3>
              <p className="text-slate-500 text-sm"><Counter value={3} fontSize={14} suffix="+ Years" /></p>
            </div>
          </ScaleIn>

          {/* Education Card */}
          <ScaleIn delay={0.3} className="col-span-2 sm:col-span-1">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Education</h3>
              <p className="text-slate-600 text-sm">BSc in Software Development (CSAI)<br />Concentration in App Development</p>
              <p className="text-slate-400 text-xs mt-1">Zewail City University</p>
            </div>
          </ScaleIn>

          {/* Languages Card */}
          <ScaleIn delay={0.4} className="col-span-2 sm:col-span-1">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Languages</h3>
              <p className="text-slate-600 text-sm">English, Arabic</p>
            </div>
          </ScaleIn>

          {/* Bio Card - Wide */}
          <BlurFade delay={0.5} duration={0.6} className="col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">What I Do</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I specialize in building modern web applications using React, Node.js, and cloud technologies. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical writing and mentoring.
                
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['React', 'Node.js', 'JavaScript', 'AWS', 'UI/UX', 'CSS', 'Flask'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
