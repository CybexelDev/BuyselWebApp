import React, { useEffect, useState } from "react";
import SidebarProgress from "../../../Components/AddProperty/SideBarProgress";
import PropertyInfo from "../../../Components/AddProperty/PropertyInfo";
import Pricing from "../../../Components/AddProperty/Pricing";
import MediaUpload from "../../../Components/AddProperty/MediaUpload";
import Button from "../../../Components/AddProperty/Button";
import PreviewProperty from "../../../Components/AddProperty/Preview";
import SuccessModal from "../../../Components/AddProperty/SuccessModal";
import Payment from "../../../Components/AddProperty/Payment";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  getPropertyById,
  postProperty,
  updatePropertyListing,
  getPropertyData,
  getAgentProfile,
} from "../../../Api/agentsApi";
import { useParams } from "react-router-dom";

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

  const [formData, setFormData] = useState(getInitialFormData());
  const [categories, setCategories] = useState([]);
  const [propertyData, setPropertyData] = useState({
    categories: [],
    subcategories: [],
  });

  const [errors, setErrors] = useState({});

  const agentId = useSelector((state) => state.agent.agentId);
  const isAgent = !!agentId;
  const maxStep = isAgent ? 4 : 5;

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
        const data = await getPropertyById(id);

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
          features: (data.features || []).map((f) => {
            if (typeof f.value === "number") {
              return {
                name: optionToFieldMap[f.name] || null,
                option: f.name,
                value: f.value,
              };
            }

            return {
              name: f.name,
              option: null,
              value: f.value,
            };
          }),

          amenities: data.amenities || [],
          keyPoints: data.selling_points || [],
          landmarks: data.landmarks || [],
          images: data.images || [],

          pricing: {
            monthlyRent: data.monthly_rent || "",
            deposit: data.deposit || "",
            totalPrice: data.price || "",
            pricePerUnit: price,
            totalAmount: data.total_amount || "",
            unit: unit,
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
        const data = await getAgentProfile();

        setFormData((prev) => ({
          ...prev,
          phone: data.phone_number || "",
          whatsapp:
            data.whatsapp_number || data.phone_number || "",
        }));
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchProfile();
  }, [id]);

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        features: (formData.features || []).map((f) => ({
          name: f.name,
          option: f.option || null,
          value: f.value,
        })),
        amenities: formData.amenities.map((a) => a.id),
      };

      let res;

      if (id) {
        res = await updatePropertyListing(id, payload);
      } else {
        res = await postProperty(payload);
      }

      if (res) {
        setShowSuccess(true);
        setFormData(getInitialFormData());
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
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
            {!isAgent && step === 5 && (
              <Payment formData={formData} />
            )}  
            <Button
              step={step}
              maxStep={maxStep}
              next={() => setStep(step + 1)}
              back={() => setStep(step - 1)}
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}

export default AddPropertySection;