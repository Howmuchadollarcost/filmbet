import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import FrontPage from "./container/FrontPage/FrontPage";
import ActiveComponent from "./component/ActiveComponent/ActiveComponent";
import WelcomeScreen from "./component/WelcomePage/WelcomePage";

const App = () => {
  return (
    <Route
      render={({ location }) => {
        return (
          <div className="App">
            <WelcomeScreen />
            <Navbar />
            <TransitionGroup component={null}>
              <CSSTransition 
                timeout={400}
                classNames="page"
                key={location.key}
              >
                <Switch>
                  <Route exact path="/" component={FrontPage} />
                  <Route exact path="/:id" component={ActiveComponent} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default App;
