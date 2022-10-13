import React, {useState} from 'react';
import MenuToggler from './menu/toggler';
import MenuList from './menu/list';
import "../../assets/styles/navbar.scss";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="navbar-wrapper">
      <MenuToggler
        isExpanded={isExpanded}
        setExpanded={setExpanded}
      />

      <MenuList isExpanded={isExpanded}/>
    </div>
  );
}