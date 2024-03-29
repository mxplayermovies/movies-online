
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX31" />;
     <DailyMotionBackground movieId='INDEX31' />
    </div>
  )
}

export default index
