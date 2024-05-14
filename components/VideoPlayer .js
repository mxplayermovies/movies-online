import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const currentIndexRef = useRef(0);

  // Define the array of video IDs
  const videoIds = [
    '0eojWBnFbV4',
    'UeXdGAzqV5A',
    '5vJos8odkGw',
    'OL4uP2tOvuc',
    '5E1ir1S63y0'
  ];

  useEffect(() => {
    // Initialize the YouTube Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create the player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      // Create a new player instance
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: videoIds[currentIndexRef.current], // Play the first video
        playerVars: {
          autoplay: 1,
          mute: 1,
          playsinline: 1,
          enablejsapi: 1 // Enable JavaScript API for controlling the player
        },
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.ENDED) {
              // If video has ended, move to the next video or loop back to the beginning
              currentIndexRef.current =
                (currentIndexRef.current + 1) % videoIds.length;
              playerRef.current.loadVideoById({
                videoId: videoIds[currentIndexRef.current],
                startSeconds: 0 // Start from the beginning of the next video
              });
            }
          }
        }
      });
    };

    // Clean up function to remove the global callback
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // Aspect ratio (16:9)
        height: 0,
        overflow: 'hidden'
      }}
    >
      <div
        id='youtube-player'
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}
      />
    </div>
  );
};

export default VideoPlayer;
