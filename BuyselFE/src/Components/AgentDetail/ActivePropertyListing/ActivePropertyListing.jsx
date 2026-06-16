import React, { useState, useRef, useEffect } from 'react';
import Propertycard from "../../../Components/PropertyCard/Propertycard";
import { properties } from "../../../Constance/constance";
import { ArrowRight, ChevronLeft, ChevronRight, LogIn, Search } from 'lucide-react';
import "./activePropertylisting.css";
import { addToWishlist, removeToWishlist } from '../../../Api/userApi';
import {  Heart } from "lucide-react";
import "../../../assets/images/propertDetail/noimage.png"
import { searchAgentProperties,getAgentPropertyCities,filterAgentPropertyByCity} from '../../../Api/userApi';
import { toast } from 'sonner';
import noimage from "../../../assets/images/propertDetail/noimage.png"
function ActivePropertyListing({ agentData, role,id }) {
  const pp = properties.slice(0, 8);
  const [activeCategory, setActiveCategory] = useState("Residential");
  const scrollRef = useRef(null);
  const [propertyData, setPropertyData] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [cities, setCities] = useState([]);
const [selectedCity, setSelectedCity] = useState("");
const [open, setOpen] = useState(false);
useEffect(() => {

  console.log("useEffect running");

  const fetchCities = async () => {

    console.log("inside fetchCities", id);

    if (!id) return;

    const res = await getAgentPropertyCities(id);

    console.log("cities response", res);

    if (res?.cities) {
      setCities(res?.cities);
    }
  };

  fetchCities();

}, [id]);
  const propertyBg = {
    premium: "bg-gradient-to-b from-[#F3FFE2] to-[#FFFFFFC7]",
    elite: "bg-gradient-to-b from-[#FFFCDC] to-[#FFFFFF]",
  }

  useEffect(() => {
    if (agentData) {
      setPropertyData(agentData);
    }
  }, [agentData]);
useEffect(() => {
  const fetchSearch = async () => {
    console.log(id)
    if (!id) return;

    const res = await searchAgentProperties(
      id,
      searchQuery,
      activeCategory,

    );
if (res?.properties) {
  setPropertyData(res.properties);
}
  };

  fetchSearch();
}, [searchQuery, activeCategory]);

  const categories = [
    {
      name: "Residential",
      icon: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1451_3682)">
            <path d="M6.85181 2.51567C6.77296 2.54383 6.6575 2.60016 6.59836 2.63958C6.39841 2.77194 0.0367002 8.08886 0.0198032 8.13673C-0.0168069 8.22685 9.00677e-05 8.393 0.0479648 8.4634C0.0733103 8.50283 0.222567 8.68307 0.37464 8.86612C0.687233 9.23503 0.72666 9.25756 0.94632 9.20969C0.980114 9.20124 2.39946 8.03535 4.10042 6.61882C5.80138 5.20229 7.20101 4.04203 7.20946 4.04203C7.21791 4.04203 8.62318 5.20792 10.3326 6.63008C12.6953 8.59858 13.4585 9.22095 13.5261 9.23222C13.5768 9.23785 13.65 9.23222 13.6923 9.21814C13.757 9.19561 14.2245 8.67462 14.371 8.4634C14.4357 8.37047 14.4329 8.17897 14.3653 8.09449C14.3343 8.05788 13.8725 7.66643 13.3374 7.22429L12.3659 6.42169L12.363 4.54049V2.65648L12.2814 2.57481L12.1997 2.49314H11.2225C10.1495 2.49314 10.1439 2.49314 10.0848 2.66774C10.0651 2.72407 10.0538 3.07609 10.0538 3.62242V4.49262L8.93859 3.56047C8.16977 2.91838 7.77269 2.60579 7.66286 2.5551C7.45165 2.45653 7.06865 2.43682 6.85181 2.51567Z" fill="currentColor" fillOpacity="0.93" />
            <path d="M4.62584 6.89496L2.05469 9.01271V11.2656V13.5214L2.11946 13.6453C2.15607 13.7185 2.23211 13.8058 2.30251 13.8565L2.42642 13.941L4.25411 13.9494L6.0818 13.9551V12.2372V10.5194H7.20826H8.33473V12.2372V13.9551L10.1624 13.9494L11.9901 13.941L12.114 13.8565C12.1788 13.8086 12.2633 13.7185 12.2971 13.6594L12.3618 13.5467V11.2797V9.01271L9.79913 6.90059C8.38823 5.73752 7.22516 4.78566 7.2139 4.78284C7.20263 4.77721 6.03674 5.72907 4.62584 6.89496Z" fill="currentColor" fillOpacity="0.93" />
          </g>
          <defs>
            <clipPath id="clip0_1451_3682">
              <rect width="14.4187" height="14.4187" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Commercial",
      icon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1451_3699)">
            <path d="M10.3279 1.30152L8.29688 2.19309V9.64256V17.0957H8.94622H9.59556V15.5299V13.9641H9.38272C9.25646 13.9641 9.15906 13.9457 9.13741 13.9162C9.06526 13.8204 9.06165 13.7431 9.12298 13.662C9.18792 13.5847 9.25646 13.5736 10.3495 13.4668C10.9844 13.4041 11.5364 13.3673 11.576 13.382C11.6554 13.4115 11.7023 13.5294 11.6698 13.6289C11.6446 13.7099 11.4786 13.7799 11.3055 13.7799H11.1828V15.4378V17.0957H13.8704H16.5579L16.5507 9.6315L16.5399 2.17099L14.5197 1.28678C13.4086 0.804148 12.4671 0.406254 12.4274 0.409937C12.3877 0.409937 11.4426 0.811516 10.3279 1.30152ZM13.6143 2.21888C13.6648 2.29257 13.672 2.94099 13.672 8.41572C13.672 14.0525 13.6684 14.5352 13.6107 14.5978C13.5313 14.6862 13.3617 14.6862 13.3112 14.5941C13.286 14.5462 13.2752 12.5494 13.2752 8.39729C13.2752 2.74941 13.2788 2.26678 13.3365 2.20415C13.4158 2.11204 13.5493 2.11941 13.6143 2.21888ZM11.5797 3.07362C11.5797 3.7552 11.5724 3.82888 11.5183 3.85099C11.3849 3.90625 10.7824 4.1273 10.768 4.1273C10.7572 4.1273 10.7499 3.79941 10.7499 3.39414V2.66467L11.1215 2.4952C11.3235 2.40309 11.5111 2.32572 11.5364 2.32572C11.5688 2.32204 11.5797 2.4952 11.5797 3.07362ZM14.6171 2.64257C14.6785 2.69783 14.6821 2.93362 14.6821 8.64045C14.6821 13.2089 14.6712 14.5868 14.6388 14.6199C14.5666 14.6936 14.4043 14.6715 14.343 14.5831C14.2925 14.5094 14.2852 13.8831 14.2852 8.63677V2.7752L14.361 2.67572C14.4476 2.5652 14.5233 2.55414 14.6171 2.64257ZM9.89498 4.45888C9.87694 4.47362 9.81922 4.50309 9.75789 4.5252C9.70017 4.54362 9.54145 4.60256 9.40436 4.65783L9.16266 4.74993L9.16988 4.04993L9.1807 3.34625L9.54145 3.19151L9.90219 3.03309L9.91301 3.73309C9.91662 4.11993 9.90941 4.44783 9.89498 4.45888ZM15.6561 3.09572C15.7282 3.16941 15.7282 3.2173 15.7282 8.85045C15.7282 14.082 15.7246 14.5352 15.6669 14.5978C15.5947 14.6789 15.4649 14.6825 15.3891 14.6052C15.3386 14.5536 15.3314 13.9825 15.3314 8.85782C15.3314 3.2173 15.3314 3.16941 15.4036 3.09572C15.4432 3.0552 15.501 3.02204 15.5298 3.02204C15.5587 3.02204 15.6164 3.0552 15.6561 3.09572ZM11.5797 5.6673V6.47414L11.1864 6.58835C10.9664 6.65467 10.7824 6.70624 10.7716 6.70624C10.7608 6.70624 10.7499 6.35256 10.7499 5.91782V5.1294L11.1215 5.00046C11.3235 4.92677 11.5111 4.86783 11.5364 4.86783C11.5688 4.86414 11.5797 5.04835 11.5797 5.6673ZM9.92023 6.18677V6.95309L9.58474 7.05256C9.40076 7.10414 9.2312 7.14835 9.20595 7.14835C9.17349 7.14835 9.16266 6.96414 9.16266 6.41519V5.68572L9.51619 5.55309C9.70739 5.48309 9.87694 5.42046 9.89498 5.42046C9.90941 5.41677 9.92023 5.76309 9.92023 6.18677ZM11.5797 8.30519V9.13045L11.2478 9.19308C11.0638 9.22624 10.8762 9.26308 10.8329 9.27414L10.7499 9.29256V8.49677V7.70466L10.887 7.66782C10.9592 7.64572 11.1432 7.59782 11.2911 7.5573C11.439 7.52045 11.5652 7.48361 11.5724 7.48361C11.576 7.47993 11.5797 7.85203 11.5797 8.30519ZM9.92023 8.68835V9.45098L9.57031 9.51729C9.3755 9.55413 9.20595 9.57992 9.18792 9.57992C9.17349 9.57992 9.16627 9.24466 9.16988 8.83572L9.1807 8.09151L9.48733 8.01045C9.97073 7.88151 9.92023 7.80414 9.92023 8.68835ZM11.5797 10.9578V11.7794L11.3199 11.8052C11.1756 11.8199 10.988 11.8383 10.9015 11.8494L10.7499 11.8715L10.7572 11.0683L10.768 10.2615L11.1468 10.2026C11.356 10.1694 11.5364 10.1399 11.5544 10.1362C11.5688 10.1362 11.5797 10.5047 11.5797 10.9578ZM9.92023 11.1604V11.9304L9.78675 11.9526C9.711 11.9636 9.54145 11.982 9.40797 11.9968L9.16266 12.0189V11.2673V10.512L9.53423 10.4568C9.73625 10.4236 9.9058 10.3978 9.91301 10.3941C9.91662 10.3941 9.92023 10.7368 9.92023 11.1604Z" fill="currentColor" />
            <path d="M4.0605 5.65256L1.9321 6.58467L1.92128 11.8383L1.91406 17.0957H2.59948H3.28489V15.8799V14.6641H3.07566C2.90972 14.6641 2.84839 14.6494 2.79789 14.5904C2.71852 14.4983 2.75099 14.3399 2.86282 14.2994C2.90611 14.2847 3.42198 14.2257 4.00638 14.1704C4.59079 14.1152 5.09944 14.0636 5.13552 14.0562C5.17159 14.0489 5.24374 14.082 5.29785 14.1299C5.38443 14.2036 5.38804 14.222 5.34836 14.3104C5.29785 14.4247 5.1752 14.4799 4.97679 14.4799H4.8361V15.7878V17.0957H6.36926H7.90243V11.2783V5.46098L7.08354 5.10362C6.629 4.90467 6.24661 4.73888 6.22497 4.7352C6.20693 4.72783 5.23292 5.14046 4.0605 5.65256ZM4.8361 7.21098V7.82993L4.5006 7.94782C4.31302 8.01414 4.15068 8.0694 4.13625 8.0694C4.12543 8.0694 4.11822 7.80045 4.12182 7.47624L4.13264 6.8794L4.43928 6.7394C4.60883 6.66572 4.76756 6.5994 4.79281 6.5994C4.82528 6.59572 4.8361 6.74309 4.8361 7.21098ZM3.42198 7.76361L3.41115 8.34203L3.13338 8.44519L2.852 8.54835V7.98466V7.42467L3.11534 7.30677C3.25603 7.24414 3.3859 7.18888 3.40394 7.18888C3.41837 7.18519 3.42558 7.44677 3.42198 7.76361ZM4.8361 9.33308V10.0073L4.50421 10.0883C4.32023 10.1326 4.1579 10.1694 4.14347 10.1694C4.12543 10.1694 4.11461 9.88203 4.11461 9.53203V8.89466L4.46814 8.78045C4.65933 8.71782 4.82167 8.66624 4.82888 8.66256C4.83249 8.66256 4.8361 8.96098 4.8361 9.33308ZM3.42198 9.75308L3.41115 10.3683L3.15863 10.4347C3.02155 10.4678 2.89529 10.501 2.88086 10.501C2.86282 10.501 2.852 10.232 2.852 9.90045V9.29993L3.09731 9.22256C3.23078 9.18203 3.36065 9.14519 3.3859 9.1415C3.42198 9.13782 3.42919 9.27045 3.42198 9.75308ZM4.8361 11.5326C4.8361 12.0373 4.82528 12.1957 4.79281 12.1957C4.76756 12.1957 4.60522 12.2178 4.43206 12.2473L4.11461 12.2952V11.6431V10.991L4.39599 10.9357C4.5475 10.9026 4.70984 10.8768 4.75673 10.8731L4.8361 10.8694V11.5326ZM3.42919 11.7683C3.42919 12.2362 3.41837 12.3762 3.3823 12.391C3.35344 12.402 3.22357 12.4204 3.09009 12.4352L2.84839 12.461L2.85921 11.8604L2.87004 11.2562L3.06845 11.2157C3.46166 11.131 3.42919 11.0794 3.42919 11.7683Z" fill="currentColor" />
            <path d="M0.398438 17.9985V18.459H9.23669H18.0749V17.9985V17.5379H9.23669H0.398438V17.9985Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_1451_3699">
              <rect width="18.4701" height="18.8631" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Land / Plot",
      icon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.49622 0.0075798C6.59871 0.28896 5.06915 1.29183 4.11317 2.88632C3.29789 4.24273 3.07783 5.92019 3.4963 7.56519C3.80293 8.77729 4.48474 10.0832 5.44432 11.2953C6.05759 12.0673 7.05324 13.0954 7.86492 13.788C8.2906 14.1488 9.19246 14.8486 9.23575 14.8486C9.24657 14.8486 9.44138 14.7079 9.66865 14.5384C11.2559 13.3479 12.6917 11.8689 13.6332 10.4548C14.9752 8.44541 15.4478 6.47574 15.0437 4.59265C14.5603 2.35242 12.7711 0.588379 10.4803 0.0941582C10.1881 0.0292244 9.97528 0.0111866 9.36201 0.00397205C8.94716 -0.00324249 8.55755 0.000364304 8.49622 0.0075798ZM9.52435 1.91953C9.57485 1.94478 9.82377 2.13598 10.0835 2.34521L10.5525 2.72399L10.5922 2.52197C10.6246 2.35603 10.6607 2.2911 10.7761 2.18287C10.8555 2.11072 10.9854 2.03136 11.0611 2.00972C11.2415 1.95921 11.8475 1.95921 12.0243 2.00972C12.2119 2.06022 12.4356 2.26945 12.4825 2.43179C12.5005 2.50754 12.5185 2.95847 12.5185 3.43827V4.31127L12.9262 4.63955C13.3879 5.01833 13.4925 5.15902 13.4889 5.39711C13.4889 5.62077 13.4456 5.70374 13.121 6.09696C12.9045 6.3603 12.8035 6.45409 12.6773 6.5046L12.5185 6.56953V8.10631C12.5185 9.85592 12.5113 9.90642 12.2552 10.1842C12.1758 10.2708 12.0423 10.379 11.9594 10.4223C11.8151 10.5017 11.8115 10.5017 9.23575 10.5017C6.66003 10.5017 6.65642 10.5017 6.51213 10.4223C6.42915 10.379 6.29568 10.2708 6.21632 10.1842C5.96019 9.90642 5.95297 9.85592 5.95297 8.10631L5.94936 6.56953L5.77981 6.49017C5.64995 6.42884 5.53811 6.32423 5.3397 6.08253C5.1918 5.90215 5.05111 5.71096 5.02586 5.65685C4.95371 5.49812 4.96814 5.24921 5.06193 5.1013C5.11244 5.01833 5.80146 4.43753 6.98109 3.48155C7.99479 2.66627 8.85697 1.97364 8.90387 1.94117C9.07702 1.82934 9.32955 1.81852 9.52435 1.91953Z" fill="currentColor" />
          <path d="M7.48286 3.86787C6.53049 4.63265 5.7116 5.29643 5.6647 5.34332L5.57812 5.42629L5.78736 5.67521C5.9064 5.80868 6.01823 5.92051 6.03988 5.91691C6.06152 5.9133 6.75055 5.383 7.56944 4.73366C8.38833 4.08432 9.099 3.53599 9.14589 3.51434C9.20722 3.48549 9.25773 3.48549 9.31905 3.51434C9.36956 3.53599 10.0766 4.08432 10.8955 4.73366C11.7108 5.383 12.3998 5.9133 12.4251 5.91691C12.4684 5.92051 12.8796 5.45155 12.8724 5.40465C12.8724 5.37218 9.30101 2.49704 9.25051 2.48261C9.22887 2.47901 8.43162 3.09949 7.48286 3.86787Z" fill="currentColor" />
          <path d="M11.1875 2.93309L11.1911 3.25055L11.5122 3.50307C11.6889 3.64015 11.8513 3.7592 11.8729 3.76641C11.8946 3.77363 11.909 3.57522 11.909 3.20004V2.61924H11.5482H11.1875V2.93309Z" fill="currentColor" />
          <path d="M7.89004 5.25918L6.5625 6.31255L6.57332 8.00084L6.58414 9.68913L6.68515 9.78653C6.78255 9.88753 6.78616 9.88753 7.35975 9.89836L7.93694 9.90918V8.99289C7.93694 7.96837 7.95498 7.86015 8.17503 7.60402C8.24357 7.52465 8.38066 7.41643 8.48527 7.36593C8.66204 7.27574 8.70172 7.27213 9.23562 7.27213C9.76952 7.27213 9.80921 7.27574 9.98597 7.36593C10.0906 7.41643 10.2277 7.52465 10.2962 7.60402C10.5163 7.86015 10.5343 7.96837 10.5343 8.99289V9.90918L11.1115 9.89836C11.6851 9.88753 11.6887 9.88753 11.7861 9.78653L11.8871 9.68913L11.8979 8.00084L11.9087 6.31255L10.5884 5.26639C9.86332 4.69281 9.26087 4.22023 9.24284 4.21662C9.22841 4.20941 8.61875 4.68198 7.89004 5.25918Z" fill="white" />
          <path d="M8.71643 7.92674C8.56491 8.01692 8.54688 8.12875 8.54688 9.04144V9.90723H9.23229H9.91771V9.04144C9.91771 8.12154 9.89967 8.00971 9.74094 7.92313C9.65076 7.87623 8.7994 7.87623 8.71643 7.92674Z" fill="currentColor" />
          <path d="M3.8744 12.9086C3.68321 13.0529 0 16.4439 0 16.4763C0 16.4944 3.98623 16.5088 9.23507 16.5088C14.7292 16.5088 18.4701 16.4944 18.4701 16.4763C18.4701 16.4366 14.7076 12.9374 14.5957 12.8761C14.5416 12.8436 14.235 12.8328 13.5135 12.8292H12.507L11.8902 13.4316C11.1254 14.1784 9.87359 15.2101 9.49842 15.4049C9.35051 15.4807 9.11964 15.4807 8.97173 15.4013C8.58934 15.2065 7.32313 14.1567 6.54392 13.3992L5.96312 12.8292H4.97107C4.00066 12.8292 3.97902 12.8292 3.8744 12.9086Z" fill="currentColor" />
          <path d="M0 17.6985C0 18.2649 0.00360745 18.2793 0.0901863 18.3659L0.176765 18.4561H9.23507H18.2934L18.38 18.3659C18.4665 18.2793 18.4701 18.2649 18.4701 17.6985V17.1213H9.23507H0V17.6985Z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Industrial",
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8269 5.3795C12.8269 5.9502 12.8219 6.41483 12.8118 6.41483C12.8067 6.41483 12.3219 6.25322 11.7411 6.06131C11.1603 5.86434 10.6754 5.70777 10.6653 5.70777C10.6603 5.70777 10.6603 5.92999 10.6653 6.19767L10.6805 6.68251L11.0239 6.80877L11.3623 6.93503V8.86429C11.3623 10.3643 11.3472 10.8037 11.3017 10.8239C11.0542 10.9198 2.67051 14.1571 2.36244 14.2733L1.9685 14.4198V14.8339C1.9685 15.0662 1.98365 15.2531 2.00891 15.2531C2.02911 15.248 2.18062 15.2177 2.34728 15.1773C2.51395 15.1369 2.66546 15.1016 2.69071 15.1016C2.71092 15.1016 2.72607 16.0006 2.72607 17.0965V19.0914H1.9685H1.21094V20.3035V21.5156H12.9279H24.6449V20.3035V19.0914H23.8621H23.0793V15.1521V11.2127L23.2207 11.243C23.2965 11.2632 23.4429 11.3087 23.554 11.3491C23.6601 11.3845 23.7561 11.4148 23.7662 11.4148C23.7763 11.4148 23.7864 11.2127 23.7864 10.9703V10.5259L19.5592 8.9855L15.3269 7.44007L15.3117 5.89464L15.3016 4.34416H14.0643H12.8269V5.3795ZM10.2512 17.1975V18.9399H7.70074H5.15027V17.1975V15.4551H7.70074H10.2512V17.1975ZM18.9885 17.1975V18.9399H17.8521H16.7158V17.1975V15.4551H17.8521H18.9885V17.1975Z" fill="currentColor" />
        </svg>
      )
    }
  ];
  const [page, setPage] = useState(0);
  let itemsPerPage
  if (window.innerWidth < 1280) {
    itemsPerPage = 9
  }
  else {
    itemsPerPage = 8
  }


  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProperties = propertyData.slice(startIndex, endIndex);
  const scrollNext = () => {
    if (window.innerWidth < 1024) {
      scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      if (endIndex < propertyData.length) {
        setPage(prev => prev + 1);
      }
    }
  };

  const scrollPrev = () => {
    if (window.innerWidth < 1024) {
      scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      if (page > 0) {
        setPage(prev => prev - 1);
      }
    }
  };

  const addWishlist = (id) => {
    const token = localStorage.getItem("accessToken");

  if (!token) {
    toast.error("Please login to use wishlist");
    return;
  }
    addToWishlist({ id });

      toast.success("Added to wishlist")

    setPropertyData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: true }
          : item
      )
    );
  };
  
   const removeWishlist = (id) => {
      const token = localStorage.getItem("accessToken");

  if (!token) {
    toast.error("Please login to use wishlist");
    return;
  }
    removeToWishlist({ id });
    toast.error("Removed from wishlist");

    setPropertyData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: false }
          : item
      )
    );
  };


