import React from "react";

import {
  Header,
  BannerSection,
  // SubscribeSection,
  FooterSection,
  About,
} from "../components";

const AboutUs = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <BannerSection
        pageName="Our Story"
        previousPage="Home"
        currentPage="About Us"
      />
      <About />
    </div>
    {/* <SubscribeSection /> */}
    <FooterSection />
  </React.Fragment>
);

export default AboutUs;
