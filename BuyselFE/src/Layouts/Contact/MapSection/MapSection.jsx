import React from "react";
import MapEmbed from "../../../Components/Maps/Map";

function MapSection() {
  return (
    <div
      className="
        w-full 
        bg-black 
        text-white
        h-auto md:h-auto xl:h-[634px]
        pb-10 pt-8 
        md:pb-12 md:pt-10
        lg:pb-12 lg:pt-10
        px-4 md:px-8 lg:px-25"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col  lg:flex-row lg:items-center lg:justify-between">

          <div className="w-full  lg:max-w-[363px]">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold mb-3 instrument-sans text-center lg:text-left">
              Visit Our Office
            </h2>

            <p className="text-[#FFFFFF80] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed host-grotesk  text-center lg:text-left">
              Come speak with our experts in person and get
              the right solutions for your property goals.
            </p>
          </div>

          {/* Info Cards */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-6 md:gap-8 lg:gap-8
              pr-0 md:pr-3 lg:pr-5
              mt-8 md:mt-10 lg:mt-15"
          >

            {/* Card 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="
                bg-[#D6FF98] 
                p-3 md:p-3 lg:p-4 
                border-[3px] md:border-[4px] lg:border-[5px] 
                rounded-full
              ">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16922 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74799 11.5373 4.33179 13.276 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.6682 13.2743 20.2517 11.5365 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.0013 10.3499 8.94189 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87868 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="#84CC16"/>
</svg>
              </div>

              <div>
                <h4 className="font-semibold text-[15px] md:text-[16px] lg:text-[18px] instrument-sans">
                  Alfa Horizon, Ernakulam
                </h4>
                <p className="host-grotesk text-[#FFFFFF80] text-[13px] md:text-[14px] lg:text-[16px]">
                  Tower 4, Kochi, Vallarpadam
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="
                bg-[#D6FF98] 
                p-3 md:p-3 lg:p-4 
                border-[3px] md:border-[4px] lg:border-[5px] 
                rounded-full
              ">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2271 15.2598L16.6871 14.9698C16.3884 14.9347 16.0857 14.9678 15.8017 15.0665C15.5176 15.1652 15.2596 15.327 15.0471 15.5398L13.2071 17.3798C10.3685 15.9357 8.06117 13.6284 6.61711 10.7898L8.46711 8.93977C8.89711 8.50977 9.10711 7.90977 9.03711 7.29977L8.74711 4.77977C8.69063 4.29186 8.45658 3.84179 8.08957 3.51536C7.72257 3.18893 7.24828 3.00897 6.75711 3.00977H5.02711C3.89711 3.00977 2.95711 3.94977 3.02711 5.07977C3.55711 13.6198 10.3871 20.4398 18.9171 20.9698C20.0471 21.0398 20.9871 20.0998 20.9871 18.9698V17.2398C20.9971 16.2298 20.2371 15.3798 19.2271 15.2598Z" fill="#84CC16"/>
</svg>
              </div>

              <div>
                <h4 className="font-semibold text-[15px] md:text-[16px] lg:text-[18px] instrument-sans">
                  Phone
                </h4>
                <p className="host-grotesk text-[#FFFFFF80] text-[13px] md:text-[14px] lg:text-[16px]">
                  +91 9061827363
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="
                bg-[#D6FF98] 
                p-3 md:p-3 lg:p-4 
                border-[3px] md:border-[4px] lg:border-[5px] 
                rounded-full
              ">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM12 5.99989C11.7551 5.99992 11.5187 6.08985 11.3356 6.25261C11.1526 6.41537 11.0357 6.63964 11.007 6.88289L11 6.99989V11.9999L11.009 12.1309C11.0318 12.3044 11.0997 12.4689 11.206 12.6079L11.293 12.7079L14.293 15.7079L14.387 15.7899C14.5624 15.926 14.778 15.9998 15 15.9998C15.222 15.9998 15.4376 15.926 15.613 15.7899L15.707 15.7069L15.79 15.6129C15.9261 15.4375 15.9999 15.2219 15.9999 14.9999C15.9999 14.7779 15.9261 14.5623 15.79 14.3869L15.707 14.2929L13 11.5849V6.99989L12.993 6.88289C12.9643 6.63964 12.8474 6.41537 12.6644 6.25261C12.4813 6.08985 12.2449 5.99992 12 5.99989Z" fill="#84CC16"/>
</svg>
              </div>

              <div>
                <h4 className="font-semibold text-[15px] md:text-[16px] lg:text-[18px] instrument-sans">
                  Working Hours
                </h4>
                <p className="host-grotesk text-[#FFFFFF80] text-[13px] md:text-[14px] lg:text-[16px]">
                  Monday – Saturday
                </p>
                <p className="host-grotesk text-[#FFFFFF80] text-[13px] md:text-[14px] lg:text-[16px]">
                  9:30AM to 6:00PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 md:mt-14 lg:mt-18">
          <MapEmbed
            height="278px"
            latitude={9.9874}
            longitude={76.2532}
            rounded="rounded-[20px] md:rounded-[24px] lg:rounded-[29px]"
            showBorder={false}
          />
        </div>

      </div>
    </div>
  );
}

export default MapSection;