import React from "react";
import BlogBanner from "../../Layouts/Blog/Header/BlogBanner";
import GuideLines from "../../Layouts/HelpCenter/GuideLines/GuideLines";

function HelpCenter() {
  return (
    <>
      <BlogBanner
        h1="Help Center"
        text="Everything you need to know about using Buysel. From listing your first architectural gem to closing the perfect deal."
      />
      <GuideLines />

    </>
  );
}

export default HelpCenter;
