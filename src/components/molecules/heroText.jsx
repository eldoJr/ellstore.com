import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import HeroEyebrow from '../atoms/heroEyebrow'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
})

const heroText = () => (
  <div className="hero-text">
    <motion.div {...fade(0.3)}>
      <HeroEyebrow text="New Collection · SS25" />
    </motion.div>

    <motion.h1 className="hero-title" {...fade(0.5)}>
      Wear the<br />Silence
    </motion.h1>

    <motion.p className="hero-body" {...fade(0.7)}>
      Crafted for those who speak through texture and form.
      Each piece is built to last, shaped to feel, made to be worn.
    </motion.p>

    <motion.div className="hero-actions" {...fade(0.9)}>
      <Link to="/collection" className="hero-cta hero-cta--primary">
        Shop the Collection
      </Link>
      <Link to="/#lookbook" className="hero-cta hero-cta--ghost">
        View Lookbook
      </Link>
    </motion.div>
  </div>
)

export default heroText
