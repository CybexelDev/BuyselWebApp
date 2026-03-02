import React, { useState } from "react";
import SidebarProgress from "../../Components/AddProperty/SideBarProgress";
import PropertyInfo from "../../Components/AddProperty/PropertyInfo";

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
    schedule: ""
  });

  return (
    <div className="bg-[#FFFFFF] min-h-screen p-6">

      <div className="max-w-[1400px] mx-auto flex gap-8">

        <SidebarProgress step={step} />

        <div className="flex-1">

          {step === 1 && (
            <PropertyInfo
              formData={formData}
              setFormData={setFormData}
              next={() => setStep(2)}
            />
          )}


        </div>

      </div>

    </div>
  );
}

export default AddPropertySection;