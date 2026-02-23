import React, { useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'


function PropertListing() {
    const[data,setData] = useState([])

    useEffect(()=>{
         setData(properties)
         console.log(data)           
     },[])
         
   
  return (
    <>
     <Header/>
      <PropertiesSection propertiesData={data} />
    </>
  )
}

export default PropertListing