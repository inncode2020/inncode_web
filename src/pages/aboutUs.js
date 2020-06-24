import React from "react";

import {
  Header,
  BannerSection,
  TeamSection,
  SubscribeSection,
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
      <TeamSection />
    </div>
    <SubscribeSection />
    <FooterSection />
  </React.Fragment>
);

export default AboutUs;
