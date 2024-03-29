
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX106" />;
     <DailyMotionBackground movieId='INDEX106' />
    </div>
  )
}

export default index
