// @flow

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAwndAZ0a58A9dWETWv4ySDlib9T8WSkDc';
class App extends Component {
  state = {
    initial: true,
  }
  render() {
    return (
      <SearchBar />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
