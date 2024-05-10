import React, { useState } from 'react';
import App from '../../App';

function VideoIntro() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    videoEnded ? 
    <App /> :
    <video width="100%" height="100%" autoPlay muted onEnded={() => setVideoEnded(true)}>
      <source src="video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoIntro;