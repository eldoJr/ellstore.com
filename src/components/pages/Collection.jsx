import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import PageWrapper    from '../atoms/pageWrapper'
import Reveal         from '../atoms/reveal'
import ProductCard    from '../molecules/productCard'
import ShopToolbar    from '../molecules/shopToolbar'
import ShopSidebar    from '../molecules/shopSidebar'
import ShopEmptyState from '../molecules/shopEmptyState'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './Collection.css'

const ALL_PRODUCTS = []

const DEFAULT_FILTERS = { category: 'All', availability: 'All', price: 'all' }

const Collection = () => {
  const [filters, setFilters]       = useState(DEFAULT_FILTERS)
  const [sort, setSort]             = useState('featured')
  const [view, setView]             = useState('grid')
  const [sidebarOpen, setSidebar]   = useState(false)

  const handleFilter = (key, value) =>
    setFilters(f => ({ ...f, [key]: value }))

  const handleReset = () => setFilters(DEFAULT_FILTERS)

  const filtered = useMemo(() => {
    let list = [...ALL_PRODUCTS]

    if (filters.category !== 'All')
      list = list.filter(p => p.category === filters.category)

    if (filters.availability !== 'All') {
      if (filters.availability === 'In Stock')
        list = list.filter(p => !p.badge)
      else
        list = list.filter(p => p.badge === filters.availability)
    }

    if (filters.price !== 'all') {
      const [min, max] = filters.price === '3000+'
        ? [3000, Infinity]
        : filters.price.split('-').map(Number)
      list = list.filter(p => {
        const n = Number(p.price.replace(/\D/g, ''))
        return n >= min && n <= max
      })
    }

    if (sort === 'newest')     list = [...list].reverse()
    if (sort === 'price-asc')  list = [...list].sort((a, b) => Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, '')))
    if (sort === 'price-desc') list = [...list].sort((a, b) => Number(b.price.replace(/\D/g, '')) - Number(a.price.replace(/\D/g, '')))

    return list
  }, [filters, sort])

  return (
    <PageWrapper>
      <div className="collection-page">

        {/* ── Page header ── */}
        <div className="collection-page__header">
          <Reveal>
            <Breadcrumb className="collection-page__breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Collection</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="collection-page__header-top">
              <h1 className="collection-page__title">Collection</h1>
              <div className="collection-page__header-meta">
                <span className="collection-page__season type-mono">SS25</span>
                <span className="collection-page__count type-mono">{filtered.length} pieces</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="collection-page__desc">
              The full current season, available now. Each piece made in limited quantity.
            </p>
          </Reveal>
        </div>

        {/* ── Body: sidebar + content ── */}
        <div className="collection-page__body">

          <ShopSidebar
            filters={filters}
            onChange={handleFilter}
            onReset={handleReset}
            open={sidebarOpen}
            onClose={() => setSidebar(false)}
          />

          <div className="collection-page__content">
            <ShopToolbar
              count={filtered.length}
              sort={sort}
              onSort={setSort}
              view={view}
              onView={setView}
            />

            {/* mobile filter toggle */}
            <button
              className="collection-page__filter-toggle type-mono"
              onClick={() => setSidebar(true)}
            >
              Filters
            </button>

            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <ShopEmptyState key="empty" onReset={handleReset} />
              ) : (
                <motion.div
                  key={`${view}-${filters.category}`}
                  className={`collection-page__grid collection-page__grid--${view}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  {filtered.map((product, i) => (
                    <ProductCard key={product.name} {...product} delay={i * 0.06} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </PageWrapper>
  )
}

export default Collection
