
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX105" />;
     <DailyMotionBackground movieId='INDEX105' />
    </div>
  )
}

export default index
