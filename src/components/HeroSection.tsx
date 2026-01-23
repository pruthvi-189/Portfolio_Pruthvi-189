import { ArrowDown, FileDown, FolderOpen, User } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 60%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative section-container py-20 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Status Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Pruthvi Narayana
              <span className="block gradient-text">Reddy</span>
            </h1>

            {/* Role */}
            <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground font-light mb-6">
              AI/ML Engineering Student & Backend Developer
            </p>

            {/* Tagline */}
            <p className="animate-fade-up-delay-2 max-w-xl text-muted-foreground mb-10 text-balance">
              Building intelligent systems and robust backend architectures.
              <span className="text-foreground"> Transforming complex problems into elegant solutions</span> through
              machine learning, computer vision, and scalable APIs.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold 
                           hover:bg-primary/90 transition-all duration-300 glow-effect hover:scale-105"
              >
                <FolderOpen size={20} />
                View Projects
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50
                           text-foreground font-semibold hover:bg-secondary hover:border-primary/50 transition-all duration-300"
              >
                <FileDown size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="animate-fade-up-delay-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              {/* Photo Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 subtle-glow">
                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <User size={120} className="text-muted-foreground/30" />
                </div>
                {/* 
                  To add your photo, replace the div above with:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Pruthvi Narayana Reddy" 
                    className="w-full h-full object-cover"
                  />
                */}
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/5 scale-125" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
