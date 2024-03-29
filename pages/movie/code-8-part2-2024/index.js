
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX98" />;
     <DailyMotionBackground movieId='INDEX98' />
    </div>
  )
}

export default index
