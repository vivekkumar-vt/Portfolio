import { motion } from 'framer-motion';
import { FaLinkedin, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

export default function LeetCodeLinkedIn() {
  return (
    <section id="leetcode" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-radial-gradient-blue opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-radial-gradient-purple opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-purple px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4"
          >
            Profiles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            LeetCode & LinkedIn
          </motion.h2>
        </div>

        {/* Profiles Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEETCODE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between group hover:border-amber-500/25 transition-all duration-300 relative overflow-hidden"
          >
            {/* Ambient orange glow background */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 border-b border-white/5 pb-5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl">
                  <SiLeetcode />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LeetCode</h3>
                  <p className="text-xs text-slate-400">@vivekkumar_vt</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">DSA Accomplishments</div>
                <div className="text-3xl font-black text-white mb-3">220+ Solved Problems</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Regularly solving algorithm problems on LeetCode. Strong focus on data structures, sorting, searching, binary trees, and performance optimization.
                </p>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/vivekkumar_vt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              View LeetCode Profile
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </motion.div>

          {/* LINKEDIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-3xl glass-card border border-white/5 flex flex-col justify-between group hover:border-[#0077B5]/25 transition-all duration-300 relative overflow-hidden"
          >
            {/* Ambient blue glow background */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 border-b border-white/5 pb-5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center text-[#0077B5] text-2xl">
                  <FaLinkedin />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                  <p className="text-xs text-slate-400">@vivekkumar-vt</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Professional Network</div>
                <div className="text-3xl font-black text-white mb-3">Connect & Collaborate</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open for Java Full Stack Developer internships, junior roles, and remote collaborations. Let's expand our developer network and build together.
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/vivekkumar-vt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 hover:text-[#0077B5] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              Connect on LinkedIn
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
