import React from "react";
import blog3 from "../../../src/assets/images/blog/blog3.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const blog = {
  id: 1,
  title: "Why do many sellers hesitate to list their properties online?",
  tag: "Property Tips",
  category: "Residential",
  date: "Dec 1, 2023",
  image: blog3,
  content: [
    "Selling property online has become increasingly common, yet many sellers still hesitate to list their homes or land on digital platforms. One reason is the lack of familiarity with online systems and tools.",
    "Some property owners believe that listing a property online requires technical knowledge such as uploading images, writing descriptions, and managing inquiries from potential buyers.",
    "Trust and security also play a major role. Many sellers worry about fraudulent inquiries or misuse of their personal information when listing their properties online.",
    "However, modern real estate platforms have simplified the process. They offer secure environments, verified buyers, and easy-to-use interfaces that make property listing straightforward.",
    "By embracing online platforms, sellers can reach a much wider audience and increase the chances of finding genuine buyers faster than traditional offline methods."
  ]
};


const BlogDetail = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 md:px-10 py-8">

      <div className="max-w-6xl mx-auto mb-6 ">
        <button className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#6ABD11ED] to-[#4CAF50] text-white text-sm sm:text-base font-medium instrument-sans shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(106,189,17,0.9)] hover:scale-105 cursor-pointer" onClick={()=>navigate("/blog")}>
          <IoArrowBackCircleOutline className="text-xl transition-transform duration-300 group-hover:-translate-x-1"/>
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[220px] sm:h-[350px] md:h-[480px] object-cover rounded-[20px] sm:rounded-[30px] mb-6 sm:mb-8"
        />

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#6fba19] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full">
            {blog.tag}
          </span>

          <span className="text-gray-400 text-xs sm:text-sm">
            {blog.date}
          </span>
        </div>

        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold text-gray-900 mb-5 leading-[1.3] instrument-sans">
          {blog.title}
        </h1>

        <div className="text-[#5f5f5f] text-[15px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] host-grotesk space-y-5 sm:space-y-6">
          {blog.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;