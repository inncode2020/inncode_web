import React from "react";

import Header from "../components/Header/header";

import TeamSection from "../components/TeamMember/singleTeam";
import FooterSection from "../components/Footer";
import BannerSection from "../components/Banners/BannerSection";

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
