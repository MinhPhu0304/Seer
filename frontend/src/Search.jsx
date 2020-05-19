import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Search: '' };
  }
  myChangeHandler = (event) => {
    this.setState({ Search: event.target.value });
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

export function SearchCom (props) {
  return (
    <div className="search__container">
      <form noValidate autoComplete="off">
        <label>Description <TextField id="standard-basic" label="Description" variant="outlined" /></label>
        <Button>Search</Button>
      </form>
    </div>
  );
}
