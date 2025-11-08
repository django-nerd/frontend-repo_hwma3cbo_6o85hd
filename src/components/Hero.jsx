import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0d12] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle top/bottom gradient vignettes that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-transparent to-[#0b0d12] opacity-80" />

      <div className="relative mx-auto flex h-[90vh] max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-sky-400" />
            <span className="text-xs tracking-wide text-white/80">After Effects • Motion Graphics • Front‑end</span>
          </div>

          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Crafting precise motion, elevated edits, and interactive web stories
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            6 years shaping narratives through motion design and video editing — now blending that craft with modern
            front‑end development and human‑centered, AI‑driven thinking.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-900/30 transition-transform hover:scale-[1.02]"
            >
              <PlayCircle className="h-4 w-4" />
              View Showreel & Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              Let’s Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
