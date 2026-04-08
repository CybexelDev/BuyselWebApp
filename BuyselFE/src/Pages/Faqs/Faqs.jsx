import React from 'react'
import FaqsHeader from '../../Layouts/Faqs/FaqsHeader/FaqsHeader'
import FAQPageSection from '../../Layouts/Faqs/FaqsPageSection/FaqsPageSection'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function Faqs() {
  return (
    <div>
        <FaqsHeader/>
        <FAQPageSection/>
        <AppPromoBanner/>
        <Footer/>
    </div>
  )
}

export default Faqs