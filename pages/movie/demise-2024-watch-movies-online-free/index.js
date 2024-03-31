
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX101" />;
     <DailyMotionBackground movieId='INDEX101' />
    </div>
  )
}

export default index
