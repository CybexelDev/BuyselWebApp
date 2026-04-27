import React, {  useEffect, useState } from 'react'
import Header from '../../Layouts/Agents/Header/Header'
import AgentsList from '../../Layouts/Agents/AgentsList/AgentsList'
import JoinAgents from '../../Layouts/Agents/JoinAgents/JoinAgents'
import Footer from '../../Components/Footer/Footer'
import { getCity, searchAgents } from '../../Api/userApi'

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedAgents, setSearchedAgents] = useState([]);
  const [city, setCity] = useState("");
  const [locationDataa, setLocationDataa] = useState([]);

  console.log(city, "cyryyyyyyy");
  

  console.log(searchQuery, "agent search");

  useEffect(() => {

    const handleSearch = async () => {
      const data = await searchAgents(searchQuery);
      if (data) {
        setSearchedAgents(data);
      }
    };

    handleSearch();
    
  }, [searchQuery]);

  useEffect(() => {

    const fetchCity = async () => {
     const city = await getCity();
     if(city){
      setCity(city);
     }
    };
    fetchCity();

  },[])



  

  
   
  return (
    <>
    <Header onchange={(e) => setSearchQuery(e.target.value)}  location={city} cityDataSend={setLocationDataa} />
    <AgentsList searchedData={searchedAgents} query={searchQuery} locationDats={locationDataa}  />
    <JoinAgents />
    <Footer/>
    </>
  )
}

export default Agents