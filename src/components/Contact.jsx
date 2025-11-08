import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact & Collaboration</h2>
          <p className="mt-2 text-white/60">
            Let’s build something thoughtful. I’m available for freelance motion design, editing, and front‑end
            collaborations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/60">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-[#0f1320] px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-sky-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-[#0f1320] px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-sky-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0f1320] px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-sky-500" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2 text-sm font-medium">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-base font-medium">Connect</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:hello@example.com" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="h-4 w-4 text-sky-400" /> hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Github className="h-4 w-4 text-white/70" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Linkedin className="h-4 w-4 text-white/70" /> LinkedIn
              </a>
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-[#0f1320] p-4 text-sm text-white/70">
              Available worldwide • Remote‑friendly • Typically responds within 24 hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
