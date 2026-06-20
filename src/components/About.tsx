import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaBriefcase } from 'react-icons/fa6';

const stats = [
  { label: 'Cumulative CGPA', value: '8.25', suffix: '/10', description: 'Academic Excellence' },
  { label: 'Projects Built', value: '1+', suffix: '', description: 'Production & Academic' },
  { label: 'LeetCode Solved', value: '200+', suffix: '', description: 'Data Structures & Alg' },
  { label: 'Core Skills', value: '12+', suffix: '', description: 'Full Stack Technologies' }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background glowing circle */}
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] bg-radial-gradient-purple opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-purple px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Passionate Developer <span className="text-gradient-purple-blue">&</span> Problem Solver
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Biography Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20"><FaGraduationCap /></span>
              B.Tech in Computer Science Engineering
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              I am currently pursuing my Bachelor of Technology in Computer Science & Engineering at <strong>KCC Institute of Technology & Management, Greater Noida</strong>. With an academic record of <strong>8.25 CGPA</strong>, I possess a strong theoretical background in Core Computer Science concepts alongside a drive for hands-on software development.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              As a dedicated <strong>Java Full Stack Developer</strong>, I focus on constructing robust backend services using <strong>Spring Boot</strong> and mapping databases with <strong>MySQL/SQL</strong>. On the frontend, I create modern responsive user interfaces using <strong>React</strong> and Tailwind CSS, building complete solutions from concept to deployment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4.5 rounded-2xl glass-card flex gap-4 items-start">
                <div className="text-xl text-brand-blue mt-1"><FaLightbulb /></div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">Problem-Solving Mindset</h4>
                  <p className="text-xs text-slate-400 mt-1">Avid coder on LeetCode focusing on sorting, searching, tree traversals, and dynamic programming.</p>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl glass-card flex gap-4 items-start">
                <div className="text-xl text-brand-pink mt-1"><FaBriefcase /></div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">Career Focus</h4>
                  <p className="text-xs text-slate-400 mt-1">Seeking Software Engineering opportunities to design clean APIs and reliable distributed backends.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metric Stats Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, translateY: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between h-[155px] border border-white/5 relative group overflow-hidden"
              >
                {/* Glowing backdrop card cover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {stat.label}
                  </span>
                  <p className="text-xs text-slate-400">{stat.description}</p>
                </div>
                
                <h4 className="text-4xl font-extrabold tracking-tight text-white mt-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {stat.value}
                  <span className="text-lg text-brand-purple font-medium">{stat.suffix}</span>
                </h4>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
