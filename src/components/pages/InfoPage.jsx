import { Link } from 'react-router-dom'
import PageWrapper from '../atoms/pageWrapper'
import Reveal      from '../atoms/reveal'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './InfoPage.css'

/**
 * sections: [{ heading, body, items?: string[] }]
 * breadcrumb: [{ label, to }]  — last item is current page (no `to`)
 */
const InfoPage = ({ title, eyebrow, intro, sections = [], breadcrumb = [] }) => (
  <PageWrapper>
    <div className="info-page">

      <Reveal>
        <Breadcrumb className="info-page__breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumb.map(({ label, to }) => (
              <>
                <BreadcrumbSeparator key={`sep-${label}`} />
                <BreadcrumbItem key={label}>
                  {to
                    ? <BreadcrumbLink render={<Link to={to} />}>{label}</BreadcrumbLink>
                    : <BreadcrumbPage>{label}</BreadcrumbPage>
                  }
                </BreadcrumbItem>
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Reveal>

      <div className="info-page__header">
        {eyebrow && (
          <Reveal>
            <span className="info-page__eyebrow type-mono">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="info-page__title">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="info-page__intro">{intro}</p>
          </Reveal>
        )}
      </div>

      <div className="info-page__body">
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 0.06}>
            <div className="info-page__section">
              <h2 className="info-page__section-heading type-mono">{s.heading}</h2>
              <div className="info-page__section-content">
                {s.body && <p className="info-page__section-body">{s.body}</p>}
                {s.items && (
                  <ul className="info-page__list">
                    {s.items.map(item => (
                      <li key={item} className="info-page__list-item">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </PageWrapper>
)

export default InfoPage
