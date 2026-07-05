import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spx = useSpring(px, { stiffness: 200, damping: 20 })
  const spy = useSpring(py, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(spy, [0, 1], [8, -8])
  const rotateY = useTransform(spx, [0, 1], [-8, 8])

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
