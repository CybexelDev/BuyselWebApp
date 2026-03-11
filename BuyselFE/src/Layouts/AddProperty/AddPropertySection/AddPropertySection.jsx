import React, { useState } from "react";
import SidebarProgress from "../../../Components/AddProperty/SideBarProgress";
import PropertyInfo from "../../../Components/AddProperty/PropertyInfo";
import Pricing from "../../../Components/AddProperty/Pricing";
import MediaUpload from "../../../Components/AddProperty/MediaUpload";
import Button from "../../../Components/AddProperty/Button";
import ProfileDashboard from "../../Profile/ProfileDashboard/ProfileDashboard";
import PreviewProperty from "../../../Components/AddProperty/Preview";
function AddPropertySection() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    propertySegment: "",
    listingType: "",
    propertyType: "",
    carpetArea: "",
    buildUpArea: "",
    possessionStatus: "",
    propertyAge: "",
    ownership: "",
    zoneType: "",
    locationHub: "",
    propertyCondition: "",
    price: "",
    images: [],
    schedule: "",
    monthlyRent:"",
    maintainceCharge:"",
    priceNegotiable:"",
    availableDate:"",

  });

  return (
    <div className="bg-[#FFFFFF] min-h-screen p-6">

<div className="mx-auto flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8">
<div className="w-full lg:w-[320px]">
  <SidebarProgress step={step} />
</div>
        <div className="flex-1">

          {step === 1 && (
            <PropertyInfo
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <Pricing
              formData={formData}
              setFormData={setFormData}
            />
          )}
            {step === 3 && (
            <MediaUpload
              formData={formData}
              setFormData={setFormData}
              
            />
          )}
          {step===4 &&(
            <PreviewProperty
            formData={formData}
            setFormData={setFormData}
            />
          )}

         
                <Button
              step={step}
            next={() => setStep(step + 1)}
           back={() => setStep(step - 1)}
           />


        </div>




      </div>

    </div>
  );
}

export default AddPropertySection;
