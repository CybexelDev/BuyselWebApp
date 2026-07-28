import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function SelectField({ label, icon, options, value, onChange,registeration,  error,required=false}) {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find(
    (opt) => opt.value === value
  )?.label;
const change=registeration=="true"
  return (
    <div className="relative w-full">

<label
  className={`${change ? "lexend text-[13px] sm:text-[14px] lg:text-[16px]" : ""
    } flex items-center gap-2 font-semibold mb-2`}
>        {icon}
        {label}
                        {required && <span className="text-red-500">*</span>}

      </label>

      <div
        onClick={() => setOpen(!open)}
        className={`w-full h-[42px] px-4 rounded-full bg-[#F3F3F3] flex items-center justify-between cursor-pointer   border
    ${error ? "border-red-500" : "border-transparent"}`}
      >
        <span>
          {selectedLabel || `Select ${label}`}
        </span>

        <ChevronDown />
      </div>

      {open && (
        <div className="absolute w-full bg-white mt-2 rounded-xl shadow-lg z-50">

          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-lime-50"
            >
              {option.label}
            </div>
          ))}

        </div>
      )}
      {error && (
  <p className="text-red-500 text-xs mt-1 ml-2 host-grotesk">
    {error}
  </p>
)}
    </div>
  );
}