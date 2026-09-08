import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import PageWrapper from '../atoms/pageWrapper'
import Reveal      from '../atoms/reveal'
import ProductCard from '../molecules/productCard'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './Archive.css'

const ALL_PRODUCTS = [
  { src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', name: 'Monolith Coat',      price: 'R$ 4.850', badge: 'New',     category: 'Outerwear' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600', name: 'Void Trousers',     price: 'R$ 2.100', badge: 'Limited', category: 'Bottoms'   },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600', name: 'Silence Scarf',     price: 'R$ 890',   badge: null,      category: 'Accessories'},
  { src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600', name: 'Grain Overshirt',   price: 'R$ 1.950', badge: null,      category: 'Tops'      },
  { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600', name: 'Alabaster Dress',   price: 'R$ 3.200', badge: 'New',     category: 'Dresses'   },
  { src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?auto=format&fit=crop&q=80&w=600', name: 'Structure Jacket',  price: 'R$ 3.750', badge: null,      category: 'Outerwear' },
]

const FILTERS = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Dresses', 'Accessories']

const Archive = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active)

  return (
    <PageWrapper>
      <div className="archive">

        <Reveal>
          <Breadcrumb className="archive__breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Archive</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Reveal>

        <div className="archive__header">
          <Reveal delay={0.05}>
            <div className="archive__header-top">
              <h1 className="archive__title">Archive</h1>
              <div className="archive__header-meta">
                <span className="archive__season type-mono">SS25</span>
                <span className="archive__count type-mono">{filtered.length} pieces</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="archive__body">
              Every piece from the current season, made in limited quantity.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="archive__filters" role="group" aria-label="Filter by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`archive__filter type-mono${active === f ? ' archive__filter--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          className="archive__grid"
          layout
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.name} {...product} delay={i * 0.07} />
          ))}
        </motion.div>

      </div>
    </PageWrapper>
  )
}

export default Archive
