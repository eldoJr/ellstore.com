import { motion } from 'motion/react'
import Reveal from '../atoms/reveal'

const lookbookItem = ({ src, alt, className = '', delay = 0 }) => (
  <Reveal className={`lookbook-item ${className}`} delay={delay} y={60}>
    <motion.div
      className="lookbook-item__inner"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={src} alt={alt} className="lookbook-item__img" />
    </motion.div>
  </Reveal>
)

export default lookbookItem
