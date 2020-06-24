import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileWink,
  faPlaneDeparture,
  faTree,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Achievements = () => (
  <React.Fragment>
    <section>
      <div className="middle">
        <h1>Our Achievements</h1>
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
                <CountUp start={0} end={460} duration={8} className="countup" />
                <span className="countup">+</span>
              </div>
              <h3>Projects Successfully Delivered</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Achievements;
