import React from "react";
import { useState, useEffect } from "react";
import SelectField from "../../Components/Select/SelectField2";
import { Layers } from "lucide-react";
import { getAgentPlanDetailss } from "../../Api/userApi";
import { registerAgent } from "../../Api/agentsApi";
import { toast } from "sonner";
import PlanCardUser from "../../Components/PlanCardUser/PlanCardUser";
import { openRazorpay } from "../../utils/razorpay";
import { useNavigate } from "react-router-dom";


const AgentRegistration = ({ formData, handleChange, setFormData }) => {
  const [agentPlans, setAgentPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(selectedPlan, "selected pln>>>>>>>>>>>>>>>>>");


  const validateForm = () => {
    const newErrors = {};

    if (!formData.username?.trim()) {
      newErrors.username = "Full name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!formData.city?.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (formData.pincode.length !== 6) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!formData.address?.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.agent_type) {
      newErrors.agent_type = "Select an agent type";
    }

    if (!formData.plan_id) {
      newErrors.plan_id = "Select a plan";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
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
    if (!validateForm()) return;

    const payload = {
      full_name: formData.username,
      email: formData.email,
      phone_number: formData.phone,
      password: formData.password,
      city: formData.city,
      pin_code: formData.pincode,
      agent_type: formData.agent_type,
      plan_id: formData.plan_id,
      address: formData.address,

      years_of_experience: formData.yearsofexperience || "",
      total_deals_served: formData.TotalDealsServed || "",

    };



    const res = await registerAgent(payload);

    if (res?.message === "Registration submitted. Waiting for admin approval.") {
      openRazorpay({
        name: "BuySel",
        description: selectedPlan?.label,
        plan_type: selectedPlan?.plan_type,
        plan_id: selectedPlan?.plan_id,
        // ✅ success callback
        onSuccess: (res) => {
          console.log("Property Payment", res);
          navigate("/invoice", {
            state: {
              paymentData: res,
            },
          });
        },
      })
    }

    if (res?.status) {
      toast.success(res.message || "Registered");

      setFormData({});
      setSelectedPlans([]);
      setSelectedPlan(null);
    } else {
      toast.error(res?.message || "Registration Failed");
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
            error={errors.username}
            required
          />

          <Input
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <Input
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            required
          />

          <Input
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            error={errors.pincode}
            required
          />
        </div>

        {/* Select Fields */}  <div className="mt-6 sm:mt-8">
          <Textarea
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8">
          <Input
            label="Years of Experience"
            name="yearsofexperience"
            value={formData.yearsofexperience}
            onChange={handleChange}
          />

          <Input
            label="Total Deals Served"
            name="TotalDealsServed"
            value={formData.TotalDealsServed}
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
            error={errors.agent_type}
            required

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
            error={errors.plan_id}
            required

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
            Submit Registrations
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, error, required = false }) => {

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
        {required && <span className="text-red-500">*</span>}

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
        className={`
          w-full
          h-[38px] sm:h-[40px] md:h-[42px] lg:h-[44px]
          px-3 sm:px-4 md:px-5
          rounded-full
          bg-[#F3F3F3]
          border ${error ? "border-red-500" : "border-[#E4E3E3]"}          text-[13px] md:text-[14px]
          text-black lexend
          shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
          outline-none
          focus:border-lime-500
          transition
        `}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-2 host-grotesk">
          {error}
        </p>
      )}
    </div>
  );
};

const Textarea = ({ label, name, value, onChange, error, required = false }) => (
  <div>

    <label className="flex items-center gap-2 lexend text-[14px] sm:text-[15px] lg:text-[16px] font-semibold mb-2">
      <Layers size={16} className="text-lime-500" />
      {label}
      {required && <span className="text-red-500">*</span>}

    </label>

    <textarea
      rows="5"
      name={name}
      value={value}
      onChange={onChange}
      className={
        ` w-full
        px-4 sm:px-5
        py-3 sm:py-4
        rounded-2xl
        bg-[#F3F3F3]
        border ${error ? "border-red-500" : "border-[#E4E3E3]"}  
        text-[13px] sm:text-[14px]
        text-black
        shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]
        lexend
        outline-none`
      }
    />

    {error && (
      <p className="text-red-500 text-xs mt-1 ml-2 host-grotesk">
        {error}
      </p>
    )}
  </div>
);

export default AgentRegistration;