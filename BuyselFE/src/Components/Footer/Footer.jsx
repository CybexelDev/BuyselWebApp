import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../assets/images/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = ({bg="bg-white",margin="mt-22"}) => {
    const navigate=useNavigate()
    const handleNavigate = (path) => {
  navigate(path);
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
};
    return (
        <div className={`px-6 md:px-12 lg:px-5 ${margin} ${bg}`}>
            <footer className="bg-black text-white rounded-t-3xl py-14">
                <div
                    className="max-w-7xl mx-auto
          grid grid-cols-2
        
          

          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-[2.3fr_1fr_1fr_1fr_1fr]
          gap-10 md:gap-12 lg:gap-22
          px-6 md:px-8 lg:px-10
          instrument-sans"
                >
                    {/* coloumn first */}
<div className="col-span-2 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
                        <img
                            src={logo}
                            className="w-[110px] md:w-[120px] lg:w-[126px] lg:h-[59px] "
                            alt="logo"
                        />

                        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-5 md:leading-6 mb-5 md:mb-6">
                            BuySel is a platform to find verified properties for buy,
                            rent, and lease quickly and easily.
                        </p>

                        <p className="text-sm font-medium mb-3">Follow Us</p>

                        <div className="flex gap-3">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1451_2800)">
                                    <path d="M7.87342 0.0534611C6.24574 0.264849 4.75545 0.888443 3.45189 1.89606C3.03968 2.21667 2.33858 2.9072 1.99683 3.32998C1.02445 4.53489 0.379716 5.95823 0.104911 7.50841C0.00626335 8.05802 -0.0324911 9.3792 0.0309253 9.98165C0.210605 11.6551 0.848293 13.2335 1.89466 14.5864C2.21527 14.9986 2.9058 15.6997 3.32858 16.0414C4.88581 17.2992 6.89752 18.0391 8.76478 18.0391H9.1946V14.5159V10.9928H8.22574H7.25688V9.88301V8.77322H8.22574H9.1946V7.79379C9.1946 6.4867 9.25449 6.09916 9.54691 5.52489C9.82172 4.98585 10.2903 4.5666 10.8646 4.35168C11.3895 4.15439 11.7947 4.11563 12.8058 4.15791C13.2286 4.17905 13.6302 4.20371 13.6936 4.21428L13.8099 4.23542V5.21485V6.19428L13.0102 6.20838C12.1646 6.22599 12.0342 6.24713 11.8017 6.41272C11.7453 6.45147 11.6573 6.57478 11.6009 6.68752L11.5023 6.88834L11.4917 7.82902L11.4776 8.77322H12.6015H13.7218L13.5809 9.88301L13.44 10.9928H12.4641H11.4846V14.3539V17.7185L11.6714 17.6656C12.612 17.3873 13.7359 16.8024 14.585 16.1436C14.9972 15.823 15.6983 15.1325 16.0401 14.7097C17.0124 13.5048 17.6466 12.1132 17.9214 10.57C18.0447 9.87948 18.0764 8.64639 17.9883 7.92767C17.6677 5.28179 16.2021 2.92834 13.9684 1.45919C12.8093 0.698195 11.5199 0.226093 10.1458 0.0534611C9.61033 -0.00995636 8.38076 -0.00995636 7.87342 0.0534611Z" fill="#F2F2F2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1451_2800">
                                        <rect width="18.0385" height="18.0385" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1451_2803)">
                                    <path d="M11.7497 1.74725C10.6258 1.99739 9.73442 2.66679 9.20243 3.66383C8.83602 4.34732 8.6951 5.27391 8.82898 6.06661L8.85364 6.20049H8.71624C8.63873 6.20049 8.37801 6.17583 8.13844 6.14764C5.8484 5.86579 3.75214 4.85818 2.10331 3.24458C1.87431 3.02262 1.5995 2.7302 1.49029 2.59985C1.37755 2.46949 1.27537 2.36028 1.26128 2.36028C1.16968 2.36028 0.873737 3.14593 0.796228 3.58985C0.556655 4.98501 1.09569 6.34494 2.23367 7.21515L2.33584 7.29266L2.1632 7.27152C1.71577 7.2222 1.22253 7.07775 0.880784 6.90512C0.803275 6.86636 0.732812 6.83466 0.718719 6.83466C0.704627 6.83466 0.704627 6.97558 0.715196 7.14469C0.792705 8.24391 1.32822 9.22334 2.20196 9.87512C2.54018 10.1288 2.8784 10.3014 3.27299 10.4318L3.56894 10.5269L3.36459 10.5692C3.12502 10.6185 2.41335 10.6326 2.1773 10.5938C2.05751 10.5727 2.00819 10.5762 2.00819 10.6044C2.00819 10.7066 2.24776 11.2069 2.43801 11.4922C3.04047 12.4118 4.06922 13.0424 5.15082 13.1587L5.3904 13.1833L5.23185 13.3067C4.54484 13.8281 3.48438 14.3107 2.51904 14.5327C1.89545 14.6772 0.866691 14.7547 0.310036 14.7018C0.137402 14.6842 0 14.6807 0 14.6948C0 14.7089 0.17968 14.8216 0.398114 14.9484C1.74043 15.7235 3.05808 16.1463 4.67872 16.3154C5.17901 16.3683 6.75385 16.3366 7.22243 16.2661C9.24823 15.9525 10.8513 15.2655 12.2993 14.0853C14.702 12.1299 16.2029 8.97672 16.2064 5.87636V5.36199L16.52 5.11184C16.9181 4.79124 17.5452 4.13946 17.8271 3.75191C17.9468 3.58633 18.0384 3.44188 18.0279 3.43131C18.0208 3.42074 17.894 3.45949 17.7531 3.51586C17.4642 3.63213 16.9886 3.7801 16.7173 3.83999C16.4108 3.91045 16.0232 3.97387 16.0549 3.94921C16.069 3.93512 16.1747 3.85761 16.2839 3.77305C16.5411 3.57928 16.9251 3.17412 17.0978 2.91341C17.2457 2.69497 17.4888 2.19469 17.5276 2.03615C17.5523 1.94102 17.5417 1.94454 17.0802 2.17707C16.6151 2.41312 15.9774 2.64917 15.4595 2.776L15.1918 2.84647L15.0367 2.68793C14.6915 2.33561 13.9904 1.94454 13.4408 1.79657C13.0567 1.6944 12.1161 1.66622 11.7497 1.74725Z" fill="#F2F2F2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1451_2803">
                                        <rect width="18.0385" height="18.0385" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1451_2806)">
                                    <path d="M5.67026 0.0247822C3.79595 0.0741062 2.57342 0.493359 1.59751 1.41642C0.864701 2.114 0.413739 2.95955 0.191782 4.06582C0.0191481 4.93251 0.015625 5.02059 0.015625 9.03696C0.015625 13.0569 0.0191481 13.1027 0.195305 13.987C0.441924 15.2201 1.02324 16.196 1.91812 16.8936C2.68968 17.489 3.43659 17.7743 4.71196 17.954C5.06428 18.0069 5.58922 18.0174 8.40069 18.028C12.5263 18.0491 13.3296 18.0139 14.2949 17.7708C15.2285 17.5383 15.9613 17.1226 16.592 16.4637C17.3847 15.6428 17.8075 14.6176 17.973 13.1238C18.04 12.5249 18.04 5.48916 17.973 4.89728C17.7159 2.59315 16.747 1.17685 14.9361 0.465174C14.2984 0.215031 13.5621 0.0846748 12.5298 0.0353508C11.9133 0.00716591 6.6215 -0.00340271 5.67026 0.0247822ZM12.0647 1.65599C12.8081 1.69475 13.3859 1.76521 13.7981 1.8709C14.612 2.07525 15.218 2.44165 15.602 2.94898C15.993 3.47041 16.2009 4.06229 16.3136 4.98536C16.37 5.45393 16.3982 11.6406 16.3454 12.4333C16.2502 13.92 15.986 14.6881 15.3589 15.3258C14.7036 15.9916 13.9919 16.2418 12.4875 16.3439C11.8111 16.3933 6.47001 16.3933 5.70549 16.3475C4.25043 16.2594 3.51058 16.0515 2.88346 15.5442C2.15769 14.9594 1.79129 14.1385 1.65036 12.7891C1.59751 12.2818 1.60456 5.96479 1.65741 5.35528C1.81242 3.5761 2.32328 2.62838 3.4084 2.09639C3.94744 1.83567 4.62741 1.69827 5.58218 1.65952C6.52286 1.62076 11.2932 1.62076 12.0647 1.65599Z" fill="#F2F2F2" />
                                    <path d="M13.5744 3.13219C13.2432 3.21674 12.9966 3.41756 12.8486 3.71703C12.6407 4.14333 12.7218 4.65066 13.0494 4.98183C13.3806 5.30949 13.8879 5.39052 14.3142 5.18265C14.5573 5.06287 14.7088 4.90785 14.8356 4.65066C14.9413 4.43223 14.9413 3.99888 14.8356 3.76635C14.6665 3.38938 14.3177 3.14628 13.9091 3.1181C13.7822 3.11105 13.6343 3.11457 13.5744 3.13219Z" fill="#F2F2F2" />
                                    <path d="M8.39715 4.40708C6.65672 4.64666 5.16996 5.86918 4.61683 7.52506C4.19405 8.78634 4.33145 10.1956 4.98323 11.3265C6.54398 14.0217 10.2503 14.4656 12.3889 12.2108C12.9948 11.5696 13.393 10.798 13.5832 9.89965C13.6713 9.48392 13.6713 8.55381 13.5832 8.13808C13.3789 7.17274 12.9737 6.41879 12.2937 5.73883C11.6173 5.06239 10.8528 4.65018 9.9121 4.45641C9.5774 4.38594 8.74242 4.35776 8.39715 4.40708ZM9.75356 6.12637C10.8246 6.41175 11.6349 7.23616 11.9238 8.3389C11.9696 8.51153 11.9872 8.70178 11.9837 9.03648C11.9837 9.42755 11.9696 9.54029 11.8886 9.80453C11.568 10.8756 10.7964 11.6295 9.73594 11.9114C9.34135 12.0171 8.68605 12.0171 8.29498 11.9114C7.2169 11.626 6.40658 10.8121 6.11768 9.72702C6.01551 9.34652 6.01903 8.68417 6.12121 8.29662C6.42772 7.14456 7.32259 6.30958 8.50284 6.07352C8.82697 6.01011 9.40829 6.03477 9.75356 6.12637Z" fill="#F2F2F2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1451_2806">
                                        <rect width="18.0385" height="18.0385" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* Column 2 - Pages */}

                    <div>
                        <h3 className="font-medium mb-3 md:mb-4 text-[16px] md:text-[17px] lg:text-[18px]">
                            Pages
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#949494]">
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/")}>Home</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/about")}>About Us</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/propertyListing")}>Properties</li>
                            <li className="hover:text-white cursor-pointer"onClick={()=>handleNavigate("/contact")}>Contact</li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h3 className="font-medium mb-3 md:mb-4 text-[16px] md:text-[17px] lg:text-[18px]">
                            Services
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#949494]">
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/propertyListing")}>Buy Property</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/addyourproperty")}>Sell Property</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/propertyListing")}>Rent/Lease</li>
                        </ul>
                    </div>

                    {/* Column 4 - Help */}
                    <div>
                        <h3 className="font-medium mb-3 md:mb-4 text-[16px] md:text-[17px] lg:text-[18px]">
                            Help & Support
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#949494]">
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/contact")}>Help Center</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/contact")}>Contact Support</li>
                            <li className="hover:text-white cursor-pointer" onClick={()=>handleNavigate("/")}>FAQs</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Column 5 - Contact */}
                    <div>
                        <ul className="space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] lg:text-[15px] text-white">
                            <li>Kochi, Kerala, India</li>
                            <li>+91 9061827363</li>
                            <li className="text-[12px] md:text-[13px] lg:text-[14px]">
                                buyselinfo@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
