import { education, certifications } from '../data'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="px-6 py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-8">
            Education
          </h2>
          {education.map((e) => (
            <div key={e.school}>
              <p className="text-white text-lg">{e.degree}</p>
              <p className="text-ink-300 mt-1">{e.school}</p>
              <p className="text-ink-500 text-sm mt-1">{e.period}{e.detail ? ` · ${e.detail}` : ''}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-8">
            Certificates
          </h2>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="text-ink-300 flex gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-accent-light shrink-0" />
                <span>
                  <span className="text-white">{c.name}</span>
                  <span className="text-ink-500"> — {c.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
