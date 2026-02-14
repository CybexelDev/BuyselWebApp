import React from 'react'
import Hero from '../../Layouts/Hero/Hero'
import Featured from '../../Layouts/Featured/Featured'
import PropertySearch from '../../Layouts/Search/PropertySearch'
import Agentssection from '../../Layouts/Agents/Agentssection'

const Home = () => {
  return (
    <>
    <Hero />
    <PropertySearch />
    <Featured />
    <Agentssection />
    </>
  )
}

export default Home