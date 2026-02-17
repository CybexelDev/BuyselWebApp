import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import HomePremiumAppartment from '../../Layouts/Home/HomePremiumAppartment/HomePremiumAppartment'
import Ad from '../../Layouts/Home/Ad/Ad'
import DiscoverLayout from '../../Layouts/Home/Discover/DiscoverLayout'
import FAQSection from '../../Layouts/Home/Faq/FaqSectionLayout'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <HomePremiumAppartment />
    <Ad /> 
    <DiscoverLayout/>
    <FAQSection/>
    <AppPromoBanner/>
    <Footer/>
    
    </>
  )
}

export default Home