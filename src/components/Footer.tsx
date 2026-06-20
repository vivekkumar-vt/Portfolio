import { FaChevronUp, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#020010] border-t border-white/5 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400">
            &copy; 2026 <span className="text-white font-bold">Vivek Kumar</span>. All Rights Reserved.
          </p>
          <p className="text-[10px] text-slate-500 mt-1 font-mono">
            Designed & Engineered with React, Vite, Tailwind v4 & Framer Motion.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivekkumar-vt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center text-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vivekkumar-vt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-[#0077B5] hover:bg-white/10 transition-all flex items-center justify-center text-sm"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/vivekkumar_vt/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-amber-500 hover:bg-white/10 transition-all flex items-center justify-center text-sm"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/vivekkumarvt?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-[#2f8d46] hover:bg-white/10 transition-all flex items-center justify-center text-sm"
            aria-label="GeeksforGeeks Profile"
          >
            <SiGeeksforgeeks />
          </a>
        </div>

        {/* Right Side: Back to Top Button */}
        <div>
          <button
            onClick={handleScrollToTop}
            className="group px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
          >
            Back to Top
            <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
