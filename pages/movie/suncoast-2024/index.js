
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX69" />;
     <DailyMotionBackground movieId='INDEX69' />
    </div>
  )
}

export default index
