// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAwndAZ0a58A9dWETWv4ySDlib9T8WSkDc';
const App = () => (
  <div>
      <SearchBar />
    </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
