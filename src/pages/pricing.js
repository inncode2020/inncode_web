import React from "react";

import Header from "../components/Header/header";
import BannerSection from "../components/HeroSection/BannerSection";
import FaqSection from "../components/Faq/faq";
import FooterSection from "../components/Footer";
import Pricing from "../components/Pricing/pricing";

const PricingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <BannerSection
          pageName="Pricing"
          previousPage="Home"
          currentPage="Pricing"
        />
        <Pricing />
        <FaqSection />
      </div>
      <FooterSection noSubscription={true} />
    </React.Fragment>
  );
};

export default PricingPage;
