import React from "react";
import { useState } from "react";
import { Layers, List, Target } from "lucide-react";
import SelectField from "../Select/CustomSelect";
import {
  Car,
  Dumbbell,
  ArrowUp,
  Camera,
  Zap,
  Trees,
  Waves,
  Shield
} from "lucide-react";
import {
  Tv,
  BedDouble,
  Bath,
  Wind,
  Sofa,
  Refrigerator,
  Warehouse
} from "lucide-react";
const featureIcons = {
  Wardrobe: Warehouse,
  TV: Tv,
  Bed: BedDouble,
  Geyser: Bath,
  AC: Wind,
  Sofa: Sofa,
  "Dining Table": Layers,
  Fridge: Refrigerator
};
const bhkList = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
const furnishingFeatures = [
  "Wardrobe",
  "TV",
  "Bed",
  "Geyser",
  "AC",
  "Sofa",
  "Dining Table",
  "Fridge"
];
const amenitiesList = [
  { name: "Parking", icon: Car },
  { name: "Gym", icon: Dumbbell },
  { name: "Lift", icon: ArrowUp },
  { name: "CCTV", icon: Camera },
  { name: "Power Backup", icon: Zap },
  { name: "Garden", icon: Trees },
  { name: "Swimming Pool", icon: Waves },
  { name: "Security", icon: Shield },

  { name: "Club House", icon: Waves },
  { name: "Play Area", icon: Trees },
  { name: "WiFi", icon: Zap },
  { name: "Fire Safety", icon: Shield },
  { name: "Visitor Parking", icon: Car },
  { name: "24x7 Water", icon: Waves },
  { name: "Solar Power", icon: Zap },
  { name: "Maintenance Staff", icon: Shield }
];

