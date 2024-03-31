
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX104" />;
     <DailyMotionBackground movieId='INDEX104' />
    </div>
  )
}

export default index;

