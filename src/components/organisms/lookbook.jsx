import { Link } from 'react-router-dom'
import Reveal        from '../atoms/reveal'
import SectionEyebrow from '../atoms/sectionEyebrow'
import LookbookItem   from '../molecules/lookbookItem'
import './lookbook.css'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    alt: 'Textured fabric close-up',
    className: 'lookbook-item--small',
    delay: 0.1,
  },
  {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
    alt: 'Editorial fashion portrait',
    className: 'lookbook-item--large',
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    alt: 'Model in structured silhouette',
    className: 'lookbook-item--medium',
    delay: 0.2,
  },
]

const lookbook = () => (
  <section id="lookbook" className="lookbook" aria-label="Lookbook">
    <div className="lookbook__header">
      <Reveal>
        <SectionEyebrow text="Lookbook · SS25" />
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="lookbook__title">
          The Weight<br />of Form
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="lookbook__body">
          Every piece begins as a question about structure.
          What holds its shape. What yields. What endures
          long after the season has passed.
        </p>
      </Reveal>
      <Reveal delay={0.45}>
        <Link to="/collection" className="lookbook__link type-mono">
          View Full Collection
          <span className="lookbook__link-arrow" aria-hidden="true">↗</span>
        </Link>
      </Reveal>
    </div>

    <div className="lookbook__grid">
      {IMAGES.map((item) => (
        <LookbookItem key={item.className} {...item} />
      ))}
    </div>
  </section>
)

export default lookbook
