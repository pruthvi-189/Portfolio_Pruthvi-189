import { Brain, Server, Code2, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Designing intelligent systems with deep learning and computer vision'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building scalable APIs, authentication systems, and databases'
  },
  {
    icon: Code2,
    title: 'System Integration',
    description: 'Seamlessly connecting AI models with production backend workflows'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">01. About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a final-year Bachelor of Engineering student specializing in 
              <span className="text-foreground font-medium"> Artificial Intelligence and Machine Learning</span>, 
              with a strong focus on backend development and intelligent systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My work involves designing server-side logic, REST APIs, authentication systems, 
              and databases—while integrating AI/ML models into backend workflows. I'm passionate 
              about applying machine learning to real-world problems in security, automation, and 
              computer vision.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond technical work, I actively take on leadership roles including 
              <span className="text-foreground"> Secretary General</span> of a student club, 
              <span className="text-foreground"> Google Student Ambassador</span>, and 
              <span className="text-foreground"> CEO</span> of a student-led initiative.
            </p>

            <div className="flex items-center gap-2 pt-4 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Bengaluru, India</span>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elevated p-5 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
