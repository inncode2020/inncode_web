import React from "react";

class About extends React.Component {
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
        <section id="about" className="about-us ptb-100 gray-light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
                    src="img/delivery-app.svg"
                    width="500"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <span className="badge badge-primary badge-pill">
                  About our app
                </span>
                <h2 className="mt-4">WHO WE ARE ?</h2>
                <p className="mb-4 lh-190">
                  We are about solutions.The wow factor. When a user experiences
                  your product and has that visceral “whoa, that was cool”
                  reaction— that’s what we’re striving for. We combine a
                  diversity of experience with a ton of cutting-edge industry
                  chops. But our true power comes from a shared belief that the
                  best outcomes are the result of collaboration. You'll love
                  working with us as much as we love working with each other.
                </p>
                <h5 className="mb-2 text-bold text-web-secondary">
                  HOW WE’LL BUILD YOU A PROFITABLE WEBSITE
                </h5>
                <p>What makes a website profitable.</p>
                <ul className="list-unstyled">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-primary mr-3">
                          <span className="ti-check"> </span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="underline weight-6 mr-2">
                            It’s easy to use.
                          </span>{" "}
                          A site that is uncluttered and logically arranged.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-primary mr-3">
                          <span className="ti-check"> </span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="underline weight-6 mr-2">
                            Custom Designed as per your Business.
                          </span>{" "}
                          A site that gives customers the right tools.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-primary mr-3">
                          <span className="ti-check"> </span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="underline weight-6 mr-2">
                            It looks Good.
                          </span>
                          The end user loves the view and spends more time as it
                          is pleasant to eyes as well.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-primary mr-3">
                          <span className="ti-check"> </span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="underline weight-6 mr-2">
                            New Functionalities
                          </span>
                          With the growth of your business you would probably
                          need your websites to add new Functionalities. We
                          build keeping that in mind
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-circle badge-primary mr-3">
                          <span className="ti-check"> </span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="underline weight-6 mr-2">
                            It’s secure.
                          </span>
                          our business can be very well protected from
                          cyber-crime if the right security measures are taken
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
