import React, { useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'


function PropertListing() {
    const[data,setData] = useState([])

    useEffect(()=>{
         setData(properties)
         console.log(data)
         console.log("mounting");
         
    },[data])
  return (
    <>
     <Header/>
     
    </>

  )
}

export default PropertListing