import React from "react";
import _data from "../../data";
import { Link } from "react-router-dom";

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
        <section id="team" className="team-member-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2> Our team members </h2>
                  <p className="lead">
                    Meet our team of digital warriors, ready to harness the
                    Force for good. Our team draws on broad industry experience
                    and networks to create the most powerful outcomes for our
                    clients
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {(this.state.teamMember.members || []).map((member, index) => {
                return (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="single-team-member position-relative">
                      <div className="team-image">
                        <img
                          src={member.image}
                          alt="Team Members"
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="team-info text-web-primary rounded-circle d-flex flex-column align-items-center justify-content-center">
                        <h5 className="mb-0"> {member.name} </h5>
                        <h6> {member.designation} </h6>
                        <ul className="list-inline team-social social-icon mt-4 text-web-primary">
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TeamMember;
