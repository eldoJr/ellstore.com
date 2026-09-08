import { Link } from 'react-router-dom'
import Reveal        from '../atoms/reveal'
import FooterColumn  from '../molecules/footerColumn'
import './footer.css'

const NAV_COLS = [
  {
    heading: 'Shop',
    links: [
      { to: '/collection',  label: 'Collection'   },
      { to: '/#lookbook',   label: 'Lookbook'     },
      { to: '/collection',  label: 'New Arrivals' },
      { to: '/archive',     label: 'Archive'      },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about',      label: 'About'     },
      { to: '/process',    label: 'Process'   },
      { to: '/stockists',  label: 'Stockists' },
      { to: '/press',      label: 'Press'     },
    ],
  },
  {
    heading: 'Support',
    links: [
      { to: '/sizing-guide', label: 'Sizing Guide' },
      { to: '/shipping',     label: 'Shipping'     },
      { to: '/returns',      label: 'Returns'      },
      { to: '/concierge',    label: 'Contact'      },
    ],
  },
]

const SOCIALS = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Pinterest' },
  { href: '#', label: 'X'         },
]

const footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__inner">

      {/* top row — brand + columns */}
      <Reveal>
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">Ellstore</a>
            <p className="footer__tagline type-mono">
              Wear what you believe in.
            </p>
          </div>

          <div className="footer__cols">
            {NAV_COLS.map((col) => (
              <FooterColumn key={col.heading} {...col} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* divider */}
      <div className="footer__divider" aria-hidden="true" />

      {/* bottom bar */}
      <Reveal delay={0.1}>
        <div className="footer__bottom">
          <p className="footer__copy type-mono">
            &copy; {new Date().getFullYear()} Ellstore. All rights reserved.
          </p>

          <nav className="footer__socials" aria-label="Social links">
            {SOCIALS.map(({ href, label }) => (
              <a key={label} href={href} className="footer__social-link type-mono">
                {label}
              </a>
            ))}
          </nav>

          <nav className="footer__legal" aria-label="Legal links">
            <Link to="/privacy" className="footer__legal-link type-mono">Privacy</Link>
            <Link to="/terms"   className="footer__legal-link type-mono">Terms</Link>
            <Link to="/cookies" className="footer__legal-link type-mono">Cookies</Link>
          </nav>
        </div>
      </Reveal>

    </div>
  </footer>
)

export default footer
