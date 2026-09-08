import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar      from './components/organisms/navbar'
import Footer      from './components/organisms/footer'
import Hero        from './components/organisms/hero'
import Lookbook    from './components/organisms/lookbook'
import Collection      from './components/organisms/collection'
import Pillars         from './components/organisms/pillars'
import Cta             from './components/organisms/cta'
import Archive         from './components/pages/Archive'
import Concierge       from './components/pages/Concierge'
import CollectionPage  from './components/pages/Collection'
import About           from './components/pages/About'
import Process         from './components/pages/Process'
import {
  SizingGuide, Shipping, Returns,
  Stockists, Press,
  Privacy, Terms, Cookies,
} from './components/pages/staticPages'
import ScrollToTop from './components/atoms/scrollToTop'
import './App.css'

const Home = () => (
  <main>
    <Hero />
    <Lookbook />
    <Collection />
    <Pillars />
    <Cta />
  </main>
)

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname === '/' ? '/' : location.pathname}>
          <Route path="/"          element={<Home />}      />
          <Route path="/archive"      element={<Archive />}       />
          <Route path="/concierge"    element={<Concierge />}     />
          <Route path="/collection"   element={<CollectionPage />}/>
          <Route path="/about"        element={<About />}         />
          <Route path="/process"      element={<Process />}       />
          <Route path="/sizing-guide" element={<SizingGuide />}   />
          <Route path="/shipping"     element={<Shipping />}      />
          <Route path="/returns"      element={<Returns />}       />
          <Route path="/stockists"    element={<Stockists />}     />
          <Route path="/press"        element={<Press />}         />
          <Route path="/privacy"      element={<Privacy />}       />
          <Route path="/terms"        element={<Terms />}         />
          <Route path="/cookies"      element={<Cookies />}       />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
