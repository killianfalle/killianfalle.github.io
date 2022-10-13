import React from "react";
import "../../assets/styles/social-links.scss"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialLinks = () => {
  const redirectToSocial = (url) => window.open(url, '_blank');

  return (
    <div className="social-link-container">
        <div className="social-links">
          <GitHubIcon
            className="cursor-pointer"
            sx={{width: '1.8vw', height: '1.8vw'}}
            onClick={() => redirectToSocial("https://github.com/killianfalle")}
          />
          <LinkedInIcon
            className="cursor-pointer"
            sx={{width: '1.8vw', height: '1.8vw'}}
            onClick={() => redirectToSocial("https://www.linkedin.com/in/killianfalle")}

          />
          <FacebookIcon
            className="cursor-pointer"
            sx={{width: '1.8vw', height: '1.8vw'}}
            onClick={() => redirectToSocial("https://www.facebook.com/killianfalle")}

          />
          <InstagramIcon
            className="cursor-pointer"
            sx={{width: '1.8vw', height: '1.8vw'}}
            onClick={() => redirectToSocial("https://www.instagram.com/killianfalle")}

          />
        </div>
        <div className="line"/>
        <p>Follow me</p>
    </div>
  );
};

export default SocialLinks;