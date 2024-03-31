
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX97" />;
     <DailyMotionBackground movieId='INDEX97' />
    </div>
  )
}

export default index
