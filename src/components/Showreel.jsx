import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cybermotion Identity',
    role: 'Motion Design • Edit • Sound Design',
    thumb:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Quantum Interface Teaser',
    role: 'After Effects • Compositing',
    thumb:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Kinetic Type Spots',
    role: 'Typography • Animation',
    thumb:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function Showreel() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Showreel & Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/60">
              A curated selection of motion, edits, and interactive visuals. Smooth, precise, and purposeful.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            Open for collaborations
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0f1320]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-between p-4">
                  <div>
                    <h3 className="text-base font-medium">{p.title}</h3>
                    <p className="text-xs text-white/60">{p.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                      <Play className="h-3 w-3" /> Play
                    </span>
                    <ExternalLink className="h-4 w-4 text-white/70" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
