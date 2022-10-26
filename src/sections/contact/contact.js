import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import "../../assets/styles/social-links.scss"
import Footer from '../footer/footer';

function Contact() {
    const redirectToSocial = (url) => window.open(url, '_blank');

    return (
        <div className="section-container centered">
            <p className="section-title">
                <span className='text-white'>{"{"}</span>
                Let's discuss!
                <span className='text-white'>{"}"}</span>
            </p>

            <p className="section-subtitle text-center mt-2 mb-4">Here's how you can simply contact me.</p>

            <div className="section-content flex-center">
                <GitHubIcon
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://github.com/killianfalle")}
                />
                <EmailIcon
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://mail.google.com/mail/?view=cm&fs=1&to=killianfalle7@gmail.com")}
                />
                <LinkedInIcon
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://www.linkedin.com/in/killianfalle")}
                />
                <FacebookIcon
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://www.facebook.com/killianfalle")}
                />
                <InstagramIcon
                    className="cursor-pointer icon social"
                    onClick={() => redirectToSocial("https://www.instagram.com/killianfalle")}
                />
            </div>
            <Footer />
        </div>
    );
}
  
export default Contact;