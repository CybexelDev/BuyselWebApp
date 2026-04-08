import React, { useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties/Properties'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Footer from '../../Components/Footer/Footer'
import { getProperty } from '../../Api/userApi'
import { filter } from 'framer-motion/m'


function PropertListing() {
  const [data, setData] = useState([])
   const [filters, setFilters] = useState({ purpose: "Rent",category: "Residential",});
   
   const handleFilters = (data) => {
    setFilters(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProperty(filters);
        if (res) {
          setData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filters]);



  return (
    <>
      <Header setParentFilters={handleFilters}  />
      <PropertiesSection propertiesData={data} />
      <Footer />
    </>
  )
}

export default PropertListing