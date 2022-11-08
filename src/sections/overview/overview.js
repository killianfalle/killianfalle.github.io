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

            <div className="overview-shape"/>

            <div className="relative">
                <div className="drop-shadow flex justify-center h-full">
                    <img className="header-img" src={profile} alt="Profile"/>
                </div>
                <p className="salutation">
                    <span className="salutation-name">Killian Falle</span>
                    <span className="salutation-semicolon">;</span>
                </p>

                <p className="headline">
                    Web and Mobile Application Developer
                </p>
            </div>


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