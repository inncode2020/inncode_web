import React from "react";

import {
  Header,
  BannerSection,
  FaqSection,
  FooterSection,
  Pricing,
} from "../components";

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
