

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX125' />
      <AdultSkipAds movieId='INDEX125' />
      <DailyMotionBackground movieId='INDEX125' />
    
    </div>
  );
};

export default Index;
