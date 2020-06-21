import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Theme6 from "../pages/LandingTheme";
import Review from "../pages/review";
import Pricing from "../pages/pricing";
import NotFound from "../pages/404";
import Team from "../pages/team";
import AboutUs from "../pages/aboutUs";
import SingleTeam from "../pages/singleTeam";
import Terms from "../pages/terms";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme6} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/singleTeam" component={SingleTeam} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Review} />
            <Route exact path="/terms" component={Terms} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
