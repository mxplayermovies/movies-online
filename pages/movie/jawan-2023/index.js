
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX28" />;
     <DailyMotionBackground movieId='INDEX28' />
    </div>
  )
}

export default index
