import profile from '../../assets/images/profile.png'
import Section from '../../components/section/section';
import SocialLinks from '../../components/social-links/social-links';

function Overview() {
    return (
        <Section>
            <SocialLinks />
            <div className="drop-shadow">
                <img className="header-img" src={profile} alt="Profile"/>
            </div>

            <p className="salutation">
                Hey, I'm <span className="text-secondary">Killian</span>
            </p>

            <p className="headline">
                Web and Mobile Application Developer
            </p>
        </Section>
    );
}
  
export default Overview;