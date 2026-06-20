import { motion } from 'framer-motion';
import { FaGithub, FaCheck, FaLayerGroup } from 'react-icons/fa6';

const projects = [
  {
    title: 'Yojana Setu (Frontend Platform)',
    role: 'Lead Frontend Developer',
    description: 'A GovTech platform that helps citizens discover and filter government welfare schemes through an intuitive, user-friendly interface. Designed with modern accessibility standards in mind.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'JSON Storage'],
    features: [
      'Interactive Scheme Discovery Engine',
      'Dynamic Keyword Search & Multi-category Filtering',
      'Fully Responsive Mobile-First Design',
      'Fluid Client-side Navigation & Layouts'
    ],
    liveUrl: 'https://github.com/vivekkumar-vt/YojanaSetu', // Placeholders or GitHub
    githubUrl: 'https://github.com/vivekkumar-vt/YojanaSetu',
    badge: 'Featured Project'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background glowing circle */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-radial-gradient-purple opacity-30 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-radial-gradient-blue opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-purple px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4"
          >
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Projects Listing */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl glass-card border border-white/5 shadow-2xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden group hover:border-brand-purple/35 transition-colors duration-500"
              >
                {/* Visual Glass Layout Frame (Simulated IDE or UI preview card) */}
                <div className={`w-full lg:w-[40%] flex flex-col justify-center ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                  <div className="relative rounded-2xl bg-[#090620]/80 border border-white/5 p-5 shadow-inner flex flex-col h-full min-h-[220px] justify-between group-hover:border-brand-blue/30 transition-all duration-500 overflow-hidden">
                    {/* Glowing mesh spot */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 blur-2xl rounded-full" />
                    
                    {/* Simulated window header */}
                    <div className="flex items-center gap-1.5 mb-4 border-b border-white/5 pb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] text-slate-500 font-mono ml-2">localhost:3000 / codebase</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                      <div className="text-3xl text-brand-purple mb-3 flex justify-center"><FaLayerGroup /></div>
                      <div className="text-center font-bold text-slate-200 text-base mb-1">{project.title}</div>
                      <div className="text-center text-xs text-slate-400 font-medium tracking-wide uppercase">{project.role}</div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[9px] font-mono font-semibold bg-white/5 border border-white/5 px-2 py-0.5 rounded text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Specs Column */}
                <div className="w-full lg:w-[60%] flex flex-col justify-between">
                  <div>
                    {/* Project Header */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-bold text-brand-purple uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{project.role}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-brand-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {project.features.map(feature => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <span className="p-1 rounded bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] mt-0.5"><FaCheck /></span>
                          <span className="text-xs sm:text-sm text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action row with badges */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(techName => (
                        <span 
                          key={techName}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                        >
                          {techName}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-xs tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
