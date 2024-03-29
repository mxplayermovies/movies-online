

import React, { useState } from 'react';
import MovieDetails from '@components/MovieDetails';
import DailyMotionBackground from '@components/DailyMotionBackground';
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state variable

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <div>
      <MovieDetails movieId='INDEX107' />
      <AdultSkipAds movieId='INDEX107' />
      <DailyMotionBackground movieId='INDEX107' />
    
    </div>
  );
};

export default Index;
