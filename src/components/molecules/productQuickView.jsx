import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog, DialogContent, DialogClose,
  DialogTitle, DialogDescription,
} from '../ui/dialog'
import ProductBadge from '../atoms/productBadge'
import ProductPrice from '../atoms/productPrice'
import './productQuickView.css'

const SIZES = ['XS', 'S', 'M', 'L', 'XL']

const productQuickView = ({ open, onClose, product }) => {
  const [size, setSize] = useState(null)

  if (!product) return null

  const { src, name, price, badge, slug, category, description } = product

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="qv" showCloseButton={false}>

        {/* ── Image ── */}
        <div className="qv__image">
          {badge && <ProductBadge label={badge} />}
          <img src={src} alt={name} className="qv__img" />
        </div>

        {/* ── Details ── */}
        <div className="qv__details">

          <div className="qv__top">
            {category && (
              <span className="qv__category type-mono">{category}</span>
            )}
            <DialogClose className="qv__close" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
                <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </DialogClose>
          </div>

          <div className="qv__heading">
            <DialogTitle className="qv__name">{name}</DialogTitle>
            <ProductPrice price={price} />
          </div>

          {description && (
            <DialogDescription className="qv__desc">
              {description}
            </DialogDescription>
          )}

          {/* Size selector */}
          <div className="qv__sizes">
            <span className="qv__sizes-label type-mono">Size</span>
            <div className="qv__sizes-grid">
              {SIZES.map(s => (
                <button
                  key={s}
                  className={`qv__size type-mono${size === s ? ' qv__size--active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="qv__actions">
            <button className="qv__add type-mono" disabled={!size}>
              {size ? 'Add to Bag' : 'Select a Size'}
            </button>
            <Link
              to={slug ? `/collection/${slug}` : '/collection'}
              className="qv__full type-mono"
              onClick={onClose}
            >
              View Full Details ↗
            </Link>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  )
}

export default productQuickView
