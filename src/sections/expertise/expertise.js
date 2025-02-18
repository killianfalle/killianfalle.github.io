import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import DevelopmentTools from "../../components/development-tools/development-tools";
import SemicolonText from "../../components/semicolon-text/semicolon-text";
import useFirebaseActions from "../../helpers/firebase/actions";

function Expertise() {
    const [sections, setSections] = useState([]);
    const { getDataFromCollection } = useFirebaseActions();

    const fetchData = async () => {
        try {
            const data = await getDataFromCollection("expertise");
            if (data && data.length > 0) {
                setSections(data);
            }
        } catch (error) {
            console.error("Error fetching expertise data:", error);
        }
    };

    const handleExpand = (sectionIndex, categoryIndex) => {
        setSections(prevSections => 
            prevSections.map((section, index) => 
                index === sectionIndex
                    ? {
                        ...section,
                        categories: section.categories.map((category, cIndex) =>
                            cIndex === categoryIndex
                                ? { ...category, expanded: !category.expanded }
                                : category
                        )
                    }
                    : section
            )
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="section-container centered">
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <div className="section-title">
                        <SemicolonText text={section.title} />
                    </div>

                    <div className="section-content flex justify-center items-center">
                        <div className="expertise-content">
                            {section.categories.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="relative expertise-item-container">
                                    <div
                                        className={`expertise-item ${category.expanded ? "shown" : ""}`}
                                        onClick={() => handleExpand(sectionIndex, categoryIndex)}
                                    >
                                        <div className="expertise-overview">
                                            <div className="expertise-icon">
                                                {category.type === 'web' && <WebIcon />}
                                                {category.type === 'mobile' && <PhoneIphoneIcon />}
                                                {category.type === 'backend' && <StorageIcon />}
                                            </div>
                                            <h2 className="expertise-title">
                                                {category.title}
                                            </h2>
                                        </div>
                                        <p className="expertise-description">
                                            {category.subtitle}
                                        </p>
                                        <ArrowForwardIosIcon className="arrow-icon" />
                                    </div>

                                    <div className={`devtools-wrapper ${category.expanded ? "shown" : ""}`}>
                                        <DevelopmentTools tools={category.tools} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Expertise;
