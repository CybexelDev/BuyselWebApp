const MapEmbed = ({ latitude, longitude, height = "300px" }) => {
  return (
    <div className="bg-white p-2 rounded-[40px]  border-[1px] border-white ">
      <div className="rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height={height}
          style={{ borderRadius: 40 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;