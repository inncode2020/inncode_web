import React, { useRef, useEffect, forwardRef } from "react";
import _data from "../../data";
import Quotation from "../Quotation";
import ReactToPrint from "react-to-print";
const ComponentToPrint = forwardRef((props, ref) => (
  <table ref={ref}>
    <thead>
      <th>column 1</th>
      <th>column 2</th>
      <th>column 3</th>
    </thead>
    <tbody>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
    </tbody>
  </table>
));

const Contact = ({ bgColor }) => {
  const componentRef = useRef();

  useEffect(() => {
    document.getElementById("print-button").click();
  }, []);

  return (
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
      <div>
        <ReactToPrint
          trigger={() => <button id="print-button">.</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    </React.Fragment>
  );
};

export default Contact;
