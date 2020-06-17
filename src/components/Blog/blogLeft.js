import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../actions/index";
import {Link} from "react-router-dom";



class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSearch(event) {
    event.preventDefault();

    // // get action
    const searchAction = search(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(searchAction);

    // // added delay to change button text to previous
    setTimeout(
      function () {
        // get action again to update state
        const searchAction = search(this.state);

        // Dispatch the contact from data
        this.props.dispatch(searchAction);

        // clear form data
        this.setState({
          searchData: "",
        });
      }.bind(this),
      3000
    );
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <div className="module ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="sidebar-left pr-4">
                  <aside className="widget widget-search">
                    <form method="get" onSubmit={this.handleSearch}>
                      <input
                        value={this.state.searchData}
                        onChange={(e) =>
                          this.handleFormValueChange("searchData", e)
                        }
                        type="search"
                        name="searchData"
                        className="form-control"
                        placeholder="Type Search Words"
                        required
                      />
                      <button className="search-button" type="submit">
                        <span className="ti-search"> </span>{" "}
                      </button>{" "}
                    </form>{" "}
                  </aside>
                  <aside className="widget widget-categories">
                    <div className="widget-title">
                      <h6> Categories </h6>{" "}
                    </div>{" "}
                    <ul>
                      <li>
                        <Link to="/#">
                          Journey <span className="float-right"> 112 </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Development <span className="float-right"> 86 </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Sport <span className="float-right"> 10 </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Photography <span className="float-right"> 144 </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Symphony <span className="float-right"> 18 </span>{" "}
                        </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </aside>
                  <aside className="widget widget-recent-entries-custom">
                    <div className="widget-title">
                      <h6> Recent Posts </h6>{" "}
                    </div>{" "}
                    <ul>
                      <li className="clearfix">
                        <div className="wi">
                          <Link to="/#">
                            <img
                              src="img/blog/1.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </Link>{" "}
                        </div>{" "}
                        <div className="wb">
                          <Link to="/#">
                            Map where your photos were taken and discover local
                            points.{" "}
                          </Link>{" "}
                          <span className="post-date"> May 8, 2016 </span>{" "}
                        </div>{" "}
                      </li>{" "}
                      <li className="clearfix">
                        <div className="wi">
                          <Link to="/#">
                            <img
                              src="img/blog/2.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </Link>{" "}
                        </div>{" "}
                        <div className="wb">
                          <Link to="/#">
                            Map where your photos were taken and discover local
                            points.{" "}
                          </Link>{" "}
                          <span className="post-date"> May 8, 2016 </span>{" "}
                        </div>{" "}
                      </li>{" "}
                      <li className="clearfix">
                        <div className="wi">
                          <Link to="/#">
                            <img
                              src="img/blog/3.jpg"
                              alt="recent post"
                              className="img-fluid rounded"
                            />
                          </Link>{" "}
                        </div>{" "}
                        <div className="wb">
                          <Link to="/#">
                            Map where your photos were taken and discover local
                            points.{" "}
                          </Link>{" "}
                          <span className="post-date"> May 8, 2016 </span>{" "}
                        </div>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </aside>
                  <aside className="widget widget-categories">
                    <div className="widget-title">
                      <h6> Newsletter </h6>{" "}
                    </div>{" "}
                    <p>
                      Enter your email address below to subscribe to my
                      newsletter{" "}
                    </p>{" "}
                    <form
                      action="/#"
                      method="post"
                      className="d-none d-md-block d-lg-block"
                    >
                      <input
                        type="text"
                        className="form-control input"
                        id="email-footer"
                        name="email"
                        placeholder="info@yourdomain.com"
                      />
                      <button
                        type="submit"
                        className="btn solid-btn btn-block btn-not-rounded mt-3"
                      >
                        Subscribe{" "}
                      </button>{" "}
                    </form>{" "}
                  </aside>{" "}
                  <aside className="widget widget-tag-cloud">
                    <div className="widget-title">
                      <h6> Tags </h6>{" "}
                    </div>{" "}
                    <div className="tag-cloud">
                      <Link to="/#"> e-commerce </Link> <Link to="/#"> portfolio </Link>{" "}
                      <Link to="/#"> responsive </Link> <Link to="/#"> bootstrap </Link>{" "}
                      <Link to="/#"> business </Link> <Link to="/#"> corporate </Link>{" "}
                    </div>{" "}
                  </aside>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-8 col-md-8">
                <article className="post">
                  <div className="post-preview">
                    <Link to="/#">
                      <img src="img/blog/2-w.jpg" alt="blog" />
                    </Link>{" "}
                  </div>{" "}
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h2 className="post-title">
                        <Link to="blogRight">
                          Objectively communicate business core competencies{" "}
                        </Link>{" "}
                      </h2>{" "}
                      <ul className="post-meta">
                        <li> November 18, 2016 </li>{" "}
                        <li>
                          <Link to="/#"> Branding </Link>,{" "}
                          <Link to="/#
            "
                          >
                            Design
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to="/#"> 3 Comments </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                    <div className="post-content">
                      <p>
                        Just then her head struck against the roof of the hall
                        in fact she was now more than nine feet high and she at
                        once took up the little golden key and hurried off to
                        the garden door.The first question of course was, how to
                        get dry again: they had a consultation about this, and
                        after a few minutes it seemed quite natural to Alice to
                        find herself talking familiarly with them.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="post-more pt-4 align-items-center d-flex">
                      <Link to="/#" className="btn solid-btn">
                        Read more <span className="ti-arrow-right"> </span>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </article>{" "}
                <article className="post">
                  <div className="post-preview">
                    <Link to="/#">
                      <img src="img/blog/3-w.jpg" alt="blog" />
                    </Link>{" "}
                  </div>{" "}
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h2 className="post-title">
                        <Link to="blogRight">
                          Objectively communicate business core competencies{" "}
                        </Link>{" "}
                      </h2>{" "}
                      <ul className="post-meta">
                        <li> November 18, 2016 </li>{" "}
                        <li>
                          <Link to="/#"> Branding </Link>,{" "}
                          <Link to="/#
            "
                          >
                            Design
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to="/#"> 3 Comments </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                    <div className="post-content">
                      <p>
                        Just then her head struck against the roof of the hall
                        in fact she was now more than nine feet high and she at
                        once took up the little golden key and hurried off to
                        the garden door.The first question of course was, how to
                        get dry again: they had a consultation about this, and
                        after a few minutes it seemed quite natural to Alice to
                        find herself talking familiarly with them.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="post-more pt-4 align-items-center d-flex">
                      <Link to="/#" className="btn solid-btn">
                        Read more <span className="ti-arrow-right"> </span>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </article>{" "}
                <article className="post">
                  <div className="post-preview">
                    <Link to="/#">
                      <img src="img/blog/4-w.jpg" alt="blog" />
                    </Link>{" "}
                  </div>{" "}
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h2 className="post-title">
                        <Link to="blogRight">
                          Objectively communicate business core competencies{" "}
                        </Link>{" "}
                      </h2>{" "}
                      <ul className="post-meta">
                        <li> November 18, 2016 </li>{" "}
                        <li>
                          <Link to="/#"> Branding </Link>,{" "}
                          <Link to="/#
            "
                          >
                            Design
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to="/#"> 3 Comments </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                    <div className="post-content">
                      <p>
                        Just then her head struck against the roof of the hall
                        in fact she was now more than nine feet high and she at
                        once took up the little golden key and hurried off to
                        the garden door.The first question of course was, how to
                        get dry again: they had a consultation about this, and
                        after a few minutes it seemed quite natural to Alice to
                        find herself talking familiarly with them.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="post-more pt-4 align-items-center d-flex">
                      <Link to="/#" className="btn solid-btn">
                        Read more <span className="ti-arrow-right"> </span>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </article>{" "}
                <div className="row">
                  <div className="col-md-12">
                    <nav className="custom-pagination-nav">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <Link to="/#" className="page-link" >
                            <span className="ti-angle-left"> </span>{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li className="page-item active">
                          <Link to ="/#" className="page-link" >
                            1{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li className="page-item">
                          <Link to="/#" className="page-link" >
                            2{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li className="page-item">
                          <Link to ="/#" className="page-link" >
                            3{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li className="page-item">
                          <Link to="/#" className="page-link" >
                            4{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li className="page-item">
                          <Link to="/#" className="page-link" >
                            <span className="ti-angle-right"> </span>{" "}
                          </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </nav>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(Blog);