const isFiltered =
  searchQuery ||
  selectedCity ||
  activeCategory !== "Residential";
  return (
    <div className='relative mt-10 xl:mt-20 px-4 md:px-10 xl:px-0'>
      <div className='flex justify-center items-center bg-white flex-col text-center mb-8'>
        <h1 className='text-[20px] md:text-[24px] instrument-sans font-semibold'>Active Property Listings</h1>
        <h2 className='instrument-sans text-[14px] md:text-[16px] text-[#A79A9A] max-w-2xl'>
          Explore the listings of sale, rent and lease across your favorite locations.
        </h2>
      </div>

      <div className='relative'>
        <div className="lg:absolute lg:top-0 lg:left-0 lg:z-10 w-full flex flex-col lg:flex-row items-center gap-4 px-0 lg:px-15 mb-6 lg:mb-0">

          <div className="flex items-center justify-between bg-white w-full lg:w-[447px] h-[50px] lg:h-[56px] rounded-full px-6 border border-[#858585] shadow-sm">
            <input
              type="text"
              placeholder="Search"
               value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none bg-transparent w-full text-[14px] text-gray-600 placeholder-gray-400 inter"
            />
            <Search className="text-[#84CC16] w-5 h-5" />
          </div>

       <div className="relative inline-block w-full lg:w-auto">
  <button
    onClick={() => setOpen(!open)}
    className="
      flex items-center justify-between gap-1
      bg-lime-500 text-white
      px-5
      h-[44px] lg:h-[38px]
      rounded-full
      text-[14px] lg:text-[16px]
      font-medium inter
      w-full lg:min-w-[180px]
      cursor-pointer
    "
  >
    {selectedCity || "All Location"}

    <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {open && (
    <div className="absolute mt-2 w-full bg-lime-500 rounded-2xl shadow-lg z-50 p-2">
      <ul className="text-sm text-white inter">
        
        <li
          onClick={async () => {
            setSelectedCity("");
            setOpen(false);

            const res = await searchAgentProperties(
              id,
              searchQuery,
              activeCategory
            );

            if (res?.properties) {
              setPropertyData(res.properties);
            }
          }}
          className="px-4 py-2 hover:text-lime-500 hover:bg-white rounded-xl cursor-pointer"
        >
          All Location
        </li>

        {Array.isArray(cities) &&
          cities.map((city, index) => (
            <li
              key={index}
              onClick={async () => {

                setSelectedCity(city);
                setOpen(false);

                const res =
                  await filterAgentPropertyByCity(
                    id,
                    city
                  );

                if (res?.properties) {
                  setPropertyData(res.properties);
                }
              }}
              className="px-4 py-2  hover:text-lime-500 hover:bg-white rounded-xl cursor-pointer"
            >
              {city}
            </li>
          ))}
      </ul>
    </div>
  )}
</div>
        </div>

        <div className={`activeproperty-cta-container pt-4 lg:pt-0  ${propertyBg[role]}`}>
          <div className='relative h-auto lg:h-25'>
            <div className="flex justify-center lg:justify-end lg:absolute lg:right-6 lg:top-10 px-4 mt-5 lg:mt-10  xl:pb-0 xl:mt-0">
              <div className="bg-[#6fba19] w-full max-w-[500px] justify-between rounded-full flex p-1 gap-1 px-[5px] overflow-x-auto no-scrollbar">
                {categories.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveCategory(item.name)}
                    className={`flex shrink-0 poppins items-center gap-1 px-3 lg:px-4 py-2 rounded-full text-[10px] lg:text-[11.5px] transition-all duration-200 ${activeCategory === item.name ? "bg-white text-[#6fba19] font-medium" : "text-white"
                      }`}
                  >
                    <span className={activeCategory === item.name ? "text-[#6fba19]" : "text-white"}>
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                ))}
              </div>
            </div> 
          </div>

   <div
  className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 px-4 lg:px-15 overflow-x-auto lg:overflow-visible no-scrollbar lg:mt-12 xl:mt-8 pb-6"
  ref={scrollRef}
