import { useEffect, useState } from 'react';
import GithubLogo from '../../assets/svgs/github-logo';
import FacebookLogo from '../../assets/svgs/facebook-logo';
import LinkedLogo from '../../assets/svgs/linkedin-logo';
import InstagramLogo from '../../assets/svgs/instagram-logo';
import GmailLogo from '../../assets/svgs/gmail-logo';
import Footer from '../footer/footer';
import SemicolonText from '../../components/semicolon-text/semicolon-text';
import SkypeLogo from '../../assets/svgs/skype-logo';
import useFirebaseActions from '../../helpers/firebase/actions';
import "../../assets/styles/social-links.scss"

function Contact() {
    const [sections, setSections] = useState([]);
    const { getDataFromCollection } = useFirebaseActions();

    const redirectToSocial = (url) => window.open(url, '_blank');

    const fetchData = async () => {
        try {
            const data = await getDataFromCollection("contact");
            if (data && data.length > 0) {
                setSections(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const renderSocialMediaLogo = (type) => {
        const socialMediaLogoClassName = "cursor-pointer icon social";
        
        switch (type) {
            case 'github':
                return <GithubLogo className={socialMediaLogoClassName} />;
            case 'gmail':
                return <GmailLogo className={socialMediaLogoClassName} />;
            case 'linkedin':
                return <LinkedLogo className={socialMediaLogoClassName} />;
            case 'skype':
                return <SkypeLogo className={socialMediaLogoClassName} />;
            case 'facebook':
                return <FacebookLogo className={socialMediaLogoClassName} />;
            case 'instagram':
                return <InstagramLogo className={socialMediaLogoClassName} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Removed dependencies to avoid unnecessary re-renders

    return (
        <>
            {sections.length > 0 ? (
                sections.map((section, index) => (
                    <div key={index} className="section-container centered">
                        <div className="section-title">
                            <SemicolonText
                                text={section.title}
                                semicolonColor="text-white"
                            />
                        </div>

                        <p className="section-subtitle text-center mt-2 mb-4">{section.subtitle}</p>
                        
                        <div className="section-content flex-center">
                            {section.socialMedia.map((socialMedia, socialMediaIndex) => (
                                <div key={socialMediaIndex} onClick={() => redirectToSocial(socialMedia.link)}>
                                    {renderSocialMediaLogo(socialMedia.type)}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

            <Footer />
        </>
    );
}
  
export default Contact;