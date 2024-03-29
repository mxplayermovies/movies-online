
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX118" />;
     <DailyMotionBackground movieId='INDEX118' />
    </div>
  )
}

export default index
