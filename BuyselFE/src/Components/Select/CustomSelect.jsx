import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SelectField({ label, icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">

      {/* LABEL */}
      <label className="flex items-center gap-2 lexend text-[16px]  font-semibold mb-2">
        {icon}
        {label}
      </label>

      {/* INPUT */}
      <div
        onClick={() => setOpen(!open)}
        className="h-[44px] px-5 rounded-full
        bg-[#F3F3F3]
        border border-[#E4E3E3]
                shadow-[inset_0px_1px_4px_rgba(0,0,0,0.15)]
        flex items-center justify-between
        lexend text-[16px] 
        cursor-pointer"
      >
        <span className="text-[#555]lexend text-[16px] ">
          {value || `Select ${label}`}
        </span>

        <ChevronDown size={18} className="text-gray-500" />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50">

          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-lime-50"
            >
              {option}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SelectField;