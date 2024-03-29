
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX100" />;
     <DailyMotionBackground movieId='INDEX100' />
    </div>
  )
}

export default index
