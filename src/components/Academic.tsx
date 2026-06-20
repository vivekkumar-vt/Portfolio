import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';

const educationData = [
  {
    type: 'college',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'KCC Institute of Technology & Management, Greater Noida',
    scoreLabel: 'Cumulative CGPA',
    score: '8.25 / 10',
    duration: '2023 - 2027',
    details: 'Focused on Core Java, Data Structures and Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Software Design.',
    icon: <FaGraduationCap />
  },
  {
    type: 'school',
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'CBSE Board School',
    scoreLabel: 'Final Percentage',
    score: '73.8%',
    duration: '2021 - 2023',
    details: 'Concentrated in Physics, Chemistry, and Mathematics. Built strong analytical foundations.',
    icon: <FaSchool />
  },
  {
    type: 'school',
    degree: 'Secondary Education (Class X)',
    institution: 'CBSE Board School',
    scoreLabel: 'Final Percentage',
    score: '78.1%',
    duration: '2019 - 2021',
    details: 'Completed general education with special interest in mathematics, computing fundamentals, and physical sciences.',
    icon: <FaSchool />
  }
];

export default function Academic() {
  return (
    <section id="academic" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-radial-gradient-blue opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-purple px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4"
          >
            Academic Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Education Timeline
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-purple via-brand-blue to-white/10" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row items-stretch ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer spacer to align layout on desktop */}
                  <div className="hidden sm:block w-1/2 px-8" />

                  {/* Centered Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white timeline-dot-glow ${
                        item.type === 'college' 
                          ? 'bg-gradient-to-tr from-brand-purple to-brand-pink shadow-[0_0_15px_rgba(139,92,246,0.6)]' 
                          : 'bg-gradient-to-tr from-brand-blue to-brand-teal shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8"
                  >
                    <div className="p-6 rounded-2xl glass-card border border-white/5 shadow-xl hover:border-brand-purple/20 transition-all duration-300 relative group overflow-hidden">
                      {/* Glow reflection at card top border */}
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="text-xs font-semibold text-brand-purple uppercase tracking-wider block mb-2">
                        {item.duration}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-purple transition-colors duration-300">
                        {item.degree}
                      </h3>
                      
                      <h4 className="text-sm font-medium text-slate-300 mb-4">
                        {item.institution}
                      </h4>

                      <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        {item.details}
                      </p>

                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {item.scoreLabel}:
                        </span>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                          {item.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
