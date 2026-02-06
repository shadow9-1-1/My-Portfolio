import { useState } from 'react'
import ProjectsSection from '../components/ProjectsSection'
import ProjectModal from '../components/ProjectModal'
import { BlurText, BlurFade, ScaleIn } from '../components/Animations'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardRect, setClickedCardRect] = useState(null);

  const moreProjects = [
    {
    title: 'Next Scene',
    description: 'Movie discovery app with trending films and watchlists',
    fullDescription: 'A movie discovery app where users can search trending films, view details, and manage personal watchlists. Built with modern web technologies, the application provides an intuitive interface for exploring movies, reading detailed information about films, and organizing your viewing preferences with a personalized watchlist feature.',
    tags: ['JavaScript', 'HTML', 'CSS', 'React', 'Movie API'],
    images: ['Movie Gallery', 'Film Details', 'Trending Movies', 'Personal Watchlist'],
    features: [
      'Search trending films',
      'View detailed movie information',
      'Manage personal watchlist',
      'Responsive movie gallery',
      'Real-time movie data'
    ],
    bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
    textColor: 'text-indigo-400',
    liveUrl: 'https://next-scene-xi.vercel.app',
    githubUrl: 'https://github.com/yehiahesham2938/Next-Scene',
  },
  {
    title: 'Online Course Registration',
    description: 'Comprehensive course registration system for students',
    fullDescription: 'A full-featured online course registration platform built with Java, enabling students to browse available courses, register for classes, and manage their academic schedule. The system provides an intuitive interface for course selection and registration management with real-time course availability tracking.',
    tags: ['Java', 'Spring', 'MySQL'],
    images: ['Course Catalog', 'Registration Form', 'Student Dashboard', 'Schedule View'],
    features: [
      'Course browsing and search',
      'Student registration system',
      'Schedule management',
      'Course availability tracking'
    ],
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-blue-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Online-Course-Registration',
  },
  {
    title: 'Advanced Driver Assistance Systems',
    description: 'Embedded systems ADAS implementation for modern vehicles',
    fullDescription: 'A comprehensive embedded systems project implementing various Advanced Driver-Assistance Systems including acceleration and braking control, automatic headlight management, seat belt and door lock safety checks, and collision avoidance using ultrasonic sensors. Features real-time vehicle speed display on LCD, Bluetooth data logging, and ensures smooth vehicle dynamics with time-to-collision calculations.',
    tags: ['C++', 'Arduino', 'IoT', 'Embedded Systems'],
    images: ['System Architecture', 'LCD Display', 'Sensor Integration', 'Bluetooth Dashboard'],
    features: [
      'Acceleration & brake control',
      'Automatic headlight system',
      'Safety verification checks',
      'Collision avoidance with sensors',
      'Bluetooth data logging'
    ],
    bgColor: 'bg-gradient-to-br from-red-100 to-red-200',
    textColor: 'text-red-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Advanced-Driver-Assistance-Systems',
  },
  {
    title: 'Car Explorer Web App',
    description: 'Interactive car browsing and exploration platform',
    fullDescription: 'A dynamic web application designed for exploring and browsing cars, developed as part of a User Interface Development course. The application features an intuitive interface for searching and viewing detailed information about various car models with responsive design and modern UI/UX principles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    images: ['Car Gallery', 'Search Interface', 'Car Details Page', 'Filter Options'],
    features: [
      'Interactive car browsing',
      'Advanced search & filtering',
      'Responsive design',
      'Detailed car specifications'
    ],
    bgColor: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
    textColor: 'text-cyan-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Car-Explorer-Web-App',
  },
  {
    title: 'ASCC Company Website',
    description: 'Professional company website for business operations',
    fullDescription: 'A comprehensive company website project designed to present business information, services, and company portfolio. Built with modern web technologies to provide a professional online presence and facilitate customer engagement with responsive design and intuitive navigation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    images: ['Homepage', 'Services Page', 'About Us', 'Contact Form'],
    features: [
      'Company information display',
      'Services showcase',
      'Contact management',
      'Responsive web design'
    ],
    bgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
    textColor: 'text-emerald-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/ASCC-company-project',
  },
  {
    title: 'Machine Learning Classification Project',
    description: 'Complete ML pipeline with multiple algorithms and optimization',
    fullDescription: 'A comprehensive machine learning project featuring a complete ML pipeline including data preprocessing, exploratory data analysis, feature engineering, and model training. Implements multiple classification algorithms including Decision Tree, Random Forest, K-Nearest Neighbors, SVM, Logistic Regression, and XGBoost with hyperparameter tuning and cross-validation for optimal performance.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    images: ['Data Visualizations', 'Model Comparison', 'ROC Curves', 'Confusion Matrices'],
    features: [
      'Complete data preprocessing pipeline',
      'EDA with visualizations',
      'Multiple ML model implementation',
      'Hyperparameter tuning',
      'Performance metrics comparison'
    ],
    bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
    textColor: 'text-purple-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Machine-Learning-Project',
  },
  {
    title: 'University Campus Network Design',
    description: 'Enterprise network infrastructure for university campus',
    fullDescription: 'A comprehensive network infrastructure design for a small university campus connecting multiple faculties, labs, and a Scientific Computation Center. Implements RIP routing protocol, VLAN configurations, and classless IP addressing to ensure seamless connectivity across 4 faculties with multiple floors and labs, providing internet accessibility for all connected devices.',
    tags: ['Networking', 'Cisco', 'VLAN', 'RIP Protocol'],
    images: ['Network Topology', 'VLAN Configuration', 'Routing Diagram', 'Test Scenarios'],
    features: [
      'Multi-faculty network infrastructure',
      'RIP routing protocol',
      'VLAN segmentation & security',
      'Classless IP addressing',
      'Comprehensive testing scenarios'
    ],
    bgColor: 'bg-gradient-to-br from-amber-100 to-amber-200',
    textColor: 'text-amber-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Network-project',
  },
  {
    title: 'Chapter Find - Online Bookstore',
    description: 'Full-featured online bookstore with personalized recommendations',
    fullDescription: 'A feature-rich online bookstore platform that brings the traditional bookstore experience to the digital world. Chapter Find offers book lovers a curated selection of titles with personalized recommendations, detailed author profiles, and a secure shopping experience. Built with .NET Core, featuring comprehensive book browsing, advanced search capabilities, user reviews, and seamless checkout with secure payment integration.',
    tags: ['C#', '.NET Core', 'JavaScript', 'SQL'],
    images: ['Homepage', 'Book Catalog', 'Author Profiles', 'Shopping Cart', 'User Dashboard'],
    features: [
      'Curated book selection',
      'Personalized recommendations',
      'Author profiles & reviews',
      'Secure payment processing',
      'Order tracking'
    ],
    bgColor: 'bg-gradient-to-br from-rose-100 to-rose-200',
    textColor: 'text-rose-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Chapter-Find-Online-Bookstore',
  },
  {
    title: 'Hotel Management System',
    description: 'Comprehensive hotel booking and management platform',
    fullDescription: 'A comprehensive hotel management platform featuring three distinct user roles (Guest, Employee, Admin) with complete booking management, room reservation system, feedback collection, and administrative controls. Includes guest profiles with reservation history, employee management tools, and admin capabilities for managing staff, room types, and services. Built with modern web technologies and robust database architecture.',
    tags: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'SQL'],
    images: ['Homepage', 'Room Catalog', 'Reservation System', 'Admin Dashboard', 'User Profile'],
    features: [
      'Multi-role user system',
      'Room booking & reservations',
      'Guest feedback system',
      'Employee management',
      'Admin dashboard with analytics'
    ],
    bgColor: 'bg-gradient-to-br from-sky-100 to-sky-200',
    textColor: 'text-sky-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Hotel-project',
  },
  {
    title: 'Events Planner Platform',
    description: 'Full-stack event management and organization system',
    fullDescription: 'A full-featured event planning and management platform that handles all aspects of event organization from creation to feedback collection. Supports multiple user roles including Regular Users who can browse and register for events, Event Organizers who can create and manage events, and Admins who oversee the platform. Features comprehensive event creation tools, attendee registration, dynamic scheduling, and feedback collection systems.',
    tags: ['JavaScript', 'C#', 'ASP.NET', 'HTML', 'CSS'],
    images: ['Event Catalog', 'Registration Page', 'Schedule View', 'Organizer Dashboard', 'Admin Panel'],
    features: [
      'Multi-role user management',
      'Event creation & customization',
      'Attendee registration',
      'Schedule management',
      'Feedback & rating collection'
    ],
    bgColor: 'bg-gradient-to-br from-violet-100 to-violet-200',
    textColor: 'text-violet-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Events-Project-DB',
  },
]
  // const moreProjects = [
  //   {
  //     title: 'E-commerce Platform',
  //     description: 'Full-stack online store with payment integration',
  //     fullDescription: 'A complete e-commerce solution featuring product catalog management, shopping cart, secure checkout with multiple payment options, order tracking, and customer reviews. Built with scalability in mind to handle high traffic.',
  //     tags: ['React', 'Node.js', 'Stripe'],
  //     images: ['Store Homepage', 'Product Catalog', 'Checkout Flow', 'Order Management'],
  //     features: [
  //       'Product catalog with filters',
  //       'Shopping cart & wishlist',
  //       'Secure payment processing',
  //       'Order tracking system'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
  //     textColor: 'text-purple-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Task Management App',
  //     description: 'Collaborative task tracker with real-time updates',
  //     fullDescription: 'A powerful task management platform for teams featuring real-time collaboration, customizable workflows, file attachments, and comprehensive reporting. Perfect for agile teams and project management.',
  //     tags: ['Vue.js', 'Firebase'],
  //     images: ['Dashboard', 'Task Board', 'Team Collaboration'],
  //     features: [
  //       'Real-time sync',
  //       'Customizable workflows',
  //       'Team collaboration',
  //       'Progress reports'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
  //     textColor: 'text-green-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Weather Dashboard',
  //     description: 'Beautiful weather app with location-based forecasts',
  //     fullDescription: 'An elegant weather application providing accurate forecasts with stunning visualizations. Features include radar maps, severe weather alerts, air quality index, and customizable widgets.',
  //     tags: ['React', 'API'],
  //     images: ['Main View', 'Forecast Details', 'Weather Radar'],
  //     features: [
  //       'Location-based forecasts',
  //       'Interactive radar maps',
  //       'Severe weather alerts',
  //       'Air quality monitoring'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
  //     textColor: 'text-orange-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Social Media Dashboard',
  //     description: 'Analytics dashboard for social media management',
  //     fullDescription: 'A comprehensive social media management tool that aggregates analytics from multiple platforms. Schedule posts, track engagement, analyze audience demographics, and generate reports.',
  //     tags: ['Next.js', 'Chart.js'],
  //     images: ['Analytics Overview', 'Post Scheduler', 'Audience Insights'],
  //     features: [
  //       'Multi-platform analytics',
  //       'Post scheduling',
  //       'Engagement tracking',
  //       'Custom reports'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
  //     textColor: 'text-blue-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Recipe Finder',
  //     description: 'Recipe search app with dietary filters',
  //     fullDescription: 'A comprehensive recipe discovery app with smart dietary filtering, meal planning, grocery list generation, and nutritional information. Save favorites and share recipes with friends.',
  //     tags: ['React', 'Spoonacular'],
  //     images: ['Recipe Search', 'Recipe Details', 'Meal Planner'],
  //     features: [
  //       'Smart dietary filters',
  //       'Meal planning',
  //       'Grocery list generator',
  //       'Nutritional info'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
  //     textColor: 'text-pink-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Portfolio Generator',
  //     description: 'Create beautiful portfolios with templates',
  //     fullDescription: 'A no-code portfolio builder with drag-and-drop editing, professional templates, custom domain support, and SEO optimization. Perfect for designers, developers, and creatives.',
  //     tags: ['React', 'Tailwind'],
  //     images: ['Template Gallery', 'Editor Interface', 'Published Portfolio'],
  //     features: [
  //       'Drag-and-drop editor',
  //       'Professional templates',
  //       'Custom domains',
  //       'SEO optimization'
  //     ],
  //     bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
  //     textColor: 'text-indigo-400',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  // ];

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

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="px-6 mb-10">
        <BlurFade delay={0} duration={0.5}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <BlurText text="My Projects" delay={40} />
          </h1>
        </BlurFade>
        <BlurFade delay={0.2} duration={0.6}>
          <p className="text-slate-600 text-lg max-w-2xl">
            Explore my portfolio of work, featuring web applications, designs, and creative solutions I've built.
          </p>
        </BlurFade>
      </div>

      {/* Projects Section */}
      {/* <ProjectsSection /> */}

      {/* Additional Projects Grid */}
      <div className="px-6 mt-8">
        {/* <h2 className="text-2xl font-bold text-slate-800 mb-8">More Projects</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, idx) => (
            <ScaleIn key={idx} delay={0.1 + idx * 0.08} duration={0.5}>
              <div 
                onClick={(e) => handleProjectClick(e, project)}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer"
              >
                <div className={`aspect-video ${project.bgColor} rounded-2xl mb-4 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
                  <span className={`${project.textColor} text-sm transition-transform duration-300 group-hover:scale-110`}>Project Image</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full transition-all duration-300 group-hover:bg-slate-200 group-hover:scale-105"
                      style={{
                        transitionDelay: `${tagIdx * 30}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        originRect={clickedCardRect}
      />
    </div>
  )
}

export default ProjectsPage
