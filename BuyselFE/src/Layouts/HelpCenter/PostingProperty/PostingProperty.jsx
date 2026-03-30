import React from "react";

export default function PostingProperty() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-[104px]">

      {/* Header */}
      <p className="text-[11px] inter tracking-[2px] text-[#6A9F00] font-semibold uppercase mb-2">
        Popular in Category
      </p>

      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-black mb-8 manrope">
        Posting Property
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">

        {/* LEFT BIG CARD */}
        <div className="bg-[#E7FFC2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">

          {/* Icon */}
          <div className="absolute right-4 sm:right-8 top-4 sm:top-6 opacity-10 scale-75 sm:scale-100">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
              <path d="M20 80H60V70H20V80ZM20 60H60V50H20V60ZM10 100C7.25 100 4.89583 99.0208 2.9375 97.0625C0.979167 95.1042 0 92.75 0 90V10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0H50L80 30V90C80 92.75 79.0208 95.1042 77.0625 97.0625C75.1042 99.0208 72.75 100 70 100H10ZM45 35H70L45 10V35Z" fill="#84CC16"/>
            </svg>
          </div>

          <div>
            <span className="font-[750] bg-white text-[#003F87] px-3 py-1 rounded-full inter text-[12px]">
              MUST READ
            </span>

            <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] font-bold text-gray-900 mt-4 mb-3 leading-snug manrope max-w-[512px]">
              How to post a property step-by-step
            </h2>

            <p className="text-[14px] sm:text-[16px] host-grotesk text-[#424752] max-w-[480px]">
              A comprehensive walk-through of our submission process,
              ensuring your listing looks professional from day one.
            </p>
          </div>

          <a
            href="#"
            className="mt-6 inline-block text-[#84CC16] font-medium inter text-[16px] leading-[24px]"
          >
            Start Reading
            <span className="block mt-2 h-[3px] w-24 sm:w-28 bg-[#84CC16]"></span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {/* Card 1 */}
          <div className="bg-[#F6FFE8] rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-gray-900 text-[18px] sm:text-[20px] mb-2 manrope">
              Tips for better visibility
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#424752] host-grotesk max-w-[428px]">
              Learn how to optimize your descriptions for our internal search engine.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6FFE8] rounded-2xl p-6 sm:p-8">
            <h3 className="text-gray-900 text-[18px] sm:text-[20px] mb-2 manrope font-bold">
              Uploading images correctly
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#424752] host-grotesk max-w-[428px] leading-[20px]">
              Guidelines for resolution, lighting, and composition of architectural photos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F6FFE8] rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-gray-900 text-[18px] sm:text-[20px] mb-2 manrope">
              Virtual Tours setup
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#424752] host-grotesk max-w-[428px]">
              How to integrate 3D tours and video walkthroughs into your page.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}