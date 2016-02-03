import React from 'react';

const Video = ({ uri }) =>
  <div
    className="embed-responsive embed-responsive-16by9"
    style={{ marginBottom: 20 }}
  >
    <iframe
      width="578"
      height="326"
      src={uri}
      allowFullScreen
    />
  </div>
;

export default Video;
