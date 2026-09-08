import { motion, AnimatePresence } from 'motion/react'

const CATEGORIES = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Dresses', 'Accessories']
const AVAILABILITY = ['All', 'In Stock', 'Limited', 'New']
const PRICE_RANGES = [
  { label: 'All prices',       value: 'all'   },
  { label: 'Up to R$ 1.000',   value: '0-1000' },
  { label: 'R$ 1.000 – 3.000', value: '1000-3000' },
  { label: 'R$ 3.000+',        value: '3000+'  },
]

const FilterGroup = ({ title, children }) => (
  <div className="shop-sidebar__group">
    <span className="shop-sidebar__group-label type-mono">{title}</span>
    {children}
  </div>
)

const shopSidebar = ({ filters, onChange, onReset, open, onClose }) => (
  <>
    {/* overlay for mobile */}
    <AnimatePresence>
      {open && (
        <motion.div
          className="shop-sidebar__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>

    <aside className={`shop-sidebar${open ? ' shop-sidebar--open' : ''}`}>
      <div className="shop-sidebar__header">
        <span className="shop-sidebar__title type-mono">Filters</span>
        <button className="shop-sidebar__reset type-mono" onClick={onReset}>
          Clear all
        </button>
      </div>

      <FilterGroup title="Category">
        <div className="shop-sidebar__options">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`shop-sidebar__option type-mono${filters.category === c ? ' shop-sidebar__option--active' : ''}`}
              onClick={() => onChange('category', c)}
            >
              {c}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Availability">
        <div className="shop-sidebar__options">
          {AVAILABILITY.map(a => (
            <button
              key={a}
              className={`shop-sidebar__option type-mono${filters.availability === a ? ' shop-sidebar__option--active' : ''}`}
              onClick={() => onChange('availability', a)}
            >
              {a}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="shop-sidebar__options shop-sidebar__options--col">
          {PRICE_RANGES.map(p => (
            <label key={p.value} className="shop-sidebar__radio type-mono">
              <input
                type="radio"
                name="price"
                value={p.value}
                checked={filters.price === p.value}
                onChange={() => onChange('price', p.value)}
              />
              {p.label}
            </label>
          ))}
        </div>
      </FilterGroup>
    </aside>
  </>
)

export default shopSidebar
