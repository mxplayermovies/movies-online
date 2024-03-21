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

  const shareQuote = movieData ? `The Best Movies Platform HD Movies - ${movieData.title}` : '';

  return (
    <>
      {movieData && (
        <div className="bg-transparent flex gap-2 justify-center p-2">
          <FacebookShareButton url={movieData.url} quote={shareQuote} hashtag="#drtrailer">
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <TwitterShareButton url={movieData.url} title={shareQuote}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <LinkedinShareButton url={movieData.url} title={shareQuote}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={movieData.url} title={shareQuote}>
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
          <EmailShareButton url={movieData.url} subject={shareQuote} body="Check this out!">
            <EmailIcon size={48} round />
          </EmailShareButton>
        </div>
      )}
      {movieData && (
        <div>
          <img src={movieData.backimage} alt={movieData.title} />
        </div>
      )}
    </>
  );
};

export default ShareButtons;
