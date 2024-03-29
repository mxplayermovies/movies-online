

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX54' />
      <AdultSkipAds movieId='INDEX54' />
      <DailyMotionBackground movieId='INDEX54' />
    
    </div>
  );
};

export default Index;
