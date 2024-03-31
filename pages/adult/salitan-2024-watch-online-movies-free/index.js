import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX75' />
      <MovieDetails movieId='INDEX75' />
      <DailyMotionBackground movieId='INDEX75' />
    </div>
  )
}

export default Index;
