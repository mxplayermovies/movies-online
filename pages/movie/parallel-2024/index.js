
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX96" />;
     <DailyMotionBackground movieId='INDEX96' />
    </div>
  )
}

export default index
