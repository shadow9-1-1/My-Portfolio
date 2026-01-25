import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'

const AboutPage = () => {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          About Me
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Get to know more about my journey, skills, and the experiences that shaped me as a developer.
        </p>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />
    </div>
  )
}

export default AboutPage
