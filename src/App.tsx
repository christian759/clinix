import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <Doctors />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
