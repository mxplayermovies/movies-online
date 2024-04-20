import { useState, useEffect } from 'react';
import moviesData from '../public/movies.json';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
    <div className='container'>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          height: 500px;
          overflow-y: auto;
          margin: 0 auto;
          border: 5px solid rgba(0, 0, 0, 0); /* Transparent border */
          box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Shadow effect */
        }

        .playlist_scrol {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .palylist-video {
          margin-right: 4px; /* Adjust margin for space between images */
          margin-bottom: 4px; /* Adjust margin for space between rows */
          width: calc(33.33% - 8px); /* Adjust width for three images side by side */
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .palylist-video .w-img {
          display: block;
          text-align: center;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
        }

        .palylist-video .w-img:hover {
          transform: scale(1.03);
        }

        .palylist-video img {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
          border: 2px solid #40d7bc;
          filter: contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg);
        }

        .badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          font-weight: bold;
          padding: 2px;
          border-radius: 5px;
        }

        .genre {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          font-weight: bold;
          padding: 2px;
          border-radius: 5px;
        }

      `}</style>
      <div className='col-xl-3 nopadding'>
        <ul className='playlist_scrol'>
          {movies.map((movie) => (
            <div key={movie.id} className="palylist-video">
              <a href={`/movie/${movie.id}`} className='w-img'>
                <img
                  src={`/wp-content/uploads/2023/06/${movie.poster}`}
                  alt={movie.title}
                  className="rounded-md border"
                  style={{
                        maxWidth: '100%',
                        margin: 'auto',
                        marginBottom: '20px',
                        borderRadius: '25px',
                        boxShadow: '0 0 10px 0 #fff',
                        filter:
                          'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                      }}
                />
                <div className="badge">{movie.badge}</div>
                <div className="genre">{movie.genre}</div>
              </a>
            </div>
          ))}
          {/* This <li> seems unnecessary, you may remove it if not needed */}
          <li className='post-item'>
            <span itemscope itemtype='http://schema.org/Thing'>
              <a
                className='post-title'
                href=''
                itemprop='url'
                rel='bookmark'
                title=''
              >
                <span itemprop='name'></span>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = moviesData.map((movie) => ({
    params: { id: movie.id }, // Assuming each movie object has an "id" field
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the movie data based on the provided id
  const movie = moviesData.find((m) => m.id === params.id);
  
  return {
    props: {
      movie,
    },
  };
}

export default TrendingMovies;
