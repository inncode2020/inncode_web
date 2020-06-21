import React from "react";
import _data from "../../data";

const About = () => (
  <React.Fragment>
    <div className="overflow-hidden">
      <section id="about" className="about-us ptb-100 background-shape-img">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="about-content-left section-heading">
                <h2>Why Choose Us?</h2>
                <div className="about-us-para mb-4 mt-5">
                  We help companies, big and small, discover what makes them
                  unique and channel it into a memorable experience that
                  outsells and outshines their competition online.
                </div>
                <div className="about-us-para mb-4 mt-5">
                  We begin each project with quantitative and qualitative
                  research to remove guesswork and learn exactly what end users
                  want.
                </div>
                <div className="about-us-para mb-4 mt-5">
                  Our UX design is painstakingly prototyped, refined over
                  multiple iterations, and tested with real users. This allows
                  us to maintain true user.
                </div>
                <div className="about-us-para mb-4 mt-5">
                  We won’t rest until we fully understand your business and your
                  users. A winning website strategy is all about bringing the
                  two sides together.
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content-right d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                <img
                  src="img/aboutus.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>
);
export default About;
