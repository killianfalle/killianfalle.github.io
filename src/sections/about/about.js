import PrimaryText from "../../components/primary-text/primary-text";

function About() {
    return (
        <div className="w-full">
            <p className="section-title">
                About me
                <PrimaryText className="text-4xl">.</PrimaryText>
            </p>
            <p className="section-subtitle">I'm an experienced Mobile and Web developer based in the Philippines 🇵🇭</p>
            
            <div className="section-content lg:mr-32">
                <p>
                    For the past <b className="font-bold">4+</b> years
                    I've experienced <b className="text-secondary">Front-End</b> and <b className="text-secondary">Back-End</b> development.
                    I'm also a self-taught programmer, self-motivated and passionate for software development.
                </p>

                <p>
                    I have deployed multiple mobile applications on{" "}
                    <b>Appstore</b> and <b>Playstore</b> from scratch with different challenges due to strict requirements/compliance from those platforms. 
                </p>

                <p>
                    Music helps me concentrate, focus, blocks out distractions, and even makes tedious task more enjoyable.
                </p>

                <p>
                    Sometimes I go outside and take a 5-10 minute walk when I'm feeling stuck to help me return to my tasks with more refreshed and focused mind.
                </p>
            </div>
        </div>
    );
}
  
export default About;