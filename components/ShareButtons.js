// import React from 'react';
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   WhatsappIcon,
//   EmailIcon,
// } from 'react-share';

// const ShareButtons = ({ title, image }) => {
//   const url = typeof window !== 'undefined' ? window.location.href : '';

//   return (
//     <div className="bg-transparent flex gap-2 justify-center p-2">
//       <FacebookShareButton url={url} quote={title} hashtag="#drtrailer">
//         <FacebookIcon size={48} round />
//       </FacebookShareButton>

//       <TwitterShareButton url={url} title={title}>
//         <TwitterIcon size={48} round />
//       </TwitterShareButton>

//       <LinkedinShareButton url={url}>
//         <LinkedinIcon size={48} round />
//       </LinkedinShareButton>

//       <WhatsappShareButton url={url} title={title}>
//         <WhatsappIcon size={48} round />
//       </WhatsappShareButton>

//       <EmailShareButton url={url} subject={title} body="Check this out!">
//         <EmailIcon size={48} round />
//       </EmailShareButton>
//     </div>
//   );
// };

// export default ShareButtons;


// import React from 'react';
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   WhatsappIcon,
//   EmailIcon,
// } from 'react-share';

// const ShareButtons = ({ title, description, image }) => {
//   const url = typeof window !== 'undefined' ? window.location.href : '';

//   return (
//     <div className="bg-transparent flex gap-2 justify-center p-2">
//       <FacebookShareButton url={url} quote={description || title} hashtag="#drtrailer">
//         <FacebookIcon size={48} round />
//       </FacebookShareButton>

//       <TwitterShareButton url={url} title={description || title}>
//         <TwitterIcon size={48} round />
//       </TwitterShareButton>

//       <LinkedinShareButton url={url} title={description || title}>
//         <LinkedinIcon size={48} round />
//       </LinkedinShareButton>

//       <WhatsappShareButton url={url} title={description || title}>
//         <WhatsappIcon size={48} round />
//       </WhatsappShareButton>

//       <EmailShareButton url={url} subject={title} body={description || "Check this out!"}>
//         <EmailIcon size={48} round />
//       </EmailShareButton>
//     </div>
//   );
// };

// export default ShareButtons;


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

const ShareButtons = ({ title, description, image }) => {
  // Get the current URL
  const url = typeof window !== 'undefined' ? window.location.href : '';

  // Define the message you want to include in the shared content
  const shareMessage = 'Watch Now !!! Uwatchfree Online™ - For Movies, TV Show & Sports!';

  // Handle the click event for each share button
  const handleShare = (message) => {
    // Create a message to share, combining the provided title/description with the custom message
    const messageToShare = `${title}\n${message}`;

    // Log the message to verify in console (optional)
    console.log('Message to share:', messageToShare);

    // Implement the share logic for each platform
    // You can customize the share behavior based on the platform here
    // For example:
    // - Implementing actual share functionality for each platform
    // - Opening a new window with the share link
    // - Any other custom logic based on your requirements
  };

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook share button */}
      <FacebookShareButton url={url} quote={shareMessage}>
        <FacebookIcon size={48} round onClick={() => handleShare(shareMessage)} />
      </FacebookShareButton>

      {/* Twitter share button */}
      <TwitterShareButton url={url} title={shareMessage}>
        <TwitterIcon size={48} round onClick={() => handleShare(shareMessage)} />
      </TwitterShareButton>

      {/* Linkedin share button */}
      <LinkedinShareButton url={url} title={shareMessage}>
        <LinkedinIcon size={48} round onClick={() => handleShare(shareMessage)} />
      </LinkedinShareButton>

      {/* Whatsapp share button */}
      <WhatsappShareButton url={url} title={shareMessage}>
        <WhatsappIcon size={48} round onClick={() => handleShare(shareMessage)} />
      </WhatsappShareButton>

      {/* Email share button */}
      <EmailShareButton url={url} subject={title} body={shareMessage}>
        <EmailIcon size={48} round onClick={() => handleShare(shareMessage)} />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
