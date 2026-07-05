import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-500">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</span>
        <a href="#top" className="hover:text-ink-300 transition-colors">Back to top ↑</a>
      </div>
    </footer>
  )
}
