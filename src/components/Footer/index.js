import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer-section">
          <div
            className={
              "footer-top background-img " +
              (this.props.noSubscription ? "py-5" : "pt-150 pb-5")
            }
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-3 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-web-primary">
                    <img
                      src="img/logo-white-1x.png"
                      alt="footer logo"
                      width="120"
                      className="img-fluid mb-3"
                    />
                    <p>
                      Holisticly empower premium architectures without value -
                      added ideas.Seamlessly evolve cross-platform experiences.
                    </p>
                    <div className="social-list-wrap">
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <Link to="/#" target="_blank" title="Facebook">
                            <span className="ti-facebook"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#" target="_blank" title="Twitter">
                            <span className="ti-twitter"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#" target="_blank" title="Instagram">
                            <span className="ti-instagram"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#" target="_blank" title="printerst">
                            <span className="ti-pinterest"> </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-web-primary">
                    <h5 className="mb-3 text-web-primary"> Others Links </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <Link to="/team"> About Us </Link>
                      </li>
                      <li className="mb-2">
                        <Link to="/review"> Contact Us </Link>
                      </li>
                      <li className="mb-2">
                        <Link to="/comingSoon"> Pricing </Link>
                      </li>
                      {/* <li className="mb-2">
                        <Link to="/comingSoon"> Privacy Policy </Link>
                      </li> */}
                      {/* <li className="mb-2">
                        <Link to="/comingSoon"> Terms and Conditions </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-web-primary">
                    <h5 className="mb-3 text-web-primary"> Support </h5>
                    <ul className="list-unstyled support-list">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-location-pin mr-2"> </span>
                        Sector 55, Sushant Lok Block 2, Gurgaon, Haryana,
                        <br />
                        India - 122011
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-mobile mr-2"> </span>
                        <Link to="tel:+61283766284"> +91 8210988275 </Link>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-email mr-2"> </span>
                        <a href="mailto:mail@example.com">
                          hello.inncodesolutions@gmail.com
                        </a>
                        {/* <Link to="mailto:mail@example.com">
                          support@inncodesolutions.com
                        </Link> */}
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-world mr-2"> </span>
                        <Link to="/#"> www.inncodesolutions.com </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-nav-wrap text-web-primary">
                    <h5 className="mb-3 text-web-primary"> Location </h5>
                    <img
                      src="img/map.png"
                      alt="location map"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom gray-light-bg pt-4 pb-4">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text pb-0 mb-0">
                    Copyrights© 2020. All rights reserved by
                    <Link to="/#"> Inncode </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
