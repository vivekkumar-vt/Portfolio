import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LeetCodeLinkedIn from './components/LeetCodeLinkedIn';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Page Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-brand-purple/30 selection:text-brand-purple-200 antialiased overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Academic />
        <Skills />
        <Projects />
        <LeetCodeLinkedIn />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
      
    </div>
  );
}
