import { motion } from 'motion/react'
import ProductPrice from '../atoms/productPrice'
import ProductBadge from '../atoms/productBadge'

const productCard = ({ src, name, price, badge, delay = 0 }) => (
  <motion.article
    className="product-card"
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="product-card__img-wrap">
      {badge && <ProductBadge label={badge} />}
      <motion.img
        src={src}
        alt={name}
        className="product-card__img"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="product-card__overlay">
        <a href="#concierge" className="product-card__cta type-mono">
          Quick View
        </a>
      </div>
    </div>

    <div className="product-card__info">
      <div className="product-card__meta">
        <h3 className="product-card__name">{name}</h3>
        <ProductPrice price={price} />
      </div>
      <div className="product-card__border" />
    </div>
  </motion.article>
)

export default productCard
