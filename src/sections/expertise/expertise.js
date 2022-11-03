import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import DevelopmentTools from "../../components/development-tools/development-tools";
import SemicolonText from "../../components/semicolon-text/semicolon-text";

const list = [
    {
        name: 'web',
        expand: false,
        tools: ['React', 'Vue', 'HTML', 'CSS', 'SCSS', 'Javascript', 'Typescript']
    },
    {
        name: 'mobile',
        expand: false,
        tools: ['React Native', 'Ionic']
    },
    {
        name: 'backend',
        expand: false,
        tools: ['Laravel', 'PHP', 'Firebase']
    }
];

function Expertise() {
    const [expertise, setExpertise] = useState(list);
    
    const handleExpand = (index) => {
        let items = [...expertise];
        let item = {...items[index], expand: !items[index].expand}
        items[index] = item;

        setExpertise(items);
    };

    return (
        <div className="section-container centered">
             <p className="section-title">
                <SemicolonText text="Expertise"/>
            </p>

            <div className="section-content flex justify-center items-center">
                <div className="expertise-content">
                    {expertise.map((item, index) => (
                        <div key={index} className="relative expertise-item-container">
                            {/* Dev content */}
                            <div
                                className={`expertise-item ${item.expand ? "shown" : ""}`}
                                onClick={() => handleExpand(index)}>
                                <div className="expertise-overview">
                                    <div className={`expertise-icon`}>
                                        {item.name === 'web' && <span><WebIcon /></span>}
                                        {item.name === 'mobile' && <span><PhoneIphoneIcon /></span>}
                                        {item.name === 'backend' && <span><StorageIcon /></span>}
                                    </div>
                                    <h2 className="expertise-title">{item.name} {item.name !== 'backend' && "App"} Development</h2>
                                </div>
                                <p className="expertise-description">
                                    {item.name === 'web' && "Passionate about UI/UX and have professional experience working in HTML, CSS, JS, React and Vue frameworks."}
                                    {item.name === 'mobile' && "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework."}
                                    {item.name === 'backend' && "Experienced developing and maintaining server-side applications. Have extensive knowledge about APIs using Laravel."}
                                </p>
                                <ArrowForwardIosIcon className="arrow-icon"/>
                            </div>

                            {/* Dev tools */}
                            <div className={`devtools-wrapper ${item.expand ? "shown" : ""}`}>
                                <DevelopmentTools tools={item.tools}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
  
export default Expertise;