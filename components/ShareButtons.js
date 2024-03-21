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
