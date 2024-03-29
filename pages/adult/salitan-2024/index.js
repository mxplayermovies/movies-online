

import React from 'react'
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX75' />
      <AdultSkipAds movieId='INDEX75' />
      <DailyMotionBackground movieId='INDEX75' />
    
    </div>
  );
};

export default Index;
