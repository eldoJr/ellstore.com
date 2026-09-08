const navLink = ({ href = '#', label, onClick }) => (
  <a href={href} onClick={onClick} className="nav-link">
    {label}
  </a>
)

export default navLink
