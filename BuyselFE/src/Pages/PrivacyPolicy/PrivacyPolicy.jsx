import React from "react";
import PrivacyPolicyLayout from "../../Layouts/PrivacyPolicy/PrivacyPolicyLayout";
import TermsHeader from "../../Layouts/Terms/TermsHeader/TermsHeader";
import ContactCard from "../../Components/terms/contact";
import Footer from "../../Components/Footer/Footer";
const PrivacyPolicy=()=>{
return(
<div className="bg-[#F4F4F4]">
<TermsHeader   h1 = "Privacy Policy"
  text = "Last Updated: March 27"/>
  <PrivacyPolicyLayout/>
       <ContactCard/>
        <Footer bg="bg-[#F4F4F4]" margin="mt-0"/>
  </div>
)
}
export default PrivacyPolicy