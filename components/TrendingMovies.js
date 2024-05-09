// import { useState, useEffect } from 'react';
// import movieData from '../public/movie.json';
// import tvshowData from '../public/tvshow.json';
// import adultData from '../public/adult.json';
// import liveData from '../public/live.json';
// import Image from 'next/image'

// const Trendingmovie = () => {
//   const [movie, setmovie] = useState([]);
//   const [tvshow, settvshow] = useState([]);
//   const [live, setlive] = useState([]);


//   useEffect(() => {
//     setmovie(movieData);
//     settvshow(tvshowData);
//     setlive(liveData);

//   }, []);

//   return (
//     <div className='container'>
//       <div className='col-xl-3 nopadding'>
//         <ul className='playlist_scrol'>
//           {movie.map((movieItem) => (
//             <li key={movieItem.id} className="playlist-video">
//               <a href={`/movie/${movieItem.id}`} className='w-img'>
//                 <Image
//                   src={`/wp-content/uploads/2023/06/${movieItem.poster}`}
//                   alt={movieItem.title}
//                   className="rounded-md border"
//                   width={500}
//                   height={500}
//                   priority
//                   style={{
//                     // maxWidth: '100%',
//                     // margin: 'auto',
//                     // marginBottom: '20px',
//                     // borderRadius: '25px',
//                     // boxShadow: '0 0 10px 0 #40D7BC',
//                     filter:
//                       'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
//                   }}
//                 />
             
//                 <div className="badge">{movieItem.badge}</div>
//                 {/* <div className="genre">{movieItem.genre}</div> */}
//               </a>
//             </li>
//           ))}
//           {tvshow.map((tvshowItem) => (
//             <li key={tvshowItem.id} className="playlist-video">
//               <a href={`/tvshow/${tvshowItem.id}`} className='w-img'>
//                 <Image
//                   src={`/wp-content/uploads/2023/06/${tvshowItem.poster}`}
//                   alt={tvshowItem.title}
//                   className="rounded-md border"
//                   width={500}
//                   height={500}
//                   priority
//                   style={{
//                     // maxWidth: '100%',
//                     // margin: 'auto',
//                     // marginBottom: '20px',
//                     // borderRadius: '25px',
//                     // boxShadow: '0 0 10px 0 #40D7BC',
//                     filter:
//                       'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
//                   }}
//                 />
              
//                 <div className="badge">{tvshowItem.badge}</div>
//                 {/* <div className="genre">{tvshowItem.genre}</div> */}
//               </a>
//             </li>
//           ))}
//          {liveData.map((liveItem) => (
//   <li key={liveItem.id} className="playlist-video">
//     <a href={`/live/${liveItem.id}`} className='w-img'>
//       <Image
//         src={`/wp-content/uploads/2023/06/${liveItem.poster}`}
//         alt={liveItem.title}
//         className="rounded-md border"
//         width={500}
//         height={500}
//         priority
//         style={{
//           filter: 'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)',
//         }}
//       />
//       <div className="badge">{liveItem.badge}</div>
//     </a>
//   </li>
// ))}

//           {adultData.map((adultItem) => (
//             <li key={adultItem.id} className="playlist-video">
//               <a href={`/adult/${adultItem.id}`} className='w-img'>
//                 <Image
//                   src={`/wp-content/uploads/2023/06/${adultItem.poster}`}
//                   alt={adultItem.title}
//                   className="rounded-md border"
//                   width={500}
//                   height={500}
//                   priority
//                   style={{
//                     // maxWidth: '100%',
//                     // margin: 'auto',
//                     // marginBottom: '20px',
//                     // borderRadius: '25px',
//                     // boxShadow: '0 0 10px 0 #40D7BC',
//                     filter:
//                       'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
//                   }}
//                 />
             
//                 <div className="badge">{adultItem.badge}</div>
//                 {/* <div className="genre">{adultItem.genre}</div> */}
//               </a>
//             </li>
//           ))}
        
//         </ul>
//       </div>

//       <style jsx>{`
//         .container {
//           width: 100%;
//           max-width: 1200px;
//           height: 500px;
//           overflow-y: auto;
//           margin: 0 auto;
//           border: 5px solid rgba(0, 0, 0, 0); /* Transparent border */
//           box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Shadow effect */
//         }

//         .playlist_scrol {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .playlist-video {
//           margin-right: 4px; /* Adjust margin for space between images */
//           margin-bottom: 4px; /* Adjust margin for space between rows */
//           width: calc(33.33% - 8px); /* Adjust width for three images side by side */
//           box-sizing: border-box;
//           position: relative;
//           overflow: hidden;
//         }

//         .playlist-video .w-img {
//           display: block;
//           text-align: center;
//           text-decoration: none;
//           position: relative;
//           transition: transform 0.3s ease;
//         }

//         .playlist-video .w-img:hover {
//           transform: scale(1.03);
//         }

//         .playlist-video img {
//           width: 100%;
//           height: auto;
//           max-height: 100%;
//           object-fit: contain;
//           border-radius: 10px;
//           border: 2px solid #40d7bc;
//           filter: contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg);
//         }

//         .badge {
//           position: absolute;
//           top: 2px;
//           right: 2px;
//           background-color: rgba(0, 0, 0, 0.5);
//           color: white;
//           font-weight: bold;
//           padding: 2px;
//           border-radius: 5px;
//         }

//         .genre {
//           position: absolute;
//           bottom: 2px;
//           left: 50%;
//           transform: translateX(-50%);
//           background-color: rgba(0, 0, 0, 0.5);
//           color: white;
//           font-weight: bold;
//           padding: 2px;
//           border-radius: 5px;
//         }
//       `}</style>
//     </div>
//   );
// };


