import React from "react";
import { Link } from "react-router-dom";

const Header = ({ bgColor }) => (
  <React.Fragment>
    <header className="header">
      <nav
        className={
          "navbar navbar-expand-lg fixed-top " +
          (bgColor && bgColor === "white"
            ? "custom-nav white-bg"
            : "bg-transparent")
        }
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              src="img/logo-white-1x.png"
              width="120"
              alt="logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu"></span>
          </button>
          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </React.Fragment>
);

export default Header;
