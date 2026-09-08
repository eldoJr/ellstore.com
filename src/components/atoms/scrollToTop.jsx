import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const scrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // small delay lets the page render before scrolling
      const id = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default scrollToTop
