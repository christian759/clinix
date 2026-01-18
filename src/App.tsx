import Hero from './components/Hero'
import Services from './components/Services'
import Technology from './components/Technology'
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
      <Technology />
      <Doctors />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
