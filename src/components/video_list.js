import React from 'react';

const VideoList = props => (
  <ul className="col-md-4 listgroup">
    {props.videos.length}
  </ul>
);

export default VideoList;
