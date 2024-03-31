
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX11" />;
     <DailyMotionBackground movieId='INDEX11' />
    </div>
  )
}

export default index
