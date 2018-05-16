import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos }) => {
  const VideoItems = videos.map(video => <VideoListItem key={video.etag} video={video} />);

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;
