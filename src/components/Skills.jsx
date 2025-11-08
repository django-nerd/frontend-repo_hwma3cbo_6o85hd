import { motion } from 'framer-motion';
import { Code2, Film, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Film,
    title: 'Motion Design & Editing',
    items: [
      'Adobe After Effects',
      'Premiere Pro',
      'Kinetic Typography',
      'Compositing & Roto',
      'Color & Sound Sync',
    ],
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'Front‑end Development',
    items: ['HTML5', 'CSS3 / Tailwind', 'JavaScript / React', 'GSAP basics', 'Performance & Accessibility'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Sparkles,
    title: 'Creative Storytelling',
    items: ['Narrative beats', 'Tempo & pacing', 'Brand systems', 'Art direction', 'Client collaboration'],
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Skills & Capabilities</h2>
          <p className="mt-2 text-white/60">
            Blending precision motion craft with web technologies to create immersive, performant experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${s.accent} text-white`}> 
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                {s.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
