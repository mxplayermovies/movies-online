
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX71" />;
     <DailyMotionBackground movieId='INDEX71' />
    </div>
  )
}

export default index
