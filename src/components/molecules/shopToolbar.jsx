import { motion } from 'motion/react'

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.2" />
    <rect x="9" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.2" />
    <rect x="1" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.2" />
    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line x1="1" y1="4"  x2="15" y2="4"  stroke="currentColor" strokeWidth="1.2" />
    <line x1="1" y1="8"  x2="15" y2="8"  stroke="currentColor" strokeWidth="1.2" />
    <line x1="1" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const SORT_OPTIONS = [
  { value: 'featured',   label: 'Featured'   },
  { value: 'newest',     label: 'Newest'     },
  { value: 'price-asc',  label: 'Price: Low' },
  { value: 'price-desc', label: 'Price: High'},
]

const shopToolbar = ({ count, sort, onSort, view, onView }) => (
  <div className="shop-toolbar">
    <span className="shop-toolbar__count type-mono">{count} pieces</span>

    <div className="shop-toolbar__right">
      <select
        className="shop-toolbar__sort type-mono"
        value={sort}
        onChange={e => onSort(e.target.value)}
        aria-label="Sort products"
      >
        {SORT_OPTIONS.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <div className="shop-toolbar__views" role="group" aria-label="View mode">
        {['grid', 'list'].map(v => (
          <motion.button
            key={v}
            className={`shop-toolbar__view${view === v ? ' shop-toolbar__view--active' : ''}`}
            onClick={() => onView(v)}
            aria-label={`${v} view`}
            whileTap={{ scale: 0.9 }}
          >
            {v === 'grid' ? <GridIcon /> : <ListIcon />}
          </motion.button>
        ))}
      </div>
    </div>
  </div>
)

export default shopToolbar
