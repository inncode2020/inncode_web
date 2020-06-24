import React from "react";

import {
  Header,
  SubscribeSection,
  FooterSection,
  LandingPage,
  InncodeIntro,
  AboutSection,
  FeatureSection,
  Pricing,
  Testimonial,
  Screenshots,
  Achievements,
  TeamMember,
  ContactSection,
  TrustedCompany,
} from "../components";

const LandingTheme = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <LandingPage />
      <InncodeIntro />
      <AboutSection />
      <FeatureSection />
      <Pricing bgColor="gray" />
      <Testimonial />
      <Screenshots />
      <Achievements />
      <TeamMember />
      <ContactSection />
      <TrustedCompany />
    </div>
    <SubscribeSection />
    <FooterSection />
  </React.Fragment>
);

export default LandingTheme;
