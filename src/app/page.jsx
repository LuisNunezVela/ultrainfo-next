import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
