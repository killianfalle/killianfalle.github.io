import AndroidLogoSVG from "../../assets/svgs/android-logo";
import AppleLogoSVG from "../../assets/svgs/apple-logo";
import PrimaryText from "../../components/primary-text/primary-text";

function About() {
    return (
        <div className="w-full">
            <p className="section-title">
                About me
                <PrimaryText className="text-4xl">.</PrimaryText>
            </p>
            <p className="section-subtitle">I'm a Mobile and Web developer based in the Philippines 🇵🇭</p>
            
            <div className="section-content">
                <p className="mb-3">
                    For the past <b className="font-bold">4+</b> years
                    I've experienced <b className="text-blue">Front-End</b> and <b className="text-red">Back-End</b> development.
                    I'm also a self-taught programmer, self-motivated and passionate for software development.
                </p>

                <p className="mb-3">
                    I have deployed multiple mobile applications on{" "}
                    <AppleLogoSVG className="inline -mt-0.5 md:-mt-1"/> <b>Appstore</b> and {" "}
                    <AndroidLogoSVG className="inline -mt-0.5 md:-mt-1 md:-ml-1"/><b>Playstore</b>{" "}
                    from scratch with different challenges due to strict requirements/compliance from those platforms. 
                </p>

                <p className="mb-3">
                    Music helps me concentrate, focus, blocks out distractions, and even makes tedious task more enjoyable.
                </p>

                <p className="mb-3">
                    Sometimes I go outside and take a 5-10 minute walk when I'm feeling stuck to help me return to my tasks with more refreshed and focused mind.
                </p>
            </div>
        </div>
    );
}
  
export default About;