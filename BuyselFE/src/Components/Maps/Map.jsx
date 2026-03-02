const MapEmbed = ({ latitude, longitude, height = "300px" ,showBorder=true ,rounded="rounded-[40px]" ,roundNumber=40 }) => {
  return (
    <div className={`bg-white  ${rounded}  ${        showBorder ? "border border-white p-2" : ""
}`}>
      <div className="rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height={height}
          style={{ borderRadius: roundNumber }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;