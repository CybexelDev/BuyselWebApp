const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

      {/* Profile Image */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="mt-4 text-xl md:text-2xl font-semibold">
        Raja Kumar
      </h2>

      <p className="text-gray-500 mt-1">
        📍 Chennai, Tamil Nadu
      </p>

      <div className="flex gap-4 mt-5">
        <button className="bg-black text-white px-5 py-2 rounded-lg">
          Edit Profile
        </button>
        <button className="bg-gray-200 px-5 py-2 rounded-lg">
          Change Password
        </button>
      </div>

    </div>
  );
};
export default ProfileInfo