import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log("this.props.bgColor", this.props.bgColor);
    return (
      <React.Fragment>
        <header className="header">
          <nav
            className={
              "navbar navbar-expand-lg fixed-top " +
              (this.props.bgColor && this.props.bgColor === "white"
                ? "custom-nav white-bg"
                : "bg-transparent")
            }
          >
            <div className="container">
              <Link to ="/" className="navbar-brand" >
                <img
                  src="img/logo-white-1x.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              </Link>
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
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarDropdownHome"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                    >
                      <a className="dropdown-item" href="/theme1">
                        Demo Template 1
                      </Link>
                      <a className="dropdown-item" href="/theme2">
                        Demo Template 2
                      </Link>
                      <a className="dropdown-item" href="/theme3">
                        Demo Template 3
                      </Link>
                      <a className="dropdown-item" href="/theme4">
                        Demo Template 4
                      </Link>
                      <a className="dropdown-item" href="/theme5">
                        Demo Template 5
                      </Link>
                      <a className="dropdown-item" href="/theme6">
                        Demo Template 6
                      </Link>
                    </div>
                  </li> */}

                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/features">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/portfolio">
                      Screenshots
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarDropdownPage"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                      <span className="custom-nav-badge badge badge-danger badge-pill">
                        New
                      </span>
                    </Link>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownPage"
                    >
                      <a className="dropdown-item" href="login1">
                        Login Page 1
                      </Link>
                      <a className="dropdown-item" href="login2">
                        Login Page 2
                      </Link>
                      <a className="dropdown-item" href="signup1">
                        Signup Page 1
                      </Link>
                      <a className="dropdown-item" href="signup2">
                        Signup Page 2
                      </Link>
                      <a className="dropdown-item" href="resetPassword">
                        Password Reset
                      </Link>
                      <a className="dropdown-item" href="changePassword">
                        Change Password
                      </Link>
                      <a className="dropdown-item" href="download">
                        Download Page
                      </Link>
                      <a className="dropdown-item" href="review">
                        Review Page
                      </Link>
                      <a className="dropdown-item" href="faq">
                        FAQ Page
                      </Link>
                      <a className="dropdown-item" href="404">
                        404 Page
                      </Link>
                      <a className="dropdown-item" href="comingSoon">
                        Coming Soon
                      </Link>
                      <a className="dropdown-item" href="thankyou">
                        Thank You
                      </Link>
                      <a className="dropdown-item" href="team">
                        Team Page
                      </Link>
                      <a className="dropdown-item" href="singleTeam">
                        Team Single
                      </Link>
                    </div>
                </li> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarBlogPage"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                      <span className="custom-nav-badge badge badge-danger badge-pill">
                        New
                      </span>
                    </Link>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarBlogPage"
                    >
                      <a className="dropdown-item" href="blog">
                        Blog Grid
                      </Link>
                      <a className="dropdown-item" href="blogLeft">
                        Blog Left Sidebar
                      </Link>
                      <a className="dropdown-item" href="blogRight">
                        Details Right Sidebar
                      </Link>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      to="/blogLeft"
                      aria-labelledby="navbarBlogPage"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/team">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
