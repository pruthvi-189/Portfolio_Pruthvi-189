import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="code-tag mb-4 inline-block">05. Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8 md:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or collaborations in AI/ML and backend development.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:pruthvi@example.com"
                className="flex items-center gap-3 px-6 py-4 rounded-lg bg-primary text-primary-foreground 
                         font-semibold hover:bg-primary/90 transition-all duration-300 glow-effect hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary border border-border text-muted-foreground
                         hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary border border-border text-muted-foreground
                         hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:pruthvi@example.com"
                className="p-4 rounded-xl bg-secondary border border-border text-muted-foreground
                         hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
