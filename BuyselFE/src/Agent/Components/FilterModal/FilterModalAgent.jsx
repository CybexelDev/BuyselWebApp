import { useState, useEffect } from "react";
import SelectField from "../../../Components/Select/CustomSelect";

const FilterModal = ({ onClose, onApply }) => {

  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 🔥 animation state
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleApply = () => {
    const filters = {
      status,
      type,
      date,
      minPrice,
      maxPrice,
    };

    onApply(filters);
    handleClose();
  };

  const handleReset = () => {
    setStatus("");
    setType("");
    setDate("");
    setMinPrice("");
    setMaxPrice("");
  };

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300); // match animation duration
  };

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-end
        transition-opacity duration-300
        ${show ? "bg-black/30 opacity-100" : "bg-black/0 opacity-0"}
      `}
    >

      {/* PANEL */}
      <div
        className={`
          bg-white w-full max-w-[380px] h-full p-6 shadow-2xl
          transform transition-all duration-300 ease-in-out
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filter Properties</h2>
          <button
            onClick={handleClose}
            className="text-2xl hover:scale-110 transition"
          >
            &times;
          </button>
        </div>

        {/* Fields */}
        <div className="space-y-4">

          <SelectField
            label="Status"
            value={status}
            onChange={setStatus}
            options={["All", "Active", "Pending", "Sold"]}
          />

          <SelectField
            label="Property Type"
            value={type}
            onChange={setType}
            options={["All", "Apartment", "Villa", "Commercial"]}
          />

          <SelectField
            label="Date"
            value={date}
            onChange={setDate}
            options={["All", "Today", "Last 7 days", "Last 30 days"]}
          />

          {/* Price */}
          <div>
            <label className="text-sm font-semibold mb-2 block">
              Price Range
            </label>

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
              />
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleApply}
            className="flex-1 bg-[#74C122] text-white py-2 rounded-lg hover:bg-[#5fa318] transition"
          >
            Apply
          </button>

          <button
            onClick={handleReset}
            className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterModal;