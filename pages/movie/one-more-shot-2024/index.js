
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX32" />;
     <DailyMotionBackground movieId='INDEX32' />
    </div>
  )
}

export default index
