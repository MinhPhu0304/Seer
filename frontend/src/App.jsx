import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './components/pages/home';
import { Manage } from './components/pages/manage';
import { Theme } from './theme';
import './App.css';

function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path="/manage">
            <Manage />
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
