import React from 'react';
import { MapPin, Home, Search } from 'lucide-react';
import bgPromotionalBanner from '../../assets/images/appPromotionalBanner/bgPromotionalBanner.png'
import mainPhone from '../../assets/images/appPromotionalBanner/groupImage.png'
import GooglePlayStore from '../../assets/images/appPromotionalBanner/googlePlay.png'
import Apple from '../../assets/images/appPromotionalBanner/Apple.png'

const AppPromoBanner = () => {
  return (
    <section className="relative w-full mt-20  h-auto xl:h-[459px] bg-[#84CC16] flex items-center px-6 py-6 pb-10 md:pb-10 xl:py-12 xl:px-20 overflow-visible xl:overflow-visible">
      
    <div
  className="
    absolute inset-0 opacity-10 pointer-events-none
    bg-no-repeat
    bg-[length:120%_auto] 
bg-[position:center_41.3%]
    md:bg-[length:98%_auto]
    md:bg-bottom
    md:bg-left
  "
  style={{
    backgroundImage: `url(${bgPromotionalBanner})`
  }}
/>
<div className='border-[1px] border-white'></div>
{/* start */}
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Image */}
        <div className="relative h-[350px] xl:h-[580px] flex justify-center xl:justify-start">
          <div className="absolute  xl:top-[10px] -top-13  xl:-bottom-9 z-20  xl:ml-30">
            <img 
              src={mainPhone}
              alt="App Preview"
              /* Mobile: h-[380px]. Laptop: remains your h-[580px] */
              className="h-[380px] xl:h-[520px] w-auto object-contain  ml-3 md:ml-0" 
            />
          </div>
        </div>

        {/* Right Side: Text */}
        {/* Mobile: mt-10. Laptop: remains your mt-22 */}
        <div className="text-white text-center xl:text-left -mt-12 xl:mt-22">
          <h1 className="text-3xl md:text-[36px] font-semibold mb-4 tracking-tight lexend">
            Download the App Now!
          </h1>
          <p className="text-lg md:text-[17.5px] opacity-90 mb-10 inter">
            Discover verified properties and connect directly
          </p>
          
          <div className="flex  justify-center xl:justify-start gap-4 -mt-4">
            {/* Play Store */}
<button className="flex items-center gap-2 bg-black 
                   w-[160px] sm:w-[189px] 
                   h-[55px] sm:h-[59px] 
                   rounded-full">
              <img src={GooglePlayStore} alt="Google Play" className="h-[31.14px] ml-5 w-[28px]" />
              <div className="text-white text-left flex leading-tight flex-col">
                <p className=" text-[8px] xl:text-[12.13px] font-[350] inter">Download on the</p>
                <p className="text-[14px] xl:text-[18.2px] font-semibold roboto text-center">Play Store</p>
              </div>
            </button>

            {/* App Store */}
<button className="flex items-center gap-2 bg-black 
                   w-[160px] sm:w-[189px] 
                   h-[55px] sm:h-[59px] 
                   rounded-full">
              <img src={Apple} alt="Apple" className="h-[31.14px] ml-5 w-[28px]" />
              <div className="text-white text-left flex leading-tight flex-col">
                <p className=" text-[8px] xl:text-[12.13px] font-[350] inter">Download on the</p>
                <p className=" text-[14px] xl:text-[18.2px] font-semibold roboto text-center">App Store</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppPromoBanner;