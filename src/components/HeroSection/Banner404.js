import React from "react";
import { Link } from "react-router-dom";

const Banner404 = () => {
  return (
    <React.Fragment>
      <section
        className="hero-section ptb-100 background-img full-screen"
        style={{
          backgroundImage: "url('img/app-hero-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="error-content text-center text-web-primary">
                <div className="notfound-404">
                  <h1 className="text-web-primary"> 404 </h1>
                </div>
                <h3 className="text-web-primary">
                  Sorry, something went wrong
                </h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <Link to="/" className="btn app-store-btn">
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner404;
