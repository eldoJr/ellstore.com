import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import HeroText       from '../molecules/heroText'
import HeroImage      from '../molecules/heroImage'
import ScrollIndicator from '../atoms/scrollIndicator'
import './hero.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200'

const hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  /* gentle fade — starts at 30% scroll, fully gone at 90% */
  const opacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0])
  const y       = useTransform(scrollYProgress, [0, 1],     ['0%', '4%'])

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="hero"
      style={{ opacity, y }}
      aria-label="Hero"
    >
      {/* gradient bg */}
      <div className="hero__bg" aria-hidden="true" />

      {/* asymmetric layout */}
      <div className="hero__inner">
        <HeroText />
        <HeroImage
          src={HERO_IMG}
          alt="Editorial fashion, burnished alabaster collection SS25"
        />
      </div>

      {/* bottom meta row */}
      <motion.div
        className="hero__meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="type-label hero__meta-tag">Volume I</span>
        <ScrollIndicator />
        <span className="type-label hero__meta-tag">Est. 2025</span>
      </motion.div>
    </motion.section>
  )
}

export default hero
