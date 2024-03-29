import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX125' />
      <MovieDetails movieId='INDEX125' />
      <DailyMotionBackground movieId='INDEX125' />
    </div>
  )
}

export default Index
