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
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/movies.json`);
        const data = await response.json();
        const movie = data.find(movie => movie.id === movieId);
        setMovieData(movie);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const shareQuote = movieData ? `Watch Movies Online™ - ${movieData.title}` : '';
  const shareUrl = movieData ? movieData.url : '';
  const title = movieData ? movieData.title : '';
  const imageUrl = movieData ? movieData.backimage : '';

  return (
    <>
      <div className="bg-transparent flex gap-2 justify-center p-2">
        <FacebookShareButton url={shareUrl} quote={shareQuote} hashtag="#drtrailer">
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareQuote}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={shareQuote}>
          <LinkedinIcon size={48} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={shareQuote}>
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={title} body="Check this out!">
          <EmailIcon size={48} round />
        </EmailShareButton>
      </div>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </>
  );
};

export default ShareButtons;
