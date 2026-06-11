import React from "react";
import BlogBanner from "../../Layouts/Blog/Header/BlogBanner";
import GuideLines from "../../Layouts/HelpCenter/GuideLines/GuideLines";
import PostingProperty from "../../Layouts/HelpCenter/PostingProperty/PostingProperty";
import FAQSection from "../../Layouts/Home/Faq/FaqSectionLayout";
import AppPromoBanner from "../../Components/AppPromoBanner/AppPromoBanner";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <BlogBanner
        h1="Help Center"
        text="Everything you need to know about using Buysel. From listing your first architectural gem to closing the perfect deal."
          setSearchQuery={setSearchQuery}

      />
      <GuideLines  searchQuery={searchQuery} />
      <PostingProperty/>
      <FAQSection/>
      <AppPromoBanner/>
      <Footer/>

    </>
  );
}

export default HelpCenter;
