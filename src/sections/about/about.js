import Button from "../../components/button/button";
import PrimaryText from "../../components/primary-text/primary-text";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function About() {
    return (
        <div className="section-container">
            <p className="section-title">
                <PrimaryText className="text-3xl md:text-5xl">{"{"}</PrimaryText>
                About me
                <PrimaryText className="text-3xl md:text-5xl">{"}"}</PrimaryText>
            </p>
            <p className="section-subtitle">I'm an experienced Mobile and Web developer based in the Philippines 🇵🇭</p>
            
            <div className="section-content lg:pr-40">
                <p>
                    For the past <b className="font-bold">4+</b> years
                    I've experienced <b>Front-End</b> and <b>Back-End</b> development.
                    I'm also a self-taught programmer, self-motivated and passionate for software development.
                </p>

                <p>
                    I have deployed multiple mobile applications on{" "}
                    Appstore and Playstore from scratch with different challenges due to strict 
                    requirements/compliance from those platforms. I successfully created responsive websites that are fast, smooth, 
                    and easy to use. I also make sure to follow the coding standards and best practices when developing 
                </p>

                <p>
                    Music helps me concentrate, focus, blocks out distractions, and even makes tedious task more enjoyable.
                </p>

                <p>
                    Sometimes I go outside and take a 5-10 minute walk when I'm feeling stuck to help me return to my tasks 
                    with more refreshed and focused mind.
                </p>
            </div>

            <Button position="left">
                Check my works <KeyboardArrowRightIcon/>
            </Button>
        </div>
    );
}
  
export default About;