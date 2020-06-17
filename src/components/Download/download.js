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
        <section id="download" className="video-promo ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="download-content">
                  <h2> Download App Manage Your Business More Faster </h2>{" "}
                  <p>
                    Objectively deliver professional value with diverse web -
                    readiness.Collaboratively transition wireless customer
                    service without goal-oriented catalysts for
                    change.Collaboratively.{" "}
                  </p>{" "}
                  <p>
                    Progressively disseminate sustainable "outside the box"
                    thinking before end-to-end ideas.Dramatically
                    disintermediate resource maximizing action.{" "}
                  </p>{" "}
                  <div className="download-btn mt-4">
                    <Link to="/#" className="btn solid-btn mr-3">
                      <span className="ti-android"> </span> Google Play{" "}
                    </Link>{" "}
                    <Link to="/#" className="btn outline-btn">
                      <span className="ti-apple"> </span> App Store{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-md-5">
                <div className="download-img mt-lg-5 mt-md-5 mt-sm-0">
                  <img
                    src="img/image-14.png"
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
