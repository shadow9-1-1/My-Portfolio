import ProjectsSection from '../components/ProjectsSection'

const ProjectsPage = () => {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          My Projects
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Explore my portfolio of work, featuring web applications, designs, and creative solutions I've built.
        </p>
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Additional Projects Grid */}
      <div className="px-6 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-purple-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">E-commerce Platform</h3>
            <p className="text-slate-600 text-sm mb-4">Full-stack online store with payment integration</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Stripe</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-green-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Task Management App</h3>
            <p className="text-slate-600 text-sm mb-4">Collaborative task tracker with real-time updates</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Vue.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Firebase</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-orange-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Weather Dashboard</h3>
            <p className="text-slate-600 text-sm mb-4">Beautiful weather app with location-based forecasts</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">API</span>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Social Media Dashboard</h3>
            <p className="text-slate-600 text-sm mb-4">Analytics dashboard for social media management</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Chart.js</span>
            </div>
          </div>

          {/* Project Card 5 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-pink-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Recipe Finder</h3>
            <p className="text-slate-600 text-sm mb-4">Recipe search app with dietary filters</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Spoonacular</span>
            </div>
          </div>

          {/* Project Card 6 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-indigo-400 text-sm">Project Image</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Portfolio Generator</h3>
            <p className="text-slate-600 text-sm mb-4">Create beautiful portfolios with templates</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
