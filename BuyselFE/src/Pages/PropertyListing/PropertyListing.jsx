import React, { useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties'


function PropertListing() {
    const[data,setData] = useState([])

    useEffect(()=>{
         setData(properties)
         console.log(data)
         console.log("mounting");
         
    },[])
  return (
    <>
    <PropertiesSection propertiesData={data} />
    </>

  )
}

export default PropertListing