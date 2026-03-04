import React, { useState } from "react";

function PropertyInfo({ formData, setFormData,}) {

  const propertyTypes = [
    "Office",
    "Retail Shop",
    "Showroom",
    "Warehouse",
    "Plot",
    "Others"
  ];

  const zoneTypes = [
    "Industrial",
    "Commercial",
    "Residential",
    "Special economic zone",
    "Agricultural zone",
    "Open Spaces",
    "Others"
  ];

  const locationHub = [
    "IT Park",
    "Business Park",
    "Others"
  ];

  const propertyCondition = [
    "Ready to use",
    "Bare shell"
  ];

  const [selectedType, setSelectedType] = useState("");

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setFormData({
      ...formData,
      propertyType: type
    });
  };

  return (
    <div className="flex gap-8">

      <div className="flex-1 bg-white rounded-xl p-8">

        <h2 className="text-[24px] lexend font-[550] mb-6">
          Property Details
        </h2>


        <div className="grid grid-cols-2 gap-6 mb-6">

          <div>
            <label className="text-[16px] font-semibold lexend">
              Property Type
            </label>

        <div className="relative w-full">

<select
  className="w-full mt-2 h-[42px] px-5 pr-10 rounded-full
  bg-[#F3F3F3]
  border border-[#E4E3E3]
  text-[14px] text-[#757575]
  shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
  appearance-none
  outline-none"
  value={formData.propertySegment}
  onChange={(e) =>
    setFormData({
      ...formData,
      propertySegment: e.target.value
    })
  }
>
  <option>Commercial</option>
  <option>Residential</option>
    <option>Land/Plot</option>
  <option>Industrial</option>

</select>

<svg
  className="absolute right-5 bottom-3 -translate-y-1/2 pointer-events-none"
  width="12"
  height="7"
  viewBox="0 0 12 7"
  fill="none"
>
  <path
    d="M11 1L6 6L1 1"
    stroke="#84CC16"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

</div>
          </div>

          <div>
            <label className="text-[16px] font-semibold lexend">
              Listing Type
            </label>

            <div className="flex gap-6 mt-3">

              {["Sell", "Rent", "Lease"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-[14px] lexend font-medium">

                  <input
                    type="radio"
                    name="listingType"
                    value={type}
                    checked={formData.listingType === type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        listingType: e.target.value
                      })
                    }
                  />

                  {type}

                </label>
              ))}

            </div>
          </div>

        </div>




        <div className="grid grid-cols-2 gap-6 mb-6">
            
            <div>
 <label className="text-[16px] font-semibold lexend">
Carpet Area (sq ft)            </label>
          <input
            placeholder="e.g., 1200"
            className="w-full mt-2 h-[42px] px-5 pr-10 rounded-full
  bg-[#F3F3F3]
  border border-[#E4E3E3] inter italic
  text-[14px] text-[#757575]
  shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
  appearance-none
  outline-none"
            value={formData.carpetArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                carpetArea: e.target.value
              })
            }
          />
          </div>

         <div>
 <label className="text-[16px] font-semibold lexend">
              Build-Up Area (sq ft)
            </label>
          <input
            placeholder="e.g., 1400"
            className="w-full mt-2 h-[42px] px-5 pr-10 rounded-full
  bg-[#F3F3F3]
  border border-[#E4E3E3]
  inter italic
  text-[14px] text-[#757575]
  shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
  appearance-none
  outline-none"
            value={formData.carpetArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                carpetArea: e.target.value
              })
            }
          />
          </div>
        </div>


      <div className="grid grid-cols-3 gap-6 mb-8">

  {/* Possession Status */}
  <div>
    <label className="block text-[14px] font-semibold mb-2">
      Possession Status
    </label>

<div className="relative">
    <select className="w-full h-[42px] px-5 rounded-full
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      appearance-none
      outline-none">
      
      <option>Select age</option>
      <option>Ready to move</option>
      <option>Under construction</option>

    </select>
    
<svg
  className="absolute right-5 bottom-3 -translate-y-1/2 pointer-events-none"
  width="12"
  height="7"
  viewBox="0 0 12 7"
  fill="none"
>
  <path
    d="M11 1L6 6L1 1"
    stroke="#84CC16"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
  </div>

  {/* Property Age */}
  <div>
    <label className="block text-[14px] font-semibold mb-2">
      Property Age
    </label>

<div className="relative">
    <select className="w-full h-[42px] px-5 rounded-full
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      appearance-none
      outline-none">
      
      <option>Select age</option>

    </select>
    </div>
  </div>

  <div>
    <label className="block text-[14px] font-semibold mb-2">
      Ownership
    </label>
<div className="relative">
    <select className="w-full h-[42px] px-5 rounded-full
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      appearance-none
      outline-none">
      
      <option>Select ownership</option>

    </select>
    </div>
  </div>

</div>


        <h3 className="font-semibold mb-3">
          About the property
        </h3>


        <div className="mb-6">

          <p className="text-sm font-medium mb-3">
            Zone Type
          </p>

          <div className="flex flex-wrap gap-3">

            {zoneTypes.map((zone) => (
              <button
                key={zone}
                className="px-4 py-1 border border-lime-500 text-lime-600 rounded-full text-sm"
              >
                {zone}
              </button>
            ))}

          </div>

        </div>

        {/* LOCATION HUB */}

        <div className="grid grid-cols-2 gap-8 mb-6">

          <div>

            <p className="text-sm font-medium mb-3">
              Location Hub
            </p>

            <div className="flex gap-3">

              {locationHub.map((hub) => (
                <button
                  key={hub}
                  className="px-4 py-1 border border-lime-500 text-lime-600 rounded-full text-sm"
                >
                  {hub}
                </button>
              ))}

            </div>

          </div>

          <div>

            <p className="text-sm font-medium mb-3">
              Property Condition
            </p>

            <div className="flex gap-3">

              {propertyCondition.map((condition) => (
                <button
                  key={condition}
                  className="px-4 py-1 border border-lime-500 text-lime-600 rounded-full text-sm"
                >
                  {condition}
                </button>
              ))}

            </div>

          </div>

        </div>


        

      </div>

    </div>
  );
}

export default PropertyInfo;