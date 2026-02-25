import React, { useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties/Properties'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Footer from '../../Components/Footer/Footer'


function PropertListing() {
  const [data, setData] = useState([])

    useEffect(()=>{
         setData(properties)
         console.log(data)           
     },[])
         
   
  return (
    <>
      <Header/>
      <PropertiesSection propertiesData={data} />
      <Footer/>
    </>
  )
}

export default PropertListing