
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX116" />;
     <DailyMotionBackground movieId='INDEX116' />
    </div>
  )
}

export default index
