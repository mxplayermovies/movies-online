

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX53' />
      <AdultSkipAds movieId='INDEX53' />
      <DailyMotionBackground movieId='INDEX53' />
    
    </div>
  );
};

export default Index;
