import Navbar from "../../../Components/Navbar/Navbar";
import logo from "../../../assets/images/logo/logo.png";
import house from "../../../assets/images/about/house.png?w=1600&format=webp";

/* convert a "1700px design space" value to a scaled value */
const u = (n) => `calc(${n} * var(--u))`;

/* Ticket shape values (same numbers as the old SVG) */
const cornerRadius = 40;
const topNotchWidth = 240;
const notchDepth = 70;
const notchRadius = 27;
const bottomNotchWidth = 900;
const notchDepth2 = 110;
const notchRadius2 = 58;


const PAGE_BG = "#ffffff"; // <- set to your page background colour

/* Notches + concave fillets, drawn with plain CSS */
function TicketNotches() {
  const bg = `var(--page-bg)`;
  const fillet = (r, pos) =>
    `radial-gradient(circle at ${pos}, transparent calc(${u(r)} - 0.5px), ${bg} ${u(r)})`;

  return (
    <>
      {/* ---------- TOP NOTCH ---------- */}
      <div
        className="absolute top-0 z-20"
        style={{
          left: `calc(50% - ${u(topNotchWidth / 2)})`,
          width: u(topNotchWidth),
          height: u(notchDepth),
          background: bg,
          borderRadius: `0 0 ${u(notchRadius)} ${u(notchRadius)}`,
        }}
      />
      <div
        className="absolute top-0 z-20"
        style={{
          left: `calc(50% - ${u(topNotchWidth / 2)} - ${u(notchRadius)})`,
          width: u(notchRadius),
          height: u(notchRadius),
          background: fillet(notchRadius, "0 100%"),
        }}
      />
      <div
        className="absolute top-0 z-20"
        style={{
          left: `calc(50% + ${u(topNotchWidth / 2)})`,
          width: u(notchRadius),
          height: u(notchRadius),
          background: fillet(notchRadius, "100% 100%"),
        }}
      />

      {/* ---------- BOTTOM NOTCH ---------- */}
      <div
        className="absolute bottom-0 z-20"
        style={{
          left: `calc(50% - ${u(bottomNotchWidth / 2)})`,
          width: u(bottomNotchWidth),
          height: u(notchDepth2),
          background: bg,
          borderRadius: `${u(notchRadius2)} ${u(notchRadius2)} 0 0`,
        }}
      />
      <div
        className="absolute bottom-0 z-20"
        style={{
          left: `calc(50% - ${u(bottomNotchWidth / 2)} - ${u(notchRadius2)})`,
          width: u(notchRadius2),
          height: u(notchRadius2),
          background: fillet(notchRadius2, "0 0"),
        }}
      />
      <div
        className="absolute bottom-0 z-20"
        style={{
          left: `calc(50% + ${u(bottomNotchWidth / 2)})`,
          width: u(notchRadius2),
          height: u(notchRadius2),
          background: fillet(notchRadius2, "100% 0"),
        }}
      />
    </>
  );
}

function AboutHeader() {
  return (
    <div
      className="relative w-full px-[13px] md:px-[18px] mt-[15px] sm:mt-[27px] lg:mt-[20px]
                pb-10 max-[899px]:pb-3 min-[900px]:pb-0"
    >
      <div className="relative z-50">
        <Navbar top="top-[16px]" padding="lg:px-[29px]" right="right-4 sm:right-5" />
      </div>

      <div className="absolute top-0 lg:top-2 left-1/2 -translate-x-1/2 z-40 w-[7%]">
        <img src={logo} loading="lazy" alt="logo" className="w-[100px] 2xl:w-[200px]" />
      </div>

      {/* ================= TICKET (was the <svg>) ================= */}
      <div
        className="
          relative w-full overflow-hidden bg-[#e7e7e7]
          max-[899px]:aspect-[1700/1080]
          min-[900px]:aspect-[1700/557]
        "
        style={{
          containerType: "inline-size",
          "--u": "calc(100cqw / 1700)",
          "--page-bg": PAGE_BG,
          borderRadius: u(cornerRadius),
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${house})` }}
        />

        <TicketNotches />
      </div>
    </div>
  );
}

export default AboutHeader;