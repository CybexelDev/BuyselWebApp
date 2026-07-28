import React, { useEffect, useState,useRef } from "react";
import "./agentdetail.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../Navbar/Navbar";
import crown from "../../../assets/images/agentDetail/crown.png";
import elite from "../../../assets/images/agentDetail/elite.png";
import { toast } from "sonner";
const AgentDetailHeader = ({ agentData, isPremiumOrElite }) => {
  const [showLinks, setShowLinks] = useState(false);
  const dropdownRef = useRef(null);
  const roleStyles = {
    basic: "bg-white",
    premium: "bg-gradient-to-r from-[#D6FF98] to-[#FFFFFFC7]",
    elite: "bg-gradient-to-r from-[#FEF7A4] to-[#FFFFFFC7]",
  };

  const bgStyle =
    agentData?.agent_type === "elite"
      ? "linear-gradient(to right, #FEFCDC,  #83cc1687 100%)"
      : "linear-gradient(to right, #D9D9D9 10%, #83cc1687 100%)";


  const handleWtspClick = (e) => {

    const token = localStorage.getItem("accessToken");

    if (!token) {
      e.preventDefault(); // 🚫 stop redirect
      toast.info("Please login to connect with agent");
      return;
    }

    // ✅ open WhatsApp manually
    const url = `https://wa.me/${agentData?.whatsapp_number}?text=${encodeURIComponent(
      `Hi ${agentData?.username}, I found your profile on BuySel and I'm interested in your services.`
    )}`;

    window.open(url, "_blank");

  }
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowLinks(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const handleCallClick = (e) => {

    const token = localStorage.getItem("accessToken");
    if (!token) {
      e.preventDefault(); // 🚫 stop redirect
      toast.info("Please login to connect with agent");
      return;
    }
    const url = `tel:${agentData?.phone_number}`;
    window.open(url, "_self");

  }
const hasSocialLinks =
  agentData?.facebook ||
  agentData?.instagram ||
  agentData?.website;
  return (
    <div className="p-5 relative">
      <Navbar />
      <div
        className="agentdetail-cta-container"
        style={{ background: bgStyle }}
      >
        <div class="agentdetail-cta-logo-container ">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="agentdetail-cta-logo w-[100px]"
            />
          </div>
        </div>
      </div>

      <div
        className={`
     relative w-[95%] max-w-[1300px] mx-auto mt-[-200px]
    rounded-3xl 
    ${roleStyles[agentData?.agent_type]}
    py-4
    lg:py-8 px-6  min-h-fit
    /* Desktop Styles (Preserving your original layout) */
    lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 
    lg:max-w-[1300px] lg:max-h-[274px] lg:mt-17 lg:pl-10

    ${isPremiumOrElite
            ? "shadow-[0px_11px_15.2px_0px_rgba(189,183,183,0.25)]"
            : "shadow-[0px_4px_14px_3px_rgba(214,255,152,0.4)]"
          } `}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between lg:justify-start lg:gap-45 md:gap-10">
          <div className="flex flex-col sm:flex-row items-center md:items-center gap-9 ">
            <div className="relative">
              <img
                src={agentData?.profile_image}
                alt="Agent"
                className="w-24 h-24 md:w-[183px] md:h-[183px] rounded-full object-cover shadow-md"
              />

              {/* Role Badge */}
              {agentData?.agent_type !== "basic" && (
                <div
                  className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                      px-3 py-1 rounded-[10px] text-[10px] md:text-[14px]
                      flex items-center gap-1 shadow-md bg-white
                      w-max
                     `}
                >
                  <img src={agentData?.agent_type === "elite" ? elite : crown} alt="crown" className="w-[20px]" />
                  <span className="font-[400] host-grotesk ">
                    {agentData?.agent_type === "premium" && "Premium Agent"}
                    {agentData?.agent_type === "elite" && "Elite Agent"}
                  </span>
                </div>
              )}
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-[24px] host-grotesk font-[550] text-[#312F2F]">
                {agentData?.username}
              </h2>

              <p className=" text-[12px]  lg:text-[16px] text-[#312F2F] host-grotesk font-medium flex items-center justify-center sm:justify-start gap-2">
                <span>{agentData?.designation}</span>
                <svg
                  width="100"
                  height="2"
                  viewBox="0 0 100 2"
                  fill="none"
                  className="hidden xl:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="100"
                    y2="1"
                    stroke="#312F2F"
                    stroke-width="2"
                  />
                </svg>

                <span>{agentData?.city}</span>
              </p>

              <div className="flex mt-2 gap-2 items-center justify-center sm:justify-start">
                {agentData?.verified && (
                  <button className="bg-[#5E8D00] text-[8px] px-2 rounded-[30px] py-1 text-white host-grotesk">
                    Buysel Verified
                  </button>
                )}
                <p className="text-medium text-[10px] md:text-[14px] host-grotesk">
                  Agent ID:
                  <span className="text-[#84CC16] font-medium ml-1">
                    {agentData?.agent_code}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-5">
                <a
                  href="#"
                  onClick={handleWtspClick}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#6ABD11ED] text-white px-6 md:px-13 py-2 rounded-[10px] text-[12px] instrument-sans font-bold hover:bg-black hover:text-white transition flex items-center gap-2 cursor-pointer">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.60377 0.00675011C5.14186 0.132727 3.92018 0.583899 2.82448 1.40714C2.47877 1.66495 1.89284 2.23331 1.60866 2.58195C0.817641 3.5546 0.304946 4.7382 0.108657 6.02433C0.0471331 6.44034 0.0412737 7.43058 0.0969378 7.84073C0.214125 8.70499 0.466078 9.51066 0.82936 10.205L0.972914 10.4716L0.480727 12.2704C0.208266 13.2577 -0.00853097 14.0722 0.000258093 14.078C0.00611747 14.0839 0.838149 13.873 1.84889 13.6064L3.68581 13.123L4.04616 13.2958C5.4612 13.9726 7.17506 14.1425 8.71315 13.7587C9.68288 13.5155 10.6526 13.0351 11.429 12.411C12.1848 11.7987 12.9143 10.873 13.3274 9.99406C13.9573 8.66691 14.1536 7.24015 13.9104 5.78995C13.4153 2.84269 11.0305 0.513586 8.06276 0.0770626C7.69948 0.0243282 6.87331 -0.0166874 6.60377 0.00675011ZM7.84596 1.26652C9.08229 1.43644 10.1956 1.99601 11.1038 2.90128C12.4954 4.29581 13.0755 6.22062 12.6829 8.13956C12.4954 9.0507 12.0618 9.95011 11.4612 10.6679C10.553 11.7577 9.33424 12.4491 7.90749 12.6952C7.49733 12.7626 6.55104 12.7626 6.14967 12.6952C5.4026 12.5634 4.74342 12.329 4.13112 11.9745L3.87038 11.8251L2.80397 12.1064C2.2151 12.2587 1.72877 12.3788 1.72291 12.373C1.71705 12.3671 1.83717 11.8925 1.99538 11.3183L2.27955 10.2753L2.13014 10.0321C1.33913 8.73722 1.08131 7.29288 1.37428 5.8339C1.78737 3.78605 3.31666 2.09562 5.31764 1.47159C6.16432 1.20792 6.95241 1.14347 7.84596 1.26652Z"
                      fill="white"
                      fill-opacity="0.93"
                    />
                    <path
                      d="M4.4033 3.76569C4.07517 3.87409 3.64744 4.43952 3.53318 4.91413C3.3574 5.66413 3.58591 6.41706 4.28904 7.38385C4.92771 8.26276 5.61912 8.94538 6.37791 9.44342C6.87009 9.76569 7.72556 10.1378 8.29099 10.2755C8.58689 10.3458 9.12302 10.3516 9.37205 10.2872C9.75877 10.1846 10.2422 9.85651 10.3974 9.58991C10.5 9.41706 10.5674 9.12409 10.5732 8.85749C10.5761 8.64948 10.5703 8.62311 10.5058 8.57624C10.3652 8.46784 9.00584 7.84088 8.87986 7.82331C8.72752 7.79987 8.72166 7.80573 8.42576 8.18952C8.12107 8.58209 7.97752 8.71979 7.88084 8.71979C7.75779 8.71979 7.01072 8.33893 6.7031 8.11627C6.55662 8.01081 6.32517 7.81745 6.19041 7.68561C5.78318 7.28424 5.31736 6.64264 5.31736 6.48151C5.31736 6.42877 5.37302 6.3321 5.47556 6.20319C5.7949 5.80475 5.874 5.67292 5.874 5.54401C5.874 5.39167 5.30271 4.00299 5.17966 3.85944C5.09763 3.76276 5.09763 3.76276 4.79002 3.75104C4.62009 3.74518 4.44724 3.75104 4.4033 3.76569Z"
                      fill="white"
                      fill-opacity="0.93"
                    />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="#"
                  onClick={handleCallClick}
                  className="bg-[#312F2F] text-white px-8 md:px-17 shadow-md py-2 rounded-[10px] text-[12px] instrument-sans font-bold hover:bg-gray-800 hover:text-white border border-transparent hover:border-[#312F2F] transition flex items-center gap-2 cursor-pointer">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.695226 0.0438375C0.377843 0.153017 0.108702 0.44247 0.0223742 0.76747C-0.0207898 0.924891 0.00206175 1.89989 0.0604602 2.38485C0.225499 3.78134 0.583507 5.01278 1.1878 6.25692C1.79464 7.50868 2.50304 8.49892 3.49835 9.49677C4.4962 10.4921 5.48644 11.2005 6.73819 11.8073C7.98234 12.4116 9.21378 12.7696 10.6103 12.9347C11.0952 12.9931 12.0702 13.0159 12.2276 12.9727C12.4714 12.9093 12.7025 12.7366 12.8421 12.5183C12.997 12.2796 12.997 12.2821 12.997 10.7612C12.997 9.53485 12.9919 9.3622 12.9538 9.25048C12.8726 9.00927 12.7329 8.82899 12.5273 8.69442C12.3241 8.56493 12.1896 8.53192 11.7935 8.51415C11.0978 8.48876 10.529 8.39735 9.89933 8.21708C9.47023 8.0952 9.20109 8.07743 8.96241 8.15614C8.78722 8.21454 8.79484 8.20946 7.89855 8.88993L7.13937 9.46376L6.82452 9.28095C5.41788 8.46591 4.52413 7.57216 3.71417 6.17059L3.53136 5.85575L4.10519 5.09403C4.42257 4.67509 4.70694 4.29677 4.73995 4.2536C4.82628 4.13681 4.89737 3.87782 4.89737 3.67977C4.89737 3.5579 4.86944 3.40809 4.79327 3.14403C4.60284 2.46864 4.53175 2.02431 4.49112 1.28036C4.46827 0.830947 4.44542 0.714149 4.35148 0.531337C4.29054 0.412002 4.09249 0.208877 3.96808 0.135243C3.73702 0.000673294 3.72433 -0.00186634 2.21866 0.000673294C0.969445 0.000673294 0.809484 0.00575161 0.695226 0.0438375Z"
                      fill="white"
                    />
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Details */}
          <div className="flex flex-col gap-[18px] text-sm mt-8 md:mt-0 border-t md:border-t-0 pt-6 md:pt-0 border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className={`bg-[#6ABD11ED] p-2 rounded-full text-white cursor-pointer shrink-0 `}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5994 2.71875H2.71938C1.97137 2.71875 1.35938 3.33075 1.35938 4.07875V12.2388C1.35938 12.9867 1.97137 13.5988 2.71938 13.5988H13.5994C14.3474 13.5988 14.9594 12.9867 14.9594 12.2388V4.07875C14.9594 3.33075 14.3474 2.71875 13.5994 2.71875ZM13.3274 5.60875L8.88018 8.38995C8.43818 8.66875 7.88057 8.66875 7.43857 8.38995L2.99138 5.60875C2.92319 5.57047 2.86348 5.51876 2.81586 5.45674C2.76824 5.39472 2.7337 5.32368 2.71433 5.24792C2.69496 5.17217 2.69116 5.09327 2.70316 5.016C2.71517 4.93873 2.74272 4.8647 2.78417 4.79839C2.82561 4.73209 2.88008 4.67488 2.94427 4.63023C3.00846 4.58558 3.08105 4.55442 3.15763 4.53863C3.23422 4.52285 3.31321 4.52277 3.38982 4.53839C3.46644 4.55402 3.53909 4.58503 3.60338 4.62955L8.15938 7.47875L12.7154 4.62955C12.7797 4.58503 12.8523 4.55402 12.9289 4.53839C13.0055 4.52277 13.0845 4.52285 13.1611 4.53863C13.2377 4.55442 13.3103 4.58558 13.3745 4.63023C13.4387 4.67488 13.4931 4.73209 13.5346 4.79839C13.576 4.8647 13.6036 4.93873 13.6156 5.016C13.6276 5.09327 13.6238 5.17217 13.6044 5.24792C13.5851 5.32368 13.5505 5.39472 13.5029 5.45674C13.4553 5.51876 13.3956 5.57047 13.3274 5.60875Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-black font-medium host-grotesk cursor-pointer">
                {agentData?.email}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`bg-[#6ABD11ED] p-2 rounded-full text-white cursor-pointer shrink-0 `}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.68027 14.3954C7.08024 14.7254 7.49735 15.027 7.92438 15.3214C8.35232 15.0309 8.76741 14.722 9.16848 14.3954C9.83706 13.8464 10.4663 13.2512 11.0515 12.6141C12.4005 11.139 13.8644 9.00058 13.8644 6.60016C13.8644 5.8201 13.7107 5.04769 13.4122 4.32702C13.1137 3.60634 12.6762 2.95152 12.1246 2.39994C11.573 1.84836 10.9182 1.41082 10.1975 1.11231C9.47684 0.813799 8.70443 0.660156 7.92438 0.660156C7.14432 0.660156 6.37191 0.813799 5.65124 1.11231C4.93056 1.41082 4.27574 1.84836 3.72416 2.39994C3.17258 2.95152 2.73504 3.60634 2.43653 4.32702C2.13802 5.04769 1.98437 5.8201 1.98438 6.60016C1.98438 9.00058 3.44826 11.1383 4.7973 12.6141C5.38246 13.2514 6.01167 13.8462 6.68027 14.3954ZM7.92438 8.74516C7.35549 8.74516 6.8099 8.51917 6.40763 8.1169C6.00537 7.71463 5.77938 7.16905 5.77938 6.60016C5.77938 6.03127 6.00537 5.48568 6.40763 5.08341C6.8099 4.68115 7.35549 4.45516 7.92438 4.45516C8.49326 4.45516 9.03885 4.68115 9.44112 5.08341C9.84338 5.48568 10.0694 6.03127 10.0694 6.60016C10.0694 7.16905 9.84338 7.71463 9.44112 8.1169C9.03885 8.51917 8.49326 8.74516 7.92438 8.74516Z" fill="white" />
                </svg>


              </div>
              <span className="text-black font-medium host-grotesk cursor-pointer">
                {agentData?.address}, {agentData?.city}
              </span>
            </div>

          <div className="relative" ref={dropdownRef}>
  <div
    onClick={() => setShowLinks(!showLinks)}
    className="flex items-center gap-3 cursor-pointer"
  >
    <div className="bg-[#6ABD11ED] p-2 rounded-full text-white">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49943 0C8.26443 0.00204 8.65271 0.00612 8.98795 0.01564L9.11987 0.0204C9.27219 0.02584 9.42247 0.03264 9.60403 0.0408C10.3275 0.0748 10.8212 0.18904 11.2544 0.357C11.7032 0.52972 12.0813 0.76364 12.4593 1.14104C12.8053 1.48086 13.0728 1.89208 13.2434 2.346C13.4113 2.77916 13.5256 3.27284 13.5596 3.99704C13.5677 4.17792 13.5745 4.3282 13.58 4.4812L13.5841 4.61312C13.5943 4.94768 13.5983 5.33596 13.5997 6.10096L13.6004 6.60824V7.49904C13.602 7.99504 13.5968 8.49103 13.5847 8.98688L13.5807 9.1188C13.5752 9.2718 13.5684 9.42208 13.5603 9.60296C13.5263 10.3272 13.4107 10.8202 13.2434 11.254C13.0728 11.7079 12.8053 12.1191 12.4593 12.459C12.1195 12.8049 11.7083 13.0724 11.2544 13.243C10.8212 13.411 10.3275 13.5252 9.60403 13.5592L9.11987 13.5796L8.98795 13.5837C8.65271 13.5932 8.26443 13.598 7.49943 13.5993L6.99215 13.6H6.10203C5.6058 13.6018 5.10958 13.5965 4.61351 13.5844L4.48159 13.5803C4.32016 13.5742 4.15877 13.5671 3.99743 13.5592C3.27391 13.5252 2.78023 13.411 2.34639 13.243C1.89271 13.0724 1.48173 12.8048 1.14211 12.459C0.79595 12.1192 0.528141 11.708 0.357387 11.254C0.189427 10.8208 0.0751867 10.3272 0.0411867 9.60296L0.0207868 9.1188L0.0173868 8.98688C0.00485176 8.49104 -0.00081552 7.99504 0.000386782 7.49904V6.10096C-0.00149539 5.60497 0.00349181 5.10897 0.0153468 4.61312L0.0201068 4.4812C0.0255468 4.3282 0.0323468 4.17792 0.0405068 3.99704C0.0745068 3.27284 0.188747 2.77984 0.356707 2.346C0.527859 1.89189 0.796139 1.48066 1.14279 1.14104C1.48221 0.795293 1.89295 0.52773 2.34639 0.357C2.78023 0.18904 3.27323 0.0748 3.99743 0.0408C4.17831 0.03264 4.32927 0.02584 4.48159 0.0204L4.61351 0.01632C5.10936 0.00423824 5.60535 -0.000975594 6.10135 0.000679951L7.49943 0ZM6.80039 3.4C5.89865 3.4 5.03385 3.75821 4.39622 4.39584C3.7586 5.03346 3.40039 5.89826 3.40039 6.8C3.40039 7.70174 3.7586 8.56654 4.39622 9.20416C5.03385 9.84179 5.89865 10.2 6.80039 10.2C7.70212 10.2 8.56693 9.84179 9.20455 9.20416C9.84217 8.56654 10.2004 7.70174 10.2004 6.8C10.2004 5.89826 9.84217 5.03346 9.20455 4.39584C8.56693 3.75821 7.70212 3.4 6.80039 3.4ZM6.80039 4.76C7.06828 4.75996 7.33357 4.81268 7.58109 4.91516C7.82861 5.01763 8.05352 5.16786 8.24298 5.35726C8.43245 5.54666 8.58275 5.77152 8.68531 6.01901C8.78787 6.2665 8.84068 6.53176 8.84073 6.79966C8.84077 7.06756 8.78805 7.33284 8.68557 7.58036C8.58309 7.82788 8.43287 8.05279 8.24347 8.24226C8.05406 8.43172 7.8292 8.58202 7.58172 8.68458C7.33423 8.78714 7.06896 8.83996 6.80107 8.84C6.26003 8.84 5.74114 8.62507 5.35857 8.2425C4.976 7.85992 4.76107 7.34104 4.76107 6.8C4.76107 6.25896 4.976 5.74008 5.35857 5.3575C5.74114 4.97493 6.26003 4.76 6.80107 4.76M10.3711 2.38C10.1456 2.38 9.92943 2.46955 9.77003 2.62896C9.61062 2.78837 9.52107 3.00457 9.52107 3.23C9.52107 3.45543 9.61062 3.67163 9.77003 3.83104C9.92943 3.99045 10.1456 4.08 10.3711 4.08C10.5965 4.08 10.8127 3.99045 10.9721 3.83104C11.1315 3.67163 11.2211 3.45543 11.2211 3.23C11.2211 3.00457 11.1315 2.78837 10.9721 2.62896C10.8127 2.46955 10.5965 2.38 10.3711 2.38Z" fill="#ffff"/>
