import { motion } from 'motion/react'

const pageWrapper = ({ children }) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    style={{ paddingTop: '5rem' }}
  >
    {children}
  </motion.main>
)

export default pageWrapper
