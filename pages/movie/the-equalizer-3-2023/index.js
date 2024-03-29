
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX15" />;
     <DailyMotionBackground movieId='INDEX15' />
    </div>
  )
}

export default index
