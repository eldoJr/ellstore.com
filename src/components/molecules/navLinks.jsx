import NavLink from '../atoms/navLink'

const NAV_ITEMS = [
  { href: '#collection', label: 'Collection' },
  { href: '#lookbook',   label: 'Lookbook'   },
  { href: '#archive',    label: 'Archive'     },
  { href: '#concierge',  label: 'Concierge'  },
]

const navLinks = ({ onLinkClick }) => (
  <nav className="nav-links" aria-label="Primary navigation">
    {NAV_ITEMS.map(({ href, label }) => (
      <NavLink key={href} href={href} label={label} onClick={onLinkClick} />
    ))}
  </nav>
)

export default navLinks
