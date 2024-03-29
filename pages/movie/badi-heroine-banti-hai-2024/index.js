
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX48" />;
     <DailyMotionBackground movieId='INDEX48' />
    </div>
  )
}

export default index
