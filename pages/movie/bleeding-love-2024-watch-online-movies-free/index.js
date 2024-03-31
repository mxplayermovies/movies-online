
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX91" />;
     <DailyMotionBackground movieId='INDEX91' />
    </div>
  )
}

export default index
