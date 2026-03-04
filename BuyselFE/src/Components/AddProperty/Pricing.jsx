import React from "react";

function Pricing({ formData, setFormData}) {
  const updateField = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div className="bg-white p-9 rounded-2xl w-full">
      <h2 className="lexend text-[24px] leading-[145%] font-[600]  mb-6">Pricing & Availability</h2>


        <div className="space-y-[30px]">
      {/* Monthly Rent */}
      <div>
        <label className="block lexend text-[16px] font-[600] leading-[135%] mb-2">
          Monthly Rent (₹)
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={10}
          placeholder="e.g., 500000"
          value={formData.monthlyRent}
          onChange={(e) =>
            updateField(
              "monthlyRent",
              (e.target.value = e.target.value.replace(/\D/g, "")),
            )
          }
          className="w-full py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3] border-[#E4E3E3] text-[14px] leading-[150%] font-[400]
                     focus:ring-2 focus:ring-gray-300 outline-none inter placeholder:italic shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Maintenance Charges */}
      <div>
        <label className="block lexend text-[16px] font-[600] leading-[135%] mb-2">
          Maintenance Charges (per month)
        </label>
        <input
          type="numeric"
          placeholder="Select Property Type"
          value={formData.maintainceCharge}
          onChange={(e) => updateField("maintainceCharge",e.target.value = e.target.value.replace(/\D/g, "") )}
          className="w-1/2 py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3] border-[#E4E3E3] text-[14px] leading-[150%] font-[400]
                     focus:ring-2 focus:ring-gray-300 outline-none inter placeholder:italic shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Price Negotiable */}
      <div className="flex justify-between items-center rounded-[20px] bg-[#f3f3f3] py-[11px] px-[24px] ">
        <div>
          <p className="block lexend text-[16px] font-[600] leading-[135%] mb-1">Price Negotiable</p>
          <p className="text-[12px] inter font-[400] leading-[150%] text-[#A2A2A2] ">
            Allow buyers to negotiate the price
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            updateField("priceNegotiable", !formData.priceNegotiable)
          }
          className={`w-12 h-7 rounded-full relative transition cursor-pointer
            shadow-[inset_0px_3px_4px_rgba(0,0,0,0.25)]
            ${formData.priceNegotiable ? "bg-lime-500" : "bg-gray-300"}`}
        >
          <span
            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition
              ${formData.priceNegotiable ? "right-0.5" : "left-0.5"}`}
          />
        </button>
      </div>

      {/* Available Date */}
      <div className="mb-10">
  <label className="block lexend text-[16px] font-[600] leading-[135%] mb-2">
    Available Date
  </label>

  <input
    type={formData.availableDate ? "date" : "text"}
    placeholder="Pick a date"
    value={formData.availableDate}
    onFocus={(e) => (e.target.type = "date")}
    onBlur={(e) => {
      if (!formData.availableDate) {
        e.target.type = "text";
      }
    }}
    onChange={(e) =>
      setFormData({ ...formData, availableDate: e.target.value })
    }
          className="w-full py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3] border-[#E4E3E3] text-[14px] leading-[150%] font-[400]
               focus:ring-2 focus:ring-gray-300 outline-none inter placeholder:italic
               shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]"
  />
</div>

      {/* Actions */}
      
      </div>
    </div>
  );
}

export default Pricing;
