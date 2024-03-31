import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX64' />
      <MovieDetails movieId='INDEX64' />
      <DailyMotionBackground movieId='INDEX64' />
    </div>
  )
}

export default Index;
