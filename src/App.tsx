import Hero from './components/Hero'
import Services from './components/Services'
import Technology from './components/Technology'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { GlobalLighting } from './components/GlobalLighting'
import './App.css'

function App() {
  return (
    <div className="app relative">
      <GlobalLighting />
      <Navigation />
      <Hero />
      <Services />
      <Technology />
      <Doctors />
      <Testimonials />
      <Blog />
      <Booking />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
