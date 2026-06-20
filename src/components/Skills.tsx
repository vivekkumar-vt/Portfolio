import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa6';
import { SiSpringboot, SiMysql } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90, icon: <FaJava className="text-orange-500" /> },
      { name: 'SQL', level: 85, icon: <FaDatabase className="text-blue-400" /> },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', level: 85, icon: <SiSpringboot className="text-emerald-500" /> },
      { name: 'REST APIs', level: 85, icon: <span className="text-[10px] font-bold text-slate-400 border border-slate-400/50 rounded px-1 font-mono">REST</span> },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-400" /> },
      { name: 'HTML5', level: 90, icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3 / Tailwind', level: 85, icon: <FaCss3Alt className="text-sky-500" /> },
    ]
  },
  {
    title: 'Database Systems',
    skills: [
      { name: 'MySQL', level: 80, icon: <SiMysql className="text-blue-500" /> },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', level: 90, icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', level: 85, icon: <FaCode className="text-sky-500" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Mesh glow background decoration */}
      <div className="absolute top-[30%] right-[10%] w-[380px] h-[380px] bg-radial-gradient-pink opacity-30 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[420px] h-[420px] bg-radial-gradient-purple opacity-30 pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Technical Skillset
          </motion.h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl glass-card flex flex-col hover:border-brand-purple/20 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3 flex items-center justify-between group-hover:text-brand-purple transition-colors duration-300">
                {category.title}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              </h3>

              <div className="space-y-6 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Track */}
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
