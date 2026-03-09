import React from "react";
import "./userreview.css";
import { FaStar } from "react-icons/fa";

function UserReview() {
  const reviews = [
    {
      name: "Arun Kumar",
      city: "Coimbatore",
      rating: 5,
      comment:
        "The agent was extremely professional and helped me find the perfect home within my budget.",
      image:
        "https://i.pinimg.com/736x/8a/b4/8e/8ab48ee24a4e058c56ac63aa0d163273.jpg",
    },
    {
      name: "Priya S",
      city: "Salem",
      rating: 4,
      comment:
        "Very transparent and trustworthy. Explained everything clearly and guided me well.",
      image:
        "https://i.pinimg.com/736x/8a/b4/8e/8ab48ee24a4e058c56ac63aa0d163273.jpg",
    },
    {
      name: "Ramesh V",
      city: "Tiruppur",
      rating: 5,
      comment:
        "Excellent service! Helped me close the deal quickly and handled negotiations perfectly.",
      image:
        "https://i.pinimg.com/736x/8a/b4/8e/8ab48ee24a4e058c56ac63aa0d163273.jpg",
    },
  ];

  return (
    <div>
      {/* Reviews Section */}
      <div className="my-15 px-[20px] md:px-[55px] xl:px-[30px] 2xl:px-[77px]">
        <div
          className="
  grid gap-6
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4

  place-items-center sm:place-items-stretch
"
        >
          <div className="text-center host-grotesk space-y-[10px]">
            <h3
              className="
                 text-[20px] lg:text-[32px] 
                 font-[600] leading-[135%] 
                 "
            >
              Client Reviews & Ratings
            </h3>
            <p className="host-grotesk font-[500] leading-[150%] text-[16px]">
              User Feedback
            </p>

            <button className="jakarta font-[450] mt-3 text-[12px] leading-[100%] bg-[#84CC16] text-white rounded-[8px] py-[12px] px-8">
              Write a Review
            </button>
          </div>

          {reviews.map((review, index) => (
            <div className="relative w-[302px] sm:w-[302px]  h-[300px]">
              <div
                key={index}
                className="user-review user-review-border h-[300px] "
              >
                <div
                  className="user-review user-review-inner 
     px-[23px] pt-[22px] pb-[70px]
     flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-[21px]">
                    {/* Stars on the left */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-[18px] ${
                            i < review.rating
                              ? "text-[#84cc16]"
                              : "text-[#d1d1d1]"
                          }`}
                        >
                          <FaStar />
                        </span>
                      ))}
                    </div>

                    {/* SVG on the right */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12C7 12.5304 6.78929 13.0391 6.41421 13.4142C6.03914 13.7893 5.53043 14 5 14C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10C5.53043 10 6.03914 10.2107 6.41421 10.5858C6.78929 10.9609 7 11.4696 7 12ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12C21 12.5304 20.7893 13.0391 20.4142 13.4142C20.0391 13.7893 19.5304 14 19 14C18.4696 14 17.9609 13.7893 17.5858 13.4142C17.2107 13.0391 17 12.5304 17 12C17 11.4696 17.2107 10.9609 17.5858 10.5858C17.9609 10.2107 18.4696 10 19 10Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  {/* Comment */}
                  <p className="host-grotesk text-[16px] leading-[150%] text-[#1A1A1A] font-[500] leading-[150%] ">
                    {review.comment}
                  </p>

                  <div className="flex mt-auto mb-3 justify-end">
                    <div className="flex items-center gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.111 6.88125C2.6985 7.10175 2.4375 7.53 2.4375 8.001V15.0397C2.4375 15.7522 3.0225 16.3125 3.723 16.3125H13.1138C13.548 16.3125 13.8818 16.0095 14.0918 15.7687C14.3295 15.4972 14.5553 15.1335 14.7623 14.7315C15.18 13.9215 15.5723 12.861 15.8565 11.8117C16.1385 10.7677 16.3275 9.68775 16.3118 8.84475C16.3043 8.43075 16.2465 8.01225 16.0778 7.67775C15.8925 7.308 15.5505 7.01625 15.0548 7.01625H11.1173C11.2793 6.29625 11.4998 5.1435 11.4203 4.11525C11.376 3.54675 11.2358 2.9445 10.878 2.4735C10.4963 1.9725 9.92025 1.6875 9.1665 1.6875C8.73 1.6875 8.322 1.92 8.10525 2.304M8.10525 2.304L7.14525 4.0035C6.76125 4.683 6.17025 5.1885 5.45175 5.6355C4.97325 5.93325 4.48125 6.18075 3.972 6.438C3.6831 6.58204 3.39608 6.7298 3.111 6.88125"
                          fill="black"
                        />
                      </svg>
                      <span className="host-grotesk text-[12px] font-[500] text-[#9B9B9B]">
                        15 Likes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
    absolute
    bottom-2 sm:bottom-0
    left-11
    sm:left-11
    md:left-11
    lg:left-11
    2xl:left-11
     flex items-center gap-[14px]   py-1  rounded-full overflow-visible"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full object-cover"
                />
                <div className="host-grotesk ">
                  <p className="text-[15px] sm:text-[20px] font-[500] leading-[135%] whitespace-nowrap w-auto">
                    {review.name}
                  </p>
                  <p className="text-[10px] sm:text-[14px] font-[500] leading-[150%] text-[#9B9B9B]">
                    21/12/2025
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserReview;
