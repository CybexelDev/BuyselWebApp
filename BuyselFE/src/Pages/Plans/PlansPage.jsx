import React from 'react'
import PricingSection from '../../Layouts/Plans/PlansLayout'
import WishlistHeader from '../../Layouts/Wishlist/WishListHeader/WishlistHeader'
import Footer from '../../Components/Footer/Footer'

function PlansPage() {
  return (
    <div>
        <WishlistHeader/>
        <PricingSection/>
        <Footer/>
    </div>
  )
}



export default PlansPage