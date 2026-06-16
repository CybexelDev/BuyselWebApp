import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <style>
        {`
          .shimmer {
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.9),
              transparent
            );
            animation: shimmer 1.6s infinite;
          }

          @keyframes shimmer {
            100% {
              left: 150%;
            }
          }
        `}
      </style>

      <div className="w-full rounded-[20px] overflow-hidden border border-[#e5e7eb] bg-white">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden bg-[#e9ecef]">
          <div className="shimmer"></div>
        </div>

        <div className="p-4">
          <div className="relative h-4 w-3/4 rounded bg-[#e9ecef] mb-3 overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="relative h-3 w-1/2 rounded bg-[#e9ecef] mb-4 overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="relative h-3 w-full rounded bg-[#e9ecef] mb-2 overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="relative h-3 w-5/6 rounded bg-[#e9ecef] mb-4 overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="flex justify-between">
            <div className="relative h-8 w-24 rounded bg-[#e9ecef] overflow-hidden">
              <div className="shimmer"></div>
            </div>

            <div className="relative h-8 w-8 rounded-full bg-[#e9ecef] overflow-hidden">
              <div className="shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;