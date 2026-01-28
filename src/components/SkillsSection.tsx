const technicalSkills = [
  'Artificial Intelligence',
  'Machine Learning',
  'Computer Vision',
  'Python',
  'Backend Development',
  'REST APIs',
  'Authentication & Authorization',
  'SQL Databases',
  'Git & GitHub',
  'System Design'
];

const softSkills = [
  'Problem Solving',
  'Leadership',
  'Critical Thinking',
  'Team Collaboration',
  'Communication'
];

/* ================= Magnetic helpers ================= */

const magneticMove = (
  e: React.MouseEvent<HTMLElement>,
  strength = 0.15
) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  e.currentTarget.style.transform = `translate(${x * strength}px, ${
    y * strength
  }px)`;
};

const magneticReset = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = 'translate(0, 0)';
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/50">
      <div className="section-container">
        {/* ================= Header ================= */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* ================= Skill Lists ================= */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              AI/ML & Backend
            </h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                  onMouseMove={(e) => magneticMove(e, 0.15)}
                  onMouseLeave={magneticReset}
                >
                  {skill.split('').map((char, i) => (
                    <span
                      key={i}
                      className="skill-letter"
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              Professional Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                  onMouseMove={(e) => magneticMove(e, 0.25)}
                  onMouseLeave={magneticReset}
                >
                  {skill.split('').map((char, i) => (
                    <span key={i} className="skill-letter">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Tech Stack ================= */}
        <div className="mt-16 p-8 card-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* AI / ML */}
            <div
              className="tech-card"
              onMouseMove={(e) => magneticMove(e, 0.25)}
              onMouseLeave={magneticReset}
            >
              <div className="tech-content space-y-2">
                <span className="text-4xl font-bold gradient-text">AI/ML</span>
                <p className="text-sm text-muted-foreground">Core Expertise</p>
              </div>
            </div>

            {/* Python */}
            <div
              className="tech-card"
              onMouseMove={(e) => magneticMove(e, 0.25)}
              onMouseLeave={magneticReset}
            >
              <div className="tech-content space-y-2">
                <span className="text-4xl font-bold gradient-text">Python</span>
                <p className="text-sm text-muted-foreground">Core Expertise</p>
              </div>
            </div>

            {/* APIs */}
            <div
              className="tech-card space-y-2"
              onMouseMove={(e) => magneticMove(e, 0.25)}
              onMouseLeave={magneticReset}
            >
              <span className="text-4xl font-bold gradient-text">APIs</span>
              <p className="text-sm text-muted-foreground">Backend Focus</p>
            </div>

            {/* CV */}
            <div
              className="tech-card space-y-2"
              onMouseMove={(e) => magneticMove(e, 0.25)}
              onMouseLeave={magneticReset}
            >
              <span className="text-4xl font-bold gradient-text">CV</span>
              <p className="text-sm text-muted-foreground">Computer Vision</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
