import React from "react";
import _data from "../../data";
const img = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100 gray-light-bg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <h2>
                    SnapShots <br /> <span> Looks awesome </span>
                  </h2>
                  <p className="lead">
                    We understand how a first impression is often just that: a
                    quick snapshot that, on its own merit, is meaningless.
                  </p>
                </div>
              </div>
            </div>
            <div className="screen-slider-content mt-5">
              <div className="screenshot-frame"> </div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                {img.map((item, index) => (
                  <img
                    key={"key" + index}
                    src={`img/SS-${index + 1}.jpeg`}
                    className="img-fluid"
                    alt="screenshots"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
