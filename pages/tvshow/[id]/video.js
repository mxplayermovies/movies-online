import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tvshow, settvshow] = useState(null);
  const audioIframeRef = useRef(null);

  useEffect(() => {
    const fetchtvshow = async () => {
      try {
        const res = await fetch('/tvshow.json'); // Assuming tvshow.json is in the public folder
        const data = await res.json();

        const selectedtvshow = data.find((tvshow) => tvshow.id === id);
        settvshow(selectedtvshow);
      } catch (error) {
        console.error('Error fetching tvshow data:', error);
      }
    };

    if (id) {
      fetchtvshow();
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
  }, [tvshow]); // Include 'tvshow' in dependencies to trigger effect when tvshow changes

  if (!tvshow) {
    return <p  style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '34px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#40D7BC',
        textShadow: '2px 5px 5px #000000'
      }}>Loading...</p>;
  }

  const playerUrl = `https://www.dailymotion.com/embed/video/${tvshow.video}`;

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
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}>Official Trailer - {tvshow.title}</h1>
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
            tvshow && tvshow.video
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
            }}>Description: {tvshow.synopsis}</h2>
    </div>
  );
};

export default VideoPage;
