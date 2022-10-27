import { useState } from "react";
import PrimaryText from "../../components/primary-text/primary-text";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const experties = ['web', 'mobile', 'backend'];

function Expertise() {
    const [expand, setExpand] = useState({
        web: false,
        mobile: false,
        backend: false
    });

    const handleExpand = (type) => setExpand(prev => ({...prev, [type]: !expand[type]}));

    return (
        <div className="section-container centered">
             <p className="section-title">
                <PrimaryText className="text-3xl md:text-5xl">{"{"}</PrimaryText>
                Experties
                <PrimaryText className="text-3xl md:text-5xl">{"}"}</PrimaryText>
            </p>

            <div className="section-content flex justify-center items-center">
                <div className="experties-content">
                    {experties.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`experties-item ${item} ${expand[item] ? "shown" : ""}`}
                                onClick={() => handleExpand(item)}>
                                <div className={`bg-${item} experties-line`}/>
                                <h2 className="experties-title">{item} App Development</h2>
                                <p className="experties-description">
                                    {item === 'web' && "Passionate about UI/UX and have professional experience working in HTML, CSS, JS, React and Vue frameworks."}
                                    {item === 'mobile' && "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework."}
                                    {item === 'backend' && "Experienced developing and maintaining server-side applications. Have extensive knowledge about APIs using Laravel."}
                                </p>
                                <ArrowForwardIosIcon className="experties-icon"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
  
export default Expertise;