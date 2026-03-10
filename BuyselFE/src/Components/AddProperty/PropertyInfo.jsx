import React from "react";
import { Layers, List, Target } from "lucide-react";

function PropertyInfo({ formData, setFormData }) {

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

          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            icon={<Layers size={16}/>}
          >
            <option>Select Category</option>
            <option>Commercial</option>
            <option>Residential</option>
            <option>Land</option>
          </Select>

          <Select
            label="Subcategory"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            icon={<List size={16}/>}
          >
            <option>-- Select Subcategory --</option>
            <option>Office</option>
            <option>Shop</option>
            <option>Warehouse</option>
          </Select>

          <Select
            label="Purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            icon={<Target size={16}/>}
          >
            <option>Select Purpose</option>
            <option>Sell</option>
            <option>Rent</option>
          </Select>

        </div>


        {/* BASIC PROPERTY DETAILS */}

        <div className="grid grid-cols-3 gap-6">

          <Input label="Label" name="label" value={formData.label} onChange={handleChange} />

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

          <Input label="Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
          <Input label="Google Location" name="googleLocation" value={formData.googleLocation} onChange={handleChange} />

        </div>



        <div className="grid grid-cols-2 gap-8 mt-8">

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <Textarea
            label="Share Message (optional)"
            name="shareMessage"
            value={formData.shareMessage}
            onChange={handleChange}
          />

        </div>


        {/* PRICE + OWNER */}

        <div className="grid grid-cols-3 gap-6 mt-8">

          <Input label="Amenities" name="amenities" value={formData.amenities} onChange={handleChange} />

          <Input label="Price Per Acre" name="pricePerAcre" value={formData.pricePerAcre} onChange={handleChange} />

          <Input label="Total Price" name="totalPrice" value={formData.totalPrice} onChange={handleChange} />

          <Input label="Owner" name="owner" value={formData.owner} onChange={handleChange} />

          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />

          <Input label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

        </div>

      </div>

    </div>
  );
}

export default PropertyInfo;



/* INPUT */

const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="flex items-center gap-2 text-[14px] font-semibold mb-2">
      <Layers size={16} className="text-lime-500" />
      {label}
    </label>

    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-[42px] px-5 rounded-full
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      outline-none"
    />
  </div>
);



/* SELECT */

const Select = ({ label, name, value, onChange, children, icon }) => (
  <div>
    <label className="flex items-center gap-2 text-[14px] font-semibold mb-2">
      {icon || <Layers size={16} className="text-lime-500" />}
      {label}
    </label>

    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-[42px] px-5 rounded-full
      bg-[#F3F3F3]
      border border-[#E4E3E3]
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      outline-none"
    >
      {children}
    </select>
  </div>
);



/* TEXTAREA */

const Textarea = ({ label, name, value, onChange }) => (
  <div>
    <label className="flex items-center gap-2 text-[14px] font-semibold mb-2">
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
      text-[14px] text-[#757575]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      outline-none"
    />
  </div>
);