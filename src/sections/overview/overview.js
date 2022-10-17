import profile from '../../assets/images/profile.png'
import PrimaryText from '../../components/primary-text/primary-text';
import Section from '../../components/section/section';
import SocialLinks from '../../components/social-links/social-links';

function Overview() {
    return (
        <Section centered>
            <SocialLinks />
            <div className="drop-shadow">
                <img className="header-img" src={profile} alt="Profile"/>
            </div>

            <p className="salutation">
                <PrimaryText>Killian</PrimaryText> Falle
                <PrimaryText>;</PrimaryText>
            </p>

            <p className="headline">
                Web and Mobile Application Developer
            </p>
        </Section>
    );
}
  
export default Overview;