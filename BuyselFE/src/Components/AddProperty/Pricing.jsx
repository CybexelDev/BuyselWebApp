import React from "react";

function Pricing({ formData, setFormData, errors }) {
  const updateField = (key, value) => {
    setFormData({
      ...formData,
      pricing: {
        ...formData.pricing,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-white p-9 rounded-2xl w-full">
      <h2 className="lexend text-[24px] leading-[145%] font-[600]  mb-6">
        Pricing & Availability
      </h2>

      <div className="space-y-[24px]">
        {formData.purpose === "Rent" && (
          <>
            <div>
              <label className="block lexend text-[16px] font-[600] mb-2">
                Monthly Rent (₹)
              </label>

              <input
                type="text"
                inputMode="numeric"
                maxLength={10}
                placeholder="e.g., 25000"
                value={formData.pricing.monthlyRent}
                onChange={(e) =>
                  updateField("monthlyRent", e.target.value.replace(/\D/g, ""))
                }
                className={`w-full py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3] 
         border ${errors.monthlyRent ? "border-red-500" : "border-[#E4E3E3]"}
        text-[13px] md:text-[14px]
        text-black lexend
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        outline-none
        focus:border-lime-500
        transition
      `}
              />
              {errors?.monthlyRent && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.monthlyRent}
                </p>
              )}
            </div>

            <div>
              <label className="block lexend text-[16px] font-[600] mb-2">
                Deposit
              </label>

              <input
                type="text"
                placeholder="e.g., 30000"
                value={formData.pricing.deposit}
                onChange={(e) =>
                  updateField("deposit", e.target.value.replace(/\D/g, ""))
                }
                className={`w-1/2 py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3]
         border ${errors.deposit ? "border-red-500" : "border-[#E4E3E3]"}
        text-[13px] md:text-[14px]
        text-black lexend
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        outline-none
        focus:border-lime-500
        transition
      `}
              />
              {errors?.deposit && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.deposit}
                </p>
              )}
            </div>
          </>
        )}

        {formData.purpose === "Sale" && (
          <>
            <div>
              <label className="block lexend text-[16px] font-[600] mb-2">
                Total Price (₹)
              </label>

              <input
                type="text"
                placeholder="e.g., 5000000"
                value={formData.pricing.totalPrice}
                onChange={(e) =>
                  updateField("totalPrice", e.target.value.replace(/\D/g, ""))
                }
                className={`w-full py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3]
                  border
                  ${errors.totalPrice ? "border-red-500" : "border-[#E4E3E3]"}
        text-[13px] md:text-[14px]
        text-black lexend
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        outline-none
        focus:border-lime-500
        transition
      `}
              />
              {errors?.totalPrice && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.totalPrice}
                </p>
              )}
            </div>

            {/* Price per Acre */}
       <div>
  <label className="block lexend text-[16px] font-[600] mb-2">
    Price per Acre/Cent
  </label>

  <div className="relative w-2/3 md:w-1/2">
  {/* INPUT */}
  <input
    type="text"
    placeholder="e.g., 2000000"
    value={
      formData.pricing.pricePerUnit }
    onChange={(e) =>
      updateField(
        "pricePerUnit",
        e.target.value.replace(/\D/g, "")
      )
    }
    className="w-full py-[10px] pl-[20px] pr-[100px] rounded-[30px]
      border border-[#E4E3E3]
      text-[13px] md:text-[14px] lexend 
      bg-[#f3f3f3]
      shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
      outline-none focus:border-lime-500"
  />

  {formData.pricing.pricePerUnit && formData.pricing.unit && (
  <span className="absolute right-[90px] top-1/2 -translate-y-1/2  text-sm lexend">
    / {formData.pricing.unit}
  </span>
)}

  {/* DROPDOWN */}
  <select
    value={formData.pricing.unit}
    onChange={(e) => updateField("unit", e.target.value)}
    className="absolute right-4 top-1/2 -translate-y-1/2
      bg-transparent outline-none text-sm cursor-pointer"
  >
    <option value="">Unit</option>
    <option value="Acre">Acre</option>
    <option value="Cent">Cent</option>
  </select>
</div>

{(errors?.pricePerUnit || errors?.unit) && (
  <p className="text-red-500 text-xs mt-1 ml-2">
    {errors.pricePerUnit || errors.unit}
  </p>
)}
</div>
          </>
        )}

        {formData.purpose === "Lease" && (
          <>
            <div>
              <label className="block lexend text-[16px] font-[600] mb-2">
                Total Amount (₹)
              </label>

              <input
                type="text"
                placeholder="e.g., 5000000"
                value={formData.pricing?.totalAmount}
                onChange={(e) =>
                  updateField("totalAmount", e.target.value.replace(/\D/g, ""))
                }
                className={`w-full py-[10px] px-[30px] rounded-[30px] bg-[#f3f3f3]
    border
    ${errors?.totalAmount ? "border-red-500 " : "border-[#E4E3E3]"}
    text-[13px] md:text-[14px]
    text-black lexend
    shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
    outline-none
     focus:border-lime-500 
    transition
  `}
              />
              {errors?.totalAmount && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.totalAmount}
                </p>
              )}
            </div>
          </>
        )}

        {/* Actions */}
      </div>
    </div>
  );
}

export default Pricing;
