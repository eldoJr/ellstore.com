import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '../atoms/reveal'
import './cta.css'

const cta = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.section
      ref={ref}
      id="concierge"
      className="cta"
      style={{ scale, opacity }}
      aria-label="Call to action"
    >
      <div className="cta__bg" aria-hidden="true" />

      <div className="cta__inner">
        <Reveal y={60}>
          <p className="cta__eyebrow type-mono">Ready when you are</p>
        </Reveal>

        <Reveal delay={0.15} y={60}>
          <h2 className="cta__title">
            Wear what<br />you believe in
          </h2>
        </Reveal>

        <Reveal delay={0.3} y={40}>
          <p className="cta__body">
            The collection is live. Each piece is made in limited quantity.
            Once it is gone, it does not come back.
          </p>
        </Reveal>

        <Reveal delay={0.45} y={24}>
          <div className="cta__actions">
            <a href="#collection" className="cta__btn cta__btn--primary type-mono">
              Shop the Collection
            </a>
            <a href="#lookbook" className="cta__btn cta__btn--ghost type-mono">
              View Lookbook
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.6} y={0}>
          <p className="cta__note type-mono">
            Free shipping on orders above R$ 800 · Worldwide delivery
          </p>
        </Reveal>
      </div>

      {/* large background word */}
      <span className="cta__watermark" aria-hidden="true">Ellstore</span>
    </motion.section>
  )
}

export default cta
