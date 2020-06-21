import React, { Component } from "react";

import Header from "../components/Header/header";
import ReviewSection from "../components/Review";
import FooterSection from "../components/Footer";
import Contact from "../components/Contact";
import BannerSection from "../components/HeroSection/BannerSection";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <BannerSection />
          <Contact />
          <ReviewSection />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
