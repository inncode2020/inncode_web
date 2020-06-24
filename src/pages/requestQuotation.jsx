import React from "react";
import { Header, BannerSection, FooterSection } from "../components";
import Quotation from "../components/Quotation";

const RequestQuotation = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main quote-form">
        <BannerSection
          pageName="Request Quotation"
          previousPage="Home"
          currentPage="Request Quotation"
        />
        <Quotation title="Get Quotation" />
      </div>
      <FooterSection />
    </React.Fragment>
  );
};

export default RequestQuotation;
