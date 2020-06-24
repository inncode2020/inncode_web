import React, { useState } from "react";

const Subscribe = () => {
  const [state, setState] = useState({
    email: "",
    disableBtn: false,
    btnText: "Subscribe",
  });

  const handleSetState = (type, value) => {
    setState({
      ...state,
      type: value,
    });
  };

  const changeBtnText = (btnText) => {
    handleSetState("btnText", btnText);
  };

  const handleFormValueChange = (inputName, event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    handleSetState(inputName, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSetState("disableBtn", true);

    changeBtnText("Subscribe");
  };

  return (
    <React.Fragment>
      <div className="shape-img subscribe-wrap">
        <img
          src="img/footer-top-shape.png"
          alt="footer shape"
          className="img-fluid"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form
                method="post"
                className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
                onSubmit={handleSubmit}
              >
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control input"
                    id="email-footer"
                    name="email"
                    placeholder="info@yourdomain.com"
                    value={state.email}
                    onChange={(e) => handleFormValueChange("email", e)}
                  />
                  <input
                    type="submit"
                    className="button btn solid-btn"
                    id="submit-footer"
                    value={state.btnText}
                    disabled={state.disableBtn}
                    onClick={() => {
                      changeBtnText("Subscribing...");
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subscribe;
