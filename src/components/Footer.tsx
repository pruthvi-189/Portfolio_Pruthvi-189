const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            Pruthvi Narayana Reddy
            <span className="text-primary">{' />'}</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} — Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
