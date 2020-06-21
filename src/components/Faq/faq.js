import React from "react";

class Faq extends React.Component {
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
        <section className="promo-section ptb-100 ps-faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9">
                <div className="section-heading mb-5">
                  <h2 className="text-white">
                    What you need to know
                    <span className="text-red"> ...</span>
                  </h2>
                  <p className="lead color-lead">
                    Don't be afraid! We'll walk you through the entire process,
                    hold your hand as much as you need, and help you through all
                    the technical aspects that may seem scary. We work best with
                    clients who leave the heavy lifting to us.
                  </p>
                  <p className="color-lead">
                    You have questions and we are happy to answer...
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div id="accordion-1" className="accordion accordion-faq">
                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-1-1"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-1-1"
                      aria-expanded="false"
                      aria-controls="collapse-1-1"
                    >
                      <h6 className="mb-0">
                        <span className="ti-receipt mr-3"> </span> What Kind Of
                        Technology Do You Support?
                      </h6>
                    </div>
                    <div
                      id="collapse-1-1"
                      className="collapse"
                      aria-labelledby="heading-1-1"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p>
                          We are specialized in XHTML, CSS and extensive JS
                          frameworks, but are very experienced with React,
                          Angular, Python, JAVA, PHP, and others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-1-3"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-1-3"
                      aria-expanded="false"
                      aria-controls="collapse-1-3"
                    >
                      <h6 className="mb-0">
                        <span className="ti-wallet mr-3"> </span> Do you
                        outsource your projects or send work overseas?
                      </h6>
                    </div>
                    <div
                      id="collapse-1-3"
                      className="collapse"
                      aria-labelledby="heading-1-3"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p>
                          No. All of our work is performed by our in-house team
                          based in Jamshedpur and Gurgaon.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-2-2"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-2-2"
                      aria-expanded="false"
                      aria-controls="collapse-2-2"
                    >
                      <h6 className="mb-0">
                        <span className="ti-lock mr-3"> </span> I've received
                        quotes that are much higher than your prices. Are you
                        cutting corners to offer lower prices?
                      </h6>
                    </div>
                    <div
                      id="collapse-2-2"
                      className="collapse"
                      aria-labelledby="heading-2-2"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        <p>
                          Websites come in all shapes and sizes, just like cars.
                          You'll find quotes ranging from a few hundred dollars
                          all the way up to hundreds of thousands of dollars.
                          Our websites are designed to be the perfect balance of
                          features and price for small businesses. We've been
                          able to keep our prices low by reducing overhead and
                          streamlining our process. Our finished product often
                          exceeds the quality of agencies charging ten times
                          more than us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div id="accordion-2" className="accordion accordion-faq">
                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-1-2"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-1-2"
                      aria-expanded="false"
                      aria-controls="collapse-1-2"
                    >
                      <h6 className="mb-0">
                        <span className="ti-gallery mr-3"> </span> Can I See My
                        Website While It's In Progress?
                      </h6>
                    </div>
                    <div
                      id="collapse-1-2"
                      className="collapse"
                      aria-labelledby="heading-1-2"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p>
                          Absolutely, we build your websites on development
                          servers and during the development phase feel free to
                          reach us with the feedback 🙏
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-2-1"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-2-1"
                      aria-expanded="false"
                      aria-controls="collapse-2-1"
                    >
                      <h6 className="mb-0">
                        <span className="ti-receipt mr-3"> </span>How long does
                        it take to finish a website?
                      </h6>
                    </div>
                    <div
                      id="collapse-2-1"
                      className="collapse"
                      aria-labelledby="heading-2-1"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        <p>
                          Each project is different, but on average we have a
                          website launched within 2 to 6 weeks. This timeline
                          can be longer or shorter depending on how proactive
                          you are with assets and revisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header py-4"
                      id="heading-2-3"
                      data-toggle="collapse"
                      role="button"
                      data-target="#collapse-2-3"
                      aria-expanded="false"
                      aria-controls="collapse-2-3"
                    >
                      <h6 className="mb-0">
                        <span className="ti-widget mr-3"> </span> Are there any
                        recurring costs involved with owning a website?
                      </h6>
                    </div>
                    <div
                      id="collapse-2-3"
                      className="collapse"
                      aria-labelledby="heading-2-3"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        <p>
                          Yes. Many design companies won't mention recurring
                          costs before starting your project. At a minimum,
                          you'll need monthly web hosting and an annual domain
                          name registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Faq;
