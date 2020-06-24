import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  LandingTheme,
  Review,
  Pricing,
  NotFound,
  AboutUs,
  Terms,
  RequestQuotation,
} from "../pages";
import Constants from "../Constants";

const Routes = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path={Constants.Routes.Home} component={LandingTheme} />
        <Route exact path={Constants.Routes.About} component={AboutUs} />
        <Route exact path={Constants.Routes.Pricing} component={Pricing} />
        <Route
          exact
          path={Constants.Routes.RequestQuotation}
          component={RequestQuotation}
        />
        <Route exact path={Constants.Routes.Contact} component={Review} />
        <Route exact path={Constants.Routes.Terms} component={Terms} />
        <Route path={Constants.Routes.All} component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);
export default Routes;
