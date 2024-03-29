import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX107' />
      <MovieDetails movieId='INDEX107' />
      <DailyMotionBackground movieId='INDEX107' />
    </div>
  )
}

export default Index;
