import { motion } from 'motion/react'

const reveal = ({ children, delay = 0, className = '', y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
)

export default reveal
