
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX55" />;
     <DailyMotionBackground movieId='INDEX55' />
    </div>
  )
}

export default index
