import React, { useEffect, useState } from "react";
import SidebarProgress from "../../../Components/AddProperty/SideBarProgress";
import PropertyInfo from "../../../Components/AddProperty/PropertyInfo";
import Pricing from "../../../Components/AddProperty/Pricing";
import MediaUpload from "../../../Components/AddProperty/MediaUpload";
import Button from "../../../Components/AddProperty/Button";
import PreviewProperty from "../../../Components/AddProperty/Preview";
import SuccessModal from "../../../Components/AddProperty/SuccessModal";
import Payment from "../../../Components/AddProperty/Payment";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  getPropertyById,
  postProperty,
  updatePropertyListing,
  getPropertyData,
  getAgentProfile,
} from "../../../Api/agentsApi";
import { useParams } from "react-router-dom";
import { userGetPropertyById, userPostProperty, updateUserPropertyListing, getProfile, userDashboard } from "../../../Api/userApi";

const getInitialFormData = () => ({
  landArea: "",
  squareFeet: "",
  images: [],

  title: "",
  description: "",

  owner: "",
  phone: "",
  whatsapp: "",

  city: "",
  village: "",
  taluk: "",
  district: "",
  state: "",
  pincode: "",
  googleLocation: "",

  category: "",
  category_id: null,
  subcategory: "",
  purpose: "",

  keyPoints: [""],
  landmarks: [],
  features: [],
  amenities: [],

  pricing: {
    monthlyRent: "",
    deposit: "",
    totalPrice: "",
    pricePerUnit: "",
    totalAmount: "",
    unit: "",
  },
});

function AddPropertySection() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState(getInitialFormData());
  const [categories, setCategories] = useState([]);
  const [propertyData, setPropertyData] = useState({
    categories: [],
    subcategories: [],
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

 const{is_plan}=useSelector((state)=>state.user)
  const user = useSelector((state) => state.user);
const agent = useSelector((state) => state.agent);

const role = agent?.role || user?.role;
const isAgent = role === "agent";

const maxStep = isAgent ? 4 : (is_plan ? 4 : 5);

  const { id } = useParams();

  //Fetch full meta
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await getPropertyData();
        setPropertyData(res);
        setCategories(res?.categories || []);
      } catch (err) {
        console.error("Meta fetch error:", err);
      }
    };
    fetchMeta();
  }, []);

  // Fetch property (Edit mode)
  useEffect(() => {
    if (
      !id ||
      categories.length === 0 ||
      propertyData.subcategories.length === 0
    )
      return;

    const fetchProperty = async () => {
      try {
        const data = isAgent
  ? await getPropertyById(id)
  : await userGetPropertyById(id);

        // 🔥 BUILD OPTION → FIELD MAP (NO HARDCODING)
        const optionToFieldMap = {};

propertyData.subcategories.forEach((sub) => {
  sub.fields?.forEach((field) => {
    field.options?.forEach((opt) => {
      optionToFieldMap[opt.name] = field.field_name;
    });
  });
});

        const perprice = data.perprice || "";
        let price = "";
        let unit = "";

        if (perprice.includes("/")) {
          [price, unit] = perprice.split("/");
        }

        const categoryName =
          categories.find((c) => Number(c.id) === Number(data.category))
            ?.name || "";

        setFormData({
          ...getInitialFormData(),

          category: categoryName,
          category_id: data.category,

          title: data.label || "",
          description: data.description || "",

          owner: data.owner || "",
          phone: data.phone || "",
          whatsapp: data.whatsapp || "",

          city: data.city || "",
          village: data.village || "",
          taluk: data.taluk || "",
          district: data.district || "",
          state: data.state || "",
          pincode: data.pincode || "",

          googleLocation:
            data.google_location || data.location || "",

          subcategory: data.subcategory || "",
          purpose: data.purpose || "",

          landArea: data.land_area || "",
          squareFeet: data.sq_ft || "",

          // ✅ FIXED FEATURES MAPPING
          features: (data.features || []).map((f) => ({
  name: f.name,
  value: f.value,
})),

          amenities: data.amenities || [],
          keyPoints: data.selling_points || [],
          landmarks: data.landmarks || [],
          images: data.images || [],

        pricing: {
  ...(data.purpose === "Rent" && {
    monthlyRent: data.monthly_rent || data.price || "",
    deposit: data.deposit || "",
  }),

  ...(data.purpose === "Sale" && {
    // You send:"price", data.pricing.totalPrice
    totalPrice: data.price || "", 
    pricePerUnit: price,
    unit: unit,
  }),

  ...(data.purpose === "Lease" && {
    totalAmount: data.total_amount || data.price || "",
  }),
},
        });
      } catch (err) {
        console.error("Fetch property error:", err);
      }
    };

    fetchProperty();
  }, [id, categories, propertyData.subcategories]);

  // ✅ Auto-fill phone (only add mode)
