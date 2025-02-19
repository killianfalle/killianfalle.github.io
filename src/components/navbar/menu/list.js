import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from '../../../utils/context/context';
import { sectionsList } from '../../section/list';

export default function MenuList({
  isExpanded,
  setExpanded
}) {
    const {sectionRefs, activeSection, setActiveSection} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    
    const navigateTo = (index) => {
        const section = sectionsList[index];
    
        if (section.isStandalone) {
            // Navigate to the separate page
            navigate(`/${section.name.toLowerCase().replace(/\s+/g, '-')}`);
            setActiveSection(section.name);
        } else {
            const sectionId = section.name.toLowerCase().replace(/\s+/g, '-'); // Convert name to a valid ID format
            
            if (location.pathname !== "/") {
                // Append the section ID to URL hash
                navigate(`/#${sectionId}`);
    
                // Force a reload to ensure content is fully reset
                window.location.reload();
            } else {
                // Scroll immediately if already on "/"
                navigate(`/#${sectionId}`);
                sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
            }
        }
        setExpanded(false);
    };

    useEffect(() => {
        // Extract pathname without leading slash
        const currentPath = location.pathname.replace("/", "");

        // Find the section that matches the current path
        const matchedSection = sectionsList.find(section =>
            section.isStandalone && section.name.toLowerCase().replace(/\s+/g, '-') === currentPath
        );

        // Set activeSection if a matching separate page is found
        if (matchedSection) {
            setActiveSection(matchedSection.name);
        }
    }, [location.pathname, setActiveSection]);

    return (
        <div className={`navbar ${isExpanded && "is_expanded"}`}>
            <div className="menu">
                <div className="main-link-button">
                    {sectionsList.map((section, index) => (
                        <div
                            key={index}
                            className={`link-text ${section.name === activeSection ? "active" : ""}`}
                            onClick={() => navigateTo(index)}>
                            {section.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}