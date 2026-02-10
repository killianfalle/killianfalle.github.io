import { useEffect, useState } from "react";
import SemicolonText from "../../components/semicolon-text/semicolon-text";
import TechStacks from "../../components/tech-stacks/tech-stacks";
import useFirebaseActions from "../../helpers/firebase/actions";

function Firebase() {
    const [sections, setSections] = useState([]);
    const { getDataFromCollection } = useFirebaseActions();

    const fetchData = async () => {
        try {
            const data = await getDataFromCollection("firebase-info");
            if (data && data.length > 0) {
                setSections(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Removed dependencies to avoid unnecessary re-renders

    return (
        <div className="section-container centered">
            {sections.length > 0 ? (
                sections.map((section, index) => (
                    <div key={index} className="section">
                        {section.title && (
                            <div className="section-title">
                                <SemicolonText text={section.title} />
                            </div>
                        )}
                        
                        {section.subtitle && (
                            <p className="section-subtitle">
                                {section.subtitle}
                            </p>
                        )}

                        {section.description && Array.isArray(section.description) && (
                            <div className="section-content lg:pr-40">
                                {section.description.map((line, i) => (
                                    <p key={i} className="text">{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
  
export default Firebase;