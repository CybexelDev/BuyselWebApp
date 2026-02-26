import React from 'react'
import AboutHeader from '../../Layouts/About/AboutHeader/AboutHeader'
import ComprehesiveSection from '../../Layouts/About/ComprehensiveSection/ComprehesiveSection'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
        <AboutHeader/>
        <ComprehesiveSection/>
        <AppPromoBanner/>
        <Footer/>
    </div>
  )
}

export default About