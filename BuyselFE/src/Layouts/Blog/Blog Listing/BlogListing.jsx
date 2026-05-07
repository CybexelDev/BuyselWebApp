import React, { useState,useRef } from "react";
import blog1 from "../../../assets/images/blog/blog1.jpg"
import blog2 from "../../../assets/images/blog/blog2.jpg"
import blog3 from "../../../assets/images/blog/blog3.png"
import blog4 from "../../../assets/images/blog/blog4.png"
import blog5 from "../../../assets/images/blog/blog5.png"
import blog6 from "../../../assets/images/blog/blog6.png"
import blog7 from "../../../assets/images/blog/blog7.png"
import blog8 from "../../../assets/images/blog/blog8.png"

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { getBlogs,searchBlogs, getBlogsByCategory} from "../../../Api/userApi";
const categories = [
  "Residential",
  "Commercial",
  "Plots & Land",
  "Rental",
  "Industrial",
];



const BlogsListing = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
 const blogGridRef=useRef(null)
 const isSearching = searchQuery?.trim();
 const navigate=useNavigate()
 const [blogs, setBlogs] = useState([]);
useEffect(() => {
  const fetchBlogs = async () => {
    let res;
    if (isSearching) {
      res = await searchBlogs(searchQuery);
    } else if (activeCategory) {
      res = await getBlogsByCategory(activeCategory);
    } else {
      res = await getBlogs();
    }

    if (!res || res.length === 0) {
      setBlogs([]);
      return;
    }

    const formatted = res.map((item, index) => ({
      id: item.id,
      title: item.blog_head,
      description: item.card_paragraph,
      date: item.date,
      image: item.image,
      tag: "Property Tips",
      category: activeCategory || "All" // optional
    }));

    setBlogs(formatted);
  };

  fetchBlogs();
}, [searchQuery, activeCategory]);

useEffect(() => {
  setCurrentPage(1);
}, [searchQuery, activeCategory]);

const filteredBlogs = blogs;
let featuredBlogs = [];
let remainingBlogs = [];

if (!isSearching) {
  if (filteredBlogs.length > 2) {
    featuredBlogs = filteredBlogs.slice(0, 2);
    remainingBlogs = filteredBlogs.slice(2);
  } else {
    featuredBlogs = [];
    remainingBlogs = filteredBlogs;
  }
} else {
  remainingBlogs = filteredBlogs;
}
const blogsPerPage = 6;
const totalPages = Math.ceil(remainingBlogs.length / blogsPerPage);

const indexOfLastBlog = currentPage * blogsPerPage;
const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

const currentBlogs = remainingBlogs.slice(
  indexOfFirstBlog,
  indexOfLastBlog
);
return (
  <div className="bg-white min-h-screen px-4 sm:px-6 md:px-9 py-2">

    <div className="flex justify-start sm:justify-center 
                    gap-4 sm:gap-10 lg:gap-14 
                    w-full mb-12 border-b pb-6 border-[#CAC0C0] 
                    overflow-x-auto scrollbar-hide">

      {categories.map((cat) => (
        <button
          key={cat}
onClick={() => {
  if (activeCategory === cat) {
    setActiveCategory(null);   
  } else {
    setActiveCategory(cat); 
      blogGridRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });   
  }
  setCurrentPage(1);
  

}

}     className={`px-6 sm:px-9 lg:px-11 
  py-2 
  rounded-full 
  text-sm sm:text-base 
  whitespace-nowrap
  cursor-pointer 
  font-[400] 
  transition 
  host-grotesk
  ${
    activeCategory === cat
      ? "bg-[#000000ed] text-[#6ABD11ED]"
      : "bg-[#6ABD11ED] text-white"
  }`}
        >
          {cat}
        </button>
      ))}
    </div>

