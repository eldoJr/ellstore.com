import Reveal        from '../atoms/reveal'
import SectionEyebrow from '../atoms/sectionEyebrow'
import ProductCard    from '../molecules/productCard'
import './collection.css'

const PRODUCTS = [
  {
    src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600',
    name: 'Monolith Coat',
    price: 'R$ 4.850',
    badge: 'New',
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600',
    name: 'Void Trousers',
    price: 'R$ 2.100',
    badge: 'Limited',
    delay: 0.15,
  },
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
    name: 'Silence Scarf',
    price: 'R$ 890',
    badge: null,
    delay: 0.3,
  },
]

const collection = () => (
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
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="collection__footer">
          <a href="#concierge" className="collection__all type-mono">
            View All Pieces
            <span aria-hidden="true">↗</span>
          </a>
          <span className="collection__count type-mono">03 / 24</span>
        </div>
      </Reveal>

    </div>
  </section>
)

export default collection
