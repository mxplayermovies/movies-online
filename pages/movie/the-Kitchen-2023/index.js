
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX51" />;
     <DailyMotionBackground movieId='INDEX51' />
    </div>
  )
}

export default index
