import Reveal        from '../atoms/reveal'
import FooterColumn  from '../molecules/footerColumn'
import './footer.css'

const NAV_COLS = [
  {
    heading: 'Shop',
    links: [
      { href: '#collection', label: 'Collection' },
      { href: '#lookbook',   label: 'Lookbook'   },
      { href: '#',           label: 'New Arrivals'},
      { href: '#',           label: 'Archive'     },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '#', label: 'About'    },
      { href: '#', label: 'Process'  },
      { href: '#', label: 'Stockists'},
      { href: '#', label: 'Press'    },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '#', label: 'Sizing Guide'   },
      { href: '#', label: 'Shipping'       },
      { href: '#', label: 'Returns'        },
      { href: '#concierge', label: 'Contact' },
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
            <a href="#" className="footer__legal-link type-mono">Privacy</a>
            <a href="#" className="footer__legal-link type-mono">Terms</a>
            <a href="#" className="footer__legal-link type-mono">Cookies</a>
          </nav>
        </div>
      </Reveal>

    </div>
  </footer>
)

export default footer
