
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX90" />;
     <DailyMotionBackground movieId='INDEX90' />
    </div>
  )
}

export default index
