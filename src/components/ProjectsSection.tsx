import { ExternalLink, Github, Cpu, Server, Shield } from 'lucide-react';

/* ---------------- Cursor Hover Animation Helpers ---------------- */

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 25;
  const rotateY = (x - centerX) / 25;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

  // ✨ Gold glow shadow
  card.style.boxShadow =
    '0 25px 60px rgba(255, 193, 7, 0.25), 0 0 40px rgba(255, 193, 7, 0.15)';
};

const handleMouseLeave = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const card = e.currentTarget;

  card.style.transform =
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';

  // Reset shadow
  card.style.boxShadow = 'none';
};

/* ---------------- Projects Data ---------------- */

const projects = [
  {
    title: 'Hand Gesture Controlled Robotic Arm',
    category: 'AI/ML & Computer Vision',
    icon: Cpu,
    problem:
      'Conventional robotic arm systems rely on physical controllers or pre-programmed instructions, limiting intuitive human–machine interaction and real-time adaptability.',
    solution:
      'Developed a real-time hand gesture recognition system using a CNN model that interprets live camera input and controls a robotic arm via Raspberry Pi.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Raspberry Pi'],
    flow:
      'Camera Input → Hand Detection → CNN Gesture Classification → Command Mapping → Raspberry Pi → Robotic Arm Actuation',
    github: 'https://github.com/pruthvi-189/hand_mimic_arm',
    live: '',
    featured: true
  },
  {
    title: 'Fake Review Detection using Machine Learning and NLP',
    category: 'AI/ML & NLP',
    icon: Shield,
    problem:
      'Online platforms often suffer from fake and misleading reviews, negatively impacting user trust and decision-making.',
    solution:
      'Built an NLP-based ML system to classify reviews as genuine or fake using textual patterns, linguistic features, and sentiment analysis.',
    technologies: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'TF-IDF'],
    flow:
      'Review Text → Preprocessing → Feature Extraction (TF-IDF) → ML Classifier → Fake / Genuine Prediction',
    github: 'https://github.com/your-username/fake-review-detection',
    live: '',
    featured: true
  },
  {
    title: 'AI Research Paper Summarizer',
    category: 'AI/ML & Natural Language Processing',
    icon: Cpu,
    problem:
      'Research papers are lengthy and complex, making it difficult to quickly extract key insights.',
    solution:
      'Developed a transformer-based NLP system that generates concise summaries of research papers.',
    technologies: ['Python', 'Transformers', 'Hugging Face', 'PyTorch', 'NLP'],
    flow:
      'Research Paper Text → Cleaning → Transformer Model → Key Content Extraction → Summary Output',
    github: 'https://github.com/pruthvi-189/AI_Research_Paper_Summarizer',
    live: '',
    featured: false
  },
  {
    title: 'Diabetes Detection using Machine Learning',
    category: 'AI/ML & Healthcare Analytics',
    icon: Shield,
    problem:
      'Manual analysis of medical parameters for diabetes detection is time-consuming and prone to errors.',
    solution:
      'Built a machine learning model that predicts diabetes likelihood using patient health data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    flow:
      'Patient Data → Preprocessing → Feature Selection → ML Model → Diabetes Prediction',
    github: 'https://github.com/pruthvi-189/diabetes-detection-ml',
    live: '',
    featured: false
  },
  {
    title: 'Heart Disease Prediction using Machine Learning',
    category: 'AI/ML & Predictive Healthcare',
    icon: Server,
    problem:
      'Early heart disease risk assessment is complex using traditional diagnostic approaches.',
    solution:
      'Developed a predictive ML system to estimate heart disease risk from clinical attributes.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn'],
    flow:
      'Clinical Data → Data Cleaning → Feature Engineering → ML Classification → Risk Prediction',
    github: 'https://github.com/pruthvi-189/heart-disease-detection',
    live: '',
    featured: false
  }
];

/* ---------------- Component ---------------- */

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`card-elevated p-6 md:p-8 transition-all duration-300 ease-out will-change-transform ${
                project.featured ? 'lg:p-10' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <project.icon size={28} />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                        Problem
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                      System Flow
                    </h4>
                    <div className="p-4 rounded-lg bg-secondary/50 font-mono text-sm text-primary overflow-x-auto">
                      {project.flow}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
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
