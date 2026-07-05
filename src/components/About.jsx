import { profile, skillGroups } from '../data'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

export default function About() {
  return (
    <section id="about" className="px-6 py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-4">
            About
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-ink-300 font-normal max-w-2xl tracking-normal">
            {profile.bio}
          </p>
        </Reveal>

        <h3 className="text-sm tracking-[0.2em] uppercase text-ink-400 mt-16 mb-8">
          Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl border border-white/10 p-6 hover:border-accent-light/40 hover:bg-white/[0.03] transition-colors [transform-style:preserve-3d]">
                <div className="flex items-center gap-3 mb-4" style={{ transform: 'translateZ(30px)' }}>
                  <img src={group.icon} alt="" className="w-9 h-9 rounded-lg" />
                  <p className="text-white text-sm font-medium">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(20px)' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-ink-300 border border-white/10 rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
