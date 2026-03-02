import React from 'react'
import Details from '../../Components/AgentDetails/Details'
import UserReview from '../../Components/UserReview/UserReview'
import AgentDetailHeader from '../../Components/AgentDetail/AgentDetailHeader/AgentDetailHeader'
import AddPropertyBanner from '../../Components/AgentDetail/AddPropertyBanner/AddPropertyBanner'
import ActivePropertyListing from '../../Components/AgentDetail/ActivePropertyListing/ActivePropertyListing'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function AgentDetail() {
  return (
    <>
     <AgentDetailHeader/>
    <Details />
     <AddPropertyBanner/>
     <ActivePropertyListing/>
            <UserReview />
     <AppPromoBanner/>
     <Footer/>
     </>
  )
}

export default AgentDetail