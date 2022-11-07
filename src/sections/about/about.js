import Button from "../../components/button/button";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useContext } from "react";
import { Context } from '../../utils/context/context';
import { sectionsList } from '../../components/section/list';
import SemicolonText from "../../components/semicolon-text/semicolon-text";

function About() {
    const {sectionRefs} = useContext(Context);
    
    const executeScroll = () => {
        const sectionIndex = sectionsList.findIndex(obj => obj.name === "Projects");
        sectionRefs.current[sectionIndex].scrollIntoView()
    };

    return (
        <div className="section-container">
            <div className="section-title">
                <SemicolonText text="About me"/>
            </div>
            
            <p className="section-subtitle">I'm an experienced Mobile and Web developer based in the Philippines 🇵🇭</p>
            <div className="section-content lg:pr-40">
                <p className="text">
                    For the past <b className="font-bold">4+</b> years
                    I've experienced <b>Front-End</b> and <b>Back-End</b> development.
                    I'm also a self-taught programmer, self-motivated and passionate for software development.
                </p>

                <p className="text">
                    I have deployed multiple mobile applications on{" "}
                    Appstore and Playstore from scratch with different challenges due to strict 
                    requirements/compliance from those platforms. I successfully created responsive websites that are fast, smooth, 
                    and easy to use. I also make sure to follow the coding standards and best practices when developing.
                </p>

                <p className="text">
                    Music helps me concentrate, focus, blocks out distractions, and even makes tedious task more enjoyable.
                </p>

                <p className="text">
                    Sometimes I go outside and take a 5-10 minute walk when I'm feeling stuck to help me return to my tasks 
                    with more refreshed and focused mind.
                </p>
            </div>

            <Button position="left" onClick={executeScroll}>
                Check my works <KeyboardArrowRightIcon/>
            </Button>
        </div>
    );
}
  
export default About;