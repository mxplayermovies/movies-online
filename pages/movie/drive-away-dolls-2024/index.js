
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX103" />;
     <DailyMotionBackground movieId='INDEX103' />
    </div>
  )
}

export default index
