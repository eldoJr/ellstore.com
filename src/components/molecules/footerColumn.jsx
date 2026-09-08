import FooterLink from '../atoms/footerLink'

const footerColumn = ({ heading, links }) => (
  <div className="footer-col">
    <p className="footer-col__heading type-label">{heading}</p>
    <nav className="footer-col__links">
      {links.map(({ href, label }) => (
        <FooterLink key={label} href={href} label={label} />
      ))}
    </nav>
  </div>
)

export default footerColumn
