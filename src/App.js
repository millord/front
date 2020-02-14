import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "./store";

// My components
import NavBar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <NavBar />
            <div className="container main">
              <Switch>
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
