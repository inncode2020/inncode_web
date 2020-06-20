import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faSmileWink,
  faPlaneDeparture,
  faTree,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

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
        // className="download-section pt-100 background-img"
        // style={{
        //   backgroundImage: "url('img/app-hero-bg.jpg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center center",
        //   backgroundSize: "cover",
        // }}
        >
          <div className="middle">
            <h1>Our Achivements</h1>
            <p>
              Happiness is that state of consciousness which proceeds from the
              achievement of one's values...!
            </p>
            <div className="counting-sec">
              <div className="inner-width">
                <div className="col1">
                  <i>
                    <FontAwesomeIcon icon={faTree} />
                  </i>
                  <div>
                    <CountUp
                      start={-1000}
                      end={3}
                      duration={5}
                      className="countup"
                    />
                    <span className="countup">+</span>
                  </div>
                  <h3>Years Of Existence</h3>
                </div>

                <div className="col1">
                  <i>
                    <FontAwesomeIcon icon={faSmileWink} />
                  </i>
                  <div>
                    <CountUp
                      start={-1000}
                      end={15}
                      duration={6}
                      className="countup"
                    />
                    <span className="countup">+</span>
                  </div>
                  <h3>Team Of Software Experts</h3>
                </div>

                <div className="col1">
                  <i>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                  </i>
                  <div>
                    <CountUp
                      start={-300}
                      end={350}
                      duration={6}
                      className="countup"
                    />
                    <span className="countup">+</span>
                  </div>
                  <h3>Satisfied Clients</h3>
                </div>

                <div className="col1">
                  <i>
                    <FontAwesomeIcon icon={faTaxi} />
                  </i>
                  <div>
                    <CountUp
                      start={0}
                      end={460}
                      duration={8}
                      className="countup"
                    />
                    <span className="countup">+</span>
                  </div>
                  <h3>Projects Successfully Delivered</h3>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="download-content text-web-primary pb-100">
                  <h2 className="text-web-primary">
                    Start Managing your apps business, more faster Now{" "}
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
          </div>{" "} */}
        </section>{" "}
      </React.Fragment>
    );
  }
}

export default Download;
