import { GraduationCap } from 'lucide-react'

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

const education = {
  degree: 'Bachelor of Engineering',
  field: 'Artificial Intelligence & Machine Learning',
  institution: 'Bangalore Technological Institute (VTU)',
  period: '2022 – 2026',
  status: 'Ongoing',
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-border" />

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 timeline-dot" />

                    {/* Experience Card */}
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

          {/* Education Card */}
          <div className="lg:col-span-1">
            <div className="card-elevated p-6 sticky top-24 education-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                  {education.status}
                </span>

                <div>
                  <h4 className="font-semibold text-lg">{education.degree}</h4>
                  <p className="text-primary font-medium">{education.field}</p>
                </div>

                <p className="text-muted-foreground text-sm">
                  {education.institution}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-mono text-sm text-muted-foreground">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
