import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-dark via-accent-light to-accent origin-left w-full"
        style={{ scaleX: progress }}
      />

      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Dharshini<span className="text-accent-light">.</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-ink-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group hover:text-white transition-colors">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-light group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white hover:border-accent-light hover:text-accent-light transition-colors"
        >
          Let's talk
        </motion.a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <motion.div animate={{ rotate: open ? 45 : 0, y: open ? 3 : 0 }} className="w-5 h-px bg-current mb-1.5" />
          <motion.div animate={{ opacity: open ? 0 : 1 }} className="w-5 h-px bg-current" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-ink-950 border-b border-white/5 px-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 text-ink-200 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
