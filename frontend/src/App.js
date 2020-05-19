import React from 'react';
// import logo from './logo.svg';
import seer from './seer.svg';
import './App.css';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import {Search} from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to SEER Database</h1>
        {/* <img src={logo} alt="logo image"/>;  */}
        <img src={seer} alt="logo1 image"/>


      </header>
      <Search />
    </div>

  );
  }

export default App;

