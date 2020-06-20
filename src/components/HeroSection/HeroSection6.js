import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../../actions/index";
import { Link } from "react-router-dom";
import Service from "../../services";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      trustedCompany: [],
      video: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      isAgreed: false,
      disableBtn: true,
      btnText: "Send",
    };
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      isAgreed: false,
    });
  };

  changeBtnText = (btnText) => {
    this.setState({
      btnText,
    });
  };

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  isFormDirty = () => {
    const { name, email, subject, message, isAgreed } = this.state;
    if (
      name.length > 3 ||
      !this.isValidEmail(email) ||
      subject.length > 6 ||
      message.length > 10 ||
      isAgreed === true
    ) {
      this.showError();
      return true;
    }

    return false;
  };

  showError = () => {
    const { name, email, subject, message, isAgreed } = this.state;

    if (name.length < 4) {
      this.markError("proj-name");
    }

    if (!this.isValidEmail(email)) {
      this.markError("proj-email");
    }

    if (subject.length < 6) {
      this.markError("proj-subject");
    }

    if (message.length < 6) {
      this.markError("proj-message");
    }

    if (isAgreed !== true) {
      this.markError("proj-isAgreed");
    }
  };

  markError = (id) => {
    if (document.getElementById(id))
      document.getElementById(id).classList.add("error-input");
  };

  removeError = (id) => {
    if (document.getElementById(id))
      document.getElementById(id).classList.remove("error-input");
  };

  handleForm = () => {
    [
      "proj-name",
      "proj-email",
      "proj-subject",
      "proj-message",
      "proj-isAgreed",
    ].map((item) => this.removeError(item));
    const {
      name,
      email,
      subject,
      message: project_description,
      isAgreed,
    } = this.state;
    const obj = { name, email, subject, project_description, isAgreed };
    if (!this.isFormDirty()) {
      this.setState({ btnText: "Sending..." });
      const resp = Service.Inncode.PostProject(obj);
      if (resp) {
        this.setState({ btnText: "Sent" });
        this.resetForm();
      }
    }
  };

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero-section background-img pt-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-web-primary mobile-margin-top">
                  <h1 className="text-web-primary">
                    <span> Build anything </span> That you want
                  </h1>
                  <p className="lead">
                    From startup to enterprise and industries like Healthcare,
                    education, eCommerce to media. We work with all business
                    verticals from the world and deliver the best mobile apps,
                    web applications, websites and enterprise solutions.
                  </p>
                  {/* <div className="video-promo-content mt-4 d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=9No-FiEInLA"
                      className="popup-youtube video-play-icon"
                    >
                      <span className="ti-control-play"> </span>
                    </Link>
                    <span className="ml-4"> Watch video overview </span>
                  </div> */}
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-5">
                  <div className="sign-up-form-header text-center mb-4">
                    <h4 className="mb-0">Let's discuss your project</h4>
                    <p> Get response within 24 hours </p>
                  </div>
                  <form>
                    <div className="form-group input-group">
                      <input
                        value={this.state.name}
                        onChange={(e) => this.handleFormValueChange("name", e)}
                        type="text"
                        name="name"
                        id="proj-name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        value={this.state.email}
                        onChange={(e) => this.handleFormValueChange("email", e)}
                        type="email"
                        name="email"
                        id="proj-email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <input
                        value={this.state.subject}
                        onChange={(e) =>
                          this.handleFormValueChange("subject", e)
                        }
                        type="text"
                        name="subject"
                        id="proj-subject"
                        className="form-control"
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                    <div className="form-group input-group">
                      <textarea
                        onChange={(e) =>
                          this.handleFormValueChange("message", e)
                        }
                        value={this.state.message}
                        name="message"
                        id="proj-message"
                        className="form-control"
                        placeholder="Write us about any project. We’d love to work with you!"
                        cols="30"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        onClick={() => this.handleForm()}
                        type="button"
                        name="submit"
                        id="submit"
                        className="btn solid-btn btn-block"
                        value={this.state.btnText}
                      />
                    </div>
                    <div className="form-check d-flex align-items-center text-center">
                      <input
                        checked={this.state.isAgreed}
                        onChange={(e) =>
                          this.handleFormValueChange("isAgreed", e)
                        }
                        type="checkbox"
                        name="isAgreed"
                        id="proj-isAgreed"
                        className="form-check-input mt-0 mr-3"
                      />
                      <label className="form-check-label" htmlFor="ckbAgree">
                        I agree your{" "}
                        <Link to="/terms"> terms & conditions </Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape position-absolute">
            <img src="img/wave-shap.svg" alt="shape" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(HeroSection);
