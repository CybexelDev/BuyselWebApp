import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import Featured from '../../Layouts/Home/Featured/Featured'
import PropertySearch from '../../Layouts/Home/Search/PropertySearch'
import Agentssection from '../../Layouts/Home/Agents/Agentssection'
import About from '../../Layouts/Home/About/About'
import Review from '../../Layouts/Home/Review/Review'

const Home = () => {
  return (
    <>
    <Hero />
    <PropertySearch />
    <Featured />
    <Agentssection />
    <About />
    <Review />
    </>
  )
}

export default Home