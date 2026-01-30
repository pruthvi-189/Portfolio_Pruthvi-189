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

const paragraphs = [
  `I am a final-year Bachelor of Engineering student specializing in Artificial Intelligence and Machine Learning, with a strong focus on backend development and intelligent systems.`,
  `My work involves designing server-side logic, REST APIs, authentication systems, and databases—while integrating AI/ML models into backend workflows. I'm passionate about applying machine learning to real-world problems in security, automation, and computer vision.`,
  `Beyond technical work, I actively take on leadership roles including Secretary General of a student club, Google Student Ambassador, and CEO of a student-led initiative.`
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState<string[]>([]);
  const [hasTyped, setHasTyped] = useState(false);

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          setIsVisible(true);
          setHasTyped(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTyped]);

  /* ---------- Typing Animation ---------- */
  useEffect(() => {
    if (!isVisible) return;

    let p = 0;
    let c = 0;
    let current = '';
    const temp: string[] = [];

    const type = () => {
      if (p >= paragraphs.length) return;

      const char = paragraphs[p][c];
      current += char;
      temp[p] = current;
      setTypedText([...temp]);

      c++;

      let delay = 25;
      if (char === ' ') delay = 25;
      if (c === paragraphs[p].length) {
        p++;
        c = 0;
        current = '';
        delay = 1000;
      }

      setTimeout(type, delay);
    };

    type();
  }, [isVisible]);

  /* ---------- Magnetic Hover ---------- */
  const onMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const onMouseLeave = (card: HTMLDivElement) => {
    card.style.transform = 'translate(0, 0)';
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            {typedText.map((text, index) => (
              <p
                key={index}
                className={`leading-relaxed text-muted-foreground ${
                  index === 0 ? 'text-lg text-foreground' : ''
                }`}
              >
                {text}
                <span className="animate-pulse">|</span>
              </p>
            ))}

            {typedText.length === paragraphs.length && (
              <div className="flex items-center gap-2 pt-4 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Bengaluru, India</span>
              </div>
            )}
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-2 space-y-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="
                  relative p-5 rounded-xl border border-border
                  transition-all duration-300 ease-out
                  hover:border-yellow-400/40
                  hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]
                  before:opacity-0 hover:before:opacity-100
                  before:transition-opacity before:duration-300
                "
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                  transitionDelay: `${0.6 + index * 0.15}s`
                }}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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
