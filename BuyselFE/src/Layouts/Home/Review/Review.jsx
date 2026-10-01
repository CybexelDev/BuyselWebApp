import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { getTestimonial } from "../../../Api/userApi";

const Review = () => {
  const [review, setReview] = useState([]);
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getTestimonial();

      const formatted = res.map((item) => ({
        name: item.name,
        review: item.description,
        title: item.opinion,
        rating: item.rating,
        image: item.image || "",
        role: item.designation,
      }));

      setReview(formatted);
    };

    fetchReviews();
  }, []);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setVisible(1);
      } else if (window.innerWidth < 768) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = review.length;

  // Only slide when there are more than 2 reviews
  const shouldSlide = visible === 1
  ? total > 1
  : total > 2;

  // Clone reviews only when slider is active
  const clonedReviews = shouldSlide
    ? [
        ...review.slice(-visible),
        ...review,
        ...review.slice(0, visible),
      ]
    : review;

  // Set initial index
  useEffect(() => {
    if (shouldSlide) {
      setIndex(visible);
    } else {
      setIndex(0);
    }

    setTransition(true);
  }, [total, visible, shouldSlide]);

  // Auto slide
  useEffect(() => {
    if (!shouldSlide) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [shouldSlide]);

  // Infinite loop correction
  useEffect(() => {
    if (!shouldSlide) return;

    if (index === total + visible) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(visible);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [index, total, visible, shouldSlide]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  // Next button
  const nextSlide = () => {
    if (!shouldSlide) return;

    setIndex((prev) => prev + 1);
  };

  // Previous button
  const prevSlide = () => {
    if (!shouldSlide) return;

    setIndex((prev) => prev - 1);
  };

  // Progress bar
  const maxIndex = Math.max(total - visible, 0);

  const realIndex =
    total > 0
      ? (index - visible + total) % total
      : 0;

  const progress =
    shouldSlide && maxIndex > 0
      ? (realIndex / maxIndex) * 100
      : 100;

  return (
    <section className="relative w-full my-6 py-6">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-18 sm:top-8 md:-top-16 -left-22 sm:-left-12 md:-left-16 w-50 sm:w-58 md:w-[280px] h-36 sm:h-46 md:h-[257px] bg-[#84CC1659] rounded-full md:blur-3xl blur-2xl" />

        <div className="absolute bottom-8 sm:bottom-6 md:bottom-8 right-0 w-50 sm:w-58 md:w-[280px] h-40 sm:h-46 md:h-[257px] bg-[#84CC1659] rounded-full md:blur-3xl blur-xl" />
      </div>

      <div className="relative mx-[20px] lg:mx-[74px]">
        {/* Heading */}
        <div className="host-grotesk flex flex-col justify-center items-center text-center max-w-[90%] sm:max-w-[400px] md:max-w-[427px] mb-7 sm:mb-8 md:mb-[28px] mx-auto gap-[12px]">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] text-black">
            What Our{" "}
            <span className="text-[#A4A4A4]">Users</span> Say About
            <span className="text-[#84cc16]"> BuySel</span>
          </h2>

          <p className="text-[#8a7979] text-[14px] sm:text-[15px] md:text-[16px] font-[500]">
            Real experiences from buyers, renters, and property owners who
            found success with BuySel.
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: shouldSlide
                ? `translateX(-${(index * 100) / visible}%)`
                : "translateX(0)",
              transition:
                shouldSlide && transition
                  ? "transform 0.5s ease-in-out"
                  : "none",
            }}
          >
            {clonedReviews.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  width: `${100 / visible}%`,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <ReviewCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between md:justify-end gap-[13px] mt-[20px] md:mt-[37px]">
          {/* Progress Bar */}
          <div className="w-[90px] md:w-[120px] h-[3px] bg-gray-300 rounded-full overflow-hidden ml-3 md:ml-0">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mr-3">
            <button
              onClick={prevSlide}
              disabled={!shouldSlide}
              className={`w-[23px] sm:w-[37px] h-[23px] sm:h-[37px] flex items-center justify-center rounded-full bg-black text-white ${
                shouldSlide
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={!shouldSlide}
              className={`w-[23px] sm:w-[37px] h-[23px] sm:h-[37px] flex items-center justify-center rounded-full bg-black text-white ${
                shouldSlide
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

