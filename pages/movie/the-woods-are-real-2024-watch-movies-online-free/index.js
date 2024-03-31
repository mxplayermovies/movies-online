
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX102" />;
     <DailyMotionBackground movieId='INDEX102' />
    </div>
  )
}

export default index
