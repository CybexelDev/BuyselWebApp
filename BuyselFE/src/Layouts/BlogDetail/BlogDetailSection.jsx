import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../../Api/userApi";

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(id);
      setBlog(res);
    };
    fetchBlog();
  }, [id]);

  //Loading state
  if (!blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 md:px-10 py-8">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => navigate("/blog")}
          className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full 
                     bg-gradient-to-r from-[#6ABD11ED] to-[#4CAF50] text-white 
                     text-sm sm:text-base font-medium instrument-sans shadow-lg 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(106,189,17,0.9)] 
                     hover:scale-105 cursor-pointer"
        >
          <IoArrowBackCircleOutline className="text-xl transition-transform duration-300 group-hover:-translate-x-1"/>
          <span>Back</span>
        </button>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto">

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.blog_head}
          className="w-full h-[220px] sm:h-[350px] md:h-[480px] object-cover rounded-[20px] sm:rounded-[30px] mb-6 sm:mb-8"
        />

        {/* Tag + Date */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#6fba19] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full">
            Property Tips {/* static since backend doesn't give */}
          </span>

          <span className="text-gray-400 text-xs sm:text-sm">
            {blog.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold text-gray-900 mb-5 leading-[1.3] instrument-sans">
          {blog.blog_head}
        </h1>

        {/* Content */}
        <div className="text-[#5f5f5f] text-[15px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] host-grotesk space-y-5 sm:space-y-6">
         {blog.card_paragraph
  ?.split(/\r?\n/)
  .filter((para) => para.trim() !== "")
  .map((para, index) => (
    <p key={index}>{para}</p>
))}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;