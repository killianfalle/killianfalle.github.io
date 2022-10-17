import React, { useContext } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Context } from "../../utils/context/context";

const ScrollToTop = () => {
  const {revealScrollTop} = useContext(Context);
  const executeScroll = () => window.scrollTo(0, 0);

  return (
    <div className={`scroll-to-top ${!revealScrollTop ? "hidden" : "block"}`} onClick={executeScroll}>
      <KeyboardDoubleArrowUpIcon className="icon" sx={{width: '3vw', height: '3vw'}}/>
    </div>
  );
};

export default ScrollToTop;