import { useEffect, useState } from "react";
import useFirebaseActions from "../../helpers/firebase/actions";

function Footer() {
    const [sections, setSections] = useState([]);
    const { getDataFromCollection } = useFirebaseActions();

    const fetchData = async () => {
        try {
            const data = await getDataFromCollection("footer");
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
                    <div key={index} className="section-footer">
                        <p>{section.label} <b>{section.developer}</b> using <b>{section.techLabel}</b></p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
  
export default Footer;