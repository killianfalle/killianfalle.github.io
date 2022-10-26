import { useState } from "react";
import PrimaryText from "../../components/primary-text/primary-text";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Expertise() {
    const [state, setState] = useState({
        showWeb: false,
        showMobile: false,
        showBackend: false
    });

    const expand = (type) => {
        setState(prevstate => ({...prevstate, [type]: !state[type]}));
    }

    return (
        <div className="section-container centered">
             <p className="section-title">
                <PrimaryText className="text-3xl md:text-5xl">{"{"}</PrimaryText>
                Experties
                <PrimaryText className="text-3xl md:text-5xl">{"}"}</PrimaryText>
            </p>

            <div className="section-content flex justify-center items-center">
                <div className="grid-content">
                    <div className={`grid-item web ${state.showWeb ? "shown" : ""}`} onClick={() => expand('showWeb')}>
                        <div className="bg-web grid-line"/>
                        <h2 className="grid-title">Web App Development</h2>
                        <p className="grid-description">Passionate about UI/UX and have professional experience working in HTML, CSS, JS, React and Vue frameworks.</p>
                        {!state.showWeb ? <VisibilityOutlinedIcon className="grid-icon"/> : <VisibilityOffOutlinedIcon className="grid-icon"/>}
                    </div>
                    <div className={`grid-item mobile ${state.showMobile ? "shown" : ""}`} onClick={() => expand('showMobile')}>
                        <div className="bg-mobile grid-line"/>
                        <h2 className="grid-title">Mobile App Development</h2>
                        <p className="grid-description">Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.</p>
                        {!state.showMobile ? <VisibilityOutlinedIcon className="grid-icon"/> : <VisibilityOffOutlinedIcon className="grid-icon"/>}
                    </div>
                    <div className={`grid-item backend ${state.showBackend ? "shown" : ""}`} onClick={() => expand('showBackend')}>
                        <div className="bg-backend grid-line"/>
                        <h2 className="grid-title">Backend Development</h2>
                        <p className="grid-description">Experienced developing and maintaining server-side applications. Have extensive knowledge about APIs using Laravel.</p>
                        {!state.showBackend ? <VisibilityOutlinedIcon className="grid-icon"/> : <VisibilityOffOutlinedIcon className="grid-icon"/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Expertise;