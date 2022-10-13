import React from 'react';

export default function MenuToggler({
  isExpanded = false,
  setExpanded
}) {
  return (
    <div className="menu-toggle-wrap">
      <div className="menu-toggle" onClick={() => setExpanded(!isExpanded)}>
        <div id="burger" className={isExpanded ? "active" : ""}>
          <button type="button" className="burger-button" title="Menu">
            <span className="burger-bar burger-bar--1"></span>
            <span className="burger-bar burger-bar--2"></span>
            <span className="burger-bar burger-bar--3"></span>
          </button>
        </div>
      </div>
    </div>
  )
}