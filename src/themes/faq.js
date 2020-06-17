import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionFaq";
import FaqSection from "../components/Faq/faq";
import FooterSection from "../components/Footer";
import Pricing from "../components/Pricing/Price3";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <Pricing />
          <FaqSection />
        </div>
        <FooterSection noSubscription={true} />{" "}
      </React.Fragment>
    );
  }
}

export default Theme;
