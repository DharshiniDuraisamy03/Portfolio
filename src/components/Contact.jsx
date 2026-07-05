import { profile } from '../data'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 border-t border-white/5 section-glow" style={{ '--y': '100%' }}>
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.2em] uppercase text-accent-light mb-6">
            Contact
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-white font-semibold mb-8">
            Let's build something <span className="text-gradient">together</span>.
          </h3>

          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-white text-ink-950 px-8 py-4 text-sm font-medium hover:bg-accent-light hover:text-white transition-colors"
          >
            {profile.email}
          </MagneticButton>

          <p className="mt-6 text-ink-400 text-sm">{profile.phone}</p>

          <div className="flex justify-center gap-8 mt-10 text-sm text-ink-400">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Website
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