function PropertyInfo({ formData, setFormData }) {
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [keyPoints, setKeyPoints] = useState([""]);

  const handlePointChange = (index, value) => {
    const updated = [...keyPoints];
    updated[index] = value;
    setKeyPoints(updated);
  };

  const addPoint = () => {
    if (keyPoints.length >= 6) return;
    setKeyPoints([...keyPoints, ""]);
  };
  const removePoint = (index) => {
    const updated = keyPoints.filter((_, i) => i !== index);
    setKeyPoints(updated);
  };

  const updateFeatureCount = (feature, type) => {

    let updated = { ...(formData.features || {}) };

    const current = updated[feature] || 0;

    if (type === "plus") {
      updated[feature] = current + 1;
    }

    if (type === "minus" && current > 0) {
      updated[feature] = current - 1;
    }

    setFormData({
      ...formData,
      features: updated
    });

  };
  const addLandmark = () => {
    const updated = [...(formData.nearbyLandmarks || [])];

    if (updated.length >= 3) return;

    updated.push({ name: "", distance: "" });

    setFormData({
      ...formData,
      nearbyLandmarks: updated
    });
  };

  const updateLandmark = (index, field, value) => {
    const updated = [...(formData.nearbyLandmarks || [])];

    updated[index][field] = value;

    setFormData({
      ...formData,
      nearbyLandmarks: updated
    });
  };

  const removeLandmark = (index) => {
    const updated = formData.nearbyLandmarks.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      nearbyLandmarks: updated
    });
  };
  const toggleAmenity = (amenity) => {

    let updated = [...(formData.amenities || [])];

    if (updated.includes(amenity)) {
      updated = updated.filter(a => a !== amenity);
    } else {
      updated.push(amenity);
    }

    setFormData({
      ...formData,
      amenities: updated
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex gap-8">

      <div className="flex-1 bg-white rounded-xl p-8">

        <h2 className="text-[24px] lexend font-[550] mb-6">
          Property Details
        </h2>

        {/* CATEGORY SECTION */}

        <div className="grid grid-cols-3 gap-6 mb-6">

          <SelectField
            label="Category"
            icon={<Layers size={16} />}
            options={["Commercial", "Residential", "Land"]}
            value={formData.category}
            onChange={(val) =>
              setFormData({ ...formData, category: val })
            }
          />
          <SelectField
            label="Subcategory"
            icon={<List size={16} />}
            options={["Office", "Shop", "Warehouse", "Apartment"]}
            value={formData.subcategory}
            onChange={(val) =>
              setFormData({ ...formData, subcategory: val })
            }
          />
          <SelectField
            label="Purpose"
            icon={<Target size={16} />}
            options={["Sell", "Rent"]}
            value={formData.purpose}
            onChange={(val) =>
              setFormData({ ...formData, purpose: val })
            }
          />
        </div>

        {formData.subcategory === "Apartment" && (

          <div className="my-8 space-y-8">

            {/* BHK SELECT */}

            <div>
              <label className="text-[14px] font-semibold mb-3 block">
                BHK Type
              </label>

              <div className="flex flex-wrap gap-3">

                {bhkList.map((bhk) => {

                  const selected = formData.bhk === bhk;

                  return (

                    <button
                      key={bhk}
                      type="button"
                      onClick={() => setFormData({ ...formData, bhk })}
                      className={`px-5 py-3 rounded-lg border text-sm
                                 ${selected
                          ? "bg-lime-500 text-white border-lime-500"
                          : "border-gray-300 text-gray-600 hover:border-lime-400"
                        }`}
                    >

                      {bhk}

                    </button>

                  )

                })}

              </div>
            </div>


            {/* FURNISHINGS */}

            <div>

              <label className="text-[14px] font-semibold mb-4 block">
                Flat Furnishings
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {furnishingFeatures.map((feature) => {

                  const count = formData.features?.[feature] || 0;
                  const Icon = featureIcons[feature];
                  const selected = count > 0;

                  return (

                    <div
                      key={feature}
                      className={`border rounded-xl p-5
flex flex-col items-center justify-center
gap-3 transition

${selected
                          ? "border-[#A3D950] bg-lime-400"
                          : "border-gray-200 bg-white hover:border-lime-400"
                        }`}
                    >

                      <Icon
                        size={28}
                        className={selected ? "text-black" : "text-gray-500"}
                      />
                      <span
                        className={`text-sm font-medium ${selected ? "text-black" : "text-gray-700"
                          }`}
                      >
                        {feature}
                      </span>

                      <div className="flex items-center gap-4 mt-1">

                        <button
                          type="button"
                          onClick={() => updateFeatureCount(feature, "minus")}
                          className={`text-xl font-semibold  hover:text-black ${selected ? "text-black" : "text-gray-600"} `}
                        >
                          -
                        </button>

                        <span className={`text-md font-semibold w-5 text-center  ${selected ? "text-black" : "text-gray-600"}`} >
                          {count}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateFeatureCount(feature, "plus")}
                          className={`text-xl font-semibold  hover:text-black  ${selected ? "text-black" : "text-gray-600"} `}
                        >
                          +
                        </button>

                      </div>

                    </div>

                  )

                })}

              </div>
            </div>

          </div>

        )}
        {/* BASIC PROPERTY DETAILS */}

        <div className="grid grid-cols-3 gap-6">

          <Input label="Title" name="title" value={formData.title} onChange={handleChange} />

          <Input label="Land Area" name="landArea" value={formData.landArea} onChange={handleChange} />

          <Input label="Square Feet" name="squareFeet" value={formData.squareFeet} onChange={handleChange} />

        </div>


        {/* LOCATION SECTION */}

        <div className="grid grid-cols-3 gap-6 mt-8">

          <Input label="City" name="city" value={formData.city} onChange={handleChange} />
          <Input label="Village" name="village" value={formData.village} onChange={handleChange} />
          <Input label="Taluk" name="taluk" value={formData.taluk} onChange={handleChange} />

          <Input label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
          <Input label="District" name="district" value={formData.district} onChange={handleChange} />
          <Input label="State" name="state" value={formData.state} onChange={handleChange} />

          <Input label="Google Location" name="googleLocation" value={formData.googleLocation} onChange={handleChange} />
          <div className="col-span-2">

            <label className="flex items-center gap-2 font-semibold mb-3 lexend text-[16px]">
              <Layers size={16} className="text-lime-500" />
              Nearby Landmarks
            </label>

            <div className="space-y-3">

              {(formData.nearbyLandmarks || []).map((item, index) => (

                <div key={index} className="flex gap-3 items-center">

                  <input
                    type="text"
                    placeholder="Landmark name"
                    value={item.name}
                    onChange={(e) => updateLandmark(index, "name", e.target.value)}
                    className="flex-1 h-[42px] px-5 rounded-full
bg-[#F3F3F3]
border border-[#E4E3E3]
text-[14px]
shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Distance (km)"
                    value={item.distance}
                    onChange={(e) => updateLandmark(index, "distance", e.target.value.replace(/[^0-9.]/g, ""))}
                    className="w-[120px] h-[42px] px-5 rounded-full
bg-[#F3F3F3]
border border-[#E4E3E3]
text-[14px]
shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
outline-none"
                  />

                  {formData.nearbyLandmarks.length > 1 && (

                    <button
                      type="button"
                      onClick={() => removeLandmark(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>

                  )}

                </div>

              ))}

            </div>

            <button
              type="button"
              onClick={addLandmark}
              className="mt-3 text-lime-600 text-sm font-medium hover:underline"
            >
              + Add Landmark
            </button>

          </div>
        </div>



        <div className="grid grid-cols-1 gap-8 mt-8">

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />


        </div>
        <div className="mt-8">

          <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-3">
            <Layers size={16} className="text-lime-500" />
            Key Selling Points
          </label>

          <div className="space-y-3">

            {keyPoints.map((point, index) => (

              <div key={index} className="flex items-center gap-3">

                <input
                  type="text"
                  placeholder="Enter key selling point"
                  value={point}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  className="flex-1 h-[42px] px-5 rounded-full
          bg-[#F3F3F3]
          border border-[#E4E3E3]
          text-[14px] text-[#757575]
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          outline-none
          lexend"
                />

                {keyPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePoint(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}

              </div>

            ))}

          </div>

          <button
            type="button"
            onClick={addPoint}
            className="mt-3 text-lime-600 text-sm font-medium hover:underline host-grotesk"
          >
            + Add Point
          </button>

        </div>


        {/* PRICE + OWNER */}

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="col-span-3">

            <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-2">
              <Layers size={16} className="text-lime-500" />
              Amenities
            </label>

            {formData.amenities?.length > 0 ? (

              <div className="flex items-center justify-between
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        bg-[#F3F3F3] px-4 py-3 rounded-lg">

                <div className="flex flex-wrap gap-2 flex-1">

                  {formData.amenities.map((amenity) => (

                    <span
                      key={amenity}
                      className="flex items-center gap-1
      px-3 py-[3px]
      rounded-full
      bg-lime-100
      text-lime-700
      text-xs"
                    >

                      {amenity}

                      <button
                        type="button"
                        onClick={() => toggleAmenity(amenity)}
                        className="ml-1 text-lime-700 hover:text-red-500"
                      >
                        ×
                      </button>

                    </span>

                  ))}

                </div>

                <button
                  type="button"
                  onClick={() => setIsAmenitiesOpen(true)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  + Add more
                </button>

              </div>

            ) : (

              <button
                type="button"
                onClick={() => setIsAmenitiesOpen(true)}
                className="text-[#6ABD11ED] text-sm font-medium hover:underline"
              >
                + Add Amenities
              </button>

            )}

          </div>


          <Input label="Owner" name="owner" value={formData.owner} onChange={handleChange} />

          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />

          <Input label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

        </div>
        {isAmenitiesOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl p-8 w-[500px]">

              <h3 className="text-lg font-semibold mb-6">
                Select Amenities
              </h3>

              <div className="grid grid-cols-4 gap-4 mb-6">

                {amenitiesList.map((item) => {

                  const Icon = item.icon;
                  const isSelected = formData.amenities?.includes(item.name);

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => toggleAmenity(item.name)}
                      className={`flex flex-col items-center justify-center
              w-[90px] h-[70px] rounded-xl border transition
              ${isSelected
                          ? "border-lime-500 bg-lime-50 text-lime-600"
                          : "border-gray-300 text-gray-500 hover:border-lime-400"
                        }`}
                    >

                      <Icon size={20} />

                      <span className="text-[12px] mt-1">
                        {item.name}
                      </span>

                    </button>
                  );
                })}

              </div>

              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setIsAmenitiesOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setIsAmenitiesOpen(false)}
                  className="px-4 py-2 rounded-lg bg-lime-500 text-white"
                >
                  Save
                </button>

              </div>

            </div>

          </div>
        )}
      </div>

    </div>
  );
}

export default PropertyInfo;
const Input = ({ label, name, value, onChange }) => {

  const handleInputChange = (e) => {
    let val = e.target.value;

    // Only numbers
    if (["phone", "whatsapp", "pincode", "pricePerAcre", "totalPrice", "landArea", "squareFeet"].includes(name)) {
      val = val.replace(/\D/g, "");
    }

    // Only text
    if (["title","city", "village", "taluk", "district", "state"].includes(name)) {
      val = val.replace(/[^a-zA-Z\s]/g, "");
    }

    onChange({
      target: {
        name,
        value: val
      }
    });
  };

  return (
    <div>
      <label className="flex items-center gap-2 font-semibold mb-2 lexend text-[16px]">
        <Layers size={16} className="text-lime-500" />
        {label}
      </label>

      <input
        name={name}
        value={value || ""}
        onChange={handleInputChange}
        inputMode={
          ["phone", "","whatsapp", "pincode", "pricePerAcre", "totalPrice", "landArea", "squareFeet"].includes(name)
            ? "numeric"
            : "text"
        }
        maxLength={name === "pincode" ? 6 : name === "phone" || name === "whatsapp" ? 10 : undefined}
        className="w-full h-[42px] px-5 rounded-full
        bg-[#F3F3F3]
        border border-[#E4E3E3]
        text-[14px] text-black lexend
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        outline-none"
      />
    </div>
  );
};
const Textarea = ({ label, name, value, onChange }) => (
  <div>
    <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-2">
      <Layers size={16} className="text-lime-500" />
      {label}
    </label>

    <textarea
      rows="5"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 rounded-2xl
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-black
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      lexend
      outline-none"
    />
  </div>
);