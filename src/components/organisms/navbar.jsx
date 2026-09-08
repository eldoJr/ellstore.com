import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import NavLogo    from '../atoms/navLogo'
import NavLinks   from '../molecules/navLinks'
import MenuToggle from '../molecules/menuToggle'
import './navbar.css'

const navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false)
  const drawerRef                 = useRef(null)

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* close drawer on outside click */
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], ['rgba(251,251,249,0)', 'rgba(251,251,249,0.88)'])
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(226,224,219,0)', 'rgba(226,224,219,1)'])

  return (
    <>
      <motion.header
        role="banner"
        className="navbar"
        style={{ backgroundColor: navBg, borderBottomColor: navBorder }}
      >
        <motion.div
          className="navbar__inner"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <NavLogo name="Ellstore" />

          <div className="navbar__desktop">
            <NavLinks />
          </div>

          <div className="navbar__actions">
            <Link to="/collection" className="navbar__cta">Shop Now</Link>
            <div className="navbar__mobile-toggle">
              <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="drawer-overlay"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            ref={drawerRef}
            className="drawer"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="drawer__header">
              <NavLogo name="Ellstore" />
              <MenuToggle isOpen={menuOpen} onClick={closeMenu} />
            </div>
            <NavLinks onLinkClick={closeMenu} />
            <Link to="/collection" className="drawer__cta" onClick={closeMenu}>Shop Now</Link>
            <p className="drawer__tagline type-mono">SS25 — The Silent Interval</p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default navbar
