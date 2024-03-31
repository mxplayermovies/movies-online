import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX76' />
      <MovieDetails movieId='INDEX76' />
      <DailyMotionBackground movieId='INDEX76' />
    </div>
  )
}

export default Index;
