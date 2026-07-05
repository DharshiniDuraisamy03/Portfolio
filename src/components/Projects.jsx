import { projects } from '../data'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-12">
            Selected Projects
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 items-stretch">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <TiltCard
                as="a"
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 overflow-hidden hover:border-accent-light/50 transition-colors [transform-style:preserve-3d]"
              >
                <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ink-950/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 text-sm text-white border border-white/30 rounded-full px-4 py-2">
                      View project <span aria-hidden>&#8599;</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="font-display text-lg text-white group-hover:text-accent-light transition-colors mb-2">
                    {p.name}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed line-clamp-2">{p.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
