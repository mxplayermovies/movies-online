

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX66' />
      <AdultSkipAds movieId='INDEX66' />
      <DailyMotionBackground movieId='INDEX66' />
    
    </div>
  );
};

export default Index;
