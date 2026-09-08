import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/collection', label: 'Collection' },
  { to: '/#lookbook',  label: 'Lookbook'   },
  { to: '/archive',    label: 'Archive'    },
  { to: '/concierge',  label: 'Concierge'  },
]

const navLinks = ({ onLinkClick }) => {
  const location = useLocation()

  return (
    <nav className="nav-links" aria-label="Primary navigation">
      {NAV_ITEMS.map(({ to, label }) => {
        const isActive = location.pathname === to || location.pathname + location.hash === to
        return (
          <Link
            key={to}
            to={to}
            className={`nav-link${isActive ? ' nav-link--active' : ''}`}
            onClick={onLinkClick}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

export default navLinks
