import React, { useEffect, useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import useFirebaseActions from "../../helpers/firebase/actions";
import "../../assets/styles/social-links.scss"

const SocialLinks = () => {
  const [sections, setSections] = useState([]);
  const { getDataFromCollection } = useFirebaseActions();

  const redirectToSocial = (url) => window.open(url, '_blank');

  const fetchData = async () => {
    try {
      const data = await getDataFromCollection("social-links");
      if (data && data.length > 0) {
        setSections(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderSocialMediaLogo = (type) => {
    const socialMediaLogoClassName = "cursor-pointer icon";
    const size = {width: "1.8vw", height: "1.8vw"}
    
    switch (type) {
      case 'github':
        return <GitHubIcon className={socialMediaLogoClassName} sx={{width: size.width, height: size.height}}/>;
      case 'gmail':
        return <EmailIcon className={socialMediaLogoClassName} sx={{width: size.width, height: size.height}}/>;
      case 'linkedin':
        return <LinkedInIcon className={socialMediaLogoClassName} sx={{width: size.width, height: size.height}}/>;
      case 'facebook':
        return <FacebookIcon className={socialMediaLogoClassName} sx={{width: size.width, height: size.height}}/>;
      case 'instagram':
        return <InstagramIcon className={socialMediaLogoClassName} sx={{width: size.width, height: size.height}}/>;
      default:
          return null;
    }
  };

  useEffect(() => {
      fetchData();
  }, []); // Removed dependencies to avoid unnecessary re-renders

  return (
    <div>
      {sections.length > 0 && (
        sections.map((section, index) => (
          <div key={index} className="social-link-container">
            <div className="social-links">
              {section.socialLinks.map((socialMedia, socialMediaIndex) => (
                <div key={socialMediaIndex} onClick={() => redirectToSocial(socialMedia.link)}>
                  {renderSocialMediaLogo(socialMedia.type)}
                </div>
              ))}
            </div>

            <div className="line"/>

            <p className="social-media-label">{section.label}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SocialLinks;