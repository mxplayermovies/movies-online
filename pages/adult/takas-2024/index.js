

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
      <MovieDetails movieId='INDEX66' />
      <AdultSkipAds movieId='INDEX66' />
      <DailyMotionBackground movieId='INDEX66' />
    
    </div>
  );
};

export default Index;
