import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardRect, setClickedCardRect] = useState(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      fullDescription: 'A comprehensive e-commerce platform built from the ground up, featuring real-time inventory management, secure payment processing with Stripe, user authentication, and an intuitive admin dashboard. The platform supports multiple product categories, customer reviews, wishlist functionality, and advanced search with filters.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      images: ['Homepage Screenshot', 'Product Page', 'Cart & Checkout', 'Admin Dashboard'],
      features: [
        'Real-time inventory tracking',
        'Secure Stripe payment integration',
        'User authentication & profiles',
        'Admin dashboard with analytics',
        'Product search & filtering',
        'Responsive mobile design'
      ],
      size: 'large',
      bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Manager App',
      description: 'Collaborative task management with real-time updates.',
      fullDescription: 'A powerful task management application designed for teams. Features include real-time collaboration, project boards, task assignments, due date tracking, and progress analytics. Built with performance in mind, supporting thousands of concurrent users.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      images: ['Dashboard View', 'Project Board', 'Task Details'],
      features: [
        'Real-time collaboration',
        'Drag-and-drop task boards',
        'Team member assignments',
        'Progress tracking & reports'
      ],
      size: 'medium',
      bgColor: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather visualization with 7-day forecasts.',
      fullDescription: 'An elegant weather dashboard that provides accurate forecasts with beautiful visualizations. Features include interactive charts, location-based weather, hourly and 7-day forecasts, severe weather alerts, and customizable units.',
      tags: ['React', 'D3.js', 'API'],
      images: ['Main Dashboard', 'Forecast Charts', 'Weather Maps'],
      features: [
        'Location-based forecasts',
        'Interactive D3.js charts',
        '7-day detailed forecasts',
        'Severe weather alerts'
      ],
      size: 'medium',
      bgColor: 'bg-gradient-to-br from-sky-400 to-blue-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by machine learning for customer support automation.',
      fullDescription: 'An advanced AI-powered chatbot designed for customer support automation. Utilizes natural language processing to understand and respond to customer queries, with the ability to escalate complex issues to human agents. Includes sentiment analysis and conversation analytics.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      images: ['Chat Interface', 'Admin Panel', 'Analytics Dashboard', 'Training Console'],
      features: [
        'Natural language processing',
        'Sentiment analysis',
        'Human agent escalation',
        'Conversation analytics',
        'Custom training interface',
        'Multi-language support'
      ],
      size: 'wide',
      bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio creator.',
      fullDescription: 'A user-friendly portfolio builder that allows anyone to create stunning portfolios without coding. Features drag-and-drop editing, multiple templates, custom domains, and SEO optimization.',
      tags: ['Vue.js', 'Firebase'],
      images: ['Editor View', 'Template Gallery'],
      features: [
        'Drag-and-drop editor',
        'Multiple templates',
        'Custom domain support',
        'SEO optimization'
      ],
      size: 'small',
      bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Analytics Tool',
      description: 'Real-time data visualization.',
      fullDescription: 'A powerful analytics tool for visualizing business data in real-time. Features customizable dashboards, automated reports, data export, and integration with popular data sources.',
      tags: ['React', 'Chart.js'],
      images: ['Dashboard', 'Reports View'],
      features: [
        'Real-time data updates',
        'Customizable widgets',
        'Automated reports',
        'Data export options'
      ],
      size: 'small',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const handleProjectClick = (e, project) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickedCardRect(rect);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setClickedCardRect(null);
    }, 300);
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-6 row-span-2';
      case 'medium':
        return 'col-span-12 sm:col-span-6 md:col-span-3 row-span-1';
      case 'wide':
        return 'col-span-12 md:col-span-6 row-span-1';
      case 'small':
        return 'col-span-6 md:col-span-3 row-span-1';
      default:
        return 'col-span-6 row-span-1';
    }
  };

  return (
    <section id="projects" className="px-6 py-16">
      <div className="mb-10">
        <span className="text-xs text-slate-500 uppercase tracking-wide">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-light mt-2">Featured Projects</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md">
          A collection of projects that showcase my skills and passion for building great products.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={(e) => handleProjectClick(e, project)}
            className={`${getSizeClasses(project.size)} ${project.bgColor} rounded-3xl p-6 relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-white/30" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border-2 border-white/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/70 uppercase tracking-wide">Project</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-2">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/20 text-white text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-white/20 text-white text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        originRect={clickedCardRect}
      />
    </section>
  );
};

export default ProjectsSection;
