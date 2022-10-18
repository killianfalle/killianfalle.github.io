import PrimaryText from "../../components/primary-text/primary-text";

function Expertise() {
    return (
        <div className="section-container centered">
             <p className="section-title">
                <PrimaryText className="text-lg md:text-xl">{"<"}</PrimaryText>
                Experties
                <PrimaryText className="text-lg md:text-xl">{"/>"}</PrimaryText>
            </p>

            <div className="section-content flex justify-center items-center">
                <div class="grid-content">
                    <div className="grid-item web">
                        <h2 className="grid-title">Web App Development</h2>
                        <div className="relative">
                            <div className="bg-web grid-line"/>
                            <p className="grid-description">Passionate about UI/UX and have professional experience working in HTML, CSS, JS, React and Vue frameworks.</p>
                        </div>
                    </div>
                    <div className="grid-item mobile">
                        <h2 className="grid-title">Mobile App Development</h2>
                        <div className="relative">
                            <div className="bg-mobile grid-line"/>
                            <p className="grid-description">Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.</p>
                        </div>
                    </div>
                    <div className="grid-item backend">
                        <h2 className="grid-title">Backend App Development</h2>
                        <div className="relative">
                            <div className="bg-backend grid-line"/>
                            <p className="grid-description">Experienced developing and maintaining server-side applications. Have extensive knowledge about APIs using Laravel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Expertise;