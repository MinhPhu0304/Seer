// 3rd party
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Our own components
import Nav from './components/NavBar';
import { Home } from './components/pages/home';
import { Manage } from './components/pages/manage';
import About from './components/pages/About';
import { Theme } from './theme';
import './App.css';

function App() {
  return (
    <Theme>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/manage">
            <Manage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
