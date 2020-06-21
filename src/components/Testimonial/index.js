import React, { Component } from "react";
import _data from "../../data";

const Testimonial = ({ bgColor }) => (
  <React.Fragment>
    <section
      className={
        "testimonial-section ptb-100 " +
        (bgColor && bgColor === "gray" ? "gray-light-bg" : "")
      }
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="section-heading mb-5">
              <h2>
                Testimonials <br />
                <span> what clients say </span>
              </h2>
              <p className="lead">
                Rapidiously morph transparent internal or "organic" sources
                whereas resource sucking e-business.Conveniently innovate
                compelling internal.
              </p>
              <div className="client-section-wrap d-flex flex-row align-items-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img
                      src="img/travel-cruise.jpg"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/fillurbasket.jpg"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/gurukwool-logo.jpeg"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/Paws2Junction.jpg"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="owl-carousel owl-theme client-testimonial arrow-indicator">
              {(_data.comments || []).map((comment, _index) => {
                return (
                  <div className="item" key={comment.name}>
                    <div className="testimonial-quote-wrap">
                      <div className="media author-info mb-3">
                        <div className="author-img mr-3">
                          <img
                            src={comment.image}
                            alt="client"
                            className="img-fluid rounded-circle img-testimonials"
                          />
                        </div>
                        <div className="media-body">
                          <h5 className="mb-0"> {comment.name} </h5>
                          <span> {comment.company} </span>
                        </div>
                      </div>
                      <div className="client-say">
                        <p>
                          <img
                            src="img/quote.png"
                            alt="quote"
                            className="img-fluid"
                          />
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
export default Testimonial;
