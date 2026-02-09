import React from 'react'
import './hero.css'
import logo from '../../assets/images/logo/logo.png'

const Hero = () => {
  return (
    <div className='p-5 relative'>
      <div className="footer-cta-container">
        <div class="footer-cta-logo-container ">
          <div className='flex items-center justify-center'>
            <img src={logo} alt="logo" className="footer-cta-logo w-[100px] " />
          </div>
        </div>

      </div>
        <div className="flex gap-5 absolute mb-5 left-8 bottom-[80px] z-">
            <div className=''>
              <p className=' font-semibold text-[29px]'>10000+</p>
              <p>Verified Listings</p>
            </div>
             <div className=''>
              <p className=' font-semibold text-[29px]'>10000+</p>
              <p>Verified Listings</p>
            </div>
          </div>
    </div>
  )
}

export default Hero
