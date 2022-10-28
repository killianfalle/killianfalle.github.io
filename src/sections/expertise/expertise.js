import { useState } from "react";
import PrimaryText from "../../components/primary-text/primary-text";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';

const expertise = ['web', 'mobile', 'backend'];

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
                Expertise
                <PrimaryText className="text-3xl md:text-5xl">{"}"}</PrimaryText>
            </p>

            <div className="section-content flex justify-center items-center">
                <div className="expertise-content">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className={`expertise-item ${expand[item] ? "shown" : ""}`}
                            onClick={() => handleExpand(item)}>
                            <div className="expertise-overview">
                                <div className={`expertise-icon`}>
                                    {item === 'web' && <span><WebIcon /></span>}
                                    {item === 'mobile' && <span><PhoneIphoneIcon /></span>}
                                    {item === 'backend' && <span><StorageIcon /></span>}
                                </div>
                                <h2 className="expertise-title">{item} App Development</h2>
                            </div>
                            <p className="expertise-description">
                                {item === 'web' && "Passionate about UI/UX and have professional experience working in HTML, CSS, JS, React and Vue frameworks."}
                                {item === 'mobile' && "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework."}
                                {item === 'backend' && "Experienced developing and maintaining server-side applications. Have extensive knowledge about APIs using Laravel."}
                            </p>
                            <ArrowForwardIosIcon className="arrow-icon"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
  
export default Expertise;