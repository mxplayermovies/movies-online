
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX56" />;
     <DailyMotionBackground movieId='INDEX56' />
    </div>
  )
}

export default index
