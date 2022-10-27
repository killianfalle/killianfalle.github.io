import profile from '../../assets/images/profile.png'
import Section from '../../components/section/section';
import SocialLinks from '../../components/social-links/social-links';
import Lottie from 'react-lottie';
import { Context } from '../../utils/context/context';
import scrollDown from '../../assets/lottie/scroll-down.json';
import { useContext } from 'react';

function Overview() {
    const {sectionRefs} = useContext(Context);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: scrollDown,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const executeScroll = () => {
        sectionRefs.current[0].scrollIntoView()
    };

    return (
        <Section withBackground>
            <SocialLinks />
            <div className="drop-shadow">
                <img className="header-img" src={profile} alt="Profile"/>
            </div>

            <p className="salutation">
                Killian Falle<span className='text-white ml-2'>;</span>
            </p>

            <p className="headline">
                Web and Mobile Application Developer
            </p>

            <div className='shadow-drop scroll-animation' onClick={executeScroll}>
                <Lottie 
                    options={defaultOptions}
                    height={'10vh'}
                    width={'10vh'}
                />
            </div>
        </Section>
    );
}
  
export default Overview;