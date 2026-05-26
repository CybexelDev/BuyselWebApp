import React from 'react'
import BlogBanner from '../../Layouts/Blog/Header/BlogBanner'
import BlogsListing from '../../Layouts/Blog/Blog Listing/BlogListing'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'
function Blog() {
    const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
  <BlogBanner setSearchQuery={setSearchQuery} />
      <BlogsListing searchQuery={searchQuery} />
    <AppPromoBanner/>
    <Footer/>
    </>
  )
}

export default Blog