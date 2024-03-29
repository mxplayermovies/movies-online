import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX67' />
      <MovieDetails movieId='INDEX67' />
      <DailyMotionBackground movieId='INDEX67' />
    </div>
  )
}

export default Index;
