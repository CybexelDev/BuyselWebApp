import React from "react";
import { useState, useEffect } from "react";
import { Layers, List, Target } from "lucide-react";
import SelectField from "../Select/CustomSelect";
import { getPropertyData } from "../../Api/agentsApi";

function  PropertyInfo({ formData, setFormData, errors }) {
  const [propertyData, setPropertyData] = useState({
    categories: [],
    subcategories: [],
    purposes: [],
    amenities: [],
    fields: [],
  });
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
const [tempAmenities, setTempAmenities] = useState([]);
  const handlePointChange = (index, value) => {
    
  const updated = [...(formData.keyPoints || [])];
  updated[index] = value;
  setFormData({
    ...formData,
    keyPoints: updated,
  });
};

const addPoint = () => {
  const current = formData.keyPoints || [];

  if (current.length >= 6) return;

  setFormData({
    ...formData,
    keyPoints: [...current, ""],
  });
};

const removePoint = (index) => {
  const updated = (formData.keyPoints || []).filter((_, i) => i !== index);

  setFormData({
    ...formData,
    keyPoints: updated,
  });
};

const openAmenitiesModal = () => {
  setTempAmenities([...formData.amenities]);
  setIsAmenitiesOpen(true);
};

const updateFeatureCount = (fieldName, optionName, type) => {
  setFormData((prev) => {
    const features = prev.features || [];

    const existing = features.find(
      (f) => f.name === optionName
    );

    const current = existing?.value || 0;

    let newValue = current;
    if (type === "plus") newValue = current + 1;
    if (type === "minus") newValue = Math.max(0, current - 1);

    // remove old
    const filtered = features.filter(
      (f) => f.name !== optionName
    );

    const updatedFeatures = [
      ...filtered,
      ...(newValue > 0
        ? [
            {
              name: optionName,
              field_name: existing?.field_name || fieldName, // ✅ FIX
              value: newValue,
            },
          ]
        : []),
    ];

    return {
      ...prev,
      features: updatedFeatures,
    };
  });
};

  const addLandmark = () => {
    const updated = [...(formData.landmarks || [])];

    if (updated.length >= 3) return;

    updated.push({ name: "", distance: "" });

    setFormData({
      ...formData,
      landmarks: updated,
    });
  };

  const updateLandmark = (index, field, value) => {
    const updated = [...(formData.landmarks || [])];

    updated[index][field] = value;

    setFormData({
      ...formData,
      landmarks: updated,
    });
  };

  const removeLandmark = (index) => {
    const updated = formData.landmarks.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      landmarks: updated,
    });
  };

