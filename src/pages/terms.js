import React from "react";
import { Header, BannerSection, FooterSection, Terms } from "../components";

const TermsAndConditions = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <BannerSection
        pageName="Terms And Conditions"
        previousPage="Home"
        currentPage="Terms & conditons"
      />
      <Terms />
    </div>
    <FooterSection />
  </React.Fragment>
);

export default TermsAndConditions;
