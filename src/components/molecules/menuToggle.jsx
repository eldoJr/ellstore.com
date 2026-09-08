const menuToggle = ({ isOpen, onClick }) => (
  <button
    className={`menu-toggle${isOpen ? ' is-open' : ''}`}
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <span className="menu-toggle__bar" />
    <span className="menu-toggle__bar" />
  </button>
)

export default menuToggle
