import { ExternalLink, Github, Cpu, Server, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Gesture-Controlled Robotic Arm',
    category: 'AI/ML & Computer Vision',
    icon: Cpu,
    problem: 'Traditional robotic arm control requires complex physical interfaces that limit accessibility and real-time responsiveness.',
    solution: 'Developed a CNN-based computer vision system that interprets hand gestures in real-time to control a robotic arm, enabling intuitive and touchless operation.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'CNN'],
    flow: 'Camera Input → Gesture Recognition (CNN) → Motion Commands → Raspberry Pi → Robotic Arm Actuation',
    featured: true
  },
  {
    title: 'Secure Authentication API',
    category: 'Backend Development',
    icon: Shield,
    problem: 'Many applications lack robust authentication systems with proper role-based access control and security measures.',
    solution: 'Built a production-ready authentication API with JWT tokens, refresh token rotation, role-based access control, and secure password hashing.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'JWT', 'bcrypt'],
    flow: 'Client Request → API Gateway → Auth Middleware → JWT Validation → Role Check → Protected Resource',
    featured: true
  },
  {
    title: 'RESTful Database Service',
    category: 'Backend & System Design',
    icon: Server,
    problem: 'Need for a scalable, well-structured API service that handles complex data relationships with proper error handling.',
    solution: 'Designed and implemented a RESTful API with CRUD operations, input validation, pagination, and comprehensive error handling.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
    flow: 'HTTP Request → Validation Layer → Business Logic → ORM → Database → Response Serialization',
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">03. Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-elevated p-6 md:p-8 hover:border-primary/30 transition-all duration-300 ${
                project.featured ? 'lg:p-10' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Icon & Category */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <project.icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">{project.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-muted-foreground text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm">{project.solution}</p>
                    </div>
                  </div>

                  {/* System Flow */}
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      System Flow
                    </h4>
                    <div className="p-4 rounded-lg bg-secondary/50 font-mono text-sm text-primary overflow-x-auto">
                      {project.flow}
                    </div>
                  </div>

                  {/* Technologies & Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
