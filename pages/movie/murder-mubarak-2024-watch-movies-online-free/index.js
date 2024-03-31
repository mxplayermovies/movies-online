
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX115" />;
     <DailyMotionBackground movieId='INDEX115' />
    </div>
  )
}

export default index
