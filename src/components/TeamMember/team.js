import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import _data from "../../data";
import { Link } from "react-router-dom";
import Team from "./Team.json";

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      teamMember: _data.teamMember,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="team-member-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2> Meet Our team members </h2>
                  <p className="lead">
                    Following reasons show advantages of adding Inncode to your
                    lead pages, demos and checkouts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {Team.data.map((item, index) => (
                <div className="col-lg-3 col-sm-6" key={item.name}>
                  <div className="single-team-member position-relative">
                    <div className="team-image">
                      <img
                        src={`img/team-${index + 1}.jpeg`}
                        alt="Team Members"
                        className="img-fluid rounded-circle"
                      />
                    </div>

                    <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                      <h5 className="mb-0">{item.name}</h5>
                      <h6> {item.designation} </h6>
                      <ul className="list-inline team-social social-icon my-4 text-web-primary">
                        <li className="list-inline-item">
                          <Link to="/#">
                            <span className="ti-facebook"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#">
                            <span className="ti-twitter"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#">
                            <span className="ti-github"> </span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/#">
                            <span className="ti-dribbble"> </span>
                          </Link>
                        </li>
                      </ul>
                      <button
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/singleTeam",
                            state: {
                              item,
                            },
                          })
                        }
                        className="btn app-store-btn"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-1.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0"> Shubham Singh </h5>
                    <h6> BACKEND DEVELOPER </h6>
                    <ul className="list-inline team-social social-icon my-4 text-web-primary">
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-facebook"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-twitter"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-github"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-dribbble"> </span>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-2.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0"> Aniket </h5>
                    <h6> GRAPHIC DESIGNER </h6>
                    <ul className="list-inline team-social social-icon my-4 text-web-primary">
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-facebook"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-twitter"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-github"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-dribbble"> </span>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-3.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0"> Asif Hussain </h5>
                    <h6> BUSSINESS ANALYST </h6>
                    <ul className="list-inline team-social social-icon my-4 text-web-primary">
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-facebook"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-twitter"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-github"> </span>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-dribbble"> </span>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-6.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>{" "}
                  
                  <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0"> Edna Mason </h5>{" "}
                    <h6> Senior Designer </h6>{" "}
                    <ul className="list-inline team-social social-icon my-4 text-web-primary">
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-facebook"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-twitter"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-github"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-dribbble"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      View details{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "} */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-7.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>{" "}
                  <div className="team-info text-web-primary rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0"> Edna Mason </h5>{" "}
                    <h6> Senior Designer </h6>{" "}
                    <ul className="list-inline team-social social-icon my-4 text-web-primary">
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-facebook"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-twitter"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-github"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li className="list-inline-item">
                        <Link to="/#">
                          <span className="ti-dribbble"> </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      View details{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "} */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(TeamMember);
