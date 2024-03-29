
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX83" />;
     <DailyMotionBackground movieId='INDEX83' />
    </div>
  )
}

export default index
