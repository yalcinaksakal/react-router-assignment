import React, { Component } from "react";
import {
  Redirect,
  Route,
  BrowserRouter,
  NavLink,
  Switch,
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Instructions from "./components/instructions/Instructios";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses/" activeClassName="my-active">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users/" activeClassName="my-active">
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/instructions/" activeClassName="my-active">
                    Instructions
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/instructions" exact component={Instructions} />

            <Route path="/courses" component={Courses} />
            <Route path="/users" exact component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            {/* 404 unknowm */}
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
