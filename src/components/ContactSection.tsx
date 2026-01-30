import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Phone,
    value: "+91 7022363858",
    href: "tel:+917022363858",
  },
  {
    icon: Mail,
    value: "pruthvinarayanareddy@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=pruthvinarayanareddy@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Pruthvi,"
  },
  {
    icon: Linkedin,
    value: "Pruthvi Narayana Reddy",
    href: "https://www.linkedin.com/in/pruthvi-narayana-reddy",
  },
  {
    icon: Github,
    value: "pruthvi-189",
    href: "https://github.com/pruthvi-189",
  },
];

const MagneticCard = ({ icon: Icon, value, href }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl p-6 flex flex-col items-center gap-4
                 bg-secondary/60 border border-border
                 transition-all duration-300 ease-out
                 hover:border-primary/60
                 hover:shadow-[0_0_0_1px_rgba(234,179,8,0.65),0_16px_45px_rgba(234,179,8,0.4)]"
    >
      {/* Icon */}
      <div
        className="p-3 rounded-full bg-primary/10 text-primary
                   group-hover:bg-primary group-hover:text-primary-foreground
                   transition-colors duration-300"
      >
        <Icon size={24} />
      </div>

      {/* Value */}
      <span className="text-sm text-muted-foreground text-center break-all">
        {value}
      </span>
    </a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="code-tag mb-4 inline-block">05. Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-center">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or collaborations in AI/ML and backend development.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactLinks.map((item, index) => (
                <MagneticCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
