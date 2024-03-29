
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX88" />;
     <DailyMotionBackground movieId='INDEX88' />
    </div>
  )
}

export default index