// export async function getStaticPaths() {
//   const moviePaths = movieData.map((movieItem) => ({
//     params: { id: movieItem.id },
//   }));

//   const tvshowPaths = tvshowData.map((tvshowItem) => ({
//     params: { id: tvshowItem.id },
//   }));

//   const adultPaths = adultData.map((adultItem) => ({
//     params: { id: adultItem.id },
//   }));

//   const livePaths = liveData.map((liveItem) => ({
//     params: { id: liveItem.id },
//   }));

 
//   return {
//     paths: [
//       ...moviePaths,
//       ...tvshowPaths,
//       ...adultPaths,
//       ...livePaths,
 
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const movieItem = movieData.find((item) => item.id === params.id);
//   const tvshowItem = tvshowData.find((item) => item.id === params.id);

//   const item = movieItem || tvshowItem;

//   return {
//     props: {
//       item: item || null,
//     },
//   };
// }

// export default Trendingmovie;










































// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import shuffle from 'lodash/shuffle'; // Import shuffle function from lodash
// import movieData from '../public/movie.json';
// import tvshowData from '../public/tvshow.json';
// import adultData from '../public/adult.json';
// import liveData from '../public/live.json';

// const Trendingmovie = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Merge all data into one array
//     const allItems = [
//       ...movieData.map(item => ({ ...item, category: 'movie' })),
//       ...tvshowData.map(item => ({ ...item, category: 'tvshow' })),
//       ...adultData.map(item => ({ ...item, category: 'adult' })),
//       ...liveData.map(item => ({ ...item, category: 'live' })),
//     ];

//     // Shuffle the merged array to randomize the order
//     const shuffledItems = shuffle(allItems);

//     // Set the shuffled items state
//     setItems(shuffledItems);
//   }, []);

//   return (
//     <div className='container'>
//       <div className='col-xl-3 nopadding'>
//         <ul className='playlist_scrol'>
//           {items.map(item => (
//             <li key={item.id} className="playlist-video">
//               <a href={`/${item.category}/${item.id}`} className='w-img'>
//                 <Image
//                   src={`/wp-content/uploads/2023/06/${item.poster}`}
//                   alt={item.title}
//                   className="rounded-md border"
//                   width={500}
//                   height={500}
//                   priority
//                   style={{
//                     filter: 'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)',
//                   }}
//                 />
//                 <div className="badge">{item.badge}</div>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <style jsx>{`
//         .container {
//           width: 100%;
//           max-width: 1200px;
//           height: 500px;
//           overflow-y: auto;
//           margin: 0 auto;
//           border: 5px solid rgba(0, 0, 0, 0); /* Transparent border */
//           box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Shadow effect */
//         }

//         .playlist_scrol {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .playlist-video {
//           margin-right: 4px; /* Adjust margin for space between images */
//           margin-bottom: 4px; /* Adjust margin for space between rows */
//           width: calc(33.33% - 8px); /* Adjust width for three images side by side */
//           box-sizing: border-box;
//           position: relative;
//           overflow: hidden;
//         }

//         .playlist-video .w-img {
//           display: block;
//           text-align: center;
//           text-decoration: none;
//           position: relative;
//           transition: transform 0.3s ease;
//         }

//         .playlist-video .w-img:hover {
//           transform: scale(1.03);
//         }

//         .playlist-video img {
//           width: 100%;
//           height: auto;
//           max-height: 100%;
//           object-fit: contain;
//           border-radius: 10px;
//           border: 2px solid #40d7bc;
//           filter: contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg);
//         }

//         .badge {
//           position: absolute;
//           top: 2px;
//           right: 2px;
//           background-color: rgba(0, 0, 0, 0.5);
//           color: white;
//           font-weight: bold;
//           padding: 2px;
//           border-radius: 5px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Trendingmovie;

import { useState, useEffect } from 'react';
import Image from 'next/image';
import shuffle from 'lodash/shuffle'; // Import shuffle function from lodash
import movieData from '../public/movie.json';
import tvshowData from '../public/tvshow.json';
import adultData from '../public/adult.json';
import liveData from '../public/live.json';

const Trendingmovie = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Shuffle each category separately
    const shuffledMovies = shuffle(movieData.map(item => ({ ...item, category: 'movie' })));
    const shuffledTvShows = shuffle(tvshowData.map(item => ({ ...item, category: 'tvshow' })));
    const shuffledAdults = shuffle(adultData.map(item => ({ ...item, category: 'adult' })));
    const shuffledLive = shuffle(liveData.map(item => ({ ...item, category: 'live' })));

    // Interleave shuffled lists to ensure a mix of categories
    const interleavedItems = interleaveArrays([shuffledMovies, shuffledTvShows, shuffledAdults, shuffledLive]);

    // Set the interleaved items state
    setItems(interleavedItems);
  }, []);

  // Function to interleave arrays
  const interleaveArrays = arrays => {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const result = [];
    for (let i = 0; i < maxLength; i++) {
      arrays.forEach(arr => {
        if (arr[i]) {
          result.push(arr[i]);
        }
      });
    }
    return result;
  };

  return (
    <div className='container'>
      <div className='col-xl-3 nopadding'>
        <ul className='playlist_scrol'>
          {items.map(item => (
            <li key={item.id} className="playlist-video">
              <a href={`/${item.category}/${item.id}`} className='w-img'>
                <Image
                  src={`/wp-content/uploads/2023/06/${item.poster}`}
                  alt={item.title}
                  className="rounded-md border"
                  width={500}
                  height={500}
                  priority
                  style={{
                    filter: 'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)',
                    marginTop:'10px'
                  }}
                />
                {/* <div className="badge">{item.badge}</div> */}
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
      `}</style>
    </div>
  );
};

export default Trendingmovie;

