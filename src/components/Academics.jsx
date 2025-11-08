import { motion } from 'framer-motion';
import { GraduationCap, Brain } from 'lucide-react';

export default function Academics() {
  return (
    <section id="research" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">AI Research & Student Journey</h2>
          <p className="mt-2 text-white/60">
            Pursuing AI and interactive media research at Cochin University of Science and Technology, exploring how
            machine learning can augment editorial workflows, motion systems, and real‑time graphics on the web.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-sky-400" />
              <div>
                <h3 className="text-lg font-medium">Cochin University of Science and Technology</h3>
                <p className="text-sm text-white/60">Student • AI & Interactive Media</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                  <li>Human‑AI collaboration for edit decision trees</li>
                  <li>Procedural motion systems and data‑driven animation</li>
                  <li>WebGL & real‑time visualization for editorial previews</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-start gap-3">
              <Brain className="mt-1 h-5 w-5 text-violet-400" />
              <div>
                <h3 className="text-lg font-medium">Recent Experiments</h3>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  <li>
                    • Style‑transfer previsualization for motion boards using lightweight models and frame interpolation
                  </li>
                  <li>• Automated beat detection to inform cut points and kinetic type timing</li>
                  <li>• Prompt‑to‑motion scripts for generating AE keyframe scaffolds</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
