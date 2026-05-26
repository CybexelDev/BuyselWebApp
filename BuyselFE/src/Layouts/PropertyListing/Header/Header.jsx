import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../../assets/images/logo/logo.png";
import filterIcon from "../../../assets/images/header/Filter.png";
import Search from "../../../assets/images/header/Search.png";
import { getNearbyProperties } from "../../../Api/userApi";
import Navbar from "../../../Components/Navbar/Navbar";
import { getFilterOptions } from "../../../Api/userApi";
import { toast } from "sonner";



const Header = ({ setParentFilters, onchange, filters }) => {
  const [activeTab, setActiveTab] = useState("Rent");
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const tabs = ["Rent", "Buy", "Agent", "Lease"];
  const handleNearbyClick = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const data = await getNearbyProperties(lat, lng);
        setParentFilters({
          nearby: true,
          lat,
          lng,
        });
      },
      () => {
        toast.warning("Please allow location access");
      }
    );
  };
  useEffect(() => {
    if (filters?.purpose) {
      setActiveTab(filters.purpose);
    }

    if (filters?.category) {
      setActiveCategory(filters.category);
    }
  }, [filters]);
  useEffect(() => {
  setParentFilters((prev) => ({
    ...prev,
    purpose: activeTab,
    category: activeCategory,
  }));
}, [activeTab, activeCategory]);

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
  <style>
    {`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}
  </style>
  return (
    <div className="md:p-5 p-2 relative ">
      <Navbar />

      <div className="footerr-cta-container ">

        {/* LOGO */}
        <div className="footerr-cta-logo-container">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="footer-cta-logo w-[100px]"
            />
          </div>
        </div>

        {/* CATEGORY TABS - Now properly scrollable inside the box on mobile */}
        <div className="flex justify-center mt-4 lg:mt-6 mb-5 lg:mb-4 px-2">
          <div className="bg-[#6fba19] w-fit lg:w-[495px] justify-between rounded-full flex p-1 gap-1 px-1 overflow-x-auto whitespace-nowrap"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >   {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveCategory(item.name)}
              className={`flex shrink-0 poppins text-[400] cursor-pointer items-center gap-1 px-4 py-2 rounded-full text-[11.5px] transition-all duration-200 ${activeCategory === item.name
                ? "bg-white text-[#6fba19] font-medium"
                : "text-white"
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

        {/* SEARCH SECTION - Uses flex-col on mobile so they stack down inside the 306px height! */}
        <div className="flex flex-col xl:flex-row items-center justify-between w-full px-2 xl:px-5 mt-2 xl:mt-4 gap-4 xl:gap-0">

          {/* TABS (Rent, Buy) */}
          <div className="flex-1 flex items-center w-full xl:w-auto">

            {/* TABS LIST */}
            <div className="w-full xl:w-auto flex justify-center xl:justify-start gap-[14px] lg:gap-[32px] text-gray-700 font-medium text-[12px] xl:text-[16px] host-grotesk whitespace-nowrap">
              {tabs.map((tab) => (
                <p
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer transition px-1  ${activeTab === tab
                    ? "text-black font-bold"
                    : "hover:text-black text-[#938181]"
                    }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <span className="block w-[29px] h-[4px] bg-[#6fba19] rounded-full mt-1"></span>
                  )}
                </p>
              ))}
            </div>

            <div className="hidden min-[1300px]:flex flex-1 justify-center items-center">
              <div className="border-r-2 h-[34px] border-[#9C9393]" />
            </div>

          </div>

          {/* CENTER - SEARCH INPUT */}
          <div className="flex-1 flex justify-center w-full lg:w-auto px-2 xl:px-0">
            <div className="flex items-center bg-[#CEBEBE47] rounded-[17px] px-5 h-[48px] xl:h-[53px] w-full xl:w-[700px] xl:-mr-15 border-[0.5px] border-[#EAEAEA] poppins ">
              <input
                onChange={onchange}
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 bg-transparent outline-none text-[12px] font-[400%]"
              />
              <img src={Search} alt="search banner" className="h-6 object-contain" />
            </div>
          </div>

          {/* RIGHT - BUTTONS */}
          <div className="flex-1 flex justify-end  xl:justify-end items-center gap-3 w-full xl:w-auto  xl:ml-5  -mt-2 xl:mt-0">
            <button className="bg-black text-white px-3 xl:px-11.5 py-2 xl:py-3  rounded-[14px] text-[8px] xl:text-[15px] poppins flex items-center gap-2 whitespace-nowrap hover:bg-gray-800 transition-colors cursor-pointer" onClick={handleNearbyClick}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2055 0.0098877C5.9471 0.14602 4.82152 0.776879 4.08109 1.75637C3.53988 2.47356 3.24105 3.29036 3.1846 4.20676C3.1182 5.30579 3.72249 6.62727 5.12367 8.45012C5.64495 9.13079 6.30902 9.89446 6.87347 10.4722C7.6471 11.2591 7.66038 11.2558 8.7262 10.1003C9.97464 8.74563 10.9873 7.36438 11.5219 6.28196C12.0598 5.19954 12.1694 4.52219 11.9668 3.53606C11.6182 1.81614 10.2403 0.441528 8.5137 0.0895748C8.18831 0.0231686 7.48441 -0.0199957 7.2055 0.0098877ZM8.11859 3.14094C8.6764 3.35676 9.04827 3.93118 9.00843 4.51555C8.96527 5.11653 8.58343 5.59797 8.00902 5.77395C7.44788 5.94329 6.82367 5.72083 6.48167 5.23606C5.9471 4.46907 6.30902 3.40325 7.2055 3.11106C7.46449 3.02473 7.85628 3.03801 8.11859 3.14094Z" fill="white" />
                <path d="M1.95613 7.2214C0.883665 7.86554 0.176439 8.95461 0.0203841 10.1898C-0.12571 11.3486 0.521751 12.6368 1.69714 13.52C2.90906 14.4298 4.45964 14.9876 6.39538 15.2001C6.88679 15.2532 8.32448 15.2566 8.83581 15.2001C12.4085 14.8216 14.9385 13.1017 15.2274 10.8505C15.2706 10.5251 15.254 10.2628 15.1743 9.86769C14.9485 8.77199 14.2612 7.80246 13.2983 7.22472C13.1157 7.11515 13.0526 7.09523 12.8966 7.09523C12.7604 7.09523 12.6841 7.11515 12.6044 7.16828C12.4151 7.29777 12.3553 7.40734 12.3553 7.62648C12.3553 7.86222 12.4151 7.95851 12.6575 8.11789C13.4012 8.60929 13.8296 9.15714 14.0487 9.90089C14.2612 10.6148 14.1085 11.2689 13.5772 11.9429C12.7272 13.0187 11.0073 13.8089 8.90222 14.0878C8.0821 14.1974 6.77722 14.1642 5.86413 14.0148C3.43034 13.613 1.54109 12.3911 1.15925 10.9767C1.07624 10.6612 1.08952 10.2661 1.19909 9.90089C1.41824 9.15714 1.84656 8.60929 2.59031 8.11789C2.83269 7.95851 2.89245 7.86222 2.89245 7.62648C2.89245 7.48039 2.87253 7.40734 2.82273 7.33761C2.61355 7.05539 2.29812 7.01222 1.95613 7.2214Z" fill="white" />
                <path d="M3.65296 8.95136C3.49359 9.02109 3.21468 9.31991 3.07855 9.5623C2.89925 9.87441 2.82952 10.1732 2.84612 10.5584C2.86273 10.9336 2.92249 11.1129 3.13499 11.4449C3.66624 12.2617 4.9512 12.8693 6.57484 13.0752C7.06292 13.1383 8.27816 13.1283 8.78284 13.0586C10.5924 12.8129 11.9039 12.0725 12.3057 11.0764C12.3555 10.9502 12.3821 10.7975 12.3953 10.5584C12.4086 10.2562 12.402 10.1865 12.3256 9.94413C12.1795 9.47597 11.8043 9.0078 11.5121 8.91816C11.1668 8.81523 10.8082 9.07421 10.8082 9.42616C10.8082 9.60214 10.858 9.71171 11.0274 9.89101C11.3196 10.2031 11.3826 10.5152 11.2133 10.7842C10.8547 11.342 9.93167 11.7736 8.69983 11.9629C8.19847 12.0392 7.043 12.0392 6.54163 11.9629C5.31312 11.7736 4.38675 11.3387 4.02816 10.7842C3.8555 10.5086 3.91859 10.2164 4.22737 9.87441C4.40667 9.67519 4.45648 9.53905 4.41995 9.32655C4.39339 9.16054 4.30706 9.05097 4.13441 8.96132C3.95843 8.87167 3.82894 8.86835 3.65296 8.95136Z" fill="white" />
              </svg>
              Nearby
            </button>

            <div className="bg-white p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors w-[42px] h-[42px]" onClick={() => setIsFilterOpen(true)}>
              <img src={filterIcon} alt="filter" className="w-[24px] h-[24px] object-contain" />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Location Card */}
      <div className="absolute left-3 md:bottom-18 bottom-13 z-0 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] xl:text-[20px] font-bold text-black instrument-sans leading-tight host-grotesk ">
            Ernakulam, Kochi
          </h3>
          <p className=" text-[8px] xl:text-[12px] text-black host-grotesk font-medium">
            1000+ Properties found
          </p>
        </div>
      </div>

      {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} setParentFilters={setParentFilters}
      />}
    </div>
  );
};

