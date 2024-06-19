import GithubLogo from '../../assets/svgs/github-logo';
import FacebookLogo from '../../assets/svgs/facebook-logo';
import LinkedLogo from '../../assets/svgs/linkedin-logo';
import InstagramLogo from '../../assets/svgs/instagram-logo';
import GmailLogo from '../../assets/svgs/gmail-logo';
import Footer from '../footer/footer';
import SemicolonText from '../../components/semicolon-text/semicolon-text';
import "../../assets/styles/social-links.scss"
import SkypeLogo from '../../assets/svgs/skype-logo';

function Contact() {
    const redirectToSocial = (url) => window.open(url, '_blank');

    return (
        <div className="section-container centered">
            <div className="section-title">
                <SemicolonText
                    text="Let's discuss!"
                    semicolonColor="text-white"
                />
            </div>

            <p className="section-subtitle text-center mt-2 mb-4">Reach out to me through these platforms.</p>
            <div className="section-content flex-center">
                <GithubLogo
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://github.com/killianfalle")}
                />
                <GmailLogo
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://mail.google.com/mail/?view=cm&fs=1&to=killianfalle7@gmail.com")}
                />
                <LinkedLogo
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://www.linkedin.com/in/killianfalle")}
                />
                <SkypeLogo
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://join.skype.com/invite/v8JiztkepaET")}
                />

{/* https://join.skype.com/invite/v8JiztkepaET */}
                {/* <FacebookLogo
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://www.facebook.com/killianfalle")}
                />
                <InstagramLogo
                    className="cursor-pointer icon social instagram"
                    onClick={() => redirectToSocial("https://www.instagram.com/killianfalle")}
                /> */}
            </div>
            <Footer />
        </div>
    );
}
  
export default Contact;