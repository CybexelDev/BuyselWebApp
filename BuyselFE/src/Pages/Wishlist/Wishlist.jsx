import React from 'react'
import WishlistHeader from '../../Layouts/Wishlist/WishListHeader/WishlistHeader'
import WishlistListingSection from '../../Layouts/Wishlist/WishlistListingSection/WishlistListingSection'
import Footer from '../../Components/Footer/Footer'

function Wishlist() {
  return (
    <div>
        <>
        <WishlistHeader/>
        <WishlistListingSection/>
        <Footer/>
        </>
    </div>
  )
}

export default Wishlist