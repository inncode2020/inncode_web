import React from "react";

import Header from "../components/Header/header";

import TeamSection from "../components/TeamMember/singleTeam";

import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";
import BannerSection from "../components/HeroSection/BannerSection";

const SingleTeam = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <BannerSection
        pageName="INNCODER"
        previousPage="Home"
        currentPage="team"
      />
      <TeamSection />
    </div>
    <FooterSection />
  </React.Fragment>
);

export default SingleTeam;
