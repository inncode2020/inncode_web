import React from "react";

import Header from "../components/Header/header";
import BannerSection from "../components/HeroSection/BannerSection";
import TeamSection from "../components/TeamMember/team";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";
import About from "../components/AboutUs";

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