const FilterModal = ({ onClose, setParentFilters }) => {
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterOptions, setFilterOptions] = useState(null);
  const selectedDistrictObj = filterOptions?.districts?.find(
    d => d.name === selectedDistrict
  );

  const cities = selectedDistrictObj?.cities || [];
  useEffect(() => {
    const fetchFilters = async () => {
      const res = await getFilterOptions();
      setFilterOptions(res);
    };

    fetchFilters();
  }, []);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-white/40 overflow-y-auto xl:px-10 xl:pt-60">
      <div className="bg-white w-full max-w-[380px] max-h-[95vh] overflow-y-auto rounded-[23px] p-6 shadow-2xl relative animate-in slide-in-from-right duration-300 my-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[16px] instrument-sans font-bold text-black">Filter Properties</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-black text-3xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <FilterSelect
            label="Purpose"
            options={filterOptions?.purposes?.map(p => p.name) || []}
            value={selectedPurpose}
            onChange={setSelectedPurpose}
          />
          <FilterSelect
            label="Category"
            options={filterOptions?.categories?.map(c => c.name) || []}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
          <FilterSelect
            label="District"
            options={filterOptions?.districts?.map(d => d.name) || []}
            value={selectedDistrict}
            onChange={(val) => {
              setSelectedDistrict(val);
              setSelectedCity(""); // reset city when district changes
            }}
          />
          <FilterSelect
            label="City"
            options={cities}
            value={selectedCity}
            onChange={setSelectedCity}
          />
          {/* Price Range */}
          <div>
            <label className="block text-[13px] font-semibold instrument-sans mb-2">Price Range</label>
            <div className="flex gap-3">
              <input type="text" placeholder="Min" className="w-1/2 bg-[#E6E8E1] rounded-xl p-3 outline-none text-[#909090] text-[13px] font-semibold instrument-sans" value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)} />
              <input type="text" placeholder="Max" className="w-1/2 bg-[#E6E8E1] rounded-xl p-3 outline-none text-[#909090] text-[13px] font-semibold instrument-sans" value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <button className="flex-1 bg-[#6fba19] text-white font-semibold py-3 px-2 rounded-xl hover:bg-[#5da015] transition-colors cursor-pointer instrument-sans text-[13px]" onClick={() => {
            setParentFilters({
              purpose: selectedPurpose,
              category: selectedCategory,
              district: selectedDistrict,
              city: selectedCity,
              min_price: minPrice,
              max_price: maxPrice,
              isFilterApplied: true,
              nearby: false,
            });

            onClose();
          }}>
            Apply
          </button>
          <button className="flex-1 bg-[#DEE2D9ED] text-black font-semibold py-3 px-2 rounded-xl hover:bg-gray-300 transition-colors cursor-pointer instrument-sans text-[13px]" onClick={() => {
            setParentFilters({
              purpose: "",
              category: "",
              district: "",
              city: "",
              min_price: "",
              max_price: "",
              isFilterApplied: false,
              nearby: false,
            });
          }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterSelect = ({ label, options, value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#E0E4DB] rounded-[9px] p-3 outline-none text-black appearance-none"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  </div>
);

export default Header;