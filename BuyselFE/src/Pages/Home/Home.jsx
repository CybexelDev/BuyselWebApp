import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'

import DiscoverLayout from '../../Layouts/Home/Discover/DiscoverLayout'
import FAQSection from '../../Layouts/Home/Faq/FaqSectionLayout'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
import Featured from '../../Layouts/Home/Featured/Featured'
import PropertySearch from '../../Layouts/Home/Search/PropertySearch'
import Agentssection from '../../Layouts/Home/Agents/Agentssection'
import About from '../../Layouts/Home/About/About'
import Review from '../../Layouts/Home/Review/Review'
import HomePremiumAppartment from '../../Layouts/Home/HomePremiumAppartment/HomePremiumAppartment'
import Ad from '../../Layouts/Home/Ad/Ad'
import AddPropertyAndAgent from '../../Layouts/Home/AddProperyAndAgent/AddPropertyAndAgent'


const Home = () => {
  return (
    <>
    <Hero />
    <PropertySearch />
    <Featured />
    <HomePremiumAppartment />
    <Ad />
    <AddPropertyAndAgent />
    <Agentssection />
    <About />
    <DiscoverLayout/>
    <Review />
    <FAQSection/>
    <AppPromoBanner/>
    <Footer/>
    </>
  )
}

export default Home