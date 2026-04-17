import React from "react";
import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  width = "max-w-md",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div
        className={`relative w-full ${width} mx-4 bg-white/80 backdrop-blur-xl 
        border border-white/20 rounded-2xl shadow-2xl p-6 
        animate-[fadeIn_.3s_ease]`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div>{children}</div>

      </div>
    </div>
  );
};

export default Modal;