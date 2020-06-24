import React from "react";
import _data from "../../data";

const TrustedCompany = ({ bgColor }) => (
  <React.Fragment>
    <section
      className={
        "client-section ptb-100 " +
        (bgColor && bgColor === "gray" ? "gray-light-bg" : "")
      }
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5">
              <h2> {_data.trustedCompanyAboutUs.title} </h2>
              <p className="lead">{_data.trustedCompanyAboutUs.description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme clients-carousel dot-indicator">
              {(_data.trustedCompanyAboutUs.companies || []).map(
                (company, index) => {
                  return (
                    <div className="item single-client" key={index}>
                      <img
                        src={company}
                        alt="client logo"
                        className="client-img"
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default TrustedCompany;
