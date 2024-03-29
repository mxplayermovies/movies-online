

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX78' />
      <AdultSkipAds movieId='INDEX78' />
      <DailyMotionBackground movieId='INDEX78' />
    
    </div>
  );
};

export default Index;
