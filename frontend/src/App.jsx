// 3rd party
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

// Our own components
import { NavigationBar } from './components/NavBar';
import { ErrorBoundary } from './errorCapture'
import { Home } from './components/pages/home';
import { SubmitArticlePage } from './components/pages/submitArticle';
import { Manage } from './components/pages/manage';
import About from './components/pages/About';
import { Theme } from './theme';
import { store } from './store';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Theme>
          <Router>
            <NavigationBar />
            <Switch>
              <Route exact path="/manage">
                <Manage />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/submit">
                <SubmitArticlePage />
              </Route>
              <Route>
                <Home />
              </Route>
            </Switch>
          </Router>
        </Theme>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
