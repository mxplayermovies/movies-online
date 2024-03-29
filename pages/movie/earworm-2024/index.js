
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX92" />;
     <DailyMotionBackground movieId='INDEX92' />
    </div>
  )
}

export default index
