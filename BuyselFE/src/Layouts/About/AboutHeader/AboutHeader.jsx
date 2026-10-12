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
      {/* Below 1024px: responsive steps | lg+: original --u shape */}
      {/* ---------- TOP NOTCH ---------- */}
<div
  className="
    absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[var(--page-bg)]
    w-1/4 h-[40px] rounded-b-[18px]
    sm:w-1/5 sm:h-[46px] sm:rounded-b-[20px]
    md:h-[54px] md:rounded-b-[22px]
    lg:w-[calc(240*var(--u))] lg:h-[calc(70*var(--u))] lg:rounded-b-[calc(27*var(--u))]
  "
/>

{/* Left curve: 2px wider so it overlaps the notch */}
<div
  className="
    absolute top-0 z-20
    left-[calc(37.5%_-_18px)] w-[20px] h-[18px]
    bg-[radial-gradient(circle_at_0_100%,transparent_17.5px,var(--page-bg)_18px)]

    sm:left-[calc(40%_-_20px)] sm:w-[22px] sm:h-[20px]
    sm:bg-[radial-gradient(circle_at_0_100%,transparent_19.5px,var(--page-bg)_20px)]

    md:left-[calc(40%_-_22px)] md:w-[24px] md:h-[22px]
    md:bg-[radial-gradient(circle_at_0_100%,transparent_21.5px,var(--page-bg)_22px)]

    lg:left-[calc(50%_-_147*var(--u))]
    lg:w-[calc(27*var(--u)_+_2px)] lg:h-[calc(27*var(--u))]
    lg:bg-[radial-gradient(circle_at_0_100%,transparent_calc(27*var(--u)_-_0.5px),var(--page-bg)_calc(27*var(--u)))]
  "
/>

{/* Right curve: starts 2px earlier so it overlaps the notch */}
<div
  className="
    absolute top-0 z-20
    left-[calc(62.5%_-_2px)] w-[20px] h-[18px]
    bg-[radial-gradient(circle_at_100%_100%,transparent_17.5px,var(--page-bg)_18px)]

    sm:left-[calc(60%_-_2px)] sm:w-[22px] sm:h-[20px]
    sm:bg-[radial-gradient(circle_at_100%_100%,transparent_19.5px,var(--page-bg)_20px)]

    md:left-[calc(60%_-_2px)] md:w-[24px] md:h-[22px]
    md:bg-[radial-gradient(circle_at_100%_100%,transparent_21.5px,var(--page-bg)_22px)]

    lg:left-[calc(50%_+_120*var(--u)_-_2px)]
    lg:w-[calc(27*var(--u)_+_2px)] lg:h-[calc(27*var(--u))]
    lg:bg-[radial-gradient(circle_at_100%_100%,transparent_calc(27*var(--u)_-_0.5px),var(--page-bg)_calc(27*var(--u)))]
  "
/>

      {/* ---------- BOTTOM NOTCH (unchanged) ---------- */}
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
        <Navbar top="top-[16px]" padding="lg:px-[29px]" right="right-0" />
      </div>

      <div className="absolute top-1 sm:top-2 md:top-3 lg:top-[1px] xl:top-2 left-1/2 -translate-x-1/2 z-40 w-[69px] sm:w-[89px] md:w-[100px]">
        <img src={logo} alt="logo" className="w-[100px] 2xl:w-[200px]" />
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