>
  {currentProperties.length > 0 ? (
    currentProperties.map((property, index) => (
      <div key={index} className="min-w-[280px] lg:min-w-0">
        <Propertycard
          property={property}
          click={() =>
            property.is_wishlisted
              ? removeWishlist(property.id)
              : addWishlist(property.id)
          }
             wishlistIcon={
                          property.is_wishlisted ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15px"
                              height="15px"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#e11a1a"
                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                              />
                            </svg>
                          ) : (
                            <Heart
                              size={13}
                              fill="none"
                              stroke="black"
                              className="scale-100"
                            />
                          )
                        }
        />
      </div>
    ))
  ) : (
    <div className="col-span-full w-full py-16 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full bg-[#F3FFE2] flex items-center justify-center mb-4">
          <img
                      src={noimage}
                      alt="No Properties"
                      className="w-40 mb-4 opacity-80"
                    />
      </div>

     <h3 className="text-2xl font-semibold instrument-sans">
  {isFiltered
    ? "No Matching Properties Found"
    : "No Active Listings Yet"}
</h3>

<p className="text-[#8B8B8B] mt-2 max-w-md">
  {isFiltered
    ? "We couldn't find any properties matching your search or selected filters. Try changing the location, category, or search term."
    : "This agent hasn't published any properties yet. New listings will appear here once they become available."}
</p>

      {isFiltered && (
  <button
    onClick={() => {
      setSearchQuery("");
      setSelectedCity("");
      setActiveCategory("Residential");
    }}
    className="mt-6 bg-[#6fba19] text-white px-6 py-3 rounded-full"
  >
    Clear Filters
  </button>
)}
    </div>
  )}
</div>

          <div className="flex items-center justify-between w-full px-4 lg:px-15 pb-10 mt-3">
            <button className="instrument-sans flex items-center gap-2 font-semibold text-[13px] lg:text-[15px] text-black cursor-pointer">
              Explore More
              <span className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-black text-white">
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
            </button>

            <div className="flex gap-3">
              <button onClick={scrollPrev} className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-black text-white shadow-md">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={scrollNext} className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-black text-white shadow-md">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivePropertyListing;