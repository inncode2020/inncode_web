import React from "react";
import Constants from "../../Constants";

const BannerSection = ({ pageName, previousPage, currentPage }) => (
  <React.Fragment>
    <section
      className="banner-section ptb-100 background-img"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="page-header-content text-web-primary text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h1 className="text-web-primary mb-0"> {pageName} </h1>
              <div className="custom-breadcrumb">
                <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                  <li className="list-inline-item breadcrumb-item">
                    <a href={Constants.Routes.Home}> {previousPage} </a>
                  </li>
                  <li className="list-inline-item breadcrumb-item active">
                    {currentPage}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default BannerSection;
