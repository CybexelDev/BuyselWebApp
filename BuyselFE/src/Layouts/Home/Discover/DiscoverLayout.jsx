import React from 'react'
import image1 from "../../../assets/images/discover/image1.png"
import image2 from "../../../assets/images/discover/image2.png"
import image3 from "../../../assets/images/discover/image3.png"
import image4 from "../../../assets/images/discover/image4.png"
import image5 from "../../../assets/images/discover/image5.png"
import image6 from "../../../assets/images/discover/image6.png"
import image7 from "../../../assets/images/discover/image7.png"
import image8 from "../../../assets/images/discover/image8.png"
import image9 from "../../../assets/images/discover/image9.png"
import image10 from "../../../assets/images/discover/image10.png"
import image11 from "../../../assets/images/discover/image11.png"
import image12 from "../../../assets/images/discover/image12.png"

const properties = [
  { id: 1, image: image1, height: "h-[203px]", offset: "mt-30", text: ["Shops &", "Showrooms"] },
  { id: 2, image: image2, height: "h-[309px]", text: ["Independent", "Houses"] },
  { id: 3, image: image3, height: "h-[309px]", offset: "mt-15" },
  { id: 4, image: image4, height: "h-[309px]", text: ["Apartments"] },
  { id: 5, image: image5, height: "h-[309px]", offset: "mt-30", text: ["Office Spaces"] },
  { id: 6, image: image6, height: "h-[309px]", offset: "-mt-24", text: ["Plots / Land"] },
  { id: 7, image: image7, height: "h-[309px]", offset: "-mt-27" },
  { id: 8, image: image8, height: "h-[309px]", offset: "-mt-13", text: ["Villas"] },
  { id: 9, image: image9, height: "h-[204px]", offset: "-mt-28" },
  { id: 10, image: image10, height: "h-[205px]", offset: "mt-2", text: ["Industrial", "Properties"] },
  { id: 11, image: image11, height: "h-[214px]", offset: "-mt-10", colStart: 2 },
  { id: 12, image: image12, height: "h-[335px]", offset: "-mt-39", colStart: 4 }
];

function DiscoverLayout() {
  // card
  const PropertyCard = ({ item, isDesktop }) => (
   <div
  key={item.id}
  className={`
${isDesktop ? item.height : "h-[160px] md:h-[250px]"}
    rounded-[21px] 
    overflow-hidden 
    relative 
    ${isDesktop ? item.offset : ""}

    ${!isDesktop && item.id === 1 ? "mt-10  md:mt-10 xl:mt-0" : ""}
    ${!isDesktop && item.id === 3 ? "mt-10 md:mt-10 xl:mt-0" : ""}
        ${!isDesktop && item.id === 6 ? "md:-mt-10 xl:mt-0" : ""}
                ${!isDesktop && item.id === 5 ? "-mt-10 md:mt-0 xl:mt-0" : ""}
                                 ${!isDesktop && item.id === 11? "-mt-10 md:mt-0 xl:mt-0" : ""}
                                 ${!isDesktop&&item.id === 8 ? "-mt-10 md:-mt-10 xl:mt-0" : ""}
                                ${!isDesktop && item.id === 10 ? "md:-mt-10 xl:mt-0" : ""}
                ${!isDesktop && item.id === 12 ? "md:-mt-10 xl:mt-0" : ""}



  `}
  style={isDesktop ? { gridColumnStart: item.colStart } : {}}
>

      <img src={item.image} className="w-full h-full object-cover absolute inset-0" alt="" />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-400 backdrop-blur-sm bg-black/20" />
      
      {item.text && (
<div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black rounded-full p-1 md:p-2">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-white">
            <path d="M7.97768 0.680891C7.91791 0.438313 7.73159 0.209797 7.48198 0.0797191C7.36596 0.0164379 7.20424 0.0129223 4.19838 0.0023754C1.48432 -0.00465584 1.00971 0.00237541 0.858541 0.0445629C0.109713 0.266047 0.014791 1.31722 0.7144 1.69339C0.85151 1.77073 0.88315 1.77073 2.89409 1.78128L4.92963 1.79183L2.51792 4.20706C0.23276 6.49573 0.102682 6.63284 0.0464316 6.81214C-0.0941934 7.24808 0.0921347 7.69808 0.503463 7.91605C0.689791 8.01448 1.07651 8.02152 1.2769 7.92659C1.37182 7.88089 2.20151 7.07933 3.8187 5.46566L6.21635 3.07152V5.07542V7.07933L6.30073 7.25511C6.46245 7.60316 6.78588 7.78948 7.18315 7.75784C7.56987 7.7262 7.8687 7.47659 7.97416 7.09691C8.01635 6.95277 8.01635 0.846125 7.97768 0.680891Z" fill="currentColor" />
          </svg>
        </div>
      )}

      {item.text && (
        <div className="absolute bottom-3 left-4 text-white">
<h3 className="text-[12px] md:text-[18px] font-normal leading-[1.2] instrument-sans">
            {item.text.map((line, index) => <span key={index}>{line}<br /></span>)}
          </h3>
        </div>
      )}
    </div>
  );

  const DescriptionText = () => (
    <div className="flex flex-col items-center justify-center text-center py-10 -mt-16 xl:-mt-7 ">
      <svg viewBox="0 0 70 83" className="w-[60px] h-[70px] text-[#7B7373]" fill="none">
        <path d="M34.832 0V80.3326" stroke="currentColor"/><path d="M44.332 10.2988V81.8772H55.1887" stroke="currentColor"/><path d="M51.5703 24.7168V76.212H62.427" stroke="currentColor"/><path d="M58.8086 31.9268V70.0332H69.6653" stroke="currentColor"/><path d="M10.8555 31.9268V70.0332H-0.00120854" stroke="currentColor"/><path d="M18.0938 24.7168V76.212H7.23707" stroke="currentColor"/><path d="M25.332 10.2988V81.8772H14.4754" stroke="currentColor"/>
      </svg>
      <p className=" xl:mt-4 text-[16px] font-medium leading-relaxed max-w-[250px] instrument-sans text-black host-grotesk">
        Discover various property types and pick the perfect match for your lifestyle.
      </p>
    </div>
  );

  return (
    <div className="lg:max-w-screen-xl mx-auto px-2  lg:px-4 py-10 bg-white ">
      <h2 className="text-[24px] md:text-[32px] xl:text-[24px] font-semibold text-center mb-5 text-black instrument-sans  xl:-mb-5">
        Discover Your Ideal <br className="hidden md:block"/> Property Type
      </h2>
{/* mobile */}
<div className="grid grid-cols-3 gap-2 md:hidden">
        {properties.map((item) => <PropertyCard key={item.id} item={item} isDesktop={false} />)}
        <div className="col-span-full"><DescriptionText /></div>
      </div>
{/* tab */}
<div className="hidden md:grid xl:hidden grid-cols-4 gap-4">
        {properties.map((item) => <PropertyCard key={item.id} item={item} isDesktop={false} />)}
        <div className="col-span-full"><DescriptionText /></div>
      </div>
{/* lap */}
      <div 
        className="hidden xl:grid justify-center gap-4 gap-y-1"
        style={{ gridTemplateColumns: "repeat(5, 210px)" }}
      >
        {properties.map((item) => <PropertyCard key={item.id} item={item} isDesktop={true} />)}
        <div
          className="flex flex-col items-center justify-center text-center mt-15"
          style={{ gridRowStart: 3, gridColumnStart: 3 }}
        >
          <DescriptionText />
         
        </div>
      </div>
    </div>
  )
}

export default DiscoverLayout