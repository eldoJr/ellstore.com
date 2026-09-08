import { Link } from 'react-router-dom'

const footerLink = ({ to, href, label }) => {
  if (to) return <Link to={to} className="footer-link type-mono">{label}</Link>
  return <a href={href || '#'} className="footer-link type-mono">{label}</a>
}

export default footerLink
