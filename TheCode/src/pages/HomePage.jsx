import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <SkillsSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />
    </>
  )
}

export default HomePage