{isSearching && currentBlogs.length === 0 && (
  <div className="text-center py-20">
    <h2 className="text-xl font-semibold text-gray-700">
      No results found 
    </h2>
    <p className="text-gray-500 mt-2">
      Try searching something else
    </p>
  </div>
)}
{!isSearching && featuredBlogs.length >= 2 && (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

      {/* LEFT */}
      <div>
        <div className="mb-6 cursor-pointer" onClick={()=>navigate(`/blog/${featuredBlogs[0].id}`)}>
          <div className="flex items-center gap-4 lg:mb-[14px]"  
>
            <span className="bg-[#6fba19] text-white text-xs px-3 py-1 rounded-full">
              {featuredBlogs[0].tag}
            </span>
            <span className="text-gray-400 text-sm">
              {featuredBlogs[0].date}
            </span>
          </div>

          <h2 className="text-[18px] sm:text-[20px] font-semibold instrument-sans text-black mb-2">
            {featuredBlogs[0].title}
          </h2>

          <p className="text-[#787272] font-normal text-[15px] sm:text-[16px] host-grotesk">
{featuredBlogs[0]?.description?.slice(0, 100) + "..."}       
          </p>
        </div>

        <img
          src={featuredBlogs[0].image}
          alt=""
          className="w-full h-[300px] sm:h-[415px] object-cover rounded-3xl"
        />
      </div>


      {/* RIGHT */}
      <div className="cursor-pointer"  
      onClick={()=>navigate(`/blog/${featuredBlogs[1].id}`)}
>
        <img
          src={featuredBlogs[1].image}
          alt=""
          className="w-full h-[300px] sm:h-[420px] object-cover rounded-3xl mb-6"
        />

        <div>
          <div className="flex items-center gap-4 mb-3"
>
            <span className="bg-[#6fba19] text-white text-xs px-3 py-1 rounded-full">
              {featuredBlogs[1].tag}
            </span>
            <span className="text-gray-400 text-sm">
              {featuredBlogs[1].date}
            </span>
          </div>

          <h2 className="text-[18px] sm:text-[20px] font-semibold instrument-sans text-black mb-2">
            {featuredBlogs[1].title}
          </h2>

          <p className="text-[#787272] font-normal text-[15px] sm:text-[16px] host-grotesk">
{featuredBlogs[1]?.description?.slice(0, 100) + "..."}          </p>
        </div>
      </div>
    </div>

)}


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={blogGridRef}>

      {currentBlogs.map((blog) => (
        <div
          key={blog.id}
          className="rounded-[30px] lg:rounded-[40px] overflow-hidden cursor-pointer"
          onClick={()=>navigate(`/blog/${blog.id}`)}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[260px] sm:h-[308px] rounded-[30px] lg:rounded-[40px] object-cover"
          />

          <div className="p-5 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#6fba19] text-white text-xs px-3 py-1 rounded-full">
                {blog.tag}
              </span>
              <span className="text-xs text-gray-400">
                {blog.date}
              </span>
            </div>

            <h3 className="text-[17px] sm:text-[19px] font-semibold text-gray-800 leading-[1.45] host-grotesk">
              {blog.title}
            </h3>
          </div>
        </div>
      ))}
    </div>


    <div className="flex justify-center mt-14 mb-20 px-2">
      <div className="flex items-center 
                      gap-3 sm:gap-5 lg:gap-7
                      bg-[#7BC21F]
                      px-3 sm:px-4 lg:px-6
                      py-2 sm:py-3
                      rounded-full
                      shadow-[0_6px_15px_rgba(0,0,0,0.15)]
                      manrope
                      overflow-x-auto scrollbar-hide">

        {/* First */}
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 lg:px-5 
                     py-1.5 sm:py-2 
                     text-xs sm:text-sm
                     bg-white rounded-full font-medium 
                     disabled:opacity-50 whitespace-nowrap"
        >
          First
        </button>

        {/* Prev */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                     flex items-center justify-center
                     bg-white rounded-full shadow
                     disabled:opacity-50"
        >
          ←
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                        flex items-center justify-center
                        rounded-full font-medium transition
                        ${
                          currentPage === page
                            ? "bg-white shadow"
                            : "text-white hover:bg-white/20"
                        }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                     flex items-center justify-center
                     bg-white rounded-full shadow
                     disabled:opacity-50"
        >
          →
        </button>

        {/* Last */}
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 lg:px-5 
                     py-1.5 sm:py-2 
                     text-xs sm:text-sm
                     bg-lime-200 rounded-full font-medium 
                     disabled:opacity-50 whitespace-nowrap"
        >
          Last
        </button>

      </div>
    </div>

  </div>
);
};

export default BlogsListing;