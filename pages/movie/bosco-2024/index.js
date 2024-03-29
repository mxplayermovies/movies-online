
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX61" />;
     <DailyMotionBackground movieId='INDEX61' />
    </div>
  )
}

export default index
