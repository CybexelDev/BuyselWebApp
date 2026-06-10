
import React, { useEffect, useState } from "react";
import './wishlist.css'
import logo from '../../../assets/images/logo/logo.png'

import Navbar from "../../../Components/Navbar/Navbar";


const WishlistHeader= () => {
   

    return (
        <div className='md:p-5 p-2 pb-0 relative'>
            <Navbar />
            <div className="wishlist-cta-container">
                <div class="wishlist-cta-logo-container ">
                    <div className='flex items-center justify-center'>
                        <img src={logo} alt="logo" className="wishlist-cta-logo w-[100px] " />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WishlistHeader
