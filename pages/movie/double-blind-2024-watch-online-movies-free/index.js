
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX80" />;
     <DailyMotionBackground movieId='INDEX80' />
    </div>
  )
}

export default index
