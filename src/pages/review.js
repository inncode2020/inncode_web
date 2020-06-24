import React from "react";

import {
  Header,
  ReviewSection,
  FooterSection,
  Contact,
  BannerSection,
} from "../components";

const ContactUs = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <BannerSection
        pageName="Reach Us"
        previousPage="Home"
        currentPage="contact"
      />
      <Contact />
      <ReviewSection />
    </div>
    <FooterSection noSubscription={true} />
  </React.Fragment>
);

export default ContactUs;
