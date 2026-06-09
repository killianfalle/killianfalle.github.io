import { useContext, useEffect, useState } from "react";
import { headerItems } from "./header-list";
import { Context } from "../../utils/context/context";
import { useLocation, useNavigate } from "react-router-dom";
import { sectionsList } from "../section/list";
import "../../assets/styles/header.scss";

export default function Header() {
    const {sectionRefs, activeSection, setActiveSection} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    
    const ctaItem = headerItems.find(item => item.isHighlighted);
    const navItems = headerItems.filter(item => !item.isHighlighted);

     const navigateTo = (item) => {
        const sectionIndex = sectionsList.findIndex(section => section.name === item.name);
        const section = sectionsList[sectionIndex];

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
                sectionRefs.current[sectionIndex].scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo"></div>
                <nav className="header__nav">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            onClick={() => navigateTo(item)}
                        >
                            {item.name}
                        </a>
                    ))}

                    {ctaItem && (
                        <button className="header__cta" onClick={() => navigateTo(ctaItem)}>
                            {ctaItem.name}
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}