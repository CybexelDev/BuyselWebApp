import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import logo from "../../../assets/images/logo/logo.png";
import agenthero from "../../../assets/images/agenthero/agenthero1.png";
import house from "../../../assets/images/about/house.png"
import { Icon } from "@iconify/react";

function AboutHeader() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isVeryLarge = screenWidth > 1800;

  /* SVG sizing */
  const width = 1700;
  const height =

    screenWidth < 900 ? 1080 : 557;

  /* Ticket shape values */
  const cornerRadius = 40;
  const topNotchWidth = 230;
  const bottomNotchWidth = 500;
  const notchDepth = 60;
  const notchDepth2 = 70;
  const notchRadius = 38;
  const notchRadius2 = 40;

  const topNotchStart = width / 2 - topNotchWidth / 2;
  const topNotchEnd = width / 2 + topNotchWidth / 2;
  const bottomNotchStart = width / 2 - bottomNotchWidth / 2;
  const bottomNotchEnd = width / 2 + bottomNotchWidth / 2;

  const ticketPath = `
    M ${cornerRadius},0
    L ${topNotchStart - notchRadius},0
    Q ${topNotchStart},0 ${topNotchStart},${notchRadius}
    L ${topNotchStart},${notchDepth - notchRadius}
    Q ${topNotchStart},${notchDepth} ${topNotchStart + notchRadius},${notchDepth}
    L ${topNotchEnd - notchRadius},${notchDepth}
    Q ${topNotchEnd},${notchDepth} ${topNotchEnd},${notchDepth - notchRadius}
    L ${topNotchEnd},${notchRadius}
    Q ${topNotchEnd},0 ${topNotchEnd + notchRadius},0
    L ${width - cornerRadius},0
    Q ${width},0 ${width},${cornerRadius}
    L ${width},${height - cornerRadius}
    Q ${width},${height} ${width - cornerRadius},${height}
    L ${bottomNotchEnd + notchRadius2},${height}
    Q ${bottomNotchEnd},${height} ${bottomNotchEnd},${height - notchRadius2}
    L ${bottomNotchEnd},${height - notchDepth2 + notchRadius2}
    Q ${bottomNotchEnd},${height - notchDepth2} ${bottomNotchEnd - notchRadius2},${height - notchDepth2}
    L ${bottomNotchStart + notchRadius2},${height - notchDepth2}
    Q ${bottomNotchStart},${height - notchDepth2} ${bottomNotchStart},${height - notchDepth2 + notchRadius2}
    L ${bottomNotchStart},${height - notchRadius2}
    Q ${bottomNotchStart},${height} ${bottomNotchStart - notchRadius2},${height}
    L ${cornerRadius},${height}
    Q 0,${height} 0,${height - cornerRadius}
    L 0,${cornerRadius}
    Q 0,0 ${cornerRadius},0
    Z
  `;

  return (
    <div
      className="relative w-full px-[13px] md:px-[18px] mt-[15px] sm:mt-[27px] lg:mt-[20px] 
                pb-10 max-[899px]:pb-3 min-[900px]:pb-0"
    >
          <div className="relative z-50">
      <Navbar top="top-[16px]" padding="lg:px-[29px]" right="right-4 sm:right-5" />
            </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 w-[7%]">
        <img
          src={logo}
          alt="logo"
          className="w-[100px]"
        />
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <clipPath id="ticketClip">
            <path d={ticketPath} />
          </clipPath>
        </defs>

        {/* Background shape */}
        <path d={ticketPath} fill="#e7e7e7" />

        {/* HTML Content */}
        <foreignObject
          x="0"
          y="0"
          width={width}
          height={height}
          clipPath="url(#ticketClip)"
        >
          <div className="w-full h-full relative bg-cover bg-center "
           style={{backgroundImage:`url(${house})`}}
          >


          </div>
        </foreignObject>
      </svg>

      
    </div>
  );
}

export default AboutHeader;
