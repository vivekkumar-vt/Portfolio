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
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400">
            &copy; 2026 <span className="text-white font-bold">Vivek Kumar</span>. All Rights Reserved.
          </p>
          <p className="text-[15px] text-slate-500 mt-1 font-mono">
            Created by KUMAR Groups 
          </p>
        </div>
      </div>
    </footer>
  );
}
