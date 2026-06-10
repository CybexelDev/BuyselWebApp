import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SelectField({ label, icon, options, value, onChange ,error,required=false}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">

      {/* LABEL */}
      <label className="flex items-center gap-2 font-semibold mb-2
      text-sm md:text-base lexend">
        {icon}
        {label}
          {required && <span className="text-red-500">*</span>}
      </label>

      {/* INPUT */}
      <div
        onClick={() => setOpen(!open)}
        className={`
w-full
h-[42px] md:h-[46px]
px-4 md:px-5
rounded-full
bg-[#F3F3F3]
border
${error ? "border-red-500" : "border-[#E4E3E3]"}
shadow-[inset_0px_1px_4px_rgba(0,0,0,0.15)]
flex items-center justify-between
text-sm md:text-[16px]
cursor-pointer
`}
      >
        <span className="text-[#555] truncate">
          {value || `Select ${label}`}
        </span>

        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
          absolute left-0 top-full
          mt-2
          w-full
          max-h-[220px]
          overflow-y-auto
          bg-white
          border border-gray-200
          rounded-xl
          shadow-lg
          z-50
        "
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="
              px-4 py-2.5
              text-sm md:text-[15px]
              cursor-pointer
              hover:bg-lime-50
              transition
            "
            >
              {option}
            </div>
          ))}
          
        </div>
      )}
      {error && (
  <p className="text-red-500 text-xs mt-1 ml-2">
    {error}
  </p>
)}
    </div>
    
  );
}

export default SelectField;