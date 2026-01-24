const experiences = [
  {
    title: 'Internship Trainee',
    organization: 'POSSPOLE Pvt. Ltd.',
    period: 'Current',
    description:
      'Gained hands-on experience in software development practices, working on real-world projects and collaborating with industry professionals.',
    type: 'work',
  },
  {
    title: 'Founder & Chief Executive Officer (CEO)',
    organization: 'PixelPen',
    period: 'Current',
    description:
      'Founding and leading a student-led initiative focused on creative technology solutions and digital content creation.',
    type: 'leadership',
  },
  {
    title: 'Google Student Ambassador',
    organization: 'Google',
    period: 'Completed',
    description:
      'Representing Google on campus, organizing tech events, and promoting developer tools and resources to the student community.',
    type: 'leadership',
  },
  {
    title: "Secretary General",
    organization: "BTI Students' Club",
    period: 'Completed',
    description:
      'Leading club operations, coordinating events, managing team communications, and driving student engagement initiatives.',
    type: 'leadership',
  },
  {
    title: 'Technical Trainee',
    organization: 'BTI Incubation Centre',
    period: 'Completed',
    description:
      'Developed technical skills in an incubation environment, contributing to innovative projects and startup initiatives.',
    type: 'work',
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-card/50">
      <div className="section-container max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1.5 timeline-dot" />

                <div
                  className="card-elevated p-5 experience-card hover:border-primary/30"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left - rect.width / 2
                    const y = e.clientY - rect.top - rect.height / 2
                    e.currentTarget.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0,0)'
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary font-mono text-sm">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
