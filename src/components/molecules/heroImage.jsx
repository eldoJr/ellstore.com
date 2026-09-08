import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const heroImage = ({ src, alt = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <div ref={ref} className="hero-image">
      <motion.img
        src={src}
        alt={alt}
        className="hero-image__img"
        style={{ y }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

export default heroImage
