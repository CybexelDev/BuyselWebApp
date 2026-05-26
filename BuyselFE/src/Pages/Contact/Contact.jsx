import React from 'react'
import Header from '../../Layouts/Contact/Header/Header'
import ContactForm from '../../Layouts/Contact/ContactForm/ContactForm'
import MapSection from '../../Layouts/Contact/MapSection/MapSection'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <ContactForm />
        <MapSection/>
        <AppPromoBanner/>
        <Footer/>
    </div>
  )
}

export default Contact