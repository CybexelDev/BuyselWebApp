import React, { useState } from "react";
import blog1 from "../../../assets/images/blog/blog1.jpg"
import blog2 from "../../../assets/images/blog/blog2.jpg"
import blog3 from "../../../assets/images/blog/blog3.png"
import blog4 from "../../../assets/images/blog/blog4.png"
import blog5 from "../../../assets/images/blog/blog5.png"
import blog6 from "../../../assets/images/blog/blog6.png"
import blog7 from "../../../assets/images/blog/blog7.png"
import blog8 from "../../../assets/images/blog/blog8.png"


const categories = [
  "Residential",
  "Commercial",
  "Plots & Land",
  "Rental",
  "Industrial",
];
const blogs = [
  {
    id: 1,
    title: "Why do many sellers hesitate to list their properties online?",
    tag: "Property Tips",
    category: "Residential",
    date: "Dec 1, 2023",
    image: blog3
  },
  {
    id: 2,
    title: "Why does property renting usually take weeks or months?",
    tag: "Property Tips",
    category: "Rental",
    date: "Dec 3, 2023",
    image: blog4
  },
  {
    id: 3,
    title: "What challenges do brokers face in the real estate market?",
    tag: "Property Tips",
    category: "Commercial",
    date: "Dec 4, 2023",
    image: blog5
  },
  {
    id: 4,
    title: "Why do sellers struggle to find genuine buyers?",
    tag: "Property Tips",
    category: "Residential",
    date: "Dec 5, 2023",
    image: blog6
  },
  {
    id: 5,
    title: "Rising Brokerage Fees Affect Both Buyers and Sellers",
    tag: "Property Tips",
    category: "Commercial",
    date: "Dec 6, 2023",
    image: blog7
  },
  {
    id: 6,
    title: "What are the limitations of relying only on local brokers?",
    tag: "Property Tips",
    category: "Industrial",
    date: "Dec 8, 2023",
    image: blog8
  },

  // Repeat pattern
  {
    id: 7,
    title: "Why do many sellers hesitate to list their properties online?",
    tag: "Property Tips",
    category: "Plots & Land",
    date: "Dec 1, 2023",
    image: blog3
  },
  {
    id: 8,
    title: "Why does property renting usually take weeks or months?",
    tag: "Property Tips",
    category: "Rental",
    date: "Dec 3, 2023",
    image: blog4
  },
  {
    id: 9,
    title: "What challenges do brokers face in the real estate market?",
    tag: "Property Tips",
    category: "Commercial",
    date: "Dec 4, 2023",
    image: blog5
  },
  {
    id: 10,
    title: "Why do sellers struggle to find genuine buyers?",
    tag: "Property Tips",
    category: "Residential",
    date: "Dec 5, 2023",
    image: blog6
  },
  {
    id: 11,
    title: "Rising Brokerage Fees Affect Both Buyers and Sellers",
    tag: "Property Tips",
    category: "Industrial",
    date: "Dec 6, 2023",
    image: blog7
  },
  {
    id: 12,
    title: "What are the limitations of relying only on local brokers?",
    tag: "Property Tips",
    category: "Plots & Land",
    date: "Dec 8, 2023",
    image: blog8
  },
];

const featuredBlogs = [
  {
    id: 1,
    title: "Why do many sellers hesitate to list their properties online?",
    description:
"Some sellers believe that listing properties online is difficult or necessitates marketing expertise. Some are concerned...",
     tag: "Property Tips",
    date: "Dec 3, 2025",
    image:
      blog1,
  },
  {
    id: 2,
    title: "Why does property renting usually take weeks or months?",
    description:
      "A lot of sellers rely on brokers, who might not always put their interests first. Newspaper or internet classified ads...",
    tag: "Property Tips",
    date: "Dec 3, 2025",
    image:
      blog2,
  },
];

const BlogsListing = () => {
  const [activeCategory, setActiveCategory] = useState("Residential");
const [currentPage, setCurrentPage] = useState(1);

const filteredBlogs = blogs.filter(
  (blog) => blog.category === activeCategory
);
const blogsPerPage = 6;
const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
const indexOfLastBlog = currentPage * blogsPerPage;
const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);  return (
  <div className="bg-white min-h-screen px-4 sm:px-6 md:px-9 py-2">

    {/* ================= CATEGORIES ================= */}
    <div className="flex justify-start sm:justify-center 
                    gap-4 sm:gap-10 lg:gap-14 
                    w-full mb-12 border-b pb-6 border-[#CAC0C0] 
                    overflow-x-auto scrollbar-hide">

      {categories.map((cat) => (
        <button
          key={cat}
onClick={() => {
  setActiveCategory(cat);
  setCurrentPage(1);
}}          className={`px-6 sm:px-9 lg:px-11 
                      py-2 
                      rounded-full 
                      text-sm sm:text-base 
                      whitespace-nowrap
                      cursor-pointer 
                      font-[400] 
                      transition 
                      host-grotesk
                      bg-[#6ABD11ED] text-white`}
        >
          {cat}
        </button>
      ))}
    </div>


    {/* ================= FEATURED ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

      {/* LEFT */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-4 lg:mb-[14px]">
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
            {featuredBlogs[0].description}
          </p>
        </div>

        <img
          src={featuredBlogs[0].image}
          alt=""
          className="w-full h-[300px] sm:h-[415px] object-cover rounded-3xl"
        />
      </div>


      {/* RIGHT */}
      <div>
        <img
          src={featuredBlogs[1].image}
          alt=""
          className="w-full h-[300px] sm:h-[420px] object-cover rounded-3xl mb-6"
        />

        <div>
          <div className="flex items-center gap-4 mb-3">
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
            {featuredBlogs[1].description}
          </p>
        </div>
      </div>
    </div>


    {/* ================= BLOG GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {currentBlogs.map((blog) => (
        <div
          key={blog.id}
          className="rounded-[30px] lg:rounded-[40px] overflow-hidden cursor-pointer"
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


    {/* ================= PAGINATION ================= */}
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
