
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX49" />;
     <DailyMotionBackground movieId='INDEX49' />
    </div>
  )
}

export default index
