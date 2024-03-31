
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX19" />;
     <DailyMotionBackground movieId='INDEX19' />
    </div>
  )
}

export default index
