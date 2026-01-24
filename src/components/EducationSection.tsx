import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'Bangalore Technological Institute (VTU)',
    period: '2022 – 2026',
    status: 'Ongoing',
    grade: 'CGPA: 8.4 / 10',
  },
  {
    degree: 'Pre-University',
    field: 'Physics, Chemistry, Mathematics, Biology (PCMB)',
    institution: 'Pre-University College',
    period: '2020 – 2022',
    status: 'Completed',
    grade: 'Percentage: 87%',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-card/50">
      <div className="section-container max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <span className="code-tag mb-4 inline-block">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-primary" />
                <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-primary">{edu.field}</p>

              <p className="text-muted-foreground text-sm mt-2">
                {edu.institution}
              </p>

              <p className="text-sm font-mono text-emerald-400 mt-2">
                {edu.grade}
              </p>

              <div className="mt-4 pt-4 border-t border-border text-sm font-mono text-muted-foreground">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
