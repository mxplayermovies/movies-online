

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX77' />
      <AdultSkipAds movieId='INDEX77' />
      <DailyMotionBackground movieId='INDEX77' />
    
    </div>
  );
};

export default Index;
