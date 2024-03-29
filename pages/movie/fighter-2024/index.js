
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX65" />;
     <DailyMotionBackground movieId='INDEX65' />
    </div>
  )
}

export default index
