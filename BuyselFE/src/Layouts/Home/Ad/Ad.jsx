import React, { useState, useEffect } from "react";
import { getSliderAdd } from "../../../Api/userApi";

/*
  Folder-tab shape built with a CSS mask made of fixed-size pieces
  (rects + quarter-circles). Corner sizes are in px, so nothing is stretched
  at any width, and no SVG / aspect-ratio is needed.

  Tune the shape with the CSS variables on the wrapper:
    --r  corner radius
    --s  shoulder (inverted corner) radius
    --tw tab width
    --th tab height
*/

const corner = (at) =>
  `radial-gradient(circle at ${at}, #000 calc(var(--r) - 0.5px), transparent var(--r))`;
const shoulder = (at) =>
  `radial-gradient(circle at ${at}, transparent var(--s), #000 calc(var(--s) + 0.5px))`;
const solid = "linear-gradient(#000, #000)";

// [image, size, position]
const layers = [
  // body: horizontal + vertical bands
  [solid, "calc(100% - var(--r) * 2) calc(100% - var(--th))", "var(--r) var(--th)"],
  [solid, "100% calc(100% - var(--th) - var(--r) * 2)", "0 calc(var(--th) + var(--r))"],
  // body: four rounded corners
  [corner("100% 100%"), "var(--r) var(--r)", "0 var(--th)"],
  [corner("0 100%"), "var(--r) var(--r)", "100% var(--th)"],
  [corner("100% 0"), "var(--r) var(--r)", "0 100%"],
  [corner("0 0"), "var(--r) var(--r)", "100% 100%"],
  // tab: bands + two rounded top corners
  // NOTE: percentage positions are relative to (container - layer size),
  // so a centered layer is simply 50%, and smaller layers get a half-size correction.
  [solid, "calc(var(--tw) - var(--r) * 2) calc(var(--th) + 1px)", "50% 0"],
  [solid, "var(--tw) calc(var(--th) - var(--r) + 1px)", "50% var(--r)"],
  [corner("100% 100%"), "var(--r) var(--r)", "calc(50% + (var(--r) - var(--tw)) / 2) 0"],
  [corner("0 100%"), "var(--r) var(--r)", "calc(50% + (var(--tw) - var(--r)) / 2) 0"],
  // shoulders where tab meets body
  [shoulder("0 0"), "var(--s) var(--s)", "calc(50% - (var(--tw) + var(--s)) / 2) calc(var(--th) - var(--s))"],
  [shoulder("100% 0"), "var(--s) var(--s)", "calc(50% + (var(--tw) + var(--s)) / 2) calc(var(--th) - var(--s))"],
];

const maskStyle = {
  maskImage: layers.map((l) => l[0]).join(","),
  maskSize: layers.map((l) => l[1]).join(","),
  maskPosition: layers.map((l) => l[2]).join(","),
  maskRepeat: "no-repeat",
  WebkitMaskImage: layers.map((l) => l[0]).join(","),
  WebkitMaskSize: layers.map((l) => l[1]).join(","),
  WebkitMaskPosition: layers.map((l) => l[2]).join(","),
  WebkitMaskRepeat: "no-repeat",
};

export default function Ad() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getSliderAdd();
        setImages(data.map((item) => item.image));
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const nextSlide = () =>
    images.length && setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    images.length &&
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="bg-white p-1 md:p-8">
      <div className="mt-23 flex items-center justify-center">
        <p className="poppins mb-7 max-w-[850px] px-3 text-center text-[20px]">
          BuySel connects you to trusted agents and genuine property listings in
          one place. Our platform is designed to make your search faster,
          smoother and more convenient.
        </p>
      </div>

      <div className="px-2 py-6 md:px-8">
        {/* Shape wrapper: sizes come from CSS variables, changed per breakpoint */}
        <div
  style={maskStyle}
  className="relative w-full overflow-hidden bg-neutral-200
    h-[190px] sm:h-[320px] md:h-[400px] lg:h-[470px]
    [--r:16px] [--s:10px] [--tw:200px] [--th:28px]
    sm:[--r:24px] sm:[--s:16px] sm:[--tw:380px] sm:[--th:44px]
    md:[--r:40px] md:[--s:23px] md:[--tw:400px] md:[--th:60px]
    lg:[--tw:580px] xl:[--tw:680px]"
>
          {/* Slides (cross-fade) */}
          {images.map((src, i) => (
            <div
              key={src + i}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}

        <button
  onClick={prevSlide}
  aria-label="Previous slide"
  className="absolute bottom-3 left-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black text-white transition hover:bg-black/70 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 md:h-14 md:w-14"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 md:h-6 md:w-6"
    viewBox="0 0 24 24"
  >
    <path
      fill="#f4f4f4"
      d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"
    />
  </svg>
</button>

<button
  onClick={nextSlide}
  aria-label="Next slide"
  className="absolute bottom-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black text-white transition hover:bg-black/70 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 md:h-14 md:w-14"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 md:h-6 md:w-6"
    viewBox="0 0 24 24"
  >
    <path
      fill="#f4f4f4"
      d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12z"
    />
  </svg>
</button>
        </div>
      </div>
    </div>
  );
}