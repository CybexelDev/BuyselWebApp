import React, { use, useEffect, useState } from 'react'
import { properties } from '../../Constance/constance'
import PropertiesSection from '../../Layouts/PropertyListing/Properties/Properties'
import Header from '../../Layouts/PropertyListing/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Footer from '../../Components/Footer/Footer'
import { getProperty, searchProperties } from '../../Api/userApi'
import { filter } from 'framer-motion/m'
import { getNearbyProperties,filterProperties } from '../../Api/userApi'
import { useSearchParams } from 'react-router-dom'

function PropertListing() {
  const [data, setData] = useState([])
  const [filters, setFilters] = useState({ purpose: "Rent", category: "Residential", });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

const purpose = searchParams.get("purpose");
const category = searchParams.get("category");
  
useEffect(() => {
  setFilters({
    purpose: purpose || "Rent",
    category: category || "Residential",
  });
}, [purpose, category]);

  const handleFilters = (data) => {
    setFilters(data);
  };
  const normalizeProperties = (data) => {
  return data.map((item) => ({
    ...item,
    image: item.image || item.images || [], 
  }));
};

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       let res;

//       if (filters.nearby) {
//         res = await getNearbyProperties(filters.lat, filters.lng);
//         setData(res?.data || []);
//       } 
      
//       else if (filters.isFilterApplied) {
//         res = await filterProperties(filters);
//         setData(res?.data || []);
//       } 
      
//       else {
//         res = await getProperty(filters);
//         setData(res || []);
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, [filters]);

//    useEffect(() => {
//     if (!searchQuery) {
//       const fetchData = async () => {
//         try {
//           const res = await getProperty(filters);
//           if (res) {
//             setData(res);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       fetchData();
//     }


//     const normalizeProperties = (data) => {
//   return data.map((item) => ({
//     ...item,
//     image: item.image || item.images || [], 
//   }));
// };

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       let res;

//       if (filters.nearby) {
//         res = await getNearbyProperties(filters.lat, filters.lng);
//         setData(res?.data || []);
//       } 
      
//       else if (filters.isFilterApplied) {
//         res = await filterProperties(filters);
//         setData(res?.data || []);
//       } 
      
//       else {
//         res = await getProperty(filters);
//         setData(res || []);
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, [filters]);


//    useEffect(() => {
//     if (!searchQuery) {
//       const fetchData = async () => {
//         try {
//           const res = await getProperty(filters);
//           if (res) {
//             setData(res);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       fetchData();
//     }

//     if (searchQuery) {
//       const fetchDataSearch = async () => {
//         const serchedData = await searchProperties(searchQuery);
//         setData(serchedData);
//       };
//       fetchDataSearch();
//     } 
//   }, [filters, searchQuery]);


  // useEffect(() => {

  // }, [searchQuery]);


  useEffect(() => {
    
  const fetchData = async () => {
    try {
      let res;

      if (searchQuery) {
        res = await searchProperties(searchQuery);
      } 
      else if (filters.nearby) {
        res = await getNearbyProperties(filters.lat, filters.lng);
      } 
      else if (filters.isFilterApplied) {
        res = await filterProperties(filters);
      } 
      else {
        res = await getProperty(filters);
      }

      const rawData = res?.data || res || [];
      const finalData = normalizeProperties(rawData);

      console.log("FINAL DATA:", finalData);
      setData(finalData);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, [filters, searchQuery]);

  return (
    <>
      <Header setParentFilters={handleFilters} onchange={(e) => setSearchQuery(e.target.value)}   filters={filters}/>
      <PropertiesSection propertiesData={data} />
      <Footer />
    </>
  )
}

export default PropertListing