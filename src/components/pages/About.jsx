import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import PageWrapper from '../atoms/pageWrapper'
import Reveal      from '../atoms/reveal'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './About.css'

const STATS = [
  { value: '2025', label: 'Founded'       },
  { value: '24',   label: 'Pieces / Year' },
  { value: '100%', label: 'Natural Fibre' },
  { value: 'BR',   label: 'Made in Brazil'},
]

const About = () => (
  <PageWrapper>
    <div className="about">

      <Reveal>
        <Breadcrumb className="about__breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Reveal>

      {/* ── Hero statement ── */}
      <div className="about__hero">
        <Reveal delay={0.05}>
          <span className="about__eyebrow type-mono">Est. 2025 · São Paulo</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="about__title">
            Built on<br />conviction
          </h1>
        </Reveal>
      </div>

      {/* ── Split: image + opening copy ── */}
      <div className="about__split">
        <Reveal className="about__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900"
            alt="Ellstore editorial"
            className="about__image"
          />
        </Reveal>
        <div className="about__copy">
          <Reveal delay={0.1}>
            <p className="about__lead">
              Ellstore was founded on a single refusal: to make clothing that disappears after a season.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="about__body">
              Every piece in the collection is designed to be worn for years, not months. We work with a small number of mills and artisans, all within Brazil, and we limit each run to ensure that what we make is considered, not convenient.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="about__body">
              We do not follow trends. We follow the body, the material, and the question of what a garment needs to do to earn its place in a wardrobe.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <Reveal>
        <div className="about__stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="about__stat">
              <span className="about__stat-value">{value}</span>
              <span className="about__stat-label type-mono">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── Manifesto sections ── */}
      <div className="about__manifesto">
        {[
          {
            index: '01',
            heading: 'Why we exist',
            body: 'The fashion industry produces more than it can sell and discards more than it should. We exist to make the opposite argument: that a small number of well-made things is enough. That restraint is a form of respect, for the maker, the wearer, and the material.',
          },
          {
            index: '02',
            heading: 'How we work',
            body: 'Each collection is developed over twelve months. We prototype extensively, reject often, and only release what we believe is finished. Our supply chain is short by design. We know the names of the people who make our clothes.',
          },
          {
            index: '03',
            heading: 'What we believe',
            body: 'Clothing is not decoration. It is the first thing the world sees of you and the last thing you take off. It should be worthy of that position. We make things that are.',
          },
        ].map(({ index, heading, body }, i) => (
          <Reveal key={index} delay={i * 0.08}>
            <div className="about__manifesto-item">
              <span className="about__manifesto-index type-mono">{index}</span>
              <div className="about__manifesto-content">
                <h2 className="about__manifesto-heading">{heading}</h2>
                <p className="about__manifesto-body">{body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── CTA ── */}
      <Reveal>
        <div className="about__cta">
          <Link to="/collection" className="about__cta-btn type-mono">
            Shop the Collection ↗
          </Link>
          <Link to="/process" className="about__cta-ghost type-mono">
            Our Process
          </Link>
        </div>
      </Reveal>

    </div>
  </PageWrapper>
)

export default About
