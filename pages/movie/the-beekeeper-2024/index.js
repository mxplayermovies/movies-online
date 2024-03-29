
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX35" />;
     <DailyMotionBackground movieId='INDEX35' />
    </div>
  )
}

export default index
