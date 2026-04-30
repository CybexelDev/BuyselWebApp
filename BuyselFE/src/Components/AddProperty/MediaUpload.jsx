import React, { useRef } from "react";
import { toast } from "sonner";

function MediaUpload({ formData, setFormData, errors }) {
  const fileInputRef = useRef(null);

const updateFiles = (files) => {
  const newFiles = Array.from(files).map((file) => ({
    file,
    preview: URL.createObjectURL(file),
  }));

  const totalCount = formData.images.length + newFiles.length;

  if (totalCount > 10) {
    toast.warning("Maximum 10 images allowed");
    return;
  }

  setFormData((prev) => ({
    ...prev,
    images: [...prev.images, ...newFiles],
  }));
};

  const handleDrop = (e) => {
    e.preventDefault();
    updateFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const getImageSrc = (item) => {
  if (typeof item === "string") return item; // ✅ API image
  if (item.preview) return item.preview;     // ✅ uploaded image
  if (item.file) return URL.createObjectURL(item.file);
  return "";
};

  return (
    <div className="bg-white p-9 rounded-2xl w-full">
      <h2 className="text-[24px] font-[600] leading-[145%] lexend mb-[22px]">
        Media Upload
      </h2>

      {/* PROPERTY IMAGE (Large Box) */}
      <div className="mb-6">
        <p className="lexend text-[16px] font-[600] leading-[135%] mb-2">
          Property Image
        </p>

        <div
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`
  ${errors?.images ? "border-2 sm:border-2 border-red-500" : "border-4 sm:border-[5px] border-[#D4D4D4]"}
  bg-[#F3F3F3]
  rounded-2xl sm:rounded-[40px]
  py-10 px-6
  sm:py-14 sm:px-16
  lg:px-32
  flex flex-col items-center justify-center
  text-center
  gap-3
  text-gray-500
  cursor-pointer
  transition hover:bg-[#eaeaea]
`}>
    {errors?.images && (
  <p className="text-red-500 text-xs mt-2 ml-2">
    {errors.images}
  </p>
)}
          <svg
            width="54"
            height="52"
            viewBox="0 0 54 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 51.9167C4.83333 51.9167 3.26444 51.2645 1.96 49.9601C0.655555 48.6556 0.00222222 47.0856 0 45.2501V38.5834C0 37.6389 0.32 36.8478 0.96 36.2101C1.6 35.5723 2.39111 35.2523 3.33333 35.2501C4.27556 35.2478 5.06778 35.5678 5.71 36.2101C6.35222 36.8523 6.67111 37.6434 6.66667 38.5834V45.2501H46.6667V38.5834C46.6667 37.6389 46.9867 36.8478 47.6267 36.2101C48.2667 35.5723 49.0578 35.2523 50 35.2501C50.9422 35.2478 51.7344 35.5678 52.3767 36.2101C53.0189 36.8523 53.3378 37.6434 53.3333 38.5834V45.2501C53.3333 47.0834 52.6811 48.6534 51.3767 49.9601C50.0722 51.2667 48.5022 51.9189 46.6667 51.9167H6.66667ZM23.3333 11.4167L17.0833 17.6667C16.4167 18.3334 15.6256 18.6534 14.71 18.6267C13.7944 18.6 13.0022 18.2523 12.3333 17.5834C11.7222 16.9167 11.4022 16.1389 11.3733 15.2501C11.3444 14.3612 11.6644 13.5834 12.3333 12.9167L24.3333 0.916717C24.6667 0.583383 25.0278 0.347828 25.4167 0.21005C25.8056 0.0722726 26.2222 0.00227351 26.6667 5.12827e-05C27.1111 -0.00217094 27.5278 0.0678281 27.9167 0.21005C28.3056 0.352273 28.6667 0.587828 29 0.916717L41 12.9167C41.6667 13.5834 41.9867 14.3612 41.96 15.2501C41.9333 16.1389 41.6133 16.9167 41 17.5834C40.3333 18.25 39.5422 18.5978 38.6267 18.6267C37.7111 18.6556 36.9189 18.3356 36.25 17.6667L30 11.4167V35.2501C30 36.1945 29.68 36.9867 29.04 37.6267C28.4 38.2667 27.6089 38.5856 26.6667 38.5834C25.7244 38.5812 24.9333 38.2612 24.2933 37.6234C23.6533 36.9856 23.3333 36.1945 23.3333 35.2501V11.4167Z"
              fill="#84CC16"
              fill-opacity="0.34"
            />
          </svg>

          <p className="text-lg sm:text-2xl lexend leading-[145%] text-[#B4B4B4]">
            Click to upload or drag and drop
          </p>

          <p className="text-[#A2A2A2] inter text-sm sm:text-base leading-[150%]">
            PNG, JPG, JPEG (MAX. 10MB each)
          </p>
        </div>

        <input
          type="file"
          multiple
          accept="image/png, image/jpeg"
          ref={fileInputRef}
          onChange={(e) => updateFiles(e.target.files)}
          className="hidden"
        />

        {formData.images?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {formData.images.map((item, index) => (
  <div key={index} className="relative">
    <img
  src={getImageSrc(item)}
  alt={`preview-${index}`}
  className="w-20 h-16 object-cover rounded-lg border-2 border-[#F3F3F3]"
/>

    <button
      type="button"
      onClick={() => {
        URL.revokeObjectURL(item.preview); // ✅ cleanup

        const updated = formData.images.filter((_, i) => i !== index);
        setFormData((prev) => ({...prev,images: updated,}));
      }}
      className="absolute top-1 right-1 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full cursor-pointer"
    >
      ✕
    </button>
  </div>
))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaUpload;
