import React, { useContext } from 'react';
import { Context } from '../../../utils/context/context';
import { sectionsList } from '../../section/list';

export default function MenuList({
  isExpanded,
  setExpanded
}) {
    const {sectionRefs, activeSection} = useContext(Context);
    
    const executeScroll = (index) => {
        sectionRefs.current[index].scrollIntoView()
        setExpanded(false)
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
                </div>
            </div>
        </div>
    )
}