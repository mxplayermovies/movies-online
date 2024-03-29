import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX63' />
      <MovieDetails movieId='INDEX63' />
      <DailyMotionBackground movieId='INDEX63' />
    </div>
  )
}

export default Index;
