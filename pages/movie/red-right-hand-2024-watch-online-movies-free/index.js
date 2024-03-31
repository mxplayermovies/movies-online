
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX93" />;
     <DailyMotionBackground movieId='INDEX93' />
    </div>
  )
}

export default index
