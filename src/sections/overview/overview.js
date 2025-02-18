import profile from "../../assets/images/profile.png"
import Section from "../../components/section/section";
import SocialLinks from "../../components/social-links/social-links";
import Lottie from "react-lottie";
import { Context } from "../../utils/context/context";
import scrollDown from "../../assets/lottie/scroll-down.json";
import { useContext, useEffect, useState } from "react";
import useFirebaseActions from "../../helpers/firebase/actions";

function Overview() {
    const {sectionRefs} = useContext(Context);
    const [sections, setSections] = useState([]);
    const { getDataFromCollection } = useFirebaseActions();

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
    
    const fetchData = async () => {
        try {
            const data = await getDataFromCollection("overview");
            if (data && data.length > 0) {
                setSections(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Removed dependencies to avoid unnecessary re-renders

    return (
        <Section withBackground>
            <SocialLinks />

            <div className="overview-shape-shadow"/>
            <div className="overview-shape"/>

            {sections.length > 0 && (
                sections.map((section, index) => (
                    <div key={index} className="relative">
                            <div className="drop-shadow flex justify-center h-full">
                            <img className="header-img" src={profile} alt="Profile"/>
                        </div>
                        <p className="salutation">
                            <span className="salutation-name">{section.name || "Killian Falle"}</span>
                            <span className="salutation-semicolon">;</span>
                        </p>

                        {section.headline && <p className="headline">{section.headline}</p>}
                    </div>
                ))
            )}


            <div className="shadow-drop scroll-animation" onClick={executeScroll}>
                <Lottie 
                    options={defaultOptions}
                    height={"10vh"}
                    width={"10vh"}
                />
            </div>
        </Section>
    );
}
  
export default Overview;