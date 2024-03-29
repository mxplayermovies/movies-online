
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX84" />;
     <DailyMotionBackground movieId='INDEX84' />
    </div>
  )
}

export default index
