import { useContext } from "react";
import { Context } from '../../utils/context/context';
import { sectionsList } from '../../components/section/list';
import SemicolonText from "../../components/semicolon-text/semicolon-text";
import TechStacks from "../../components/tech-stacks/tech-stacks";

function About() {
    const {sectionRefs} = useContext(Context);
    
    const executeScroll = () => {
        const sectionIndex = sectionsList.findIndex(obj => obj.name === "Expertise");
        sectionRefs.current[sectionIndex].scrollIntoView()
    };

    return (
        <div className="section-container">
            <div className="section-title">
                <SemicolonText text="About me"/>
            </div>
            
            <p className="section-subtitle">Experienced Mobile and Web Developer based in the Philippines 🇵🇭</p>
            <div className="section-content lg:pr-40">
                <p className="text">
                    Over the past <b className="font-bold">4+</b> years
                    I have gained experience in both <b>front-end</b> and <b>back-end</b> development.
                    As a self-taught programmer, I am self-motivated and passionate about software development.
                </p>

                <p className="text">
                    I have successfully deployed multiple mobile applications on the App Store and Play Store from scratch, 
                    overcoming strict requirements and compliance challenges. In addition, 
                    I have created responsive websites that are fast, smooth, and easy to use, always ensuring that 
                    I follow coding standards and best practices.
                </p>

                <p className="text">
                    Music helps me concentrate and focus, blocking out distractions and making tedious tasks more enjoyable. 
                    When I'm feeling stuck, I sometimes take a 5-10 minute walk outside to return to my tasks with a refreshed and focused mind.
                </p>
            </div>

            <TechStacks />
        </div>
    );
}
  
export default About;