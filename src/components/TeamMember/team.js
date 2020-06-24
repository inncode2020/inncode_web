import React from "react";

import { Link, useHistory } from "react-router-dom";
import Team from "./Team.json";
import Constants from "../../Constants";

const TeamMember = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <section className="team-member-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2> Meet Team - The Inncoders</h2>
                <p className="lead">Real people creating real results.</p>
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
                        history.push({
                          pathname: Constants.Routes.SingleTeam,
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
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeamMember;
