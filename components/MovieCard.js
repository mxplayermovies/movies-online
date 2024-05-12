// components/MovieCard.js

import Link from 'next/link';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link href={`/movies/${movie.id}`}>
        <a>
          <img src={movie.image} alt={movie.title} />
        </a>
      </Link>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Genre: {movie.genre.join(', ')}</p>
        <p>IMDb Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
