import React, { useState, useEffect, Suspense } from 'react';
const App = React.lazy(() => import('../../App'));

function VideoIntro() {
  const [videoEnded, setVideoEnded] = useState(false);

  // Effect to preload the App component when the component mounts
  useEffect(() => {
    const preloadApp = async () => {
      await import('../../App');
    };
    preloadApp();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {videoEnded ? (
        <App />
      ) : (
        <video style={{ width: '99vw', height: '99vh', marginLeft: 'auto', marginRight: 'auto' }} autoPlay muted onEnded={() => setVideoEnded(true)}>
          <source src="video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </Suspense>
  );
}

export default VideoIntro;
