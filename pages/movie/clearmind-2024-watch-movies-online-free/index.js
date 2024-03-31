
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX59" />;
     <DailyMotionBackground movieId='INDEX59' />
    </div>
  )
}

export default index
