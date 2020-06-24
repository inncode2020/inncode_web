import React from "react";
import { Link } from "react-router-dom";

const TeamMembers = () => {
  const {
    name,
    designation,
    id,
    phone,
    email,
    phoneValue,
    emailValue,
    introText,
    introText2,
    introText3,
    skills,
    subSkills1,
    subSkills2,
    subSkills3,
    subSkills1Value,
    subSkills2Value,
    subSkills3Value,
    activitiesSkill,
    activities1,
    activities2,
    activities3,
    activities4,
  } = this.props.history.location.state.item;

  return (
    <React.Fragment>
      <section className="team-single-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-5">
              <div className="team-single-img">
                <img
                  src={`img/team-${id}.jpeg`}
                  alt="member"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="team-single-text">
                <div className="team-name mb-4">
                  <h4 className="mb-1"> {name} </h4>
                  <span> {designation}</span>
                </div>
                <ul className="team-single-info">
                  <li>
                    <strong> {phone}</strong>
                    <span> {phoneValue} </span>
                  </li>
                  <li>
                    <strong> {email}</strong> <span> {emailValue} </span>
                  </li>
                </ul>
                <div className="text-content mt-20">
                  <p>{introText} </p> <p>{introText2} </p>
                  <p>{introText3} </p>
                </div>
                <ul className="team-social-list list-inline mt-4">
                  <li className="list-inline-item">
                    <Link to="/#" className="color-primary">
                      <span className="ti-facebook" title="facebook"></span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/#" className="color-primary">
                      <span className="ti-instagram" title="instagram"></span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/#" className="color-primary">
                      <span className="ti-dribbble"> </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/#" className="color-primary">
                      <span className="ti-linkedin" title="linkedin"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading">
                <h5> {activitiesSkill} </h5>
                <div className="section-heading-line-left"> </div>
              </div>
              <ul className="list-unstyled">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-primary mr-3">
                        <span className="ti-check"> </span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">{activities1} </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-primary mr-3">
                        <span className="ti-check"> </span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">{activities2} </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-primary mr-3">
                        <span className="ti-check"> </span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">{activities3} </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-primary mr-3">
                        <span className="ti-check"> </span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">{activities4} </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading mt-40">
                <h5> {skills} </h5>
                <div className="section-heading-line-left"> </div>
              </div>
              <div className="mt-3">
                <div className="progress-item">
                  <div className="progress-title">
                    <h6>
                      {subSkills1}
                      <span className="float-right">
                        <span className="progress-number">
                          {subSkills1Value}
                        </span>
                      </span>
                    </h6>
                  </div>
                  <div className="progress p-1">
                    <span
                      style={{
                        width: "60%",
                      }}
                    >
                      <span className="progress-line"> </span>
                    </span>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-title">
                    <h6>
                      {subSkills2}
                      <span className="float-right">
                        <span className="progress-number">
                          {subSkills2Value}
                        </span>
                      </span>
                    </h6>
                  </div>
                  <div className="progress p-1">
                    <span
                      style={{
                        width: "80%",
                      }}
                    >
                      <span className="progress-line"> </span>
                    </span>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-title">
                    <h6>
                      {subSkills3}
                      <span className="float-right">
                        <span className="progress-number">
                          {subSkills3Value}
                        </span>
                      </span>
                    </h6>
                  </div>
                  <div className="progress p-1">
                    <span
                      style={{
                        width: "50%",
                      }}
                    >
                      <span className="progress-line"> </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeamMembers;