const toggleAmenity = (amenity) => {
  let updated = [...(formData.amenities || [])];

  const exists = updated.find((a) => a.id === amenity.id);

  if (exists) {
    updated = updated.filter((a) => a.id !== amenity.id);
  } else {
    updated.push({
      id: amenity.id,
      name: amenity.name,
    });
  }

  setFormData({
    ...formData,
    amenities: updated,
  });
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (val) => {
    const selected = propertyData.categories.find((c) => c.name === val);
    setFormData((prev) => ({
      ...prev,
      category: val,
      category_id: selected?.id || null,
      subcategory: "",
    }));
  };

  const handleSubcategoryChange = (val) => {
    const selected = propertyData.subcategories.find((s) => s.name === val);
    console.log("selected subcategory:", selected);

    setFormData((prev) => ({
      ...prev,
      subcategory: val,
      subcategory_fields: selected?.fields || [], // ✅ IMPORTANT
    }));
  };

  const filteredSubcategories = propertyData.subcategories.filter(
    (sub) => sub.category_id === formData.category_id,
  );

  const selectedSubcategory = propertyData.subcategories.find(
    (s) => s.name === formData.subcategory,
  );

  const fields = selectedSubcategory?.fields || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertyData();

        console.log("Property Data:", data);

        if (data) {
          setPropertyData((prev) => ({
            ...prev,
            categories: data.categories || [],
            subcategories: data.subcategories || [],
            purposes: data.purposes || [],
            amenities: data.amenities || [],
            fields: data.fields || [],
          }));
        }
      } catch (err) {
        console.error("Property data fetch error:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("FULL FEATURES:", formData.features);
  }, [formData.features]);

  useEffect(() => {
  console.log("Selected Amenities IDs:", formData.amenities);
}, [formData.amenities]);




  return (
    <div className="flex gap-8">
      <div className="flex-1 bg-white rounded-xl p-8">
        <h2 className="text-[24px] lexend font-[550] mb-6">Property Details</h2>

        {/* CATEGORY SECTION */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <SelectField
            label="Category"
            icon={<Layers size={16} />}
            options={propertyData.categories.map((c) => c.name)}
            value={formData.category}
            onChange={handleCategoryChange}
              error={errors?.category}
            required
          />
          <SelectField
            label="Subcategory"
            icon={<List size={16} />}
            options={filteredSubcategories.map((s) => s.name)}
            value={formData.subcategory}
            onChange={handleSubcategoryChange}
            error={errors?.subcategory}
            required
          />
          <SelectField
            label="Purpose"
            icon={<Target size={16} />}
            options={propertyData.purposes.map((p) => p.name)}
            value={formData.purpose}
            onChange={(val) => setFormData({ ...formData, purpose: val })}
            error={errors?.purpose}
            required
          />
        </div>

        {fields.length > 0 && (
          <div className="my-8 space-y-8">
            {fields.map((field) => {
              if (field.field_type === "select") {
                if (!field.options || field.options.length === 0) return null;
                return (
                  <div key={field.id}>
                    <label className="text-[14px] font-[550] mb-3 block lexend">
                      {field.field_name}
                    </label>

                    <div className="flex flex-wrap gap-3">
                      {field.options.map((opt, index) => {
  const optionValue = typeof opt === "string" ? opt : opt.name;

  const selected =
    formData.features?.find((f) => f.name === field.field_name)?.value === optionValue;

  return (
    <button
      key={index}
      type="button"
      onClick={() =>
        setFormData((prev) => {
          const updatedFeatures = (prev.features || []).filter(
            (f) => f.name !== field.field_name
          );

          return {
            ...prev,
            features: [
              ...updatedFeatures,
              { name: field.field_name, value: optionValue },
            ],
          };
        })
      }
      className={`px-5 py-3 rounded-lg border text-sm cursor-pointer
        ${
          selected
            ? "bg-lime-500 text-white border-lime-500"
            : "border-gray-300 text-gray-600 hover:border-lime-400"
        }`}
    >
      {optionValue}
    </button>
  );
})}
                    </div>
                  </div>
                );
              }

              if (field.field_type === "multi_select") {
                return (
                  <div key={field.id}>
                    <label className="font-[550] text-[14px] block mb-3 lexend">
                      {field.field_name}
                    </label>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {field.options.map((opt) => {
                        const count =
  formData.features?.find((f) => f.name === opt.name)?.value || 0;

                        const selected = count > 0;

                        return (
                          <div
                            key={opt.name}
                           onClick={() => {
  setFormData((prev) => {
    const exists = prev.features?.find(
      (f) => f.name === opt.name
    );

    let updated = (prev.features || []).filter(
      (f) => f.name !== opt.name
    );

    if (!exists) {
updated.push({
  name: opt.name,
  field_name: field.field_name, // ✅ ADD THIS
  value: 1,
});
    }

    return {
      ...prev,
      features: updated,
    };
  });
}}
                            className={`border rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition cursor-pointer ${
                              selected
                                ? "border-[#A3D950] bg-lime-400"
                                : "border-gray-200 bg-white hover:border-lime-400"
                            }`}
                          >
                            <img
                              src={opt.icon}
                              alt={opt.name}
                              className={`w-6 h-6 mx-auto ${
                                selected ? "text-black" : "text-gray-500"
                              }`}
                            />

                            <p
                              className={`text-sm font-medium ${
                                selected ? "text-black" : "text-gray-700"
                              }`}
                            >
                              {opt.name}
                            </p>

                            {/* ✅ COUNT UI */}
                            <div className="flex items-center gap-4 mt-1">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateFeatureCount(
                                    field.field_name,
                                    opt.name,
                                    "minus",
                                  );
                                }}
                              >
                                -
                              </button>

                              <span>{count}</span>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateFeatureCount(
                                    field.field_name,
                                    opt.name,
                                    "plus",
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        )}

        {/* BASIC PROPERTY DETAILS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <Input
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={errors?.title}
            required
          />

          <Input
            label="Land Area"
            name="landArea"
            placeholder="*Acre/Cent"
            value={formData.landArea}
            onChange={handleChange}
            error={errors?.landArea}
          />

          <Input
            label="Square Feet"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            error={errors?.squareFeet}
          />
        </div>

        {/* LOCATION SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors?.city}
            required
          />
          <Input
            label="Village"
            name="village"
            value={formData.village}
            onChange={handleChange}
          />
          <Input
            label="Taluk"
            name="taluk"
            value={formData.taluk}
            onChange={handleChange}
          />

          <Input
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            error={errors?.pincode}
            required
          />
          <Input
            label="District"
            name="district"
            value={formData.district}
            onChange={handleChange}
            error={errors?.district}
          />
          <Input
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={errors?.state}
          />

          <Input
            label="Google Location"
            name="googleLocation"
            value={formData.googleLocation}
            onChange={handleChange}
            error={errors?.googleLocation}
          />

          {/* Nearby Landmarks */}
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="flex items-center gap-2 font-semibold mb-3 lexend text-[15px] sm:text-[16px]">
              <Layers size={16} className="text-lime-500" />
              Nearby Landmarks
            </label>

            <div className="space-y-3">
              {(formData.landmarks || []).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:items-center"
                >
                  {/* Landmark Name */}
                  <input
                    type="text"
                    placeholder="Landmark name"
                    value={item.name}
                    onChange={(e) =>
                      updateLandmark(index, "name", e.target.value)
                    }
                    className="
              w-full
              sm:flex-1
              h-[40px] sm:h-[42px]
              px-4 sm:px-5
              rounded-full
              bg-[#F3F3F3]
              border border-[#E4E3E3]
              text-[13px] sm:text-[14px]
              shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
              outline-none
              "
                  />

                  {/* Distance */}
                  <input
                    type="text"
                    placeholder="Distance (km)"
                    value={item.distance}
                    onChange={(e) =>
                      updateLandmark(
                        index,
                        "distance",
                        e.target.value
                      )
                    }
                    className="
              w-full sm:w-[140px]
              h-[40px] sm:h-[42px]
              px-4
              rounded-full
              bg-[#F3F3F3]
              border border-[#E4E3E3]
              text-[13px] sm:text-[14px]
              shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
              outline-none
              "
                  />

                  {/* Remove */}
                  {formData.landmarks.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLandmark(index)}
                      className="
                text-red-500
                text-xs sm:text-sm
                font-medium
                self-start sm:self-auto
                hover:underline
                "
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
              className="
        mt-3
        text-lime-600
        text-sm
        font-medium
        hover:underline
        "
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
              error={errors?.description}
required
          />
        </div>
        <div className="mt-8">
          <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-3">
            <Layers size={16} className="text-lime-500" />
            Key Selling Points
          </label>

          <div className="space-y-4">
            {formData.keyPoints?.map((point, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <input
                  type="text"
                  placeholder="Enter key selling point"
                  value={point}
                  onChange={(e) => handlePointChange(index, e.target.value)}
                  className="
          w-full
          sm:flex-1
          h-[40px] sm:h-[42px]
          px-4 sm:px-5
          rounded-full
          bg-[#F3F3F3]
          border border-[#E4E3E3]
          text-[13px] sm:text-[14px]
          text-[#757575]
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          outline-none
          lexend
          "
                />

                {formData.keyPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePoint(index)}
                    className="
            text-red-500
            text-xs sm:text-sm
            font-medium
            self-start sm:self-auto
            hover:underline
            "
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            {/* Add Button */}

            <button
              type="button"
              onClick={addPoint}
              className="
      text-lime-600
      text-sm
      font-medium
      hover:underline
      host-grotesk
      "
            >
              + Add Point
            </button>
          </div>
        </div>

        {/* PRICE + OWNER */}

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="col-span-3">
            <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-2">
              <Layers size={16} className="text-lime-500" />
              Amenities
            </label>

            {formData.amenities?.length > 0 ? (
              <div
                className="flex items-center justify-between
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          bg-[#F3F3F3] px-4 py-3 rounded-lg"
              >
                <div className="flex flex-wrap gap-2 flex-1">
                  {formData.amenities.map((amenity) => (
  <span
    key={amenity.id}
    className="flex items-center gap-1 px-3 py-[3px] rounded-full bg-lime-100 text-lime-700 text-xs"
  >
    {amenity.name}

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
                  onClick={openAmenitiesModal}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  + Add more
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={openAmenitiesModal}
                className="text-[#6ABD11ED] text-sm font-medium hover:underline"
              >
                + Add Amenities
              </button>
            )}
          </div>

          <Input
            label="Owner Name"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            error={errors?.owner}
            required
          />

          <Input
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors?.phone}
            required
          />

          <Input
            label="WhatsApp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            error={errors?.whatsapp}
            required
          />
        </div>
        {isAmenitiesOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-[500px]">
              <h3 className="text-lg font-semibold mb-6">Select Amenities</h3>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {propertyData.amenities.map((item) => {
                  const isSelected = formData.amenities?.some((a) => a.id === item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleAmenity(item)}
                      className={`flex flex-col items-center justify-center
                w-[80px] h-[70px] rounded-xl border transition
                ${
                  isSelected
                    ? "border-lime-500 bg-lime-300  text-lime-600"
                    : "border-gray-300 text-gray-500 bg-lime-100 hover:border-lime-400"
                }`}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 object-contain host-grotesk"
                      />

                      <span className="text-[12px] mt-1">{item.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end gap-3">
                <button
onClick={() => {
  setFormData(prev => ({
    ...prev,
    amenities: tempAmenities,
  }));
  setIsAmenitiesOpen(false);
}}                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
onClick={() => {
  setIsAmenitiesOpen(false);
}}                  className="px-4 py-2 rounded-lg bg-lime-500 text-white"
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
const Input = ({ label, name, value, onChange, error, placeholder ,  required = false,
}) => {
  const handleInputChange = (e) => {
    let val = e.target.value;

    // Only numbers
    if (
      [
        "phone",
        "whatsapp",
        "pincode",
        "pricePerAcre",
        "totalPrice",
        "squareFeet",
      ].includes(name)
    ) {
      val = val.replace(/\D/g, "");
    }

    // Only text
    if (
      [
        "title",
        "city",
        "village",
        "taluk",
        "district",
        "state",
        "owner",
      ].includes(name)
    ) {
      val = val.replace(/[^a-zA-Z\s]/g, "");
    }

    onChange({
      target: {
        name,
        value: val,
      },
    });
  };

  return (
    <div className="w-full">
      {/* Label */}
      <label
        className="flex items-center gap-2 font-semibold mb-2 lexend 
        text-[14px] md:text-[15px] lg:text-[16px]"
      >
        <Layers size={16} className="text-lime-500 shrink-0" />
        {label}
          {required && <span className="text-red-500">*</span>}

      </label>

      {/* Input */}
      <input
        name={name}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={placeholder}
        inputMode={
          ["phone", "whatsapp", "pincode", "landArea", "squareFeet"].includes(
            name,
          )
            ? "numeric"
            : "text"
        }
        maxLength={
          name === "pincode"
            ? 6
            : name === "phone" || name === "whatsapp"
              ? 10
              : undefined
        }
        className={`
          w-full
          h-[40px] md:h-[42px] lg:h-[44px]
          px-4 md:px-5
          rounded-full
          bg-[#F3F3F3]
          border
          ${error ? "border-red-500" : "border-[#E4E3E3]"}
          text-[13px] md:text-[14px]
          text-black lexend
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          outline-none
          focus:border-lime-500
          transition
        `}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-2">{error}</p>}
    </div>
  );
};
const Textarea = ({ label, name, value, onChange,error ,required=false}) => (
  <div>
    <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-2">
      <Layers size={16} className="text-lime-500" />
      {label}
                {required && <span className="text-red-500">*</span>}

    </label>

    <textarea
      rows="5"
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-4 rounded-2xl
        bg-[#F3F3F3]
  ${error ? "border-red-500" : "border-[#E4E3E3]"}
        text-[14px] text-black
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        lexend
        outline-none`}
    />
    {error && (
  <p className="text-red-500 text-xs mt-1 ml-2">
    {error}
  </p>
)}
  </div>
  
);
