
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX57" />;
     <DailyMotionBackground movieId='INDEX57' />
    </div>
  )
}

export default index
