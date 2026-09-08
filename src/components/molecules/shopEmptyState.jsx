import { motion } from 'motion/react'

const shopEmptyState = ({ onReset }) => (
  <motion.div
    className="shop-empty"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="shop-empty__mark" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="14" y1="14" x2="34" y2="34" stroke="currentColor" strokeWidth="1" />
        <line x1="34" y1="14" x2="14" y2="34" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
    <h2 className="shop-empty__title">No pieces found</h2>
    <p className="shop-empty__body">
      No items match your current filters. Try adjusting your selection.
    </p>
    <button className="shop-empty__reset type-mono" onClick={onReset}>
      Clear filters
    </button>
  </motion.div>
)

export default shopEmptyState
