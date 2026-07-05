import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data'
import MagneticButton from './MagneticButton'

function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 overflow-hidden section-glow"
      style={{ '--y': '-10%' }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-accent/10 blur-[120px] animate-float" />
      </div>

      <div className="max-w-5xl mx-auto w-full pt-24 grid md:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-accent-light text-sm tracking-[0.2em] uppercase mb-6"
          >
            <RoleRotator />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] text-gradient"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-ink-300"
          >
            {profile.tagline} Currently building agentic AI products at{' '}
            <span className="text-white">Nagent AI</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center rounded-full bg-white text-ink-950 px-6 py-3 text-sm font-medium hover:bg-accent-light hover:text-white transition-colors"
            >
              View my work
            </MagneticButton>
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:border-accent-light hover:text-accent-light transition-colors"
            >
              Download resume
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto animate-float"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-dark via-accent-light to-accent opacity-40 blur-2xl" />
          <motion.div
            className="absolute -inset-3 rounded-full border border-accent-light/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-accent/20">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-400 text-xs tracking-widest uppercase"
      >
        Scroll
        <span className="block w-px h-10 bg-ink-600 mx-auto mt-2" />
      </a>
    </section>
  )
}
