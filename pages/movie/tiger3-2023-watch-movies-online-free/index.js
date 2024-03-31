
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX21" />;
     <DailyMotionBackground movieId='INDEX21' />
    </div>
  )
}

export default index
