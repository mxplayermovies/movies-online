import React, { useState, useEffect } from 'react';
import styles from '@styles/BackgroundVideo.module.css';
import moviesData from '../public/movie.json';

const DailyMotionBackground = ({ videoId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Find the movie data using the videoId
    const movie = moviesData.find((movie) => movie.video === videoId);
    setMovieData(movie);
  }, [videoId]);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {movieData && (
        <iframe
        className={styles.backgroundIframe}
        src={`https://geo.dailymotion.com/player/xjrxe.html?video=${movieData.video}&autoquality=1080p&mute=true&controls=false`}
        frameBorder="0"
        title="Dailymotion Video Player"
        allow="autoplay; fullscreen; picture-in-picture"
        mute='true'
        aspectRatio= '16:9' // Set the aspect ratio to 16:9
        ></iframe>
      )}
    </div>
  );
};

export default DailyMotionBackground;
