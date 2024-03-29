
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX86" />;
     <DailyMotionBackground movieId='INDEX86' />
    </div>
  )
}

export default index
