import React, { useEffect, useState } from "react";
import "./userreview.css";
import { FaStar } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { Star } from "lucide-react";
import { addReviewToServer, deletReview } from "../../Api/userApi";
import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function UserReview({ review, id, triggerRefresh }) {

  const [reviews, setReviews] = useState([])
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewss, setReviewss] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);




  useEffect(() => {
    if (review) {
      setReviews(review);
    }
  }, [review])


  const addReview = () => {
    try {
      addReviewToServer({ rating, review: reviewss, id }).then((response) => {
        if (response) {
          triggerRefresh();
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDelete = async (id) => {
    const data = await deletReview({ id });
    if (data) {
      triggerRefresh();
    }
  }



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
            place-items-center sm:place-items-stretch"
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

            <button onClick={() => setOpen(true)} className="jakarta cursor-pointer font-[450] mt-3 text-[12px] leading-[100%] bg-[#84CC16] text-white rounded-[8px] py-[12px] px-8">
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
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => {
                        const starNumber = i + 1;

                        return (
                          <span key={i} className="text-[18px] text-[#84cc16]">
                            {review?.rating >= starNumber ? (
                              <FaStar />
                            ) : review?.rating >= starNumber - 0.5 ? (
                              <FaStarHalfAlt />
                            ) : (
                              <FaRegStar />
                            )}
                          </span>
                        );
                      })}
                    </div>

                    {/* SVG on the right */}
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(openMenuId === review.id ? null : review.id);
                        }}
                        className="p-1 cursor-pointer"
                      >
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
                      </button>
                    </div>

                    {openMenuId === review.id && (
                      <div className="absolute right-2 mt-5 w-30 bg-white shadow-lg rounded-xl z-50 p-2">

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(null);
                            handleEdit(review);
                          }}
                          className="w-full text-left px-4 py-2 rounded-xl text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          Update
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(review?.id);
                            setOpenMenuId(null);
                          }}
                          className="w-full text-left px-4 py-2 text-sm rounded-xl text-red-500 hover:bg-gray-100 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    )}


                  </div>

                  {/* Comment */}
                  <p className="host-grotesk text-[16px] leading-[150%] text-[#1A1A1A] font-[500] leading-[150%] ">
                    {review?.review}
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
                        {review?.total_likes} Likes
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
                  src={review?.user_image}
                  alt={review?.user_name}
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full object-cover"
                />
                <div className="host-grotesk ">
                  <p className="text-[15px] sm:text-[20px] font-[500] leading-[135%] whitespace-nowrap w-auto">
                    {review?.user_name}
                  </p>
                  <p className="text-[10px] sm:text-[14px] font-[500] leading-[150%] text-[#9B9B9B]">
                    {review?.created_at}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Write your review"
      >
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="relative cursor-pointer"
              onMouseLeave={() => setHover(0)}
            >
              {/* LEFT HALF */}
              <div
                className="absolute left-0 top-0 w-1/2 h-full z-10"
                onMouseEnter={() => setHover(star - 0.5)}
                onClick={() => setRating(star - 0.5)}
              />

              {/* RIGHT HALF */}
              <div
                className="absolute right-0 top-0 w-1/2 h-full z-10"
                onMouseEnter={() => setHover(star)}
                onClick={() => setRating(star)}
              />

              {/* STAR UI */}
              <Star
                size={30}
                className={`transition ${(hover || rating) >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : (hover || rating) >= star - 0.5
                    ? "fill-yellow-400/10 text-yellow-400"
                    : "text-gray-300"
                  }`}
              />
            </div>
          ))}

          <p className="ml-2 mt-1">{rating}</p>
        </div>

        <textarea
          placeholder="Write your review..."
          value={reviewss}
          onChange={(e) => setReviewss(e.target.value)}
          className="w-full h-28 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#6ABD11] resize-none"
        />

        {/* BUTTON */}
        <button
          onClick={() => {
            if (!rating || !reviewss.trim()) {
              alert("Please add rating and review");
              return;
            }
            addReview()
            console.log({ rating, reviewss });
            setOpen(false);
          }}
          className="bg-[#6ABD11] text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Submit
        </button>

      </Modal>
    </div>
  );
}

export default UserReview;
