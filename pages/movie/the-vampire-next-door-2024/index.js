
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX44" />;
     <DailyMotionBackground movieId='INDEX44' />
    </div>
  )
}

export default index
