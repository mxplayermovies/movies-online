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


const ShareButtons = ({ title, movieUrl, backimage }) => {

  
  return (
    <>
      <div className="bg-transparent flex gap-2 justify-center p-2">
        <FacebookShareButton url={movieUrl} quote={title} hashtag="#drtrailer">
          <FacebookIcon size={48} round  />
        </FacebookShareButton>

        <TwitterShareButton url={movieUrl} title={title}>
          <TwitterIcon size={48} round  />
        </TwitterShareButton>

        <LinkedinShareButton url={movieUrl}>
          <LinkedinIcon size={48} round  />
        </LinkedinShareButton>

        <WhatsappShareButton url={movieUrl} title={title}>
          <WhatsappIcon size={48} round  />
        </WhatsappShareButton>

        <EmailShareButton url={movieUrl} subject={title} body="Check this out!">
          <EmailIcon size={48} round  />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
