import React from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import property from "../../../assets/images/profile/property.svg";
import apartment from '../../../assets/images/icons/apartment.svg'
import Topbar from "../../Components/Topbar/Topbar";
import Linegraph from "../../Components/LineGraph/Linegraph";



function Dashboard() {

  // 🔹 Example Data
  const properties = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 properties
  const enquiries = [1, 2, 3, 4, 5,6,7,8,9,10]; //10 enquiries

  const maxLimit = 10;
  const totalProperties = properties.length;
  const totalEnquiries = enquiries.length;
  const remainingListings = maxLimit - totalProperties;

  const data = [
    {
      title: "Total Properties",
      value: totalProperties,
      icon:<img src={apartment} alt="" className="w-[20px] h-[20px]" />,
      badge: "+2%",
    },
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: <svg width="22" height="14" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.63887 0.0763016C1.48594 0.118489 1.35938 0.170052 1.35938 0.193489C1.35938 0.221614 3.98555 2.57943 7.20234 5.4388L13.04 10.6326L13.2932 10.6654C13.8785 10.7357 13.425 11.0966 19.8111 5.41068C23.0068 2.56536 25.6172 0.216927 25.6172 0.193489C25.6172 0.170052 25.4801 0.113802 25.3113 0.0716143C25.0318 0.00130177 23.9824 -0.00338554 13.4566 0.00130177C3.1998 0.00598907 1.88145 0.0106764 1.63887 0.0763016Z" fill="#000000"/>
<path d="M0.119528 1.36591C0.0246058 1.5581 0.0193324 1.8581 0.00351206 8.33622C-0.00703482 14.2518 0.00351206 15.1378 0.0720667 15.344C0.114254 15.4753 0.172262 15.6159 0.203903 15.6534C0.24609 15.7097 1.07929 14.9925 4.3541 12.0815L8.45683 8.43466L4.36992 4.80185C2.12343 2.80497 0.267184 1.16904 0.251364 1.16904C0.23027 1.16904 0.172262 1.2581 0.119528 1.36591Z" fill="#000000"/>
<path d="M22.6182 4.80185L18.5312 8.43466L22.634 12.0815C25.9088 14.9925 26.742 15.7097 26.7842 15.6534C26.8158 15.6159 26.8738 15.4753 26.916 15.344C26.9846 15.1378 26.9951 14.2518 26.9846 8.33622C26.9688 1.8581 26.9635 1.5581 26.8686 1.36591C26.8158 1.2581 26.7578 1.16904 26.7367 1.16904C26.7209 1.16904 24.8646 2.80497 22.6182 4.80185Z" fill="#000000"/>
<path d="M5.4041 13.0275C3.17871 15.0103 1.35938 16.6509 1.35938 16.6744C1.35938 16.6978 1.49648 16.7541 1.66523 16.7963C1.94473 16.8666 2.99941 16.8713 13.4883 16.8713C23.9771 16.8713 25.0318 16.8666 25.3113 16.7963C25.4801 16.7541 25.6172 16.6978 25.6172 16.6744C25.6172 16.6509 23.7926 15.0056 21.5619 13.0134L17.5066 9.39469L16.2199 10.5244C15.1336 11.4853 14.8857 11.6775 14.5957 11.7994C13.8838 12.1088 13.0875 12.1088 12.3861 11.8041C12.0908 11.6775 11.8482 11.49 10.7672 10.5338C10.0711 9.91969 9.48574 9.41813 9.46992 9.41813C9.45938 9.41813 7.62422 11.04 5.4041 13.0275Z" fill="#000000"/>
</svg>,
      badge: "+5%",
    },
    {
      title: "Remaining Listings",
      value: `${remainingListings}`,
      icon: <img
                src={property}
                alt="Property"
                className="w-5 h-4 xl:w-[27px] xl:h-[27px]"
              />,
      badge: "limit"
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8 mb-22 sm:mb-0">

          <Topbar />


        <h2 className="text-xl instrument-sans font-semibold my-6 text-gray-700">
          Data Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-3 gap-6 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="host-grotesk bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-[#6ABD11] bg-[#6ABD117A] mb-3">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              {/* Value + Badge */}
              <div className="flex items-center justify-between mt-1">
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h3>

                <span className="text-xs px-2 py-1 rounded-full text-[#6ABD11] bg-[#6ABD117A]">
                  {item.badge}
                </span>
              </div>

            </div>
          ))}
        </div>


        <Linegraph />

      </div>
    </div>
  );
}

export default Dashboard;