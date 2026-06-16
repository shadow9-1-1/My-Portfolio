import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlideIn, ScaleIn, BlurFade } from './Animations';
import SocialIcons from './SocialIcons';
import CVModal from './CVModal';
import { Counter } from './Counter';

const AboutSection = () => {
  const [stats, setStats] = useState({
    repos: 0,
    commits: 0,
    followers: 0,
    img: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'shadow9-1-1';
        
        // Fetch user data for repos, followers and avatar
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
        const userData = await userRes.json();

        // Fetch contributions for the last year
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!contribRes.ok) throw new Error(`Contributions fetch failed: ${contribRes.status}`);
        const contribData = await contribRes.json();
        
        const totalContributionsLastYear = contribData.total.lastYear;

        setStats({
          repos: userData.public_repos,
          commits: totalContributionsLastYear, // We'll label this as contributions
          followers: userData.followers,
          img: userData.avatar_url,
        });
      } catch (err) {
        console.error("GitHub Stats Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.5} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            About <span className="text-blue-600 dark:text-blue-500">Me</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            A little bit about my journey and what I do.
          </p>
        </BlurFade>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Profile Card */}
          <SlideIn from="left" className="col-span-12 md:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {stats.img ? (
                    <img src={stats.img} alt="GitHub Avatar" className="w-20 h-20 rounded-full object-cover border-4 border-slate-200 dark:border-slate-700" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                      AW
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold dark:text-white">Ahmed Wael</h2>
                    <p className="text-slate-500 dark:text-slate-400">Software Developer</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
                  Full-stack developer and UI/UX designer with 3+ years of experience building scalable, user-centered digital solutions. I combine clean code, thoughtful design, and modern technologies to create efficient and impactful digital products.
                 </p>
              </div>
              
              {/* GitHub Stats Section */}
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                {loading ? (
                  <div className="text-center text-sm text-slate-400">Loading GitHub Stats...</div>
                ) : error ? (
                  <div className="text-center text-sm text-red-500">Could not load stats.</div>
                ) : (
                  <motion.div 
                    className="flex justify-around text-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.2 } }
                    }}
                  >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">{stats.repos}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Repositories</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">{stats.commits}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Contributions</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">{stats.followers}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Followers</p>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <div className="flex justify-between items-center mt-6">
                <SocialIcons />
                <CVModal />
              </div>
            </div>
          </SlideIn>

          {/* Right Column - Info Cards */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
            {/* Location Card */}
            <ScaleIn delay={0.1} className="col-span-2 sm:col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm h-full transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1 dark:text-white">Based in</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Giza, Egypt</p>
              </div>
            </ScaleIn>

            {/* Experience Card */}
            <ScaleIn delay={0.2} className="col-span-2 sm:col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm h-full transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1 dark:text-white">Experience</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm"><Counter value={3} fontSize={14} suffix="+ Years" /></p>
              </div>
            </ScaleIn>

            {/* Education Card */}
            <ScaleIn delay={0.3} className="col-span-2 sm:col-span-1">
              <a href="https://www.zewailcity.edu.eg/academics/undergraduate-studies/program/39" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-6 h-full transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1 dark:text-white">Education</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">BSc in Software Development (CSAI)<br />Concentration in App Development</p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Zewail City University </p>
              </a>
            </ScaleIn>

            {/* Languages Card */}
            <ScaleIn delay={0.4} className="col-span-2 sm:col-span-1">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-3xl p-6 h-full transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1 dark:text-white">Languages</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">English, Arabic</p>
              </div>
            </ScaleIn>

            {/* Bio Card - Wide */}
            <BlurFade delay={0.5} duration={0.6} className="col-span-2">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">What I Do</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Crazy full stack developer who wants to explore every tech stack. I specialize in building modern web applications using React, Flask, Node.js, and cloud technologies, 
                  bridging UI/UX design with backend engineering to create fast, scalable, and user-centered products.
                  
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['HTML5','CSS3', 'Next.js', 'Node.js','Express.js','TypeScript','Tailwind CSS','React', 'JavaScript', 'Flask','AWS', 'UI/UX', 'Python','SQL', 'Docker'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
