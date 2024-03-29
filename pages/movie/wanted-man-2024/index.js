
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX34" />;
     <DailyMotionBackground movieId='INDEX34' />
    </div>
  )
}

export default index
