import Reveal        from '../atoms/reveal'
import SectionEyebrow from '../atoms/sectionEyebrow'
import PillarItem     from '../molecules/pillarItem'
import './pillars.css'

const PILLARS = [
  {
    index: '01',
    title: 'Curation',
    body: 'Nothing enters the collection by accident. Every piece is chosen for its ability to outlast the moment it was made in.',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600',
    delay: 0,
  },
  {
    index: '02',
    title: 'Purity',
    body: 'No decoration for its own sake. Form follows the body. Material follows function. Everything else is removed.',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
    delay: 0.1,
  },
  {
    index: '03',
    title: 'Permanence',
    body: 'Built to be worn for years, not seasons. The kind of garment that gets better as it ages and carries your history.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
    delay: 0.2,
  },
]

const pillars = () => (
  <section id="pillars" className="pillars" aria-label="Brand pillars">
    <div className="pillars__inner">

      <div className="pillars__header">
        <Reveal>
          <SectionEyebrow text="Our Principles" />
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="pillars__title">Built on three<br />non-negotiables</h2>
        </Reveal>
      </div>

      <div className="pillars__list">
        {PILLARS.map((p) => (
          <PillarItem key={p.index} {...p} />
        ))}
      </div>

    </div>
  </section>
)

export default pillars
