import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import { BlurText, BlurFade, ScaleIn, MotionScale } from './Animations';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardRect, setClickedCardRect] = useState(null);


  const projects = [
  {
    title: 'ASCC Company Project',
    description: 'A company web project showcasing business operations and services.',
    fullDescription: 'A comprehensive company website project designed to present business information, services, and company portfolio. Built with modern web technologies to provide a professional online presence and facilitate customer engagement.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MIT License'],
    images: ['Homepage', 'Services Page', 'Contact Form'],
    features: [
      "Company information display",
      "Services showcase",
      "Contact management",
      "Responsive web design",
      "Professional business interface"
    ],
    size: 'large',
    bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/ASCC-company-project'
  },
  {
    title: "Advanced Driver Assistance Systems",
    description: "Embedded Systems project that required to design and implement common ADAS (Advanced Driver-Assistance Systems) shipped in modern cars and EVs (Electric Vehicles).",
    fullDescription: 'A comprehensive embedded systems project implementing various Advanced Driver-Assistance Systems including acceleration and braking control, automatic headlight management, seat belt and door lock safety checks, and collision avoidance using ultrasonic sensors. The system features real-time vehicle speed display on LCD, Bluetooth data logging, and ensures smooth vehicle dynamics with no sudden stops.',
    tags: ['C++', 'Embedded Systems', 'IoT', 'Arduino', 'MIT License'],
    images: ['System Architecture', 'LCD Display', 'Sensor Integration', 'Bluetooth Dashboard'],
    features: [
      'Acceleration and brake pedal control system',
      'Automatic headlight ON/OFF based on ambient light',
      'Seat belt and door lock safety verification',
      'Collision avoidance with ultrasonic sensors',
      'Real-time speed display on LCD',
      'Bluetooth data logging system',
      'Time-to-collision (TTC) calculation'
    ],
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Advanced-Driver-Assistance-Systems'
  },
  
  {
    title: 'Machine Learning Project',
    description: 'this is part of CSAI 253 course (Machine Learning) at zewail city',
    fullDescription: 'A comprehensive machine learning project featuring a complete ML pipeline including data preprocessing, exploratory data analysis, feature engineering, and model training. The project implements multiple classification algorithms including Decision Tree, Random Forest, K-Nearest Neighbors, SVM, Logistic Regression, and XGBoost with hyperparameter tuning and cross-validation for optimal performance.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn', 'XGBoost', 'MIT License'],
    images: ['Data Visualizations', 'Model Comparison', 'ROC Curves', 'Confusion Matrices'],
    features: [
      'Complete data preprocessing pipeline',
      'Exploratory data analysis with visualizations',
      'Feature engineering and encoding',
      'Multiple ML model implementation',
      'Hyperparameter tuning with GridSearch',
      'Cross-validation and model evaluation',
      'ROC curves and confusion matrices',
      'Performance metrics comparison'
    ],
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-sky-400 to-blue-500',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Machine-Learning-Project'
  },
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
    size: 'wide',
    // bgColor: 'bg-gradient-to-br from-sky-400 to-blue-500',

    bgColor: 'bg-gradient-to-br from-slate-400 to-rose-500',
    liveUrl: 'https://next-scene-xi.vercel.app',
    githubUrl: 'https://github.com/yehiahesham2938/Next-Scene',
  },
  {
    title: 'Chapter Find - Online Bookstore',
    description: 'Chapter Find is an online bookstore designed for book lovers, offering curated book selections, personalized recommendations, and in-depth author profiles. Built with .NET Core, it delivers a secure, user-friendly experience that recreates the joy of bookstore browsing in an online community setting.',
    fullDescription: 'A feature-rich online bookstore platform that brings the traditional bookstore experience to the digital world. Chapter Find offers book lovers a curated selection of titles with personalized recommendations, detailed author profiles, and a secure shopping experience. Built with .NET Core and modern web technologies, the platform provides comprehensive book browsing, advanced search capabilities, user reviews, and a seamless checkout process with secure payment integration.',
    tags: ['C#', '.NET Core', 'JavaScript', 'CSS', 'HTML', 'SQL', 'MIT License'],
    images: ['Homepage', 'Book Catalog', 'Author Profiles', 'Shopping Cart', 'User Dashboard'],
    features: [
      'Curated book selection and catalog',
      'Personalized book recommendations',
      'In-depth author profiles',
      'Advanced search and filtering',
      'User authentication and profiles',
      'Shopping cart and checkout',
      'User reviews and ratings',
      'Secure payment processing',
      'Order history and tracking'
    ],
    size: 'wide',
    bgColor: 'bg-gradient-to-br from-amber-500 to-orange-400',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Chapter-Find-Online-Bookstore'
  },
  {
    title: 'Hotel Management System',
    description: "This project is a web development initiative aimed at creating a dynamic and user-friendly website for a hotel. The website is designed to serve the hotel's business goals, enhance user experience, and facilitate efficient hotel management.",
    fullDescription: "A comprehensive hotel management platform featuring three distinct user roles (Guest, Employee, Admin) with complete booking management, room reservation system, feedback collection, and administrative controls. The system includes guest profiles with reservation history, employee management tools, and admin capabilities for adding managers, staff, room types, and services. Built with modern web technologies and a robust database architecture.",
    tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'SQL', 'MIT License'],
    images: ['Homepage', 'Room Catalog', 'Reservation System', 'Admin Dashboard', 'User Profile'],
    features: [
      'Multi-role user system (Guest/Employee/Admin)',
      'Room browsing and booking',
      'Real-time reservation management',
      'Guest feedback system',
      'User profile and reservation history',
      'Employee management tools',
      'Admin dashboard with analytics',
      'Service and room type management',
      'Secure authentication system'
    ],
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Hotel-project'
  },
  {
    title: 'Events Planner Platform',
    description: 'This project is a comprehensive Events Planner platform designed to manage various aspects of event organization, including event creation, attendee registration, schedule management, and feedback collection. It serves three main types of users: Regular Users, Admins, and Event Organizers.',
    fullDescription: 'A full-featured event planning and management platform that handles all aspects of event organization from creation to feedback collection. The system supports multiple user roles including Regular Users who can browse and register for events, Event Organizers who can create and manage their events, and Admins who oversee the entire platform. Features include comprehensive event creation tools, attendee registration management, dynamic schedule generation, feedback collection systems, and real-time event updates.',
    tags: ['JavaScript', 'C#', 'HTML', 'CSS', 'ASP.NET', 'MIT License'],
    images: ['Event Catalog', 'Registration Page', 'Schedule View', 'Organizer Dashboard', 'Admin Panel'],
    features: [
      'Multi-role user management system',
      'Event creation and customization',
      'Attendee registration and tracking',
      'Schedule management tools',
      'Feedback and rating collection',
      'Event organizer dashboard',
      'Admin control panel',
      'Real-time event updates',
      'Event search and filtering'
    ],
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    liveUrl: '#',
    githubUrl: 'https://github.com/shadow9-1-1/Events-Project-DB'
  }
];
  // const projects = [
  //   {
  //     title: 'E-Commerce Platform',
  //     description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
  //     fullDescription: 'A comprehensive e-commerce platform built from the ground up, featuring real-time inventory management, secure payment processing with Stripe, user authentication, and an intuitive admin dashboard. The platform supports multiple product categories, customer reviews, wishlist functionality, and advanced search with filters.',
  //     tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //     images: ['Homepage Screenshot', 'Product Page', 'Cart & Checkout', 'Admin Dashboard'],
  //     features: [
  //       'Real-time inventory tracking',
  //       'Secure Stripe payment integration',
  //       'User authentication & profiles',
  //       'Admin dashboard with analytics',
  //       'Product search & filtering',
  //       'Responsive mobile design'
  //     ],
  //     size: 'large',
  //     bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Task Manager App',
  //     description: 'Collaborative task management with real-time updates.',
  //     fullDescription: 'A powerful task management application designed for teams. Features include real-time collaboration, project boards, task assignments, due date tracking, and progress analytics. Built with performance in mind, supporting thousands of concurrent users.',
  //     tags: ['Next.js', 'Prisma', 'PostgreSQL'],
  //     images: ['Dashboard View', 'Project Board', 'Task Details'],
  //     features: [
  //       'Real-time collaboration',
  //       'Drag-and-drop task boards',
  //       'Team member assignments',
  //       'Progress tracking & reports'
  //     ],
  //     size: 'medium',
  //     bgColor: 'bg-gradient-to-br from-emerald-400 to-teal-500',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Weather Dashboard',
  //     description: 'Beautiful weather visualization with 7-day forecasts.',
  //     fullDescription: 'An elegant weather dashboard that provides accurate forecasts with beautiful visualizations. Features include interactive charts, location-based weather, hourly and 7-day forecasts, severe weather alerts, and customizable units.',
  //     tags: ['React', 'D3.js', 'API'],
  //     images: ['Main Dashboard', 'Forecast Charts', 'Weather Maps'],
  //     features: [
  //       'Location-based forecasts',
  //       'Interactive D3.js charts',
  //       '7-day detailed forecasts',
  //       'Severe weather alerts'
  //     ],
  //     size: 'medium',
  //     bgColor: 'bg-gradient-to-br from-sky-400 to-blue-500',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'AI Chat Assistant',
  //     description: 'Intelligent chatbot powered by machine learning for customer support automation.',
  //     fullDescription: 'An advanced AI-powered chatbot designed for customer support automation. Utilizes natural language processing to understand and respond to customer queries, with the ability to escalate complex issues to human agents. Includes sentiment analysis and conversation analytics.',
  //     tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
  //     images: ['Chat Interface', 'Admin Panel', 'Analytics Dashboard', 'Training Console'],
  //     features: [
  //       'Natural language processing',
  //       'Sentiment analysis',
  //       'Human agent escalation',
  //       'Conversation analytics',
  //       'Custom training interface',
  //       'Multi-language support'
  //     ],
  //     size: 'wide',
  //     bgColor: 'bg-gradient-to-br from-amber-400 to-orange-500',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Portfolio Builder',
  //     description: 'Drag-and-drop portfolio creator.',
  //     fullDescription: 'A user-friendly portfolio builder that allows anyone to create stunning portfolios without coding. Features drag-and-drop editing, multiple templates, custom domains, and SEO optimization.',
  //     tags: ['Vue.js', 'Firebase'],
  //     images: ['Editor View', 'Template Gallery'],
  //     features: [
  //       'Drag-and-drop editor',
  //       'Multiple templates',
  //       'Custom domain support',
  //       'SEO optimization'
  //     ],
  //     size: 'small',
  //     bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
  //     liveUrl: '#',
  //     githubUrl: '#',
  //   },
  //   {
  //     title: 'Analytics Tool',
  //     description: 'Real-time data visualization.',
  //     fullDescription: 'A powerful analytics tool for visualizing business data in real-time. Features customizable dashboards, automated reports, data export, and integration with popular data sources.',
  //     tags: ['React', 'Chart.js'],
  //     images: ['Dashboard', 'Reports View'],
  //     features: [
  //       'Real-time data updates',
  //       'Customizable widgets',
  //       'Automated reports',
  //       'Data export options'
  //     ],
  //     size: 'small',
  //     bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
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
        <BlurFade delay={0} duration={0.5}>
          <span className="text-xs text-slate-500 uppercase tracking-wide">Portfolio</span>
        </BlurFade>
        <h2 className="text-3xl md:text-4xl font-light mt-2">
          <BlurText text="Featured Projects" delay={30} />
        </h2>
        <BlurFade delay={0.2} duration={0.5}>
          <p className="text-slate-500 text-sm mt-2 max-w-md">
            A collection of projects that showcase my skills and passion for building great products.
          </p>
        </BlurFade>
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">
        {projects.map((project, idx) => (
          <ScaleIn 
            key={idx}
            delay={0.05 * idx}
            duration={0.5}
            className={getSizeClasses(project.size)}
          >
            <div
              onClick={(e) => handleProjectClick(e, project)}
              className={`${project.bgColor} rounded-3xl p-6 relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl h-full`}
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
          </ScaleIn>
        ))}
      </div>

      {/* View All Button */}
      <BlurFade delay={0.4} duration={0.5} className="text-center mt-10">
        <Link
          to="/projects"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </BlurFade>

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
