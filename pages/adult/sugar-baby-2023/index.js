import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX12' />
      <MovieDetails movieId='INDEX12' />
      <DailyMotionBackground movieId='INDEX12' />
    </div>
  )
}

export default Index;
