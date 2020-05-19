import React from 'react';
// import logo from './logo.svg';
import seer from './seer.svg';
import './App.css';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to SEER Database</h1>
        {/* <img src={logo} alt="logo image"/>;  */}
        <img src={seer} alt="logo1 image"/>


      </header>
    </div>

  );

  class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { Search: '' };
    }
    myChangeHandler = (event) => {
      this.setState({Search: event.target.value});
    }
    render() {
      return (
        <form>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
}

export default App;

