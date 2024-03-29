

import React, { useState } from 'react';
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const index = () => {

  return (
    <div>
      <MovieDetails movieId='INDEX107' />
      <AdultSkipAds movieId='INDEX107' />
      <DailyMotionBackground movieId='INDEX107' />
    
    </div>
  );
};

export default Index;
