
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX89" />;
     <DailyMotionBackground movieId='INDEX89' />
    </div>
  )
}

export default index
