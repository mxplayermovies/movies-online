
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX47" />;
     <DailyMotionBackground movieId='INDEX47' />
    </div>
  )
}

export default index
