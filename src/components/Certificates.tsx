import { motion } from 'framer-motion';
import { FaJava, FaDatabase, FaAward, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const certificatesData = [
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    issueDate: '11 Jul, 2026',
    credentialId: '2164B8626504',
    verificationUrl: 'https://www.hackerrank.com/certificates/iframe/2164b8626504',
    description: 'Passed the HackerRank SQL (Basic) skill certification. Validates foundational database concepts including queries, filtering, aggregations, joins, and subqueries.',
    skills: ['SQL', 'Relational Databases', 'Database Queries', 'Data Joins & Aggregations'],
    icon: <FaDatabase className="text-blue-400 text-2xl" />,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400'
  },
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    issueDate: '11 Jul, 2026',
    credentialId: 'DCB44F7F6F16',
    verificationUrl: 'https://www.hackerrank.com/certificates/iframe/dcb44f7f6f16',
    description: 'Passed the HackerRank Java (Basic) skill certification. Validates basic syntax, control flow, loops, exception handling, data structures, and OOP principles in Java.',
    skills: ['Java', 'OOPs Concepts', 'Control Structures', 'Exception Handling', 'Data Structures'],
    icon: <FaJava className="text-orange-500 text-2xl" />,
    color: 'from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-radial-gradient-pink opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-radial-gradient-purple opacity-20 pointer-events-none" />

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
            Achievements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Certifications
          </motion.h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl glass-card p-8 flex flex-col justify-between hover:border-brand-purple/35 transition-all duration-300 overflow-hidden"
            >
              {/* Top border glow reflex */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header elements */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border-white/10`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Issued by <span className="text-brand-teal font-semibold">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <FaAward className="text-2xl text-brand-purple opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills verified list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 hover:border-brand-purple/20 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer details & action */}
              <div className="border-t border-white/5 pt-4 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Credential ID
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    {cert.credentialId}
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="text-right sm:block hidden">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Issued On
                    </div>
                    <div className="text-xs text-slate-300 font-semibold">
                      {cert.issueDate}
                    </div>
                  </div>
                  
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-purple/10 hover:bg-brand-purple/20 border border-brand-purple/20 hover:border-brand-purple/40 text-xs font-bold text-brand-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.05)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
