
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX60" />;
     <DailyMotionBackground movieId='INDEX60' />
    </div>
  )
}

export default index
