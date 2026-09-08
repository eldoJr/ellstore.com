import { Link } from 'react-router-dom'
import PageWrapper from '../atoms/pageWrapper'
import Reveal      from '../atoms/reveal'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './Process.css'

const STEPS = [
  {
    index: '01',
    title: 'Research',
    duration: '3 months',
    body: 'Every collection begins with a question, not a trend. We spend three months studying how people actually move, what they keep, and what they discard. We visit mills, handle raw materials, and reject anything that does not meet our standard for longevity.',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=900',
  },
  {
    index: '02',
    title: 'Construction',
    duration: '6 months',
    body: 'Patterns are developed by hand before they are digitised. We prototype each piece a minimum of four times. Fit is tested across a range of bodies. We do not release a garment until it moves correctly, holds its shape, and wears well after repeated washing.',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=900',
  },
  {
    index: '03',
    title: 'Production',
    duration: '3 months',
    body: 'All production happens within Brazil, with makers we have worked with for years. Each run is limited. We do not overproduce. When a piece sells out, it is gone. This is not a marketing strategy. It is a commitment to making only what is needed.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900',
  },
]

const Process = () => (
  <PageWrapper>
    <div className="process">

      <Reveal>
        <Breadcrumb className="process__breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/about" />}>About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Process</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Reveal>

      <div className="process__header">
        <Reveal delay={0.05}>
          <span className="process__eyebrow type-mono">12 months · Every collection</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="process__title">How we<br />make things</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="process__intro">
            A single collection takes twelve months to make. Here is what happens inside that year.
          </p>
        </Reveal>
      </div>

      <div className="process__steps">
        {STEPS.map(({ index, title, duration, body, img }, i) => (
          <Reveal key={index} delay={i * 0.08}>
            <div className="process__step">
              <div className="process__step-meta">
                <span className="process__step-index type-mono">{index}</span>
                <span className="process__step-duration type-mono">{duration}</span>
              </div>
              <div className="process__step-content">
                <h2 className="process__step-title">{title}</h2>
                <p className="process__step-body">{body}</p>
              </div>
              <div className="process__step-image">
                <img src={img} alt={title} className="process__step-img" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="process__footer">
          <p className="process__footer-body">
            The result is 24 pieces per year. No more.
          </p>
          <Link to="/collection" className="process__cta type-mono">
            Shop the Collection ↗
          </Link>
        </div>
      </Reveal>

    </div>
  </PageWrapper>
)

export default Process
