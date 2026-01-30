import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'Bangalore Technological Institute (VTU)',
    period: '2022 – 2026',
    status: 'Ongoing',
    grade: 'CGPA: 9.0 / 10',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-card/50">
      <div className="section-container max-w-4xl relative">
        {/* Header */}
        <div className="mb-20">
          <span className="code-tag mb-4 inline-block">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Timeline line */}
        <div className="absolute left-6 top-40 bottom-10 w-[2px] bg-border" />

        {/* WALKING STUDENT (IMAGE BASED) */}
        <motion.img
          src="/walking-student1.png"
          alt="Walking student"
          className="absolute left-[10px] top-[72%] w-8 z-20"
          animate={{ y: [-20, -260] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))',
          }}
        />
        {/* Education cards */}
        <div className="space-y-16 pl-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(255,215,0,0.6)]" />

              {/* Gold glow (tight & controlled) */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-2xl
                  bg-yellow-400/30
                  blur-[26px]
                  opacity-40
                  group-hover:opacity-80
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
              />

              {/* Card */}
              <div className="relative z-10 card-elevated p-6 bg-card">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
