import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import About from '../components/Sections/About'
import Projets from '../components/Sections/Projets'
import Skills from '../components/Sections/Skills'
import Contact from '../components/Sections/Contact'

const Home = ({ theme, themeToggler }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} theme={theme} themeToggler={themeToggler} />
      <Layout>
        <HeroSection />
        <About />
        <Skills />
        <Projets />
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}

export default Home