</svg>
    </div>

    <span className="text-black font-medium host-grotesk">
      {hasSocialLinks?
      "Social Media & Website":"No social media or website information available."}
    </span>
  </div>

{showLinks&&hasSocialLinks && (
  <div className="absolute top-full left-0  z-50 w-72 overflow-hidden rounded-2xl border border-[#D6FF98] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-md host-grotesk">

    <div className="bg-gradient-to-r from-[#84CC16] to-[#A3E635] px-4 py-3">
      <h3 className="text-white font-semibold host-grotesk">
        Connect with Agent
      </h3>
      <p className="text-white/80 text-xs">
        Social Media & Website Links
      </p>
    </div>

    <div className="p-1 space-y-[2px]">

      {agentData?.facebook && (
        <a
          href={agentData.facebook}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl p-3  hover:bg-[#F7FEE7] transition-all"
        >
          <span className="w-8 h-8 rounded-full bg-[#6ABD11ED] text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
</svg>
          </span>
          <span className="font-medium">Facebook</span>
        </a>
      )}

      {agentData?.instagram && (
        <a
          href={agentData.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#FFF7ED] transition-all"
        >
          <span className="w-8 h-8  rounded-full bg-[#6ABD11ED] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path>
</svg>

          </span>
          <span className="font-medium">Instagram</span>
        </a>
      )}

      {agentData?.website && (
        <a
          href={agentData.website}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#F0FDF4] transition-all"
        >
          <span className="w-8 h-8  rounded-full bg-[#6ABD11ED] text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <g fill="currentColor">
    <path fillRule="evenodd" d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z" clipRule="evenodd"></path>
    <path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></path>
    <path fillRule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clipRule="evenodd"></path>
  </g>
</svg>
          </span>
          <span className="font-medium">Website</span>
        </a>
      )}

    </div>
  </div>
)}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailHeader;
