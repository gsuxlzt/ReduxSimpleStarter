import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAwndAZ0a58A9dWETWv4ySDlib9T8WSkDc';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards',
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  onVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo
    })
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