useEffect(() => {
  if (id) return;

  const fetchProfile = async () => {
    try {
      let data;

      if (isAgent) {
        data = await getAgentProfile();

        setFormData((prev) => ({
          ...prev,
          phone: data.phone_number || "",
          whatsapp:
            data.whatsapp_number || data.phone_number || "",
        }));

      } else {

        data = await getProfile();

        setFormData((prev) => ({
          ...prev,
          owner: data.full_name || data.name || "",
          phone: data.mobile || "",
          whatsapp:
            data.alternate_mobile || data.mobile || "",
        }));
      }

    } catch (err) {
      console.error("Profile fetch error:", err);
    }
  };

  fetchProfile();

}, [id, isAgent]);

const validateStep = () => {
  let newErrors = {};

  if (step === 1) {
  // Common validation

  if (!formData.category)
    newErrors.category = "Category is required";

  if (!formData.subcategory)
    newErrors.subcategory = "Subcategory is required";

  if (!formData.purpose)
    newErrors.purpose = "Purpose is required";

  if (!formData.title?.trim())
    newErrors.title = "Title is required";

  if (!formData.city?.trim())
    newErrors.city = "City is required";

  if (!formData.pincode?.trim())
    newErrors.pincode = "Pincode is required";

  if (!formData.description?.trim())
    newErrors.description = "Description is required";

  if (!formData.owner?.trim())
    newErrors.owner = "Owner name is required";

  if (!formData.phone?.trim())
    newErrors.phone = "Phone is required";

  if (!formData.whatsapp?.trim())
    newErrors.whatsapp = "Whatsapp is required";
if (!formData.phone?.trim())
   { newErrors.phone = "Phone is required"; } else if
 (!/^\d{10}$/.test(formData.phone)) { newErrors.phone = "Phone number must be 10 digits"; }
  if (!formData.whatsapp?.trim()) 
    { newErrors.whatsapp = "Whatsapp is required"; } 
  else if
   (!/^\d{10}$/.test(formData.whatsapp))
    { newErrors.whatsapp = "Whatsapp number must be 10 digits"; } 
    if (!formData.pincode?.trim()) 
      { newErrors.pincode = "Pincode is required"; } 
    else if 
    (!/^\d{6}$/.test(formData.pincode)) 
    { newErrors.pincode = "Pincode must be 6 digits"; }
  // Agent-only validation
  if (isAgent) {
    if (!formData.landArea?.trim())
      newErrors.landArea = "Land area is required";

    if (!formData.squareFeet)
      newErrors.squareFeet = "Square feet is required";

    if (!formData.district?.trim())
      newErrors.district = "District is required";

    if (!formData.state?.trim())
      newErrors.state = "State is required";

    if (!formData.googleLocation?.trim())
      newErrors.googleLocation = "Google location is required";

    if (!formData.features?.length)
      newErrors.features = "Select property features";

    if (!formData.amenities?.length)
      newErrors.amenities = "Select at least one amenity";

    if (
      !formData.keyPoints?.length ||
      formData.keyPoints.every((item) => !item.trim())
    ) {
      newErrors.keyPoints = "Add at least one key selling point";
    }
  }
}
  if (step === 2) {
    if (formData.purpose === "Rent") {
      if (!formData.pricing.monthlyRent)
        newErrors.monthlyRent = "Monthly rent is required";

      if (!formData.pricing.deposit)
        newErrors.deposit = "Deposit is required";
    }

    if (formData.purpose === "Sale") {
      if (!formData.pricing.totalPrice)
        newErrors.totalPrice = "Total price is required";

      if (!formData.pricing.pricePerUnit)
        newErrors.pricePerUnit = "Price per unit is required";

      if (!formData.pricing.unit)
        newErrors.unit = "Select a unit";
    }

    if (formData.purpose === "Lease") {
      if (!formData.pricing.totalAmount)
        newErrors.totalAmount = "Total amount is required";
    }
  }

  if (step === 3) {
    if (!formData.images || formData.images.length < 3) {
      newErrors.images = "Minimum 3 images required";
    }
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
        setLoading(true);

    const optionToFieldMap = {};

    propertyData.subcategories.forEach((sub) => {
      sub.fields?.forEach((field) => {
        field.options?.forEach((opt) => {
          optionToFieldMap[opt.name] = field.field_name;
        });
      });
    });

    const transformedFeatures = (formData.features || []).map((f) => {
      if (typeof f.value === "number") {
        return {
          name: optionToFieldMap[f.name] || f.name,
          option: f.name,
          value: f.value,
        };
      }

      return {
        name: f.name,
        option: null,
        value: f.value,
      };
    });

    const payload = {
      ...formData,
      features: transformedFeatures,
      amenities: formData.amenities.map((a) => a.id),
    };

    let res;

if (id) {

  if (isAgent) {
    res = await updatePropertyListing(id, payload);

  } else {
    res = await updateUserPropertyListing(id, payload);
  }

} else {

  if (isAgent) {
    res = await postProperty(payload);

  } else {
    res = await userPostProperty(payload);
  }
}
console.log("API RESPONSE:", res);

if (!res?.status) {
  toast.error(res.message);
  return;
}



     if (res) {
  // Only for new property
  if (!id && !isAgent) {
    const dashboard = await userDashboard();

    dispatch({
        type: "SET_USER",
        payload: {
          ...user,
          remainingProperty: dashboard.data.remaining_property,
        }
        });
      }

  setShowSuccess(true);
  setFormData(getInitialFormData());
}
  } catch (err) {
    console.error("Submit error:", err);
  }finally {
    setLoading(false);
  }

};


const handleNext = () => {
  const valid = validateStep();

  if (!valid) return;

  setStep((prev) => prev + 1);
};
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="mx-auto flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <div className="w-full lg:w-[320px]">
          <SidebarProgress step={step} isAgent={isAgent} />
        </div>
        <div className="flex-1">
          {/* ✅ HEADING (RIGHT SIDE TOP) */}
          {isAgent &&(
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div>
              <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
                List your proprty
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight instrument-sans">
                Property <span className="text-[#6ABD11]">Adding</span>
              </h1>
            </div>
          </motion.div>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <PropertyInfo
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                isAgent={isAgent}
              />
            )}
            {step === 2 && (
              <Pricing
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 3 && (
              <MediaUpload
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 4 && (
              <PreviewProperty formData={formData} />
            )}
            {!isAgent && !is_plan && step === 5 && (
            <Payment formData={formData} />
             )}
           <Button
  step={step}
  maxStep={maxStep}
  next={ handleNext}
  back={() => setStep(step - 1)}                 
  handleSubmit={handleSubmit}
    loading={loading}

/>
          </form>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        isEdit={!!id}
      />
    </div>
  );
}

export default AddPropertySection;