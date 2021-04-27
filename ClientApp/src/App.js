import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/page_components/Home";
import ContactUs from "./components/page_components/ContactUs";
import "./components/assets/index.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
    );
  }
}
