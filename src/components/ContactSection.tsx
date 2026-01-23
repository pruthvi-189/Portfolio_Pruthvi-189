import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const contactLinks = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7022363858',
    href: 'tel:+917022363858'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'pruthvinarayanareddy@gmail.com',
    href: 'mailto:pruthvinarayanareddy@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Pruthvi Narayana Reddy',
    href: 'https://www.linkedin.com/in/pruthvi-narayana-reddy'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'pruthvi-189',
    href: 'https://github.com/pruthvi-189'
  }
];

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

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-center">
              I'm always open to discussing new opportunities, interesting projects, 
              or collaborations in AI/ML and backend development.
            </p>

            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 border border-border
                           hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <contact.icon size={24} />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="text-center">
              <a
                href="mailto:pruthvinarayanareddy@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground 
                         font-semibold hover:bg-primary/90 transition-all duration-300 glow-effect hover:scale-105"
              >
                <Mail size={20} />
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
