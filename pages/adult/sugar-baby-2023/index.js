

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX12' />
      <AdultSkipAds movieId='INDEX12' />
      <DailyMotionBackground movieId='INDEX12' />
    
    </div>
  );
};

export default Index;
