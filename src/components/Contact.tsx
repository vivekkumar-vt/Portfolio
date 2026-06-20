import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapPin, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Contact() {
  /*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setValidationError('All form fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulated API Request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1500);
  };
  */

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
                <a
                  href="https://leetcode.com/u/vivekkumar_vt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-amber-500 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/vivekkumarvt?tab=activity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-[#2f8d46] hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                >
                  <SiGeeksforgeeks />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form (Hidden for Later Use)
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/5 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'sending' || status === 'success'}
                      className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.08] transition-all text-sm"
                      placeholder="ABC"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending' || status === 'success'}
                      className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.08] transition-all text-sm"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'sending' || status === 'success'}
                    className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.08] transition-all text-sm"
                    placeholder="Opportunity: Software Engineer Role"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending' || status === 'success'}
                    rows={5}
                    className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.08] transition-all text-sm resize-none"
                    placeholder="Describe your requirement here..."
                  />
                </div>

                {validationError && (
                  <div className="text-xs font-semibold text-rose-500 bg-rose-500/10 border border-rose-500/20 px-4 py-2.5 rounded-lg">
                    {validationError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    status === 'success'
                      ? 'bg-emerald-500 text-white'
                      : status === 'sending'
                      ? 'bg-brand-purple/60 text-white cursor-wait'
                      : 'bg-gradient-to-r from-brand-purple to-brand-blue hover:scale-[1.01] active:scale-[0.99] text-white shadow-lg shadow-brand-purple/20'
                  }`}
                >
                  {status === 'success' ? (
                    'Message Sent Successfully!'
                  ) : status === 'sending' ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>
          */}

        </div>

      </div>
    </section>
  );
}
