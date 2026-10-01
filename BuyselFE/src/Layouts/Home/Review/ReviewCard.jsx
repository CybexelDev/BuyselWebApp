import React from "react";


const ReviewCard = ({ item }) => {
  return (
<div className="bg-[#bfeb8a] host-grotesk rounded-[24px] px-4 sm:px-5 md:px-[22px] pt-3 md:pt-6 h-[350px] md:h-[378px] flex flex-col relative">


<div className="flex relative justify-between items-start mb-[12px] md:mb-[20px]">

        <img
          src={item.image}
          alt={item.name}
            onError={() => console.log("IMAGE FAILED:", item.image)}

          className="w-[66px] h-[66px] rounded-full "
        />

 <div className="absolute right-0 top-6 sm:top-10 md:top-12 lg:top-[33px]">
  <svg 
    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[31px] lg:h-[31px]" 
    viewBox="0 0 31 31" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M20.6768 1.18672C22.9109 1.48945 24.8545 2.43398 26.4953 4.0082C29.0443 6.46641 30.4793 10.0387 30.9092 15.0156C30.9818 15.8027 31 17.383 31 22.4811C31 28.1785 30.9879 28.9717 30.9092 29.1715C30.782 29.4682 30.5943 29.6619 30.3037 29.7951C30.0736 29.9041 29.7709 29.9102 24.3217 29.9102C18.7938 29.9102 18.5758 29.9041 18.3578 29.7951C18.2367 29.7285 18.0611 29.6014 17.9703 29.5045C17.601 29.117 17.6191 29.4197 17.6191 23.1773V17.4678L17.7645 17.165C17.9279 16.8078 18.043 16.6988 18.4062 16.5354C18.6605 16.4203 18.7998 16.4082 20.81 16.4082C22.5658 16.4082 22.9473 16.3961 22.9473 16.3234C22.9473 16.0994 22.8201 14.6281 22.7596 14.2285C22.5658 12.8238 22.2207 11.5887 21.7787 10.7531C21.482 10.1779 20.7191 9.3666 20.2832 9.16074C19.9199 8.98516 19.3508 8.83984 19.0238 8.83984C18.4002 8.83984 17.8492 8.47051 17.6918 7.95586C17.6373 7.77422 17.6191 6.94473 17.6191 4.91035C17.6191 1.86484 17.6191 1.86484 17.9703 1.49551C18.2973 1.15039 18.5092 1.08984 19.3266 1.0959C19.7383 1.10195 20.3438 1.13828 20.6768 1.18672Z" fill="#808080"/>
<path d="M2.97714 1.18066C4.6664 1.41074 6.03476 1.92539 7.39706 2.8336C10.4123 4.85586 12.3316 8.35547 13.0521 13.1387C13.3307 15.0035 13.3428 15.282 13.367 22.1904C13.3851 26.9676 13.373 28.8506 13.3246 29.0201C13.2398 29.3047 12.9492 29.6438 12.6525 29.7951C12.4285 29.9041 12.2408 29.9102 6.69472 29.9102C1.66327 29.9102 0.942764 29.898 0.742959 29.8193C0.44628 29.6922 0.252529 29.5045 0.119327 29.2139C0.0103416 28.9838 0.00428772 28.6811 0.00428772 23.1713C0.00428772 16.6988 -0.0259857 17.159 0.428116 16.7473C0.555264 16.6322 0.767178 16.5111 0.894326 16.4748C1.03358 16.4324 1.91757 16.4082 3.17694 16.4082H5.22948L5.19316 15.6514C5.08417 13.5262 4.5998 11.5645 3.90351 10.4383C3.60077 9.9418 3.00136 9.35449 2.60175 9.16074C2.23847 8.9791 1.67538 8.83984 1.30605 8.83984C0.791397 8.83379 0.270694 8.51289 0.0890532 8.0709C0.0224514 7.91348 0.00428772 7.28379 0.00428772 4.96484C0.00428772 1.83457 0.00428772 1.81035 0.325186 1.45918C0.591592 1.16856 0.882217 1.08984 1.66933 1.0959C2.06894 1.10195 2.65624 1.13828 2.97714 1.18066Z" fill="#808080"/>
</svg>

      </div>

            </div>


<div className="flex gap-1 mb-[7px]">
  {[...Array(5)].map((_, i) => {
    const full = i < Math.floor(item.rating);
    const half = i === Math.floor(item.rating) && item.rating % 1 !== 0;

    return (
      <svg
        key={i}
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Full Star */}
        {full && (
          <path
            fill="#e0a417"
            d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.6 7.1-.6L12 2z"
          />
        )}

        {/* Half Star */}
        {half && (
          <>
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#e0a417" />
                <stop offset="50%" stopColor="#c1c1c1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.6 7.1-.6L12 2z"
            />
          </>
        )}

        {/* Empty Star */}
        {!full && !half && (
          <path
            fill="#c1c1c1"
            d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.6 7.1-.6L12 2z"
          />
        )}
      </svg>
    );
  })}
</div>
     
       <h3 className="font-[500] text-[#313131] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] leading-[18px] sm:leading-[22px] md:leading-[25px] lg:leading-[25px] mb-2 sm:mb-3 lg:mb-[8px]">
        {item.title}
      </h3>

      <p className="text-[#313131] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[25px] font-[500] mb-3 sm:mb-5 lg:mb-[10px] line-clamp-3">
        {item.review}
      </p>


      <div className="flex items-center gap-3 mt-auto pb-10 sm:pb-10 lg:pb-[42px]">

        <div className="h-12 sm:h-14 lg:h-[48px] border-l border-[#856E6E]"></div>


        <div className="flex flex-col gap-1 sm:gap-[4px]">
          <p className="font-[600] text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] text-[#474040]">
            {item.name}
          </p>
          <p className="font-[500] text-[12px] sm:text-[13px] lg:text-[14px] text-[#736f6f] leading-[14px] sm:leading-[15px] lg:leading-[16px]">
            {item.role}
          </p>
          <p className="flex items-center leading-[14px] sm:leading-[15px] lg:leading-[16px] text-[#4E4E4E] text-[12px] sm:text-[13px] lg:text-[14px] font-[500]">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.91504 6.04546C9.84199 6.07866 8.78945 7.10796 7.10273 8.79468L4.40332 11.4908L3.25117 10.3419C1.98945 9.08355 2.00605 9.09683 1.64414 9.12339C1.26895 9.14995 1 9.44214 1 9.83062C1 9.98667 1.01992 10.0597 1.08965 10.1792C1.21914 10.3984 3.9584 13.1177 4.11113 13.1841C4.27051 13.2472 4.53613 13.2472 4.69551 13.1841C4.85156 13.1177 10.7053 7.28062 10.8381 7.05815C11.024 6.74605 10.9178 6.31108 10.6057 6.10523C10.4363 5.99233 10.101 5.96577 9.91504 6.04546Z" fill="#152276"/>
            </svg>
            Verified User
          </p>
        </div>
</div>


      </div>

  );
};

export default ReviewCard;
