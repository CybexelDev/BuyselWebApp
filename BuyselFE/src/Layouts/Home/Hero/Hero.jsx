
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
    <div className='p-5 relative'>
       <Navbar />
      <div className="footer-cta-container">
        <div class="footer-cta-logo-container ">
          <div className='flex items-center justify-center'>
            <img src={logo} alt="logo" className="footer-cta-logo w-[100px] " />
          </div>
        </div>

        <div className="flex flex-row gap-1 mt-[-20px]">

          <div className="w-full h-[90vh] basis-37/100  pl-5" style={{
              backgroundImage: `url(${line})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="flex flex-col justify-center h-full gap-4"  >
              <p className="text-[35px] instrument-sans font-bold ">Start Your<br />Commission-<span className="text-[#b8b8b8]">Free</span><br />Journey Today!</p>
              <p className="text-[16px] text-[#000000] max-w-[400px] host-grotesk">Discover lands, homes, commercial buildings, hotels, malls and investment properties — all verified and listed by genuine owners and trusted agents.</p>


              {/* <div className="w-fit relative">
              <button className=" head-btn relative gap-3 bg-[#7AC943] hover:bg-[#6BB535] text-white px-5 py-2 w-fit rounded-[15px] transition-all duration-200 shadow-md hover:shadow-lg rounded-l-2xl"
              >
                <span className="font-semibold ">
                  Get Started &nbsp; &nbsp;&nbsp; &nbsp;
                </span>
               
              </button>
               <div className="flex items-center justify-center w-5 h-5 bg-[#7AC943] rounded-full transition-transform duration-200 group-hover:scale-110 absolute top-[-2px] right-0 z-99">
                  <ArrowUpRight className="w-3 h-3 text-[#fff]" strokeWidth={2.5} />
                </div>
              </div> */}
              <ButtonHead text="Get Started" />
            </div>

          </div>

          <div className="relative w-full basis-63/100 h-[90vh] overflow-hidden transition-all duration-700"
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


      <div className="flex gap-5 pr-5 absolute mb-5 left-8 bottom-[80px] z-10">
        <div className=''>
          <p className=' text-[24px] font-semibold instrument-sans'>10,000+</p>
          <p className='instrument-sans text-[16px]'>Verified Listings</p>
        </div>
        <div className='count'>
          <p className='text-[24px] font-semibold instrument-sans'>5,000+</p>
          <p className='instrument-sans text-[16px]'>Happy Clients</p>
        </div>
        <div className='count'>
          <p className=' font-semibold text-[24px] instrument-sans'>100%</p>
          <p className='instrument-sans text-[16px]'>Commission Free</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
