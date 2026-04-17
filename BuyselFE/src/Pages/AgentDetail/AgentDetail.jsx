import React, { useState, useEffect } from 'react'
import Details from '../../Components/AgentDetails/Details'
import UserReview from '../../Components/UserReview/UserReview'
import AgentDetailHeader from '../../Components/AgentDetail/AgentDetailHeader/AgentDetailHeader'
import AddPropertyBanner from '../../Components/AgentDetail/AddPropertyBanner/AddPropertyBanner'
import ActivePropertyListing from '../../Components/AgentDetail/ActivePropertyListing/ActivePropertyListing'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
import { useParams } from "react-router-dom";
import { getAgentsDetails } from '../../Api/userApi'

function AgentDetail() {

  const { id } = useParams();
  const [agentsData, setAgentsData] = useState(null);
  const [refresh, setRefresh] = useState(false);

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

  const isPremiumOrElite = agentsData?.agent_type === "premium" || agentsData?.agent_type === "elite"

  useEffect(() => {
    const fetchAgentData = async () => {
      const data = await getAgentsDetails(id);

      if (data) {
        setAgentsData(data);
      }
    };

    fetchAgentData();

  }, [id, refresh]);



  return (
    <>
      <AgentDetailHeader agentData={agentsData} isPremiumOrElite={isPremiumOrElite} />
      <Details agentData={agentsData} />
      {isPremiumOrElite && (
        <>
          <ActivePropertyListing agentData={agentData} />
          <AddPropertyBanner />
        </>
      )}
      <UserReview review={agentsData?.reviews} id={agentsData?.agent_code} triggerRefresh={() => setRefresh(prev => !prev)} />
      <AppPromoBanner />
      <Footer />
    </>
  )
}

export default AgentDetail