import React, { useState } from "react";
import Service from "../../services";
import Constants from "../../Constants";
import { useHistory } from "react-router-dom";

const Quotation = ({ title, idx }) => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    disableContactBtn: "",
    contactBtnText: "Request A Quote",
  });

  const handleSetState = (type, value) => {
    setState({
      ...state,
      [type]: value,
    });
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormDirty = () => {
    const { name, email, phone, company, message } = state;
    if (
      name.length < 3 ||
      !isValidEmail(email) ||
      phone.length < 10 ||
      company.length < 3 ||
      message.length < 10
    ) {
      showError();
      return true;
    }

    return false;
  };

  const handleFormValueChange = (inputName, event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    handleSetState(inputName, value);
  };

  const handleForm = () => {
    [
      "form-name",
      "form-email",
      "form-phone",
      "form-company",
      "form-message",
    ].map((item) => removeError(item));
    const { name, email, phone, company, message } = state;
    const obj = {
      name,
      email,
      phone: phone + "business=" + idx,
      company,
      message,
    };
    if (!isFormDirty()) {
      handleSetState("contactBtnText", "Sending...");
      const resp = Service.Inncode.ContactSupport(obj);
      if (resp) {
        handleSetState("contactBtnText", "Sent");
        window.alert("Thankyou! Our Team will get back to you within 24 hours");
        resetForm();
        history.push(Constants.Routes.Home);
      }
    }
  };

  const showError = () => {
    const { name, email, phone, company, message } = state;

    if (name.length < 4) {
      markError("form-name");
    }

    if (!isValidEmail(email)) {
      markError("form-email");
    }

    if (phone.length < 10) {
      markError("form-phone");
    }

    if (company.length < 4) {
      markError("form-company");
    }
    if (message.length < 10) {
      markError("form-message");
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

  const resetForm = () => {
    handleSetState("name", "");
    handleSetState("email", "");
    handleSetState("phone", "");
    handleSetState("company", "");
    handleSetState("message", "");
  };

  const {
    email,
    phone,
    company,
    message,
    disableContactBtn,
    contactBtnText,
    name,
  } = state;
  return (
    <form className="form-request-quote">
      <h5>{title}</h5>
      <div className="row">
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <input
              value={name}
              id="form-name"
              onChange={(e) => handleFormValueChange("name", e)}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              required="required"
            />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <input
              value={email}
              id="form-email"
              onChange={(e) => handleFormValueChange("email", e)}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              required="required"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <input
              value={phone}
              id="form-phone"
              onChange={(e) => handleFormValueChange("phone", e)}
              type="text"
              className="form-control"
              placeholder="Your Phone"
            />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="form-group">
            <input
              value={company}
              id="form-company"
              onChange={(e) => handleFormValueChange("company", e)}
              type="text"
              size="40"
              className="form-control"
              placeholder="Your Company"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              onChange={(e) => handleFormValueChange("message", e)}
              id="form-message"
              value={message}
              className="form-control"
              rows="7"
              cols="25"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3">
          <button
            type="button"
            className="btn solid-btn"
            id="btnContactUs"
            disabled={disableContactBtn}
            onClick={() => {
              handleForm();
            }}
          >
            {contactBtnText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Quotation;
