
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX87" />;
     <DailyMotionBackground movieId='INDEX87' />
    </div>
  )
}

export default index
