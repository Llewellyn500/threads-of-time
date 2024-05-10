import React, { useState } from 'react';
import App from '../../App';

function VideoIntro() {
  const [ videoEnded, setVideoEnded ] = useState(false);

  return (
    videoEnded ?
      <App /> :
      <video style={{width: "99vw", height: "99vh", marginLeft: "auto", marginRight: "auto"}} autoPlay muted onEnded={() => setVideoEnded(true)}>
        <source src="video.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default VideoIntro;