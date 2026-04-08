import Map from "../../../Components/Maps/Map"

const MapSection = ({ address, latitude, longitude, landmarks }) => {
  return (
    <section className="px-3 md:px-12 lg:px-16 mt-0 md:mt-0 py-0 lg:py-1 bg-white mb-10 relative">

      {/* Heading */}
      <div className="mb-4 lg:-mb-15 relative z-20">
        <h2 className="text-[20px] md:text-[24px] font-semibold instrument-sans">
          Location & Connectivity
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[15px] instrument-sans font-[550]">
          Know the area before you move in
        </p>
      </div>

 
      <div className="lg:hidden z-30 -mb-24 relative pt-4 w-full">
        <div className="rounded-2xl overflow-hidden  w-full  xl:w-[80%] mx-auto px-5">
          <Map
            latitude={latitude}
            longitude={longitude}
            height="280px"
          />
        </div>
      </div>
      
      

      <div className="relative mt-0 lg:mt-8">

        {/* 🟢 GREEN SECTION */}
        <div className="bg-[#6ABD11ED] text-white 
                        rounded-3xl 
                        w-full md:w-[90%] lg:w-[65%] 
                        mx-auto lg:ml-auto lg:mr-0
                        p-5 sm:p-6 lg:p-5 
                        h-auto lg:h-[528px] 
                        host-grotesk
                        relative z-10 shadow-lg lg:shadow-none">

          {/* 3. Increased pt-16 to pt-24 on mobile to ensure the text starts AFTER the map overlap */}
          <div className="pt-24 lg:pt-0 
                          mt-2 sm:mt-6 lg:mt-24 
                          px-1 sm:px-2 lg:px-5 
                          ml-0 lg:ml-53">

            <p className="text-[14px] sm:text-[16px] mb-5 leading-relaxed">
              {address}
            </p>

            <div className="flex flex-col gap-1 sm:gap-2">
              {landmarks.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-black 
                             rounded-full 
                             px-3 sm:px-4 lg:pl-2 lg:pr-4 
                             py-2 sm:py-3 lg:py-2 
                             flex items-center justify-between 
                             mb-4 sm:mb-7 shadow-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-4 overflow-hidden pr-2">
                    <div className="bg-[#84CC16] text-white p-2 sm:p-2 sm:py-3 rounded-full flex-shrink-0 flex items-center justify-center">
                      <svg width="18" height="15" className="sm:w-[21px] sm:h-[18px]" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9 12.725V6.82502L10.85 11.2C10.55 11.3667 10.2333 11.45 9.90001 11.45C9.56668 11.45 9.25001 11.3667 8.95001 11.2L0.500009 6.60002C0.316675 6.50002 0.187342 6.37502 0.112009 6.22502C0.0366754 6.07502 -0.000657895 5.90835 8.77193e-06 5.72502C0.000675439 5.54168 0.0383423 5.37502 0.113009 5.22502C0.187676 5.07502 0.316675 4.95002 0.500009 4.85002L8.95001 0.250016C9.10001 0.166682 9.25434 0.104015 9.41301 0.0620154C9.57168 0.0200154 9.73401 -0.000651042 9.90001 1.56251e-05C10.066 0.000682292 10.2287 0.0216823 10.388 0.0630156C10.5473 0.104349 10.7013 0.166682 10.85 0.250016L20.375 5.45002C20.5417 5.53335 20.671 5.65435 20.763 5.81302C20.855 5.97168 20.9007 6.14235 20.9 6.32502V12.725C20.9 13.0083 20.804 13.246 20.612 13.438C20.42 13.63 20.1827 13.7257 19.9 13.725C19.6173 13.7243 19.38 13.6283 19.188 13.437C18.996 13.2457 18.9 13.0083 18.9 12.725ZM8.95001 17.2L3.95001 14.5C3.61668 14.3167 3.35834 14.0667 3.17501 13.75C2.99168 13.4333 2.90001 13.0917 2.90001 12.725V8.92502L8.95001 12.2C9.25001 12.3667 9.56668 12.45 9.90001 12.45C10.2333 12.45 10.55 12.3667 10.85 12.2L16.9 8.92502V12.725C16.9 13.0917 16.8083 13.4333 16.625 13.75C16.4417 14.0667 16.1833 14.3167 15.85 14.5L10.85 17.2C10.7 17.2833 10.546 17.346 10.388 17.388C10.23 17.43 10.0673 17.4507 9.90001 17.45C9.73268 17.4493 9.57001 17.4287 9.41201 17.388C9.25401 17.3473 9.10001 17.2847 8.95001 17.2Z" fill="white" />
                      </svg>
                    </div>

                    <span className="text-[12px] sm:text-[13px] font-medium lg:text-[16px] truncate">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-[12px] sm:text-[13px] lg:text-[16px] font-extrabold flex-shrink-0 whitespace-nowrap">
                    {item.distance} 
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 💻 DESKTOP FLOATING MAP */}
        <div className="absolute top-12 left-0 max-[1279px]:w-[520px] min-[1280px]:w-[600px] min-[1281px]:w-[660px] min-[1500px]:w-[700px] min-[1891px]:w-[800px] min-[2100px]:w-[900px] min-[2440px]:w-[1000px] z-10 hidden lg:block shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[40px]">
          <Map
            latitude={latitude}
            longitude={longitude}
            height="416px"
          />
        </div>

      </div>

    </section>
  );
};

export default MapSection;