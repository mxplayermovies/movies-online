import React, { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch('/movies.json');
        const data = await response.json();
        const movie = data.find(movie => movie.id === movieId);
        setMovieData(movie);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return (
      <div
        style={{
          marginTop: '200px',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '30px',
          width: '300px',
          height: '300px',
          margin: 'auto'
        }}
      >
        <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
        <lottie-player
          src='https://lottie.host/e464e1f9-5f31-40e4-aa92-4ac938922fa2/cWvdLv7onO.json'
          background='#fff'
          speed='1'
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
          direction='1'
          mode='normal'
        ></lottie-player>
      </div>
    )
  }

  const { movie.url, title, backimage } = movieData;

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      <FacebookShareButton url={movie.url} quote={title} hashtag="#drtrailer">
        <FacebookIcon size={48} round />
      </FacebookShareButton>

      <TwitterShareButton url={movie.url} title={title}>
        <TwitterIcon size={48} round />
      </TwitterShareButton>

      <LinkedinShareButton url={movie.url} title={title}>
        <LinkedinIcon size={48} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={movie.url} title={title}>
        <WhatsappIcon size={48} round />
      </WhatsappShareButton>

      <EmailShareButton url={movie.url} subject={title} body="Check this out!">
        <EmailIcon size={48} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
