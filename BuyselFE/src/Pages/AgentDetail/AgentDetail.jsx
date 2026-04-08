import React from 'react'
import Details from '../../Components/AgentDetails/Details'
import UserReview from '../../Components/UserReview/UserReview'
import AgentDetailHeader from '../../Components/AgentDetail/AgentDetailHeader/AgentDetailHeader'
import AddPropertyBanner from '../../Components/AgentDetail/AddPropertyBanner/AddPropertyBanner'
import ActivePropertyListing from '../../Components/AgentDetail/ActivePropertyListing/ActivePropertyListing'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function AgentDetail() {

    const agentData = {
  name: "Arun Kumar",
  role: "premiumAgent",
  designation: "Senior Real Estate Agent",
  location: "Coimbatore",
  email: "arunkumar@gmail.com",
  address: "Gandhipuram, Coimbatore",
  agentId: "Buysel1986234",
  verified: true,
};

const isPremiumOrElite = agentData.role === "premiumAgent" || agentData.role === "eliteAgent"

  return (
    <>
     <AgentDetailHeader agentData={agentData} isPremiumOrElite={isPremiumOrElite}/>
     <Details agentData={agentData} />
    {isPremiumOrElite && (
      <>
      <ActivePropertyListing agentData={agentData}/>
     <AddPropertyBanner />
     </>
    )}
     <UserReview />
     <AppPromoBanner/>
     <Footer/>
     </>
  )
}

export default AgentDetail