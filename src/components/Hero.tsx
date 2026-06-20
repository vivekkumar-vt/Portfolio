import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaGithub, FaGraduationCap, FaTrophy, FaCalendarCheck, FaFolderOpen, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const roles = [
  'Java Full Stack Developer',
  'Spring Boot Developer',
  'Problem Solver',
  'Software Engineer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#030014] bg-[linear-gradient(to_right,#0c0828_1px,transparent_1px),linear-gradient(to_bottom,#0c0828_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      {/* Background glowing mesh spots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-radial-gradient-purple opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-radial-gradient-blue opacity-30 animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col justify-between">
        
        {/* Main Grid: Info Left, Profile Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT: Text Info Section */}
          <div className="lg:col-span-12 flex flex-col justify-center text-left max-w-3xl">
            
            {/* Monospaced intro label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold font-mono text-brand-purple tracking-widest uppercase mb-3"
            >
              Hello, I'm
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-2"
            >
              Vivek Kumar
            </motion.h1>

            {/* Dynamic Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 h-8 sm:h-10 flex items-center"
            >
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#7c3aed]">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              I build scalable web applications, REST APIs, and modern user experiences using Java, Spring Boot, MySQL, React, and JavaScript.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group px-6 py-3.5 rounded-xl bg-white text-slate-950 font-extrabold text-sm tracking-wide shadow-xl hover:scale-105 hover:bg-slate-100 active:scale-98 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View Projects 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="px-5 py-3.5 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-sm tracking-wide hover:scale-105 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FaEnvelope className="text-brand-purple" />
                Contact Me
              </button>

              <a
                href="https://github.com/vivekkumar-vt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-sm tracking-wide hover:scale-105 active:scale-98 transition-all flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://leetcode.com/u/vivekkumar_vt/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-sm tracking-wide hover:scale-105 active:scale-98 transition-all flex items-center gap-2"
              >
                <SiLeetcode className="text-amber-500" />
                LeetCode
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/vivekkumarvt?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-sm tracking-wide hover:scale-105 active:scale-98 transition-all flex items-center gap-2"
              >
                <SiGeeksforgeeks className="text-[#2f8d46]" />
                GeeksforGeeks
              </a>

              <a
                href="https://www.linkedin.com/in/vivekkumar-vt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#090620]/60 border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 hover:border-white/20 font-bold text-sm tracking-wide hover:scale-105 active:scale-98 transition-all flex items-center gap-2"
              >
                <FaLinkedin className="text-blue-500" />
                LinkedIn
              </a>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM: Stat Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 w-full"
        >
          {/* Card 1: LeetCode Problems */}
          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#fbbf24] border border-white/5">
              <FaTrophy className="text-lg" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">200+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">LeetCode Solved</div>
            </div>
          </div>

          {/* Card 2: Projects Completed */}
          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/5">
              <FaFolderOpen className="text-lg" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">1+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Projects Completed</div>
            </div>
          </div>

          {/* Card 3: Current CGPA */}
          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
              <FaGraduationCap className="text-lg" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">8.25</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Current CGPA</div>
            </div>
          </div>

          {/* Card 4: Graduating Year */}
          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/5">
              <FaCalendarCheck className="text-lg" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">2027</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Graduating Year</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
