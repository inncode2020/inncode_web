import React from "react";
import {Link} from "react-router-dom";



class Download extends React.Component {
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
        <section
          className="download-section pt-100 background-img"
          style={{
            backgroundImage: "url('img/app-hero-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="download-content text-web-primary pb-100">
                  <h2 className="text-web-primary">
                    Start Managing your apps business, more faster{" "}
                  </h2>{" "}
                  <p className="lead">
                    Objectively deliver professional value with diverse web -
                    readiness.Collaboratively transition wireless customer
                    service without goal-oriented catalysts for
                    change.Collaboratively.{" "}
                  </p>
                  <div className="download-btn">
                    <Link to="/#" className="btn google-play-btn mr-3">
                      <span className="ti-android"> </span> Google Play{" "}
                    </Link>{" "}
                    <Link to="/#" className="btn app-store-btn">
                      <span className="ti-apple"> </span> App Store{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/app-hand-top.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </React.Fragment>
    );
  }
}

export default Download;
