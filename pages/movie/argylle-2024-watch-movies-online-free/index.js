
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX70" />;
     <DailyMotionBackground movieId='INDEX70' />
    </div>
  )
}

export default index
