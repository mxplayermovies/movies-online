import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
      <MovieDetails movieId='INDEX14' />;
      <DailyMotionBackground movieId='INDEX14' />
    </div>
  )
}

export default index
