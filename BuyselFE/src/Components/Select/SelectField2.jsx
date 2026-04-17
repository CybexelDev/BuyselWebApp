import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function SelectField({ label, icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find(
    (opt) => opt.value === value
  )?.label;

  return (
    <div className="relative w-full">

      <label className="flex items-center gap-2 font-semibold mb-2">
        {icon}
        {label}
      </label>

      <div
        onClick={() => setOpen(!open)}
        className="w-full h-[42px] px-4 rounded-full bg-[#F3F3F3] flex items-center justify-between cursor-pointer"
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
    </div>
  );
}