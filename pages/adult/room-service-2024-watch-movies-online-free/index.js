import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'
import AdultSkipAds from '@components/AdultSkipAds'

const Index = ({ movieData }) => {
  return (
    <div>
      <AdultSkipAds movieId='INDEX54' />
      <MovieDetails movieId='INDEX54' />
      <DailyMotionBackground movieId='INDEX54' />
    </div>
  )
}

export default Index;
