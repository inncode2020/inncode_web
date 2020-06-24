import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../services";

const LandingPage = () => {
  const [state, setState] = useState({
    trustedCompany: [],
    video: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    isAgreed: false,
    disableBtn: true,
    btnText: "Send",
  });

  const handleSetState = (type, value) => {
    setState({
      ...state,
      [type]: value,
    });
  };

  const resetForm = () => {
    handleSetState("name", "");
    handleSetState("email", "");
    handleSetState("subject", "");
    handleSetState("message", "");
    handleSetState("isAgreed", false);
  };

  const handleFormValueChange = (inputName, event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    handleSetState(inputName, value);
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormDirty = () => {
    const { name, email, subject, message, isAgreed } = state;
    if (
      name.length < 3 ||
      !isValidEmail(email) ||
      subject.length < 6 ||
      message.length < 10 ||
      isAgreed === false
    ) {
      showError();
      return true;
    }
    return false;
  };

  const showError = () => {
    const { name, email, subject, message, isAgreed } = state;

    if (name.length < 4) {
      markError("proj-name");
    }

    if (!isValidEmail(email)) {
      markError("proj-email");
    }

    if (subject.length < 6) {
      markError("proj-subject");
    }

    if (message.length < 6) {
      markError("proj-message");
    }

    if (isAgreed !== true) {
      markError("proj-isAgreed");
    }
  };

  const markError = (id) => {
    if (document.getElementById(id))
      document.getElementById(id).classList.add("error-input");
  };

  const removeError = (id) => {
    if (document.getElementById(id))
      document.getElementById(id).classList.remove("error-input");
  };

  const handleForm = () => {
    [
      "proj-name",
      "proj-email",
      "proj-subject",
      "proj-message",
      "proj-isAgreed",
    ].map((item) => removeError(item));
    const {
      name,
      email,
      subject,
      message: project_description,
      isAgreed,
    } = state;
    const obj = { name, email, subject, project_description, isAgreed };
    if (!isFormDirty()) {
      setState("btnText", "Sending...");
      const resp = Service.Inncode.PostProject(obj);
      if (resp) {
        setState("btnText", "Sent");
        resetForm();
      }
    }
  };

  return (
    <React.Fragment>
      <section className="banner-section background-img pt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="inncode-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-web-primary mobile-margin-top">
                <h1 className="text-web-primary">
                  <span> Build anything </span> That you want
                </h1>
                <p className="lead">
                  From startup to enterprise and industries like Healthcare,
                  education, eCommerce to media. We work with all business
                  verticals from the world and deliver the best mobile apps, web
                  applications, websites and enterprise solutions.
                </p>
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
                      value={state.name}
                      onChange={(e) => handleFormValueChange("name", e)}
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
                      value={state.email}
                      onChange={(e) => handleFormValueChange("email", e)}
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
                      value={state.subject}
                      onChange={(e) => handleFormValueChange("subject", e)}
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
                      onChange={(e) => handleFormValueChange("message", e)}
                      value={state.message}
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
                      onClick={() => handleForm()}
                      type="button"
                      name="submit"
                      id="submit"
                      className="btn solid-btn btn-block"
                      value={state.btnText}
                    />
                  </div>
                  <div className="form-check d-flex align-items-center text-center">
                    <input
                      checked={state.isAgreed}
                      onChange={(e) => handleFormValueChange("isAgreed", e)}
                      type="checkbox"
                      name="isAgreed"
                      id="proj-isAgreed"
                      className="form-check-input mt-0 mr-3"
                    />
                    <label className="form-check-label" htmlFor="ckbAgree">
                      I agree your <Link to="/terms"> terms & conditions </Link>
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
};

export default LandingPage;
