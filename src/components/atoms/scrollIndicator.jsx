import { motion } from 'motion/react'

const scrollIndicator = () => (
  <div className="scroll-indicator" aria-hidden="true">
    <motion.span
      className="scroll-indicator__line"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: 2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    />
    <span className="scroll-indicator__label type-label">Scroll</span>
  </div>
)

export default scrollIndicator
