import React from 'react'
import TermsHeader from '../../Layouts/Terms/TermsHeader/TermsHeader'
import TermsContent from '../../Layouts/Terms/TermsSection/TermsSectionLayout'
import ContactCard from '../../Components/terms/contact'
import Footer from '../../Components/Footer/Footer'

function TermsPage() {
  return (
    <div>
        <TermsHeader/>
        <TermsContent/>
        <ContactCard/>
        <Footer bg="bg-[#F4F4F4]" margin="mt-0"/>
    </div>
  )
}

export default TermsPage