import Navbar     from './components/organisms/navbar'
import Hero       from './components/organisms/hero'
import Lookbook   from './components/organisms/lookbook'
import Collection from './components/organisms/collection'
import Pillars    from './components/organisms/pillars'
import Cta        from './components/organisms/cta'
import Footer     from './components/organisms/footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Lookbook />
        <Collection />
        <Pillars />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
