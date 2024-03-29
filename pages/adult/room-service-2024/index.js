

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
      <MovieDetails movieId='INDEX54' />
      <AdultSkipAds movieId='INDEX54' />
      <DailyMotionBackground movieId='INDEX54' />
    
    </div>
  );
};

export default Index;
