import { ChevronLeft, ChevronRight, Heart, MapPin, Phone } from "lucide-react";
import icon from '../../assets/images/icons/icn.png'
import telegram from '../../assets/images/icons/telegram.png'
import map from '../../assets/images/icons/map.svg'
import measure from '../../assets/images/icons/measure.svg'
import apartment from '../../assets/images/icons/apartment.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";






function Propertycard({ property, click, wishlistIcon, color = "bg-[#FFFFFF]", shadow, hideContact=false,hideWishlist=false }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate()

  const images = property.images || [];
  const purpose = property?.purpose;

  console.log("PROPERTY DATA:", property);
  console.log("PURPOSE VALUE:", purpose);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  const handleShare = async (e) => {
    e.stopPropagation();

    try {
      const imageUrl = property.images?.[0];

      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const file = new File([blob], "property.jpg", { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: property.label,
          text: `${property.city} - ₹${property.price}`,
          files: [file],
        });
      } else {
        toast.error("Sharing not supported on this device");
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleWtspClick = (e) => {
    e.stopPropagation();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      e.preventDefault(); // 🚫 stop redirect
      toast.error("Please login to contact");
      return;
    }

    const url = `https://wa.me/${property.whatsapp}`;
    window.open(url, "_blank");

  }

  const handleCallClick = (e) => {
    e.stopPropagation();
    const token = localStorage.getItem("accessToken");

    if (!token) {
      e.preventDefault(); // 🚫 stop redirect
      toast.error("Please login to contact");
      return;
    }
    window.location.href = `tel:${property.phone}`;
  }



  return (
    <div
      onClick={() => navigate(`/propertyDetail/${property.id}`)}
      className={`${color} rounded-2xl overflow-hidden  w-full h-[375px] ${shadow} cursor-pointer`}>

      <div className="relative flex justify-center pt-2 px-[4px] sm:px-2">
        <img
          src={images[currentIndex]}
          alt={property.title}
          className="w-full h-[182px] rounded-[22px] object-cover"
        />

        <div className="absolute top-4 right-4 sm:right-6 flex gap-1 ">
          {!hideWishlist && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                click && click(e);
              }} className="bg-white rounded-full h-[23px] w-[23px] flex justify-center items-center cursor-pointer"
            >
              {wishlistIcon}
            </button>
          )}

          <button onClick={handleShare} className="bg-white  rounded-full h-[23px] w-[23px] flex justify-center items-center cursor-pointer" >
            <img src={telegram} alt="telegram" className="w-[12px] h-[12px]" />
          </button>
        </div>

        <div className="absolute bottom-2 left-4 sm:left-5 flex gap-1">
          <button onClick={(e) => {
            e.stopPropagation()
            prevImage()
          }} className="bg-white w-[17.5px] h-[17.5px] rounded-full shadow text-sm flex justify-center items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><path fill="none" stroke="#181212" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5m0 0l5 5" /></svg>       </button>
          <button onClick={(e) => {
            e.stopPropagation()
            nextImage()
          }} className="bg-white w-[17.5px] h-[17.5px] rounded-full shadow text-sm flex justify-center items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><path fill="none" stroke="#181212" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" /></svg>        </button>
        </div>
      </div>



      <div className="px-2 pt-2 ">
        <div className="flex flex-row space-x-3 justify-between items-center">
          <h3 className="instrument-sans font-[600] text-[13px] text-black truncate">
            {property?.label}
          </h3>


          <button className="bg-[#b8e08d] p-2 rounded-full " onClick={(e) => e.stopPropagation()}>
            <a href={property?.location} >
              <img src={icon} alt="icon" className="h-[12px] w-[12px]" />
            </a>
          </button>
        </div>


        <p className="instrument-sans flex items-center justify-between text-[12px] mb-2 text-black font-[400]">

          <span className="flex items-center gap-1">
            <img src={map} alt="map" />
            {property?.city}
          </span>

          {property?.distance_km && (
            <span className="text-gray-500 text-[11px] host-grotesk">
              {property.distance_km.toFixed(1)} km
            </span>
          )}

        </p>

<div className="text-black space-y-1">
  <h2 className="instrument-sans font-[600] text-[15px] leading-[100%]">
    Total ₹{property.price}
    {purpose === "Rent" && ( <span> / month</span> )}
  </h2>

  <p className="instrument-sans text-[11px] text-[#B0ABAB] font-[500] min-h-[16px]">
    {purpose === "Sale" && (
      <>
        ₹{property.perprice} {property.unit && ( <span> / {property.unit}</span> )}
      </>
    )}
  </p>
</div>


        <div className="instrument-sans flex justify-between my-2 font-[500] text-[12px] text-black">
          <span className="flex items-center gap-0.5 w-[45%] truncate">
            <img src={measure} alt="" className="w-[13px] h-[13px]" />
            <span className="truncate">{property?.land_area ?? "Area not available"} sq.ft</span>
          </span>
          <span className="flex items-center gap-0.5 w-[45%] truncate">
            <img src={apartment} alt="" className="w-[13px] h-[13px]" />
            <span className="truncate">Listed by {property?.owner}</span>
          </span>
        </div>



  
        <div className="flex mt-2 gap-1 w-full h-[39px] instrument-sans">
          <a
            href="#"
            onClick={handleWtspClick}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 flex-1 bg-[#6ABD11ED] text-white py-2 rounded-xl "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f0f0f0"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
            <span
              className={`instrument-sans font-[700] text-[13px]
              hidden sm:inline
            `}
            >
              WhatsApp
            </span>
          </a>

          <a
            href="#"
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2 flex-1 rounded-xl shadow-md shadow-gray-300/100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 24 24"><path fill="#000" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.98.98 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99" /></svg>
            <span className={`instrument-sans font-[700] text-[14px] -ml-[5px] 
  hidden sm:inline`}>Call</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Propertycard;
