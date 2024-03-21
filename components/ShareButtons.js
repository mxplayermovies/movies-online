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

const ShareButtons = ({ movie }) => {
  const { url, title, backimage } = movie;

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      <FacebookShareButton url={url} quote={title} hashtag="#drtrailer" image={backimage}>
        <FacebookIcon size={48} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} image={backimage}>
        <TwitterIcon size={48} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} image={backimage}>
        <LinkedinIcon size={48} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} image={backimage}>
        <WhatsappIcon size={48} round />
      </WhatsappShareButton>

      <EmailShareButton url={url} subject={title} body="Check this out!" image={backimage}>
        <EmailIcon size={48} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
