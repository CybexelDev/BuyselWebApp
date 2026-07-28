
import React, { useEffect, useState } from "react";
import './wishlist.css'
import logo from '../../../assets/images/logo/logo.png'
import Navbar from "../../../Components/Navbar/Navbar";
import prop from '../../../assets/images/icons/prop.svg'

const WishlistHeader = () => {

    return (
        <div className='md:p-5 p-2 pb-0 relative'>
            <Navbar />
            <div className="wishlist-cta-container">
                <div class="wishlist-cta-logo-container ">
                    <div className='flex items-center justify-center'>
                        <img src={logo} alt="logo" className="wishlist-cta-logo w-[100px] " />
                    </div>

                </div>
                <img
                    src={prop}
                    alt="Empty"
                    className="md:w-[250px] w-[150px] md:h-[250px] h-[150px] md:mb-2 mb-7"
                />
            </div>
        </div>
    )
}

export default WishlistHeader
