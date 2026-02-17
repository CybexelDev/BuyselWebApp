import React, { useEffect, useState } from "react";
import { premiumHomes } from "../../../Constance/constance";




const HomePremiumAppartment = () => {

const [homes, setHomes] = useState([]);

  useEffect(() => {
    // Simulate API call
    setHomes(premiumHomes);
  }, []);


    return (
        <div>
            <div className="w-full">
                <h1 className='text-[24px] font-semibold text-center mt-10 instrument-sans m-2'>Explore Premium Apartments, Villas and Homes</h1>
                <p className='text-center text-[16px] text-[#000000] host-grotesk mx-auto mt-2 mx-2'>Connecting you to safe, trusted, and high-quality residential listings.</p>

                <div className='md:flex flex-row gap-7 mt-14 px-10 lg:px-50'>
                    {homes.map((item) => (
                    <div  className='relative w-full basis-1/3 h-[318px] bg-gray-200 rounded-[37px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg mb-5'
                        style={{
                            backgroundImage: `url('${item.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >    
                     <div className='absolute top-5 left-5 text-black md:text-[16px] text-[13px] px-3 py-3 bg-white z-10 font-[500] rounded-[12px] host-grotesk'>{item.title}</div>

                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-400 backdrop-blur-md" />

                        <div className='absolute bottom-5 px-5 text-white z-10'>
                            <p className='text-[15px] host-grotesk'>{item.description}</p>
                        </div>
                    </div>
                 ))}
                </div>
                    
            </div>
        </div>
    )
}


export default HomePremiumAppartment