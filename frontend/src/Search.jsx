import React from 'react';

export class Search extends React.Component {
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
