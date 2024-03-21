import { useState, useEffect } from "react";
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
        const response = await fetch('/movies.json');
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
  const shareUrl = movieData ? movieData.movie.url : ''; // Adjusted to fetch from movie.url
  const imageUrl = movieData ? movieData.backimage : '';

  return (
    <>
      <div className="bg-transparent flex gap-2 justify-center p-2">
        <FacebookShareButton url={shareUrl} quote={shareQuote} hashtag="#drtrailer" image={imageUrl}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareQuote} image={imageUrl}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={shareQuote} image={imageUrl}>
          <LinkedinIcon size={48} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={shareQuote} image={imageUrl}>
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={shareQuote} body="Check this out!" image={imageUrl}>
          <EmailIcon size={48} round />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
