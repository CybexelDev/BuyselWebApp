
import React, { useEffect, useState } from "react";
import './addproperty.css'
import logo from '../../../assets/images/logo/logo.png'
import line from '../../../assets/images/header/line.png'
import { ArrowUpRight } from 'lucide-react';

import img from "../../../assets/images/carousel/he.png"
import img2 from "../../../assets/images/carousel/he.png"
import img3 from "../../../assets/images/carousel/he.png"
import Navbar from "../../../Components/Navbar/Navbar";
import ButtonHead from "../../../Components/ButtonHead/ButtonHead";

const AddPropertyHeader = ({title="Post Your Property",subtitle="List your property in a few easy steps"}) => {
  
//sss
  return (
    <div className='p-5 md:p-5  relative'>
       <Navbar />
      <div className="addproperty-container">
        <div class="addproperty-logo-container ">
          <div className='flex items-center justify-center'>
            <img src={logo} alt="logo" className="addproperty-cta-logo w-[100px] " />
          </div>
        </div>
      </div>


      <div className="flex gap-5 pr-5 absolute mb-5 left-11 sm:left-12 bottom-[40px] z-10">
        <div className=''>
          <p className='max-[400px]:text-[19px]  text-[25px] sm:text-[32px] font-semibold lexend '>{title}</p>
          <p className='inter max-[400px]:text-[11px]  text-[14px] sm:text-[16px] '>{subtitle}</p>
        </div>
        
      </div>
    </div>
  )
}

export default AddPropertyHeader 
