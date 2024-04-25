import { useState, useEffect } from 'react';
import movieData from '../public/movie.json';
import tvshowData from '../public/tvshow.json';
import adultData from '../public/adult.json';


const Trendingmovie = () => {
  const [movie, setmovie] = useState([]);
  const [tvshow, settvshow] = useState([]);

  useEffect(() => {
    setmovie(movieData);
    settvshow(tvshowData);
  }, []);

  return (
    <div className='container'>
      <div className='col-xl-3 nopadding'>
        <ul className='playlist_scrol'>
          {movie.map((movieItem) => (
            <li key={movieItem.id} className="playlist-video">
              <a href={`/movie/${movieItem.id}`} className='w-img'>
                <img
                  src={`/wp-content/uploads/2023/06/${movieItem.poster}`}
                  alt={movieItem.title}
                  className="rounded-md border"
                />
                <div className="badge">{movieItem.badge}</div>
                {/* <div className="genre">{movieItem.genre}</div> */}
              </a>
            </li>
          ))}
          {tvshow.map((tvshowItem) => (
            <li key={tvshowItem.id} className="playlist-video">
              <a href={`/tvshow/${tvshowItem.id}`} className='w-img'>
                <img
                  src={`/wp-content/uploads/2023/06/${tvshowItem.poster}`}
                  alt={tvshowItem.title}
                  className="rounded-md border"
                />
                <div className="badge">{tvshowItem.badge}</div>
                {/* <div className="genre">{tvshowItem.genre}</div> */}
              </a>
            </li>
          ))}
          {adultData.map((adultItem) => (
            <li key={adultItem.id} className="playlist-video">
              <a href={`/adult/${adultItem.id}`} className='w-img'>
                <img
                  src={`/wp-content/uploads/2023/06/${adultItem.poster}`}
                  alt={adultItem.title}
                  className="rounded-md border"
                />
                <div className="badge">{adultItem.badge}</div>
                {/* <div className="genre">{adultItem.genre}</div> */}
              </a>
            </li>
          ))}
        
        </ul>
      </div>

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

        .playlist-video {
          margin-right: 4px; /* Adjust margin for space between images */
          margin-bottom: 4px; /* Adjust margin for space between rows */
          width: calc(33.33% - 8px); /* Adjust width for three images side by side */
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .playlist-video .w-img {
          display: block;
          text-align: center;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
        }

        .playlist-video .w-img:hover {
          transform: scale(1.03);
        }

        .playlist-video img {
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
    </div>
  );
};


export async function getStaticPaths() {
  const moviePaths = movieData.map((movieItem) => ({
    params: { id: movieItem.id },
  }));

  const tvshowPaths = tvshowData.map((tvshowItem) => ({
    params: { id: tvshowItem.id },
  }));

  const adultPaths = adultData.map((adultItem) => ({
    params: { id: adultItem.id },
  }));

  const sportsPaths = sportsData.map((sportsItem) => ({
    params: { id: sportsItem.id },
  }));

  const debatePaths = debateData.map((debateItem) => ({
    params: { id: debateItem.id },
  }));

  const discoverPaths = discoverData.map((discoverItem) => ({
    params: { id: discoverItem.id },
  }));

  const entertainmentPaths = entertainmentData.map((entertainmentItem) => ({
    params: { id: entertainmentItem.id },
  }));

  const politicsPaths = politicsData.map((politicsItem) => ({
    params: { id: politicsItem.id },
  }));

  const techPaths = techData.map((techItem) => ({
    params: { id: techItem.id },
  }));

  const travelPaths = travelData.map((travelItem) => ({
    params: { id: travelItem.id },
  }));

  return {
    paths: [
      ...moviePaths,
      ...tvshowPaths,
      ...adultPaths,
      ...sportsPaths,
      ...debatePaths,
      ...discoverPaths,
      ...entertainmentPaths,
      ...politicsPaths,
      ...techPaths,
      ...travelPaths,
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const movieItem = movieData.find((item) => item.id === params.id);
  const tvshowItem = tvshowData.find((item) => item.id === params.id);

  const item = movieItem || tvshowItem;

  return {
    props: {
      item: item || null,
    },
  };
}

export default Trendingmovie;