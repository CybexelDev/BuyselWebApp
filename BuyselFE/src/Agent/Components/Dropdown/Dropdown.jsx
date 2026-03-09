import { useEffect, useRef } from "react";
import { useState } from "react";

function Dropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "3m", label: "3 Months" },
    { value: "6m", label: "6 Months" },
    { value: "12m", label: "1 Year" }
  ];

  const selected = options.find((o) => o.value === value);



  useEffect(() => {
  const closeDropdown = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", closeDropdown);
}, []);

  return (
    <div ref={dropdownRef} className="relative mb-6 host-grotesk">

      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white 
        text-gray-800 text-left font-medium shadow-sm
        hover:border-[#6ABD11] transition-all duration-200 cursor-pointer"
      >
        {selected.label}
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden
        transition-all duration-500 origin-top
        ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
            className="px-4 py-3 cursor-pointer hover:bg-[#6ABD11]/10 transition"
          >
            {option.label}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dropdown;