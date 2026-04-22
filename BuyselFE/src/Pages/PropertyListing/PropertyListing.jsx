import React, { use, useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties/Properties'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Footer from '../../Components/Footer/Footer'
import { getProperty, searchProperties } from '../../Api/userApi'
import { filter } from 'framer-motion/m'


function PropertListing() {
  const [data, setData] = useState([])
  const [filters, setFilters] = useState({ purpose: "Rent", category: "Residential", });
  const [searchQuery, setSearchQuery] = useState("");


  const handleFilters = (data) => {
    setFilters(data);
  };

  useEffect(() => {
    if (!searchQuery) {
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
    }


    if (searchQuery) {
      const fetchDataSearch = async () => {
        const serchedData = await searchProperties(searchQuery);
        setData(serchedData);
      };
      fetchDataSearch();
    } 
  }, [filters, searchQuery]);

  useEffect(() => {

  }, [searchQuery]);

  return (
    <>
      <Header setParentFilters={handleFilters} onchange={(e) => setSearchQuery(e.target.value)} />
      <PropertiesSection propertiesData={data} />
      <Footer />
    </>
  )
}

export default PropertListing