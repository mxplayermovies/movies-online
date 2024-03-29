
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX117" />;
     <DailyMotionBackground movieId='INDEX117' />
    </div>
  )
}

export default index
