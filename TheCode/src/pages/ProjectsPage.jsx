import { useState } from 'react'
import ProjectsSection from '../components/ProjectsSection'
import ProjectModal from '../components/ProjectModal'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const moreProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration',
      fullDescription: 'A complete e-commerce solution featuring product catalog management, shopping cart, secure checkout with multiple payment options, order tracking, and customer reviews. Built with scalability in mind to handle high traffic.',
      tags: ['React', 'Node.js', 'Stripe'],
      images: ['Store Homepage', 'Product Catalog', 'Checkout Flow', 'Order Management'],
      features: [
        'Product catalog with filters',
        'Shopping cart & wishlist',
        'Secure payment processing',
        'Order tracking system'
      ],
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      textColor: 'text-purple-400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task tracker with real-time updates',
      fullDescription: 'A powerful task management platform for teams featuring real-time collaboration, customizable workflows, file attachments, and comprehensive reporting. Perfect for agile teams and project management.',
      tags: ['Vue.js', 'Firebase'],
      images: ['Dashboard', 'Task Board', 'Team Collaboration'],
      features: [
        'Real-time sync',
        'Customizable workflows',
        'Team collaboration',
        'Progress reports'
      ],
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      textColor: 'text-green-400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      fullDescription: 'An elegant weather application providing accurate forecasts with stunning visualizations. Features include radar maps, severe weather alerts, air quality index, and customizable widgets.',
      tags: ['React', 'API'],
      images: ['Main View', 'Forecast Details', 'Weather Radar'],
      features: [
        'Location-based forecasts',
        'Interactive radar maps',
        'Severe weather alerts',
        'Air quality monitoring'
      ],
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      textColor: 'text-orange-400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      fullDescription: 'A comprehensive social media management tool that aggregates analytics from multiple platforms. Schedule posts, track engagement, analyze audience demographics, and generate reports.',
      tags: ['Next.js', 'Chart.js'],
      images: ['Analytics Overview', 'Post Scheduler', 'Audience Insights'],
      features: [
        'Multi-platform analytics',
        'Post scheduling',
        'Engagement tracking',
        'Custom reports'
      ],
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      textColor: 'text-blue-400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Recipe Finder',
      description: 'Recipe search app with dietary filters',
      fullDescription: 'A comprehensive recipe discovery app with smart dietary filtering, meal planning, grocery list generation, and nutritional information. Save favorites and share recipes with friends.',
      tags: ['React', 'Spoonacular'],
      images: ['Recipe Search', 'Recipe Details', 'Meal Planner'],
      features: [
        'Smart dietary filters',
        'Meal planning',
        'Grocery list generator',
        'Nutritional info'
      ],
      bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
      textColor: 'text-pink-400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'Create beautiful portfolios with templates',
      fullDescription: 'A no-code portfolio builder with drag-and-drop editing, professional templates, custom domain support, and SEO optimization. Perfect for designers, developers, and creatives.',
      tags: ['React', 'Tailwind'],
      images: ['Template Gallery', 'Editor Interface', 'Published Portfolio'],
      features: [
        'Drag-and-drop editor',
        'Professional templates',
        'Custom domains',
        'SEO optimization'
      ],
      bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
      textColor: 'text-indigo-400',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
          {moreProjects.map((project, idx) => (
            <div 
              key={idx}
              onClick={() => handleProjectClick(project)}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className={`aspect-video ${project.bgColor} rounded-2xl mb-4 flex items-center justify-center`}>
                <span className={`${project.textColor} text-sm`}>Project Image</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  )
}

export default ProjectsPage
