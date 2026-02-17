import React from 'react'
import Hero from '../../Layouts/Home/Hero/Hero'
import HomePremiumAppartment from '../../Layouts/Home/HomePremiumAppartment/HomePremiumAppartment'
import Ad from '../../Layouts/Home/Ad/Ad'
import AddPropertyAndAgent from '../../Layouts/Home/AddProperyAndAgent/AddPropertyAndAgent'

const Home = () => {
  return (
    <>
    <Hero />
    <HomePremiumAppartment />
    <Ad />
    <AddPropertyAndAgent />
    </>
  )
}

export default Home