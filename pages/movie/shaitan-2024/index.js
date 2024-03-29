
import React from 'react'
import MovieDetails from '@components/MovieDetails'
import DailyMotionBackground from '@components/DailyMotionBackground'

const index = () => {
  return (
    <div>
     <MovieDetails movieId="INDEX108" />;
     <DailyMotionBackground movieId='INDEX108' />
    </div>
  )
}

export default index
