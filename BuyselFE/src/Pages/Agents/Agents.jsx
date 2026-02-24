import React from 'react'
import Header from '../../Layouts/Agents/Header/Header'
import AgentsList from '../../Layouts/Agents/AgentsList/AgentsList'
import JoinAgents from '../../Layouts/Agents/JoinAgents/JoinAgents'
import Footer from '../../Components/Footer/Footer'

const Agents = () => {
  return (
    <>
    <Header />
    <AgentsList />
    <JoinAgents />
    <Footer/>
    </>
  )
}

export default Agents