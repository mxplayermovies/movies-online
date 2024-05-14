// // pages/movie/[id]/video.js
// import { useRouter } from 'next/router';
// import movieData from '../public/movie.json'

// const VideoPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find the movie based on the id from the router
//   const movie = moviesData.find((movie) => movie.id === id);

//   if (!movie) {
//     return <p>Movie not found</p>;
//   }

//   return (
//     <div>
//       <h1>Official Trailer - {movie.name}</h1>
//       <div>
//         {/* Render your video player here */}
//         <iframe
//           src={`https://geo.dailymotion.com/player/${movie.video}.html`}
//           width='800'
//           height='450'
//           frameBorder='0'
//           allow='autoplay; fullscreen'
//           allowFullScreen
//           title='Dailymotion Video Player'
//         ></iframe>
//       </div>
//       <p>Description: {movie.description}</p>
//     </div>
//   );
// };

// export default VideoPage;

// pages/movie/[id]/video.js

// pages/movie/[id]/video.js

// import { useRouter } from 'next/router';
// import { useEffect, useState, useRef } from 'react';

// const VideoPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         // Fetch the movie data from your movie.json or API endpoint
//         const res = await fetch('/movie.json');
//         const data = await res.json();

//         // Find the movie object with the matching id
//         const selectedMovie = data.find((movie) => movie.id === id);
//         setMovie(selectedMovie);
//       } catch (error) {
//         console.error('Error fetching movie data:', error);
//       }
//     };

//     if (id) {
//       fetchMovie();
//     }
//   }, [id]);

//   const audioIframeRef = useRef(null)
//   const predefinedEqualizationValue = 70
//   const predefinedNoiseReductionValue = 40
//   const audioSourceQuality = 'high'
//   const enableNoiseCancellation = true

//   useEffect(() => {
//     const autoAdjustSoundEnhancements = () => {
//       const iframeWindow = audioIframeRef.current.contentWindow

//       if (iframeWindow && iframeWindow.postMessage) {
//         iframeWindow.postMessage(
//           {
//             command: 'autoAdjustSoundEnhancements',
//             equalizationValue: predefinedEqualizationValue,
//             noiseReductionValue: predefinedNoiseReductionValue,
//             audioSourceQuality: audioSourceQuality
//           },
//           '*'
//         )
//       }
//     }

//     const loadAudioProcessing = () => {
//       autoAdjustSoundEnhancements()

//       const iframeAudioElement =
//         audioIframeRef.current.contentDocument.getElementById('audioPlayer')

//       const iframeAudioContext = new (window.AudioContext ||
//         window.webkitAudioContext)()
//       const sourceNode =
//         iframeAudioContext.createMediaElementSource(iframeAudioElement)

//       // Noise cancellation processing
//       if (enableNoiseCancellation) {
//         const noiseCancellationNode = iframeAudioContext.createBiquadFilter()
//         noiseCancellationNode.type = 'highpass' // Using high-pass filter for noise cancellation
//         noiseCancellationNode.frequency.value = 2000 // Adjust the cutoff frequency as needed (example: 2000 Hz)
//         sourceNode.connect(noiseCancellationNode)
//         noiseCancellationNode.connect(iframeAudioContext.destination)
//       }

//       // Load and apply the impulse response (Mills Greek Theater)
//       fetch(
//         '../wp-content/themes/website/assets/274600-Future-Wave-Rise-01.wav'
//       ) // Update with the actual file path
//         .then(response => response.arrayBuffer())
//         .then(buffer => iframeAudioContext.decodeAudioData(buffer))
//         .then(audioBuffer => {
//           const convolverNode = iframeAudioContext.createConvolver()
//           convolverNode.buffer = audioBuffer
//           sourceNode.connect(convolverNode)
//           convolverNode.connect(iframeAudioContext.destination)
//         })
//         .catch(error => console.error('Error loading impulse response:', error))
//     }

//     if (audioIframeRef.current) {
//       audioIframeRef.current.addEventListener('load', loadAudioProcessing)
//     }

//     return () => {
//       if (audioIframeRef.current) {
//         audioIframeRef.current.removeEventListener('load', loadAudioProcessing)
//       }
//     }
//   }, [movie, enableNoiseCancellation])

//   const loadVideo = (videoPage, contentType, server) => {
//     const videoIframe = document.getElementById('videoIframe')

//   if (!movie) {
//     return <p>Loading...</p>;
//   }

//   // Construct Dailymotion player URL
//   const playerUrl = `https://www.dailymotion.com/embed/video/${movie.video}`;

//   return (
//     <div>
//       <h1>Official Trailer - {movie.title}</h1>
//       <div>
//         {/* Render Dailymotion video player */}
//         {/* <iframe
//           src={playerUrl}
//           width='800'
//           height='450'
//           allow='autoplay'
//           frameBorder='0'
//           allowFullScreen
//           title='Dailymotion Video Player'
//         ></iframe> */}
//           <iframe
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       position: 'absolute',
//                       left: '0px',
//                       top: '0px',
//                       overflow: 'hidden',
//                       filter:
//                         'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
//                     }}
//                     className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
//                     frameborder='0'
//                     type='text/html'
//                     ref={audioIframeRef}
//                     id='audioIframe'
//                     src={`https://geo.dailymotion.com/player/xjrxe.html?video=${
//                       movie && movie.video
//                     }`}
//                     width='100%'
//                     height='100%'
//                     allowfullscreen
//                     title='Dailymotion Video Player'
//                     allow='autoplay'
//                   ></iframe>
//       </div>
//       <p>Description: {movie.description}</p>
//     </div>
//   );
// };

// export default VideoPage;


import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const audioIframeRef = useRef(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch('/movie.json'); // Assuming movie.json is in the public folder
        const data = await res.json();

        const selectedMovie = data.find((movie) => movie.id === id);
        setMovie(selectedMovie);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  useEffect(() => {
    const loadVideoProcessing = () => {
      // Implement your video processing logic here
      console.log('Video processing logic');
    };

    if (audioIframeRef.current) {
      audioIframeRef.current.addEventListener('load', loadVideoProcessing);
    }

    return () => {
      if (audioIframeRef.current) {
        audioIframeRef.current.removeEventListener('load', loadVideoProcessing);
      }
    };
  }, [movie]); // Include 'movie' in dependencies to trigger effect when movie changes

  if (!movie) {
    return <p  style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '34px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#40D7BC',
        textShadow: '2px 5px 5px #000000'
      }}>Loading...</p>;
  }

  const playerUrl = `https://www.dailymotion.com/embed/video/${movie.video}`;

  return (
    <div
        className={`w-full bg-gray-600 shadow`}
        style={{
         justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
      <h1 className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}>Official Trailer - {movie.title}</h1>
      <div>
        <iframe
          style={{
            width: '100%',
            height: '450px', // Set a fixed height for the video iframe
            overflow: 'hidden',
            filter: 'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
          }}
          className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
          frameborder='0'
          type='text/html'
          ref={audioIframeRef}
          id='audioIframe'
          src={`https://geo.dailymotion.com/player/xjrxe.html?video=${
            movie && movie.video
          }`}
          width='100%'
          height='100%'
          allowfullscreen
          title='Dailymotion Video Player'
          allow='autoplay'
        ></iframe>
      </div>
      <h2   style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#40D7BC',
              textShadow: '2px 5px 5px #000000'
            }}>Description: {movie.synopsis}</h2>
    </div>
  );
};

export default VideoPage;
