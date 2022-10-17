import React, { useContext } from 'react';
import { Context } from '../../../utils/context/context';
import { sectionsList } from '../../section/list';

export default function MenuList({
  isExpanded,
}) {
    const {sectionRefs, activeSection} = useContext(Context);
    
    const executeScroll = (index) => {
        sectionRefs.current[index].scrollIntoView()
    };

    return (
        <div className={`navbar ${isExpanded && "is_expanded"}`}>
            <div className="menu">
                <div className="main-link-button">
                    {sectionsList.map((section, index) => (
                        <div
                            key={index}
                            className={`link-text ${section.name === activeSection ? "active" : ""}`}
                            onClick={() => executeScroll(index)}>
                            {section.name}
                        </div>
                    ))}
                    
                    {/* {navigationList.map((nav, index) => (
                        <NavLink
                            className={({ isActive }) => `link-text nav-link ${isActive ? 'active' : ''}`}
                            key={index}
                            to={nav.path}>
                            {nav.name}
                        </NavLink>
                    ))} */}
                </div>
            </div>
        </div>
    )
}