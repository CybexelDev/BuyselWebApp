import { useEffect, useState } from "react";

export function Test() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive height
  const width = 1700;
  const height = screenWidth < 900 ? 1080 : 450; // 👈 change height here

  const cornerRadius = 40;
  const topNotchWidth = 140;
  const bottomNotchWidth = 900;
  const notchDepth = 60;
   const notchDepth2 = 100;
  const notchRadius = 38;

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
    L ${bottomNotchEnd + notchRadius},${height}
    Q ${bottomNotchEnd},${height} ${bottomNotchEnd},${height - notchRadius}
    L ${bottomNotchEnd},${height - notchDepth2 + notchRadius}
    Q ${bottomNotchEnd},${height - notchDepth2} ${bottomNotchEnd - notchRadius},${height - notchDepth2}
    L ${bottomNotchStart + notchRadius},${height - notchDepth2}
    Q ${bottomNotchStart},${height - notchDepth2} ${bottomNotchStart},${height - notchDepth2 + notchRadius}
    L ${bottomNotchStart},${height - notchRadius}
    Q ${bottomNotchStart},${height} ${bottomNotchStart - notchRadius},${height}
    L ${cornerRadius},${height}
    Q 0,${height} 0,${height - cornerRadius}
    L 0,${cornerRadius}
    Q 0,0 ${cornerRadius},0
    Z
  `;

  return (
    <div className="relative flex items-center justify-center w-full py-3 px-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
      >
        <defs>
          <pattern id="bgImage" patternUnits="objectBoundingBox" width="1" height="1">
            {/* <image
              href="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              x="0"
              y="0"
              width={width}
              height={height}
              preserveAspectRatio="xMidYMid slice"
            /> */}
            <div className="flex">
                <div className="h-[300px] w-[50%]"></div>
            </div>
          </pattern>
        </defs>

        <path d={ticketPath} fill="url(#bgImage)" />
      </svg>
    </div>
  );
}