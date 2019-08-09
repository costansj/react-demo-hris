import React, { Component } from "react";
// import { withRouter, Redirect } from 'react-router-dom';
//import { connect } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
//import { HashRouter, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
//Pages
import LoginPage from "./containers/LoginPage";
import EmployeePage from "./containers/EmployeePage";

// BroweserRouter
// class App extends Component {
//   render() {
//     console.log(this.props.history);
//     return (
//       <Router>
//         <Route path="/" component={LoginPage} />
//         <Route path="/employee" component={EmployeePage} />
//       </Router>
//     );
//   }
// }

// HashRouter
// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <Route path="/" component={LoginPage} />
//         <Route path="/employee" component={EmployeePage} />
//       </HashRouter>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <Route exact path="/" component={EmployeePage} />
        <Route path="/login" component={LoginPage} />
      </MemoryRouter>
    );
  }
}

export default withRouter(App);
