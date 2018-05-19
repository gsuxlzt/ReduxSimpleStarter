import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const VideoItems = videos.map(video => <VideoListItem
    key={video.etag}
    video={video}
    onVideoSelect={onVideoSelect} />);

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;
