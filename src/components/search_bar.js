import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
  }


  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }
}
export default SearchBar;
