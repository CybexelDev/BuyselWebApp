import React from 'react'
import BlogBanner from '../../Layouts/Blog/Header/BlogBanner'
import BlogsListing from '../../Layouts/Blog/Blog Listing/BlogListing'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'

function Blog() {
  return (
    <>
    <BlogBanner/>
    <BlogsListing/>
    <AppPromoBanner/>
    <Footer/>
    </>
  )
}

export default Blog