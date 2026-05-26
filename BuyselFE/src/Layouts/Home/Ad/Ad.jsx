
import React, { useState, useEffect } from "react";
import imgs from "../../../assets/images/ad/ad2.png"
import img2 from "../../../assets/images/ad/ad3.png"
import './ad.css'

export default function ad() {

    const images = [
        `${imgs}`,
        `${img2}`,
        // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    

    const createFolderTabPath = () => {
        const width = 1000;
        const height = 450;

        const tabStart = 280;
        const tabEnd = 720;
        const tabTop = 60;
        const tabCorner = 23;
        const mainCorner = 40;

        return `
      M ${mainCorner},${tabTop}
      L ${tabStart - tabCorner},${tabTop}
      Q ${tabStart},${tabTop} ${tabStart},${tabTop - tabCorner}
      L ${tabStart},${mainCorner}
      Q ${tabStart},0 ${tabStart + mainCorner},0
      L ${tabEnd - mainCorner},0
      Q ${tabEnd},0 ${tabEnd},${mainCorner}
      L ${tabEnd},${tabTop - tabCorner}
      Q ${tabEnd},${tabTop} ${tabEnd + tabCorner},${tabTop}
      L ${width - mainCorner},${tabTop}
      Q ${width},${tabTop} ${width},${tabTop + mainCorner}
      L ${width},${height - mainCorner}
      Q ${width},${height} ${width - mainCorner},${height}
      L ${mainCorner},${height}
      Q 0,${height} 0,${height - mainCorner}
      L 0,${tabTop + mainCorner}
      Q 0,${tabTop} ${mainCorner},${tabTop}
      Z
    `;
    };

    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 450" preserveAspectRatio="none">
      <path d="${createFolderTabPath()}" fill="black"/>
    </svg>
  `)}`;

    const FolderTab = ({ children, className = "", style = {} }) => {
        return (
            <div
                className={`relative ${className}`}
                style={{
                    maskImage: `url("${svgDataUrl}")`,
                    WebkitMaskImage: `url("${svgDataUrl}")`,
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    ...style
                }}
            >
                {children}
            </div>
        );
    };

    return (
        <div className=" bg-white p-1 md:p-8">
            <div className='flex items-center justify-center mt-23'>
                <p className='text-[20px] max-w-[850px]  mb-7 poppins flex items-center justify-center text-center px-3'>BuySel connects you to trusted agents and genuine property listings in one place. Our platform is designed to make your search faster, smoother and more convenient.</p>
            </div>
            <div className="py-6 px-2 md:px-8 transition-transform duration-700 ease-in-out">
                <FolderTab className="w-full h-[150px] sm:h-[300px]  md:h-[470px] bg-cover bg-center transition-transform duration-700 ease-in-out"
                    style={{
                        backgroundImage: `url(${images[current]})`,
                        transition: "0.5s ease-in-out",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button
                        onClick={prevSlide}
                        className="absolute bottom-6 left-6 bg-black text-white md:w-15 w-9 md:h-15 h-9 rounded-full hover:bg-black/70 transition text-center flex items-center justify-center cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#f4f4f4" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute bottom-6 right-6 bg-black text-white md:w-15 w-9 md:h-15 h-9 rounded-full hover:bg-black/70 transition text-center flex items-center justify-center cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#f4f4f4" d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12z" />
                        </svg>
                    </button>
                </FolderTab>
            </div>
        </div>
    );
}
