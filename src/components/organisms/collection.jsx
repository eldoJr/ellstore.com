import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal          from '../atoms/reveal'
import SectionEyebrow  from '../atoms/sectionEyebrow'
import ProductCard     from '../molecules/productCard'
import ProductQuickView from '../molecules/productQuickView'
import './collection.css'

const PRODUCTS = [
  {
    src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    name: 'Monolith Coat',
    price: 'R$ 4.850',
    badge: 'New',
    category: 'Outerwear',
    description: 'A structured overcoat built from a double-faced wool blend. Asymmetric front closure, dropped shoulders, single back vent. Made in limited quantity.',
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    name: 'Void Trousers',
    price: 'R$ 2.100',
    badge: 'Limited',
    category: 'Bottoms',
    description: 'Wide-leg trousers cut from a heavy cotton twill. Elasticated waistband, deep side pockets, raw hem finish. Designed to hold their shape over years of wear.',
    delay: 0.15,
  },
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    name: 'Silence Scarf',
    price: 'R$ 890',
    badge: null,
    category: 'Accessories',
    description: 'An oversized scarf woven from a cashmere and silk blend. Intentionally unfinished edges, natural undyed colorway. One size.',
    delay: 0.3,
  },
]

const collection = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section id="collection" className="collection" aria-label="Collection">
      <div className="collection__inner">

        <div className="collection__header">
          <Reveal>
            <SectionEyebrow text="Collection · SS25" />
          </Reveal>
          <div className="collection__header-row">
            <Reveal delay={0.15}>
              <h2 className="collection__title">
                Selected<br />Works
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="collection__body">
                Three pieces. Each one built with a single intention.
                No excess. No compromise. Only what the body needs
                to move through the world with weight and purpose.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="collection__grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              onQuickView={() => setSelected(product)}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="collection__footer">
            <Link to="/collection" className="collection__all type-mono">
              View All Pieces
              <span aria-hidden="true">↗</span>
            </Link>
            <span className="collection__count type-mono">03 / 24</span>
          </div>
        </Reveal>

      </div>

      <ProductQuickView
        open={!!selected}
        onClose={() => setSelected(null)}
        product={selected}
      />
    </section>
  )
}

export default collection
