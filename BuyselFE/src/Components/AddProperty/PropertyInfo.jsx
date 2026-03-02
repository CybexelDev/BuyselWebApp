import React, { useState } from "react";

function PropertyInfo({ formData, setFormData, next }) {

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

        <h2 className="text-xl font-semibold mb-6">
          Property Details
        </h2>


        <div className="grid grid-cols-2 gap-6 mb-6">

          <div>
            <label className="text-sm font-medium">
              Property Segment
            </label>

            <select
              className="w-full mt-2 border rounded-full px-4 h-[42px]"
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
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Listing Type
            </label>

            <div className="flex gap-6 mt-3">

              {["Sell", "Rent", "Lease"].map((type) => (
                <label key={type} className="flex items-center gap-2">

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


        <div className="mb-6">

          <label className="text-sm font-medium">
            Property Type
          </label>

          <div className="flex gap-4 mt-3 flex-wrap">

            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`w-[90px] h-[70px] border rounded-lg flex flex-col items-center justify-center text-sm
                ${
                  selectedType === type
                    ? "border-lime-500 text-lime-600"
                    : "border-gray-300"
                }`}
              >
                🏢
                {type}
              </button>
            ))}

          </div>

        </div>


        <div className="grid grid-cols-2 gap-6 mb-6">

          <input
            placeholder="Carpet Area (sq ft)"
            className="border rounded-full px-4 h-[42px]"
            value={formData.carpetArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                carpetArea: e.target.value
              })
            }
          />

          <input
            placeholder="Build-Up Area (sq ft)"
            className="border rounded-full px-4 h-[42px]"
            value={formData.buildUpArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                buildUpArea: e.target.value
              })
            }
          />

        </div>


        <div className="grid grid-cols-3 gap-6 mb-8">

          <select className="border rounded-full px-4 h-[42px]">
            <option>Possession Status</option>
          </select>

          <select className="border rounded-full px-4 h-[42px]">
            <option>Property Age</option>
          </select>

          <select className="border rounded-full px-4 h-[42px]">
            <option>Ownership</option>
          </select>

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


        <div className="flex justify-end mt-10">

          <button
            onClick={next}
            className="bg-lime-500 text-white px-6 py-2 rounded-lg"
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}

export default PropertyInfo;