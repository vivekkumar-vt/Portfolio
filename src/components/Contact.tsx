import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapPin, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-radial-gradient-purple opacity-20 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-radial-gradient-pink opacity-15 pointer-events-none" />

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
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="flex justify-center w-full">
          
          {/* CENTERED: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-2 text-center">Let's Discuss Your Project</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 text-center">
              I am open to Java Full Stack Developer internships, software engineering roles, and collaborative projects. Reach out via email, phone, or connect on socials.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl glass-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Email Me</div>
                  <a href="mailto:vivekkumaryou.2021@gmail.com" className="text-sm font-bold text-slate-200 hover:text-brand-purple transition-colors">
                    vivekkumaryou.2021@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-lg">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Call Me</div>
                  <a href="tel:+918791649442" className="text-sm font-bold text-slate-200 hover:text-brand-blue transition-colors">
                    +91 8791649442
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink text-lg">
                  <FaMapPin />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Location</div>
                  <span className="text-sm font-bold text-slate-200">
                    Bulandshahr, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="mt-6 flex flex-col items-center">
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Connect Socially</div>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://github.com/vivekkumar-vt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vivekkumar-vt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-[#0077B5] hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
