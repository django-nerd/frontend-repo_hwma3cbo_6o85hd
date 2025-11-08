import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0d12]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide">
          <span className="text-sky-400">AE</span> • Motion & Front‑end
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#research" className="hover:text-white">AI Research</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0d12] py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/60">© {year} Motion Design + Front‑end — All rights reserved.</p>
          <div className="text-sm text-white/50">Built with React • Tailwind • Framer Motion • Spline</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12]">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Showreel />
        <Skills />
        <Academics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
