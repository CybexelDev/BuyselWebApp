import React from "react";
import { useState,useEffect } from "react";
import SelectField from "../../Components/Select/SelectField2";
import { Layers } from "lucide-react";
import { getAgentPlanDetailss } from "../../Api/userApi";
import { registerAgent } from "../../Api/agentsApi";
import { toast } from "sonner";
import PlanCardUser from "../../Components/PlanCardUser/PlanCardUser";
const AgentRegistration = ({ formData, handleChange, setFormData }) => {
const [agentPlans, setAgentPlans] = useState([]);
const [selectedPlans, setSelectedPlans] = useState([]);
const [selectedPlan, setSelectedPlan] = useState(null);
useEffect(() => {
  const fetchMeta = async () => {
    const res = await getAgentPlanDetailss();

   if (res?.status) {
  setAgentPlans(res.plans);
}
  };

  fetchMeta();
}, []);


const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    full_name: formData.username,
    email: formData.email,
    phone_number: formData.phone,
    password: formData.password,
    city: formData.city,
    pin_code: formData.pincode,
    agent_type: formData.agent_type,
    plan_id: formData.plan_id,
    address: formData.address
  };

  const res = await registerAgent(payload);

  if (res) {
    toast.success("Registered ");
  } else {
    toast.error("Failed ");
  }
};

const handleAgentTypeChange = (val) => {

  setFormData({
    ...formData,
    agent_type: val,
    plan_id: "",
  });

  const matchedAgent =
    agentPlans.find(
      (item) => item.id === val
    );

  setSelectedPlans(
    matchedAgent?.plans || []
  );

  setSelectedPlan(null);
};
const handlePlanChange = (val) => {

  setFormData({
    ...formData,
    plan_id: val,
  });

  const matchedPlan =
    selectedPlans.find(
      (item) =>
        item.plan_id === val
    );

  setSelectedPlan(matchedPlan);
};

  return (
    <div className="flex-1 bg-white rounded-xl p-8 sm:p-12 lg:px-[150px] lg:py-10 mt-[-50px]">

      <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-[550] mb-6 lexend">
        Agent Registration
      </h2>

      {/* Inputs */}
      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">
        <Input
          label="Full Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <Input
          label="Email ID"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <Input
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />

      </div>

      {/* Select Fields */}  <div className="mt-6 sm:mt-8">
        <Textarea
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8">

      <SelectField
  label="Agent Type"
  options={agentPlans.map((item) => ({
    label: item.name,
    value: item.id
  }))}
  registeration="true"
  value={formData.agent_type}
  onChange={handleAgentTypeChange}
/>
       <SelectField
  label="Plan"
 options={selectedPlans.map((item) => ({
  label: item.label,
  value: item.plan_id
}))}
  value={formData.plan_id}
    registeration="true"
onChange={handlePlanChange}
/>
      </div>
      {
  selectedPlan && (
    <div className="mt-10">
      
      <h3 className="text-[22px] sm:text-[26px] font-semibold mb-6 lexend">
        Plan Features
      </h3>

       <PlanCardUser
  title={selectedPlan.label}
  agentType={
    agentPlans.find(
      (item) =>
        item.id === formData.agent_type
    )?.name
  }
  price={selectedPlan.price}
  savings={selectedPlan.duration}
  features={selectedPlan.features || []}
  buttonText="Current Plan"
/>

    </div>
  )
}

      {/* Address */}
    

      {/* Submit Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="
            bg-[#84CC16]
            hover:bg-lime-600
            text-white
            font-semibold
            px-6 sm:px-8
            py-2.5 sm:py-3
            rounded-full
            text-[13px] sm:text-[14px]
            transition
            shadow-md
          "
        >
          Submit Registration
        </button>
      </div>
</form>
    </div>
  );
};

const Input = ({ label, name, value, onChange }) => {

  const handleInputChange = (e) => {
    let val = e.target.value;

    if (["phone", "whatsapp", "pincode", "pricePerAcre", "totalPrice", "landArea", "squareFeet"].includes(name)) {
      val = val.replace(/\D/g, "");
    }

    if (["title", "city", "village", "taluk", "district", "state"].includes(name)) {
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
    <div className="w-full">

      <label className="flex items-center gap-2 font-semibold mb-2 lexend text-[13px] sm:text-[14px] lg:text-[16px]">
        <Layers size={16} className="text-lime-500 shrink-0" />
        {label}
      </label>

      <input
        name={name}
        value={value || ""}
        onChange={handleInputChange}
        inputMode={
          ["phone", "whatsapp", "pincode", "pricePerAcre", "totalPrice", "landArea", "squareFeet"].includes(name)
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
        className="
          w-full
          h-[38px] sm:h-[40px] md:h-[42px] lg:h-[44px]
          px-3 sm:px-4 md:px-5
          rounded-full
          bg-[#F3F3F3]
          border border-[#E4E3E3]
          text-[13px] md:text-[14px]
          text-black lexend
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          outline-none
          focus:border-lime-500
          transition
        "
      />

    </div>
  );
};

const Textarea = ({ label, name, value, onChange }) => (
  <div>

    <label className="flex items-center gap-2 lexend text-[14px] sm:text-[15px] lg:text-[16px] font-semibold mb-2">
      <Layers size={16} className="text-lime-500" />
      {label}
    </label>

    <textarea
      rows="5"
      name={name}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4 sm:px-5
        py-3 sm:py-4
        rounded-2xl
        bg-[#F3F3F3]
        border border-[#E4E3E3]
        text-[13px] sm:text-[14px]
        text-black
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        lexend
        outline-none
      "
    />

  </div>
);

export default AgentRegistration;