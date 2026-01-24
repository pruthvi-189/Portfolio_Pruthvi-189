import { Brain, Server, Code2, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div 
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-48px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
          }}
        >
          <span className="code-tag mb-4 inline-block">01. About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content */}
          <div 
            className="lg:col-span-3 space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-64px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
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
                className="card-elevated p-5 hover:border-primary/50 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-48px)',
                  transition: `opacity 0.5s ease-out ${0.4 + index * 0.15}s, transform 0.5s ease-out ${0.4 + index * 0.15}s`
                }}
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
