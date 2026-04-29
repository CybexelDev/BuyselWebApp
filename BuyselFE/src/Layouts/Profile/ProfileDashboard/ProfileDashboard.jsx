import React, { useEffect, useState } from "react";
import property from "../../../assets/images/profile/property.svg";
import Propertycard from "../../../Components/PropertyCard/Propertycard";
import { ArrowRight } from "lucide-react";
import { getWishlist } from "../../../Api/userApi";
import { Check } from "lucide-react";
import { Heart } from "lucide-react";
import PersonalDetails from "./PersonalDetails";
import { useNavigate } from "react-router-dom";
import { getMyActivity } from "../../../Api/userApi";
import { addToWishlist } from "../../../Api/userApi";
import { removeToWishlist } from "../../../Api/userApi";

const ProfileDashboard = ({ data, users, mode, setMode, setParentProfileData }) => {
  const [wish, setWish] = useState([]);
  const [activityData, setActivityData] = useState({});

  const navigate = useNavigate()
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();

        setWish(data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWishlist();
  }, []);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getMyActivity();
        setActivityData(data || {});
      } catch (error) {
        console.log(error);
      }
    };


    fetchActivity();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const addWishlist = async (id) => {
    try {
      await addToWishlist({ id });
    toast.success("Added to wishlist")

      setWish((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, is_wishlisted: true }
            : item
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const removeWishlist = async (id) => {
    try {
      await removeToWishlist({ id });
  toast.error("Removed from wishlist ");

      setWish((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, is_wishlisted: false }
            : item
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const activities = [
    {
      id: 1,
      icon: () => (
        <svg
          viewBox="0 0 29 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-5 xl:w-[29px] xl:h-[26px]"
        >
          <path
            d="M5.89665 0.0874386C5.28985 0.202349 4.3965 0.528934 3.82902 0.831327C2.55923 1.52683 1.43552 2.75455 0.778145 4.16371C0.502835 4.76245 0.176959 5.88736 0.075825 6.61915C-0.0477832 7.44166 -0.0140719 9.20764 0.132011 9.91524C0.963557 13.9673 4.3965 18.4669 9.9982 22.8396C11.459 23.9826 14.0379 25.7849 14.3301 25.8696C14.4987 25.9119 16.8079 24.3515 18.5272 23.021C23.6457 19.0717 27.1741 14.7717 28.2922 11.1248C28.6799 9.86686 28.7305 9.51608 28.7305 8.07064C28.7305 6.65544 28.6743 6.25628 28.3316 5.13742C27.4831 2.38563 25.3144 0.468454 22.5838 0.0511513C21.8534 -0.0577106 20.4431 0.014864 19.7127 0.196301C17.9204 0.655939 16.4371 1.53288 14.8133 3.09928L14.3751 3.51659L13.9424 3.09928C12.3187 1.53288 10.8354 0.661987 9.03742 0.196301C8.27892 0.00276756 6.64954 -0.0516624 5.89665 0.0874386Z"
            fill="#E23E3E"
          />
        </svg>
      ),
      value: activityData?.wishlist_count || 0,
      label: "Wishlist properties",
    },
    {
      id: 2,
      icon: () => (
        <img
          src={property}
          alt="Property"
          className="w-6 h-5 xl:w-[36px] xl:h-[36px]"
        />
      ),
      value: activityData?.viewed_properties_count || 0,
      label: "Properties Viewed",
    },
    {
      id: 3,
      icon: () => (
        <svg
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-5 xl:w-[27px] xl:h-[24px]"
        >
          <g clip-path="url(#clip0_1451_3540)">
            <path
              d="M1.64668 3.64254C1.49375 3.68473 1.36719 3.73629 1.36719 3.75973C1.36719 3.78786 3.99336 6.14567 7.21016 9.00504L13.0479 14.1988L13.301 14.2316C13.8863 14.3019 13.4328 14.6629 19.8189 8.97692C23.0146 6.13161 25.625 3.78317 25.625 3.75973C25.625 3.73629 25.4879 3.68004 25.3191 3.63786C25.0396 3.56754 23.9902 3.56286 13.4645 3.56754C3.20762 3.57223 1.88926 3.57692 1.64668 3.64254Z"
              fill="#84841F"
            />
            <path
              d="M0.12734 4.93215C0.0324183 5.12434 0.0271449 5.42434 0.0113246 11.9025C0.000777684 17.8181 0.0113246 18.704 0.0798792 18.9103C0.122067 19.0415 0.180075 19.1822 0.211715 19.2197C0.253903 19.2759 1.08711 18.5587 4.36191 15.6478L8.46465 12.0009L4.37773 8.36809C2.13125 6.37121 0.274996 4.73528 0.259176 4.73528C0.238082 4.73528 0.180075 4.82434 0.12734 4.93215Z"
              fill="#84841F"
            />
            <path
              d="M22.626 8.36809L18.5391 12.0009L22.6418 15.6478C25.9166 18.5587 26.7498 19.2759 26.792 19.2197C26.8236 19.1822 26.8816 19.0415 26.9238 18.9103C26.9924 18.704 27.0029 17.8181 26.9924 11.9025C26.9766 5.42434 26.9713 5.12434 26.8764 4.93215C26.8236 4.82434 26.7656 4.73528 26.7445 4.73528C26.7287 4.73528 24.8725 6.37121 22.626 8.36809Z"
              fill="#84841F"
            />
            <path
              d="M5.41191 16.5937C3.18652 18.5766 1.36719 20.2172 1.36719 20.2406C1.36719 20.2641 1.5043 20.3203 1.67305 20.3625C1.95254 20.4328 3.00723 20.4375 13.4961 20.4375C23.985 20.4375 25.0396 20.4328 25.3191 20.3625C25.4879 20.3203 25.625 20.2641 25.625 20.2406C25.625 20.2172 23.8004 18.5719 21.5697 16.5797L17.5145 12.9609L16.2277 14.0906C15.1414 15.0516 14.8936 15.2437 14.6035 15.3656C13.8916 15.675 13.0953 15.675 12.3939 15.3703C12.0986 15.2437 11.8561 15.0562 10.775 14.1C10.0789 13.4859 9.49356 12.9844 9.47773 12.9844C9.46719 12.9844 7.63203 14.6062 5.41191 16.5937Z"
              fill="#84841F"
            />
          </g>
          <defs>
            <clipPath id="clip0_1451_3540">
              <rect width="27" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      value: activityData?.enquiries_count,
      label: "Enquiries Sent",
    },
    {
      id: 4,
      icon: () => (
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-5 xl:w-[28px] xl:h-[28px]"
        >
          <g clip-path="url(#clip0_1451_3563)">
            <path
              d="M4.72862 0.0811596C4.11066 0.272566 3.95206 0.403816 2.28956 2.07178C0.758311 3.60303 0.654405 3.71241 0.446593 4.13897C0.32628 4.38507 0.178624 4.77882 0.123936 5.01397C-0.00731376 5.59913 -0.0127825 6.8296 0.123936 7.57335C0.818468 11.3796 3.58566 15.8968 7.81847 20.1296C12.095 24.4116 16.645 27.2226 20.3693 27.8952C20.9216 27.9937 21.1622 28.0046 21.8732 27.9827C22.8193 27.9499 23.1474 27.8843 23.7872 27.578C24.17 27.3921 24.3177 27.2608 25.8435 25.7351C27.2818 24.2968 27.5114 24.0452 27.6646 23.7335C28.0747 22.8913 28.0857 21.9944 27.7028 21.1851C27.5114 20.7804 27.4075 20.6655 25.4388 18.6858C24.3068 17.5483 23.2349 16.5093 23.0599 16.378C22.5896 16.0226 22.2286 15.8968 21.545 15.8694C20.8778 15.8421 20.4732 15.9515 19.9755 16.2796C19.4833 16.6023 19.2755 16.8866 18.9419 17.6632C18.7341 18.139 18.4935 18.4671 18.1599 18.7187C17.3724 19.3202 16.5247 19.4569 15.5841 19.1398C13.1888 18.3413 10.3669 15.7437 9.16378 13.2335C8.86847 12.6101 8.58409 11.6858 8.58409 11.3523C8.59503 10.4937 9.26769 9.49835 10.0989 9.12647C10.963 8.73272 11.0888 8.66163 11.3786 8.37178C12.013 7.73741 12.281 6.74757 12.0567 5.87803C11.8708 5.16163 11.7614 5.03038 9.59581 2.84835C7.21691 0.447565 7.05284 0.310846 6.27628 0.086628C5.90987 -0.0172787 5.05128 -0.022747 4.72862 0.0811596Z"
              fill="#84CC16"
            />
          </g>
          <defs>
            <clipPath id="clip0_1451_3563">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      value: activityData?.properties_listed_count,
      label: "Properties Listed",
    },
  ];

  return (
    <div
      className="mb-4 mt-10 md:mb-6 md:mt-22 lg:my-6
                px-2 sm:px-6 md:px-8 xl:pl-[42px]  xl:pr-[84px]
                bg-white min-h-screen 
                flex flex-col md:flex-row gap-4 md:gap-6"
    >
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 xl:space-y-[49px] ">
        <div
          className="bg-[#55623F] rounded-[16px] xl:rounded-[21px]
                    pt-5 md:pt-6 xl:pt-[27px]
                    pb-6 xl:pb-9
                    px-5 md:px-6 xl:px-[37px]
                    text-white shadow-[0px_2px_6.6px_0px_rgba(109,108,108,0.25)] w-full"
        >
          <h2
            className="host-grotesk 
                     text-[16px] md:text-[18px] xl:text-[20px]
                     font-[500] leading-tight mb-5 xl:mb-6"
          >
            Account Info
          </h2>

          <div className="text-sm space-y-3 md:space-y-4 lg:space-y-[10px] xl:space-y-[12px]">
            {/* Row one */}
            <div
              className="flex flex-col sm:flex-row md:flex-col lg:flex-row
                        sm:justify-between sm:items-center md:items-start lg:items-center
                        gap-1
                        host-grotesk font-[400] 
                        text-[14px] md:text-[15px]  lg:text-[13.5px] xl:text-[16px]"
            >
              <div>
                <span>User ID:</span> <span>{data?.custom_user_id}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Account Status:</span>
                <div className="flex items-center gap-1">
                  <span className="bg-[#4bae4f] p-[2px] rounded-full">
                    <Check size={10} />
                  </span>
                  Active
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="flex flex-col sm:flex-row md:flex-col lg:flex-row
                        sm:justify-between sm:items-center md:items-start lg:items-center
                        gap-1
                        host-grotesk font-[400] 
                        text-[14px] md:text-[15px] lg:text-[13.5px]  xl:text-[16px]"
            >
              <div>
                <span>Account Created On:</span> <span>{data?.created_at}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Verification Status:</span>
                <div className="flex items-center gap-1">
                  <span className="bg-[#4bae4f] p-[2px] rounded-full">
                    <Check size={10} />
                  </span>
                  Mobile
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PersonalDetails users={data} mode={mode} setMode={setMode} setParentProfileData={setParentProfileData} />
        </div>
      </div>

      <div
        className="flex flex-col 
                space-y-6 sm:space-y-8 lg:space-y-[47px] 
                lg:-mt-1 
                w-full md:w-1/2"
      >
        <div className="bg-white">
          <h2 className="text-[18px] sm:text-[20px] instrument-sans font-[600] mb-2 sm:mb-4">
            My Activity
          </h2>

          <div
            className="
      grid
      grid-cols-1 sm:grid-cols-2
      gap-y-4 sm:gap-y-[17px]
      gap-x-4 sm:gap-x-[23px]
    "
          >
            {activities.map((item) => (
              <div
                key={item.id}
                className="
            bg-[#efefef]
            py-4 sm:py-[21px]
            rounded-[14px]
            flex items-center
            gap-4 sm:gap-[16px] md:gap-[10px] lg:gap-[16px] xl:gap-[29px]
            pl-4 sm:pl-6 md:pl-3 lg:pl-[26px] xl:pl-[52px]
            shadow-[0px_4px_4px_0px_rgba(183,174,174,0.25)]
          "
              >
                {item.icon()}

                <div className="flex flex-col text-start host-grotesk text-[#000000] gap-2 sm:gap-[8px]">
                  <p className="text-[14px] sm:text-[16px] md:text-[12px] lg:text-[16px] leading-tight font-[400]">
                    {item.label}
                  </p>
                  <p className="font-[500] text-[22px] sm:text-[26px] xl:text-[30px] leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="host-grotesk text-[18px] sm:text-[20px] font-[500] leading-[14px] mb-2 sm:mb-3">
            My Wishlist
          </h2>
          <div className="grid grid-cols-2 gap-1 sm:gap-4 host-grotesk">
  {wish.length === 0 ? (
    <div className="col-span-2">
      <div className="
            bg-[#efefef]
        rounded-[18px]
        p-6 sm:p-8
        flex flex-col items-center justify-center
        text-center
            shadow-[0px_4px_4px_0px_rgba(183,174,174,0.25)]
      ">
        
        {/* Icon */}
        <div className="
          w-14 h-14 
          flex items-center justify-center 
          rounded-full 
          bg-white 
          shadow-md
          mb-4
        ">
          <Heart size={24} className="text-[#C70000]" />
        </div>

        {/* Title */}
        <h3 className="text-[16px] sm:text-[18px] font-[600] text-black">
          Your wishlist is empty
        </h3>

        {/* Subtitle */}
        <p className="text-[13px] sm:text-[14px] text-gray-500 mt-1 max-w-[260px]">
          Save properties you love to view them later anytime.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => handleNavigate("/properties")}
          className="
            mt-5
            px-5 py-2.5
            rounded-full
            bg-black text-white
            text-[13px] sm:text-[14px]
            font-[500]
            hover:bg-[#222]
            transition-all duration-300
          "
        >
          Explore Properties
        </button>
      </div>
    </div>
  ) : (
    wish.slice(-2).map((property, index) => (
      <Propertycard
        key={index}
        property={property}
        shadow="shadow-[0px_4px_13.5px_0px_rgba(129,105,105,0.25)]"
        wishlistIcon={property.is_wishlisted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
            <path fill="#e11a1a" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
          </svg>
        ) : (
          <Heart size={13} fill="none" stroke="black" />
        )}
        click={() =>
          property.is_wishlisted
            ? removeWishlist(property.id)
            : addWishlist(property.id)
        }
      />
    ))
  )}
</div>
        </div>

        {/* View all wishlist button */}
        <div className="flex">
          <button
            className="cursor-pointer
      flex items-center gap-3
      instrument-sans
      font-[700]
      text-[14px] sm:text-[15px]
      leading-[130%]
      text-black
      group
     -mt-3 sm:-mt-8"
            onClick={() => handleNavigate("/wishlist")}
          >
            View all wishlist
            <span
              className="
        flex items-center justify-center
       h-5 w-5 sm:w-[25px] sm:h-[25px]
        rounded-full
        bg-black
        transition-transform duration-200
        group-hover:translate-x-1 "
            >
              <ArrowRight
                className="w-[13px] h-[13px] sm:w-4 sm:h-4 text-white"
                strokeWidth={3}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
