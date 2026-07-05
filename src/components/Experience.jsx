import { motion } from 'framer-motion'
import { experience } from '../data'
import Reveal from './Reveal'

function Bullets({ points }) {
  return (
    <ul className="space-y-2">
      {points.map((p, i) => (
        <li key={i} className="text-ink-300 flex gap-3">
          <span className="mt-2 w-1 h-1 rounded-full bg-accent-light shrink-0" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section id="work" className="px-6 py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-12">
            Experience
          </h2>
        </Reveal>

        <div className="relative space-y-16">
          <motion.div
            className="hidden md:block absolute left-[calc(25%-1px)] top-2 bottom-2 w-px bg-gradient-to-b from-accent-light/60 via-white/10 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {experience.map((job, idx) => (
            <Reveal key={job.company} delay={idx * 0.1}>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-11 h-11 rounded-xl border border-white/10 shrink-0"
                  />
                  <div>
                    <p className="text-white font-medium">{job.company}</p>
                    <p className="text-ink-400 text-sm mt-1">{job.role}</p>
                    <p className="text-ink-500 text-sm mt-1">{job.period}</p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  {job.subProjects ? (
                    <div className="space-y-10">
                      {job.subProjects.map((sp) => (
                        <div key={sp.name}>
                          <p className="text-lg text-white mb-3">{sp.name}</p>
                          <Bullets points={sp.points} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Bullets points={job.points} />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
