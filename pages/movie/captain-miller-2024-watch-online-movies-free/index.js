
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX50" />;
     <DailyMotionBackground movieId='INDEX50' />
    </div>
  )
}

export default index
