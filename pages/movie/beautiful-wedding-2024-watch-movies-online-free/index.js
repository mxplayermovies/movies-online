
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX81" />;
     <DailyMotionBackground movieId='INDEX81' />
    </div>
  )
}

export default index
