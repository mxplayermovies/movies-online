import React from 'react';
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

const ShareButtons = ({ image }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Combine current URL with image URL if available
  const imageUrlWithCurrentUrl = image ? `${currentUrl} - ${image}` : currentUrl;

  return (
    <div>
      <div className="bg-transparent flex gap-2 justify-center p-2">
        <FacebookShareButton url={imageUrlWithCurrentUrl} quote={imageUrlWithCurrentUrl} hashtag="#drtrailer">
          <FacebookIcon size={48} round />
        </FacebookShareButton>

        <TwitterShareButton url={imageUrlWithCurrentUrl} title={imageUrlWithCurrentUrl}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>

        <LinkedinShareButton url={imageUrlWithCurrentUrl}>
          <LinkedinIcon size={48} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={imageUrlWithCurrentUrl} title={imageUrlWithCurrentUrl}>
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>

        <EmailShareButton url={imageUrlWithCurrentUrl} subject={imageUrlWithCurrentUrl} body="Check this out!">
          <EmailIcon size={48} round />
        </EmailShareButton>
      </div>
      <div className="text-center">
        <p className="text-gray-500 text-sm">URL: {currentUrl}</p>
      </div>
      {image && (
        <div className="text-center">
          <p className="text-gray-500 text-sm">Image: {image}</p>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
