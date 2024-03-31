
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX94" />;
     <DailyMotionBackground movieId='INDEX94' />
    </div>
  )
}

export default index
