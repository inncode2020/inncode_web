import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { simpleAction } from "./actions/simpleAction";
import "./App.scss";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Routes from "./routers";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  simpleAction = (event) => {
    this.props.simpleAction();
  };
  render() {
    return (
      <Fragment>
        <Routes />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
