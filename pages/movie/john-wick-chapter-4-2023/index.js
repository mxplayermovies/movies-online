
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX16" />;
     <DailyMotionBackground movieId='INDEX16' />
    </div>
  )
}

export default index
