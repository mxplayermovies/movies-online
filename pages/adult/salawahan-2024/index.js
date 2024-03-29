

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX63' />
      <AdultSkipAds movieId='INDEX63' />
      <DailyMotionBackground movieId='INDEX63' />
    
    </div>
  );
};

export default Index;
