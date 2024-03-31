
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX95" />;
     <DailyMotionBackground movieId='INDEX95' />
    </div>
  )
}

export default index
