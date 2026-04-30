
import React, { useEffect, useState } from "react";
import './hero.css'
import logo from '../../../assets/images/logo/logo.png'
import line from '../../../assets/images/header/line.png'
import { ArrowUpRight } from 'lucide-react';

import img from "../../../assets/images/carousel/he.png"
import img2 from "../../../assets/images/carousel/he.png"
import img3 from "../../../assets/images/carousel/he.png"
import Navbar from "../../../Components/Navbar/Navbar";
import ButtonHead from "../../../Components/ButtonHead/ButtonHead";

const Hero = () => {
  const images = [img, img2, img3];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='md:p-5 p-2 relative'>
      <Navbar />

      <div className="footer-cta-container overflow-hidden">
        <div class="footer-cta-logo-container ">
          <div className='flex items-center justify-center'>
            <img src={logo} alt="logo" className="footer-cta-logo w-[100px] " />
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-1 md:gap-0 mt-[20px] md:mt-[-20px]">

          <div className="w-full h-[50%] lg:h-[90vh] lg:w-[37%]  pl-5" style={{
            backgroundImage: `url(${line})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <div className="flex flex-col justify-center h-full gap-4 text-center md:text-left"  >
              <p className="md:text-[35px] text-[28px] instrument-sans font-bold ">Start Your<br />Commission-<span className="text-[#b8b8b8]">Free</span><br />Journey Today!</p>
              <p className="md:text-[16px] text-[15px] text-[#000000] max-w-[400px] host-grotesk">Discover lands, homes, commercial buildings, hotels, malls and investment properties — all verified and listed by genuine owners and trusted agents.</p>

            
              <div className="flex justify-center md:justify-start ">
                <ButtonHead text={"Explore Properties"} />
              </div>
            </div>

          </div>

          <div className="relative w-full lg:w-[63%] h-[50vh] lg:h-[90vh] overflow-hidden transition-all duration-700 "
            style={{
              backgroundImage: `url(${images[current]})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0" />
            <div className="absolute bottom-15 right-6 z-20 flex gap-3">
              <button
                onClick={prevSlide}
                className="bg-white/80 hover:bg-white text-black w-11 h-11 rounded-full flex items-center justify-center text-2xl transition cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/80 hover:bg-white text-black w-11 h-11 rounded-full flex items-center justify-center text-2xl transition cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>

        </div>
      </div>


      <div className="flex md:gap-5 gap-2 md:pr-5 pr-2 absolute mb-[-70px] md:mb-5 left-8 bottom-[80px] z-10">
        <div className=''>
          <p className=' md:text-[24px] text-[18px] font-semibold instrument-sans'>10,000+</p>
          <p className='instrument-sans md:text-[16px] text-[13px]'>Verified Listings</p>
        </div>
        <div className='count'>
          <p className='md:text-[24px] text-[18px] font-semibold instrument-sans'>5,000+</p>
          <p className='instrument-sans md:text-[16px] text-[13px]'>Happy Clients</p>
        </div>
        <div className='count'>
          <p className=' font-semibold md:text-[24px] text-[18px] instrument-sans'>100%</p>
          <p className='instrument-sans md:text-[16px] text-[13px]'>Commission Free</p>
        </div>
      </div>

    </div>
  )
}

export default Hero
