// import React, { useState, useEffect, useRef } from 'react'

// const BackImage = ({ movieId }) => {
//   const [movieData, setMovieData] = useState(null)
//   const [showPopup, setShowPopup] = useState(true) // Set initially to true
//   const timingRef = useRef(null)

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`/movies.json`)
//         const data = await response.json()
//         const movie = data.find(movie => movie.id === movieId)
//         setMovieData(movie)
//       } catch (error) {
//         console.error('Error fetching movie data:', error)
//       }
//     }

//     fetchMovieDetails()
//   }, [movieId])

//   useEffect(() => {
//     if (!movieData) return

//     const customDate = new Date()
//     customDate.setHours(customDate.getHours() + 24)
//     const endTime = customDate.getTime()

//     const timer = setInterval(() => {
//       const now = new Date().getTime()
//       const x = endTime - now

//       if (x > 0) {
//         const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//         const mins = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60))
//         const secs = Math.floor((x % (1000 * 60)) / 1000)
//         const time = `${hours}h : ${mins}m : ${secs}s`
//         timingRef.current.innerHTML = time
//       } else {
//         timingRef.current.innerHTML = 'Countdown expired'
//       }
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [movieData])

//   const handleClose = () => {
//     setShowPopup(false)
//   }

//   return (
//     <div>
//       {showPopup && movieData && (
//         <div className='popup-overlay'>
//           <div className='popup'>
//             <div
//               className='content-container'
//               style={{ backgroundImage: `url(${movieData.poster})` }}
//             >
//               <h2
//                 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}
//               >
//                 Coming Soon
//               </h2>
//               <div
//                 className='timing'
//                 ref={timingRef}
//                 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}
//               >
//                 24h : 00m : 00s
//               </div>
//               <p
//                 style={{
//                   color: '#000',
//                   fontSize: '25px',
//                   fontWeight: 'bold',
//                   textShadow: '5px 5px 2px #fff'
//                 }}
//               >
//                 We Are currently Working on the Movie or Tv Show. Please Check
//                 After Some Time
//               </p>
//               <div className='button-container'>
//                 <a
//                   href='../'
//                   className='close-button'
//                   onClick={handleClose}
//                   style={{
//                     fontWeight: 'bold',
//                     textShadow: '5px 5px 2px #fff'
//                   }}
//                 >
//                   Close
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

import React, { useState, useEffect, useRef } from 'react';

const BackImage = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const timingRef = useRef(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/movies.json`);
        const data = await response.json();
        const movie = data.find((movie) => movie.id === movieId);
        setMovieData(movie);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (!movieData) return;

    const startTime = new Date().getTime();
    const endTime = startTime + 24 * 60 * 60 * 1000; // 24 hours

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const x = endTime - now;

      if (x > 0) {
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((x % (1000 * 60)) / 1000);
        const time = `${hours}h : ${mins}m : ${secs}s`;
        timingRef.current.innerHTML = time;
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [movieData]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && movieData && (
        <div className="popup-overlay">
          <div className="popup">
            <div
              className="content-container"
              style={{
                backgroundImage: `url(${movieData.backimage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
              }}
            >
              <h2 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}>Coming Soon</h2>
              <div
                className="timing"
                ref={timingRef}
                style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}
              >
                24h : 00m : 00s
              </div>
              <p style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}>
                {movieData.title}
              </p>
              <p style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}>
                We Are currently Working on it.
              </p>
              <div className="button-container ">
                <a
                  href="../"
                  className="close-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0"
                  onClick={handleClose}
                  // style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #fff' }}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup {
          width: 800px;
          background-color: gray;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          animation: slide-down 0.5s ease;
          position: relative;
          z-index: 10000;
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .content-container {
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
        }

        .timing {
          font-size: 40px;
          font-weight: bold;
          color: white;
        }

        .content-container h2 {
          font-size: 100px;
          font-weight: 900;
          margin: 10px;
          font-family: 'Poppins, sans-serif';
          color: white;
        }

        .content-container p {
          margin: 0 auto;
          width: 35%;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.9;
          padding: 15px 0;
          color: white;
        }

        .content-container a {
          text-decoration: none;
          background: #fff;
          color: #111;
          padding: 10px 35px;
          border-radius: 50px;
        }

        .close-button {
          display: inline-block;
          margin-top: 50px;
          margin-bottom: 100px;
          padding: 10px 20px;
          background-color: #eaeaea;
          color: #333;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          text-decoration: none;
          background: #fff;
          color: #111;
          padding: 10px 35px;
          border-radius: 50px;
        }

        .close-button:hover {
          background-color: #ccc;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .content-container p {
            width: 70%;
          }
        }

        @media (max-width: 767px) {
          .content-container h2 {
            font-size: 40px;
          }
          .timing {
            font-size: 25px;
          }
          .content-container p {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default BackImage;
