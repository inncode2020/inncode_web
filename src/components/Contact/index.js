import React from "react";
import _data from "../../data";
import Quotation from "../Quotation";

const Contact = ({ bgColor }) => (
  <React.Fragment>
    <section
      id="contact"
      className={
        "contact-us ptb-100 " +
        (bgColor && bgColor === "white" ? "" : "gray-light-bg")
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="section-heading">
              <h3> {_data.contact.title} </h3>
              <p> {_data.contact.description} </p>
            </div>
            <div className="footer-address">
              <h6>
                <strong> {_data.contact.office} </strong>
              </h6>
              <p> {_data.contact.address} </p>
              <ul>
                <li>
                  <span> Phone: {_data.contact.phone} </span>
                </li>
                <li>
                  <span>
                    Email:
                    <a href={_data.contact.email}>{_data.contact.email}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <Quotation title="Reach Us" />
            <p className="form-message"> </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Contact;
